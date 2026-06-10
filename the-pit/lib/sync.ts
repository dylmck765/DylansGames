import { supabase } from "./supabase";
import type { PitState } from "./progress";
import { rankIndexForXp, RANKS } from "./xp";

export function syncScore(state: PitState): void {
  if (!state.profile.onboarded) return;
  const episodesDone = Object.values(state.episodes).filter(
    (e) => e?.quizDone && e?.paperDone && e?.scenarioDone
  ).length;
  supabase.from("leaderboard").upsert({
    handle: state.profile.handle,
    xp: state.xp,
    season_xp: state.seasonXp,
    rank_name: RANKS[rankIndexForXp(state.xp)].name,
    streak: state.streak.current,
    badge_count: state.badges.length,
    episodes_done: episodesDone,
    updated_at: new Date().toISOString(),
  }, { onConflict: "handle" });
  // Fire-and-forget — local state is source of truth, sync failure is silent.
}
