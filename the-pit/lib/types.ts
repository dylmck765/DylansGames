// THE PIT — shared content and domain types.
// All curriculum, daily-loop, and community content conforms to these shapes.

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[]; // exactly 4
  correctIndex: number; // 0-3
  explanation: string;
}

export interface CaseStudy {
  title: string;
  kind: "real" | "fictional";
  setup: string;
  thePlay: string;
  outcome: string;
  lesson: string;
}

export interface PaperTradeChoice {
  label: string; // the contract/play, e.g. "Buy the $105 call, 30 DTE, for $2.40"
  result: string; // what happens if you take this play
  pnl: number; // simulated P/L in dollars (negative = loss)
}

export interface PaperTradeSim {
  id: string;
  title: string;
  ticker: string;
  spotPrice: number;
  brief: string; // the situation handed to the trader
  choices: PaperTradeChoice[]; // exactly 3
  bestChoiceIndex: number; // 0-2
  debrief: string; // why the best play was the best play
}

export interface ScenarioChallenge {
  id: string;
  title: string;
  situation: string;
  question: string; // "What would you do?"
  options: string[]; // exactly 4
  bestIndex: number; // 0-3
  coachNotes: string; // why the best path wins, why the others lose
}

export interface Episode {
  id: string; // e.g. "s1e3"
  seasonId: number; // 1-6
  number: number; // 1-10
  title: string;
  tagline: string; // one-line hook under the title
  playOfTheWeek: string; // opening hook: a trade that won or lost big, and why
  gameFilm: string[]; // 5-7 short punchy paragraphs, ESPN analyst voice
  takeaway: string; // "The Takeaway" closer
  caseStudies: CaseStudy[]; // exactly 2: one kind:"real", one kind:"fictional"
  quiz: QuizQuestion[]; // exactly 3
  paperTrade: PaperTradeSim;
  scenario: ScenarioChallenge;
}

export interface Season {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  episodes: Episode[]; // exactly 10
}

// ---- Daily habit loop ----

export interface DailyBlitz {
  id: string;
  question: string;
  options: string[]; // exactly 4
  correctIndex: number;
  explanation: string;
}

export interface MarketRead {
  id: string;
  title: string;
  setup: string; // a market setup the user must call direction on
  correctCall: "bullish" | "bearish" | "neutral";
  explanation: string;
}

export interface FilmRoomCase {
  id: string;
  title: string;
  story: string[]; // 2-4 short paragraphs telling the trade story
  lesson: string;
}

export interface BossPart {
  question: string;
  options: string[]; // exactly 4
  correctIndex: number;
  explanation: string;
}

export interface BossChallenge {
  id: string;
  title: string;
  intro: string;
  parts: BossPart[]; // 4 parts
}

// ---- Competition ----

export interface TournamentChallenge {
  id: string;
  title: string;
  situation: string;
  question: string;
  options: string[]; // exactly 4
  bestIndex: number;
  coachNotes: string;
}

// ---- Community ----

export interface SeedComment {
  id: string;
  author: string;
  text: string;
}

export interface SeedPost {
  id: string;
  author: string;
  createdDaysAgo: number;
  ticker: string;
  direction: "bullish" | "bearish";
  title: string;
  catalyst: string;
  thesis: string;
  maxLoss: string;
  upvotes: number;
  comments: SeedComment[];
}

// ---- Onboarding ----

export interface PlacementQuestion {
  id: string;
  question: string;
  options: string[]; // exactly 4
  correctIndex: number;
}

// ---- The Match (daily matching game) ----

export type MatchShape =
  // payoff diagrams (P/L on the vertical, stock price on the horizontal)
  | "long-call"
  | "long-put"
  | "covered-call"
  | "bull-call-spread"
  | "bear-put-spread"
  | "short-put"
  | "long-straddle"
  | "iron-condor"
  // price-action charts
  | "breakout"
  | "breakdown"
  | "uptrend"
  | "downtrend"
  | "consolidation"
  | "double-top"
  | "double-bottom"
  | "gap-up";

export interface MatchTile {
  svg?: MatchShape; // a drawn chart or payoff diagram
  text?: string; // a label, term, or short meaning
}

export interface MatchPair {
  id: string;
  a: MatchTile; // one face of the pair (often the chart)
  b: MatchTile; // its mate (often the term or answer)
}
