// XP economy and the rank ladder.

export const XP_VALUES = {
  quizCorrect: 100, // per correct quiz answer
  paperTrade: 250, // completing a paper trade simulation
  scenario: 300, // completing a "what would you do?" scenario
  perfectEpisode: 500, // all 3 quiz questions correct
  duelWin: 750, // winning a head-to-head duel
  blitz: 150, // daily blitz completed
  marketRead: 100, // daily market read completed
  filmRoom: 50, // daily film room completed
  bossPerPart: 500, // boss challenge: 4 parts x 500 = 2,000 max
  tournamentChallenge: 400, // per weekly tournament challenge
  communityPost: 50, // posting a trade thesis
  communityComment: 25, // commenting on a thesis
} as const;

/** Daily login streak XP: 50 on day 1, doubling each consecutive day, capped at 1,600. */
export function streakXp(streakDay: number): number {
  return Math.min(50 * Math.pow(2, Math.max(0, streakDay - 1)), 1600);
}

export interface Rank {
  name: string;
  minXp: number;
  blurb: string;
}

export const RANKS: Rank[] = [
  { name: "Bench Warmer", minXp: 0, blurb: "Everyone starts somewhere. Get reps." },
  { name: "Practice Squad", minXp: 1000, blurb: "You made the building. Now make the roster." },
  { name: "Starter", minXp: 3000, blurb: "Your name is on the lineup card." },
  { name: "All-Star", minXp: 7500, blurb: "The crowd knows your name." },
  { name: "MVP", minXp: 15000, blurb: "You carry the team." },
  { name: "Hall of Famer", minXp: 30000, blurb: "Your jersey hangs in the rafters." },
  { name: "GOAT", minXp: 60000, blurb: "There is no debate." },
];

export function rankIndexForXp(xp: number): number {
  let idx = 0;
  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].minXp) idx = i;
  }
  return idx;
}

export function rankForXp(xp: number): Rank {
  return RANKS[rankIndexForXp(xp)];
}

export function nextRank(xp: number): Rank | null {
  const idx = rankIndexForXp(xp);
  return idx < RANKS.length - 1 ? RANKS[idx + 1] : null;
}

/** Progress (0-1) from the current rank floor to the next rank floor. */
export function rankProgress(xp: number): number {
  const idx = rankIndexForXp(xp);
  if (idx >= RANKS.length - 1) return 1;
  const floor = RANKS[idx].minXp;
  const ceil = RANKS[idx + 1].minXp;
  return Math.min(1, Math.max(0, (xp - floor) / (ceil - floor)));
}
