import type { MatchPair } from "../lib/types";

// The Match: a daily pool of tile pairs. Each day picks 10 of these (20 tiles,
// a 5x4 board). A pair is two tiles that belong together: a drawn chart or
// payoff diagram and the term it stands for, or a term and its short meaning.
// Keep every "b" label unique across the pool so a day's board has no ambiguous
// matches.
export const matchPairPool: MatchPair[] = [
  // Payoff diagram matched to the strategy that draws it
  { id: "m-long-call", a: { svg: "long-call" }, b: { text: "Long Call" } },
  { id: "m-long-put", a: { svg: "long-put" }, b: { text: "Long Put" } },
  { id: "m-covered-call", a: { svg: "covered-call" }, b: { text: "Covered Call" } },
  { id: "m-bull-call-spread", a: { svg: "bull-call-spread" }, b: { text: "Bull Call Spread" } },
  { id: "m-bear-put-spread", a: { svg: "bear-put-spread" }, b: { text: "Bear Put Spread" } },
  { id: "m-short-put", a: { svg: "short-put" }, b: { text: "Short Put" } },
  { id: "m-long-straddle", a: { svg: "long-straddle" }, b: { text: "Long Straddle" } },
  { id: "m-iron-condor", a: { svg: "iron-condor" }, b: { text: "Iron Condor" } },

  // Price chart matched to the read it gives you
  { id: "m-breakout", a: { svg: "breakout" }, b: { text: "Bullish Breakout" } },
  { id: "m-breakdown", a: { svg: "breakdown" }, b: { text: "Bearish Breakdown" } },
  { id: "m-uptrend", a: { svg: "uptrend" }, b: { text: "Uptrend" } },
  { id: "m-downtrend", a: { svg: "downtrend" }, b: { text: "Downtrend" } },
  { id: "m-consolidation", a: { svg: "consolidation" }, b: { text: "Sideways Chop" } },
  { id: "m-double-top", a: { svg: "double-top" }, b: { text: "Double Top" } },
  { id: "m-double-bottom", a: { svg: "double-bottom" }, b: { text: "Double Bottom" } },
  { id: "m-gap-up", a: { svg: "gap-up" }, b: { text: "Gap Up" } },

  // Term matched to its short meaning
  { id: "m-theta", a: { text: "Theta" }, b: { text: "Time Decay" } },
  { id: "m-delta", a: { text: "Delta" }, b: { text: "Move Per $1" } },
  { id: "m-vega", a: { text: "Vega" }, b: { text: "Vol Sensitivity" } },
  { id: "m-gamma", a: { text: "Gamma" }, b: { text: "Delta's Speed" } },
  { id: "m-iv-crush", a: { text: "IV Crush" }, b: { text: "Vol Collapse" } },
  { id: "m-premium", a: { text: "Premium" }, b: { text: "Option Price" } },
  { id: "m-strike", a: { text: "Strike" }, b: { text: "Set Price" } },
  { id: "m-assignment", a: { text: "Assignment" }, b: { text: "Must Deliver" } },
  { id: "m-intrinsic", a: { text: "Intrinsic" }, b: { text: "In The Money" } },
  { id: "m-open-interest", a: { text: "Open Interest" }, b: { text: "Open Contracts" } },

  // More payoff diagrams matched to the strategy
  { id: "m-short-call", a: { svg: "short-call" }, b: { text: "Short Call" } },
  { id: "m-short-straddle", a: { svg: "short-straddle" }, b: { text: "Short Straddle" } },

  // More price charts matched to the read
  { id: "m-gap-down", a: { svg: "gap-down" }, b: { text: "Gap Down" } },
  { id: "m-asc-triangle", a: { svg: "ascending-triangle" }, b: { text: "Asc. Triangle" } },
  { id: "m-desc-triangle", a: { svg: "descending-triangle" }, b: { text: "Desc. Triangle" } },

  // More terms matched to their short meaning
  { id: "m-expiration", a: { text: "Expiration" }, b: { text: "Final Day" } },
  { id: "m-exercise", a: { text: "Exercise" }, b: { text: "Use The Right" } },
  { id: "m-extrinsic", a: { text: "Extrinsic" }, b: { text: "Time Value" } },
  { id: "m-otm", a: { text: "OTM" }, b: { text: "All Time Value" } },
  { id: "m-bid", a: { text: "Bid" }, b: { text: "Sell Price" } },
  { id: "m-ask", a: { text: "Ask" }, b: { text: "Buy Price" } },
  { id: "m-volume", a: { text: "Volume" }, b: { text: "Today's Trades" } },
  { id: "m-rho", a: { text: "Rho" }, b: { text: "Rate Sensitivity" } },
  { id: "m-leverage", a: { text: "Leverage" }, b: { text: "More Per Dollar" } },
  { id: "m-naked", a: { text: "Naked" }, b: { text: "No Shares Behind" } },
  { id: "m-roll", a: { text: "Roll" }, b: { text: "Move Out In Time" } },
  { id: "m-breakeven", a: { text: "Breakeven" }, b: { text: "Scratch Price" } },
  { id: "m-leaps", a: { text: "LEAPS" }, b: { text: "Long Dated" } },
  { id: "m-liquidity", a: { text: "Liquidity" }, b: { text: "Easy To Trade" } },
  { id: "m-moneyness", a: { text: "Moneyness" }, b: { text: "Distance To Strike" } },
  { id: "m-collar", a: { text: "Collar" }, b: { text: "Cap And Floor" } },
  { id: "m-volatility", a: { text: "Volatility" }, b: { text: "Expected Move" } },
  { id: "m-hedge", a: { text: "Hedge" }, b: { text: "Offset Risk" } },
];
