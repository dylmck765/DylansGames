"use client";

// Score-ticker. Serves the real tape when it can: the deploy workflow bakes
// Yahoo Finance quotes into /quotes.json on a market-hours schedule, and we
// fetch that same-origin file here. If it's missing or stale (local dev,
// Yahoo outage), we fall back to a fake-but-plausible tape seeded by the day.
// Everything renders after mount so prerendered HTML never mismatches.

import { useEffect, useState } from "react";
import { dateKey, hashString, mulberry32 } from "@/lib/util";

const SYMBOLS = [
  "SPY", "QQQ", "NVDA", "TSLA", "AAPL", "AMD", "META", "MSFT", "AMZN", "COIN",
  "GOOGL", "NFLX", "PLTR", "SMCI", "IWM", "VIX",
];

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MAX_QUOTE_AGE_MS = 7 * 24 * 60 * 60 * 1000; // long weekends/holidays
const REFRESH_MS = 10 * 60 * 1000;

interface Quote {
  sym: string;
  price: number | null;
  chg: string;
  up: boolean;
}

function simTape(): Quote[] {
  const rng = mulberry32(hashString("ticker:" + dateKey()));
  return SYMBOLS.map((sym) => {
    const v = rng() * 6 - 2.7;
    return { sym, price: null, chg: Math.abs(v).toFixed(2), up: v >= 0 };
  });
}

export default function Ticker() {
  const [items, setItems] = useState<Quote[]>([]);
  const [asOf, setAsOf] = useState<string | null>(null); // null = sim tape

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(`${BASE_PATH}/quotes.json`, { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const age = Date.now() - new Date(data?.updated).getTime();
        if (!Array.isArray(data?.quotes) || data.quotes.length < 4 || !(age < MAX_QUOTE_AGE_MS)) {
          throw new Error("stale or malformed");
        }
        if (cancelled) return;
        setItems(
          data.quotes.map((q: { sym: string; price: number; chg: number }) => ({
            sym: String(q.sym),
            price: typeof q.price === "number" ? q.price : null,
            chg: Math.abs(Number(q.chg) || 0).toFixed(2),
            up: (Number(q.chg) || 0) >= 0,
          }))
        );
        setAsOf(
          new Date(data.updated).toLocaleString("en-US", {
            timeZone: "America/New_York",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }) + " ET"
        );
      } catch {
        if (cancelled) return;
        setItems(simTape());
        setAsOf(null);
      }
    };

    load();
    const t = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  if (!items.length) {
    return <div className="ticker" style={{ height: 28 }} />;
  }

  const row = (
    <>
      {items.map((it) => (
        <span className="ticker-item" key={it.sym}>
          <span className="sym">{it.sym}</span>
          {it.price !== null && <span>{it.price.toLocaleString("en-US")}</span>}{" "}
          <span style={{ color: it.up ? "var(--green)" : "var(--red)" }}>
            {it.up ? "▲" : "▼"} {it.up ? "+" : "-"}
            {it.chg}%
          </span>
        </span>
      ))}
      <span className="ticker-item">
        <span className="sym">THE PIT</span>
        <span style={{ color: "var(--gold)" }}>
          {asOf ? `LIVE • ${asOf}` : "SIM TAPE"}
        </span>
      </span>
    </>
  );

  return (
    <div className="ticker">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
}
