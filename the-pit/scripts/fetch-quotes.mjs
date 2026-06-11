// Fetch real quotes from the Yahoo Finance chart API and write them to
// public/quotes.json so the static site can serve them same-origin.
//
// Yahoo's endpoints don't send CORS headers, so the browser can't call them
// directly from GitHub Pages — instead this runs server-side in the deploy
// workflow (on a market-hours schedule) and bakes the tape into the build.
// If Yahoo is unreachable the script exits 0 without writing, and the site
// falls back to its simulated tape.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// { yahooSymbol, displaySymbol }
const SYMBOLS = [
  ["SPY", "SPY"], ["QQQ", "QQQ"], ["NVDA", "NVDA"], ["TSLA", "TSLA"],
  ["AAPL", "AAPL"], ["AMD", "AMD"], ["META", "META"], ["MSFT", "MSFT"],
  ["AMZN", "AMZN"], ["COIN", "COIN"], ["GOOGL", "GOOGL"], ["NFLX", "NFLX"],
  ["PLTR", "PLTR"], ["SMCI", "SMCI"], ["IWM", "IWM"], ["^VIX", "VIX"],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchQuote(yahooSym) {
  const url =
    "https://query1.finance.yahoo.com/v8/finance/chart/" +
    encodeURIComponent(yahooSym) +
    "?interval=1d&range=1d";
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; ThePitTicker/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const meta = (await res.json())?.chart?.result?.[0]?.meta;
  const price = meta?.regularMarketPrice;
  const prev = meta?.chartPreviousClose ?? meta?.previousClose;
  if (typeof price !== "number" || typeof prev !== "number" || prev === 0) {
    throw new Error("missing price data");
  }
  return { price, changePct: ((price - prev) / prev) * 100 };
}

const quotes = [];
for (const [yahooSym, displaySym] of SYMBOLS) {
  try {
    const q = await fetchQuote(yahooSym);
    quotes.push({
      sym: displaySym,
      price: Number(q.price.toFixed(2)),
      chg: Number(q.changePct.toFixed(2)),
    });
  } catch (err) {
    console.warn(`[quotes] ${yahooSym} failed: ${err.message}`);
  }
  await sleep(150); // stay polite — avoid Yahoo rate limiting
}

if (quotes.length < 4) {
  console.warn(`[quotes] only ${quotes.length} symbols succeeded — not writing quotes.json (site will use sim tape)`);
  process.exit(0);
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
await mkdir(outDir, { recursive: true });
const payload = { updated: new Date().toISOString(), quotes };
await writeFile(join(outDir, "quotes.json"), JSON.stringify(payload), "utf8");
console.log(`[quotes] wrote ${quotes.length} quotes to public/quotes.json`);
