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
];
