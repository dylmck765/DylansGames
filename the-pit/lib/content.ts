// Aggregates all curriculum content and implements episode unlock rules.

import type { Episode, Season } from "./types";
import type { PitState } from "./progress";
import season1 from "../data/seasons/season1";
import season2 from "../data/seasons/season2";
import season3 from "../data/seasons/season3";
import season4 from "../data/seasons/season4";
import season5 from "../data/seasons/season5";
import season6 from "../data/seasons/season6";

export const SEASONS: Season[] = [season1, season2, season3, season4, season5, season6];

export const ALL_EPISODES: Episode[] = SEASONS.flatMap((s) => s.episodes);

const EPISODE_MAP: Record<string, Episode> = Object.fromEntries(ALL_EPISODES.map((e) => [e.id, e]));

export function getSeason(id: number): Season | undefined {
  return SEASONS.find((s) => s.id === id);
}

export function getEpisode(id: string): Episode | undefined {
  return EPISODE_MAP[id];
}

/** Global 0-based order of an episode across all seasons. */
export function episodeIndex(id: string): number {
  return ALL_EPISODES.findIndex((e) => e.id === id);
}

/**
 * How many leading episodes the placement quiz unlocks for free.
 * Includes the first episode of the season the player starts in, so a
 * Starter (level 2) lands on s3e1 already unlocked.
 */
export function placementUnlockCount(level: 0 | 1 | 2): number {
  return level === 2 ? 21 : level === 1 ? 11 : 1;
}

/**
 * An episode is unlocked if it is within the placement grant, or if the
 * previous episode's quiz is done. Episode 1 of Season 1 is always open.
 */
export function isEpisodeUnlocked(id: string, state: PitState): boolean {
  const idx = episodeIndex(id);
  if (idx < 0) return false;
  if (idx === 0) return true;
  if (idx < placementUnlockCount(state.profile.placementLevel)) return true;
  const prev = ALL_EPISODES[idx - 1];
  return !!state.episodes[prev.id]?.quizDone;
}

/**
 * The next episode the player should play: the first unlocked-but-incomplete
 * episode at or after their placement starting point, falling back to the
 * earliest incomplete one (so skipped seasons remain revisitable).
 */
export function nextEpisode(state: PitState): Episode {
  const startIdx = Math.max(0, placementUnlockCount(state.profile.placementLevel) - 1);
  const incompleteAndUnlocked = (ep: Episode) => {
    const p = state.episodes[ep.id];
    const complete = !!p && p.quizDone && p.paperDone && p.scenarioDone;
    return !complete && isEpisodeUnlocked(ep.id, state);
  };
  for (let i = startIdx; i < ALL_EPISODES.length; i++) {
    if (incompleteAndUnlocked(ALL_EPISODES[i])) return ALL_EPISODES[i];
  }
  for (const ep of ALL_EPISODES) {
    if (incompleteAndUnlocked(ep)) return ep;
  }
  return ALL_EPISODES[ALL_EPISODES.length - 1];
}
