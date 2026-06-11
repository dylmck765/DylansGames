import { supabase } from "./supabase";
import type { PitState } from "./progress";
import { rankIndexForXp, RANKS } from "./xp";

/** Clamp a number into a sane range before it leaves the device. */
const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, Math.round(n) || 0));

export function syncScore(state: PitState): void {
  if (!state.profile.onboarded) return;
  const episodesDone = Object.values(state.episodes).filter(
    (e) => e?.quizDone && e?.paperDone && e?.scenarioDone
  ).length;
  // .then() is required — Supabase JS v2 uses a lazy query builder that only
  // executes the fetch when the Promise is consumed.
  supabase.from("leaderboard").upsert({
    handle: state.profile.handle.slice(0, 24),
    xp: clamp(state.xp, 0, 10_000_000),
    season_xp: clamp(state.seasonXp, 0, 10_000_000),
    rank_name: RANKS[rankIndexForXp(state.xp)].name,
    streak: clamp(state.streak.current, 0, 10_000),
    badge_count: clamp(state.badges.length, 0, 100),
    episodes_done: clamp(episodesDone, 0, 60),
    updated_at: new Date().toISOString(),
  }, { onConflict: "handle" }).then(() => {});
}

/** Upsert this week's tournament score so standings show real players. */
export function syncTournament(
  week: string,
  handle: string,
  score: number,
  answered: number,
  done: boolean
): void {
  supabase.from("tournament_scores").upsert({
    week: week.slice(0, 16),
    handle: handle.slice(0, 24),
    score: clamp(score, 0, 100_000),
    answered: clamp(answered, 0, 5),
    done,
    updated_at: new Date().toISOString(),
  }, { onConflict: "week,handle" }).then(() => {});
}
