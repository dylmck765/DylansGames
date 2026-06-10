"use client";

// Score-ticker. Fake-but-plausible quotes seeded by the day so they are
// stable across a session but change daily, like a real broadcast crawl.
// Quotes are computed after mount: statically prerendered pages bake in the
// build day's values, so rendering them during hydration would mismatch on
// any later date.

import { useEffect, useState } from "react";
import { dateKey, hashString, mulberry32 } from "@/lib/util";

const SYMBOLS = [
  "SPY", "QQQ", "NVDA", "TSLA", "AAPL", "AMD", "META", "MSFT", "AMZN", "COIN",
  "GOOGL", "NFLX", "PLTR", "SMCI", "IWM", "VIX",
];

interface Quote {
  sym: string;
  chg: string;
  up: boolean;
}

export default function Ticker() {
  const [items, setItems] = useState<Quote[]>([]);

  useEffect(() => {
    const rng = mulberry32(hashString("ticker:" + dateKey()));
    setItems(
      SYMBOLS.map((sym) => {
        const chg = (rng() * 6 - 2.7).toFixed(2);
        const up = parseFloat(chg) >= 0;
        return { sym, chg, up };
      })
    );
  }, []);

  if (!items.length) {
    return <div className="ticker" style={{ height: 28 }} />;
  }

  const row = (
    <>
      {items.map((it) => (
        <span className="ticker-item" key={it.sym}>
          <span className="sym">{it.sym}</span>
          <span style={{ color: it.up ? "var(--green)" : "var(--red)" }}>
            {it.up ? "▲" : "▼"} {it.up ? "+" : ""}
            {it.chg}%
          </span>
        </span>
      ))}
      <span className="ticker-item">
        <span className="sym">THE PIT</span>
        <span style={{ color: "var(--gold)" }}>SIM TAPE</span>
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
