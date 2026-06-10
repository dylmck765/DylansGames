// AI sparring partners for the duel floor. These are clearly labeled as bots
// in the UI — they never appear on leaderboards or tournament standings,
// which show real players only (via Supabase).

import { dateKey, hashString, mulberry32 } from "./util";

export interface Bot {
  id: string;
  handle: string;
  xp: number;
  seasonXp: number;
  streak: number;
  badgeCount: number;
  skill: number; // 0-1, drives duel accuracy and tournament scores
  communityScore: number;
}

const PREFIXES = [
  "Theta", "Delta", "Gamma", "Vega", "Iron", "Mad", "Big", "Silent", "Turbo", "Clutch",
];
const SUFFIXES = [
  "Thief", "Dawn", "Grinder", "Vulture", "Hands", "Money", "Wolf", "Sniper", "Captain", "Kid", "King", "Queen",
];

let cache: { day: string; bots: Bot[] } | null = null;

export function getBots(): Bot[] {
  const day = dateKey();
  if (cache && cache.day === day) return cache.bots;

  const bots: Bot[] = [];
  let n = 0;
  for (const p of PREFIXES) {
    for (const s of SUFFIXES) {
      const handle = `${p}${s}`;
      const rng = mulberry32(hashString("pit-bot:" + handle));
      const skill = 0.25 + rng() * 0.7;
      // Power-law-ish XP curve: a few monsters at the top, a long tail below.
      const base = Math.floor(120 * Math.pow(n + 1, 1.62) * (0.7 + rng() * 0.6));
      // Daily jitter so the board moves between days.
      const jitter = Math.floor(mulberry32(hashString(handle + ":" + day))() * 900);
      bots.push({
        id: `bot-${n}`,
        handle,
        xp: base + jitter,
        seasonXp: Math.floor((base + jitter) * (0.04 + rng() * 0.1)),
        streak: Math.floor(rng() * rng() * 45),
        badgeCount: Math.min(26, Math.floor((base / 70000) * 26 + rng() * 4)),
        skill,
        communityScore: Math.floor(rng() * 320),
      });
      n++;
    }
  }
  bots.sort((a, b) => b.xp - a.xp);
  cache = { day, bots };
  return bots;
}

/** Deterministic duel opponent for the user's Nth duel. */
export function duelOpponent(duelNumber: number): Bot {
  const bots = getBots();
  const rng = mulberry32(hashString("duel-opp:" + duelNumber));
  // Bias toward mid-table opponents so duels feel winnable but not free.
  const idx = 20 + Math.floor(rng() * 80);
  return bots[Math.min(idx, bots.length - 1)];
}

/** Simulated opponent performance on a 5-question duel. */
export function simulateDuelRun(bot: Bot, duelNumber: number): { correct: number; timeMs: number } {
  const rng = mulberry32(hashString(`duel-run:${bot.id}:${duelNumber}`));
  let correct = 0;
  let timeMs = 0;
  for (let q = 0; q < 5; q++) {
    if (rng() < bot.skill * 0.92) correct++;
    timeMs += 2500 + Math.floor(rng() * 8000);
  }
  return { correct, timeMs };
}
