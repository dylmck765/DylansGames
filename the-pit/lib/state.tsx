"use client";

// GameProvider: single source of truth for player state, persisted to
// localStorage. Every mutation flows through `mutate`, which re-evaluates
// badges and detects rank-ups so celebrations fire from one place.

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { PitState, UserPost, UserComment } from "./progress";
import { initialState, emptyEpisodeProgress, emptyDayProgress } from "./progress";
import { XP_VALUES, streakXp, rankIndexForXp, RANKS } from "./xp";
import { evaluateBadges, BADGE_MAP } from "./badges";
import { dateKey, yesterdayKey, periodKey } from "./util";
import { syncScore } from "./sync";

const STORAGE_KEY = "thepit_state_v1";

export type GameEvent =
  | { kind: "xp"; amount: number; label: string }
  | { kind: "rankup"; rankName: string; rankIndex: number }
  | { kind: "badge"; badgeId: string }
  | { kind: "streak"; day: number; xp: number };

interface GameApi {
  state: PitState;
  ready: boolean;
  events: GameEvent[];
  dismissEvent: () => void;
  onboard: (handle: string, placementScore: number) => void;
  loginTick: () => void;
  submitQuiz: (episodeId: string, correct: number, total: number) => void;
  submitPaper: (episodeId: string, choseBest: boolean) => void;
  submitScenario: (episodeId: string, won: boolean) => void;
  submitBlitz: (correct: boolean) => void;
  submitRead: (correct: boolean) => void;
  submitFilm: () => void;
  submitBoss: (correctParts: number) => void;
  recordDuel: (won: boolean) => void;
  answerTournament: (week: string, slot: number, correct: boolean) => void;
  finalizeTournament: (week: string, placement: number) => void;
  addPost: (p: Omit<UserPost, "id" | "createdAt">) => void;
  addComment: (postId: string, text: string) => void;
  vote: (postId: string, dir: 1 | -1) => void;
  grantBadge: (badgeId: string) => void;
  resetAll: () => void;
}

const GameContext = createContext<GameApi | null>(null);

function load(): PitState {
  if (typeof window === "undefined") return initialState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState();
    const parsed = JSON.parse(raw) as PitState;
    if (parsed.v !== 1) return initialState();
    return { ...initialState(), ...parsed };
  } catch {
    return initialState();
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PitState>(initialState);
  const [ready, setReady] = useState(false);
  const [events, setEvents] = useState<GameEvent[]>([]);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage full or blocked; the session still works in memory.
    }
  }, [state, ready]);

  // Sync score to Supabase whenever XP, streak, or badges change.
  useEffect(() => {
    if (!ready || !state.profile.onboarded) return;
    syncScore(state);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.xp, state.streak.current, state.badges.length, ready]);

  const pushEvents = useCallback((evs: GameEvent[]) => {
    if (evs.length) setEvents((cur) => [...cur, ...evs]);
  }, []);

  const dismissEvent = useCallback(() => setEvents((cur) => cur.slice(1)), []);

  /**
   * Apply a mutation. `fn` receives a deep-enough working copy and a helper
   * to award XP (handles season XP rollover). Rank-ups and new badges are
   * detected here and queued as celebration events.
   */
  const mutate = useCallback(
    (fn: (draft: PitState, award: (amount: number, label: string) => void) => void) => {
      const prev = stateRef.current;
      const draft: PitState = JSON.parse(JSON.stringify(prev));
      const newEvents: GameEvent[] = [];
      const period = periodKey();
      if (draft.seasonPeriod !== period) {
        draft.seasonPeriod = period;
        draft.seasonXp = 0;
      }
      const award = (amount: number, label: string) => {
        if (amount <= 0) return;
        draft.xp += amount;
        draft.seasonXp += amount;
        newEvents.push({ kind: "xp", amount, label });
      };
      fn(draft, award);
      const prevRank = rankIndexForXp(prev.xp);
      const newRank = rankIndexForXp(draft.xp);
      if (newRank > prevRank) {
        newEvents.push({ kind: "rankup", rankName: RANKS[newRank].name, rankIndex: newRank });
      }
      const earned = evaluateBadges(draft);
      for (const id of earned) {
        draft.badges.push(id);
        if (BADGE_MAP[id]) newEvents.push({ kind: "badge", badgeId: id });
      }
      setState(draft);
      pushEvents(newEvents);
    },
    [pushEvents]
  );

  const day = (draft: PitState, key = dateKey()) => {
    if (!draft.days[key]) draft.days[key] = emptyDayProgress();
    return draft.days[key];
  };

  const onboard = useCallback(
    (handle: string, placementScore: number) => {
      mutate((draft, award) => {
        const level: 0 | 1 | 2 = placementScore >= 4 ? 2 : placementScore >= 2 ? 1 : 0;
        draft.profile = {
          handle: handle.trim().slice(0, 24) || "Rookie",
          onboarded: true,
          createdAt: new Date().toISOString(),
          placementLevel: level,
          placementScore,
        };
        const grant = level === 2 ? 3000 : level === 1 ? 1000 : 0;
        if (grant > 0) award(grant, "Placement bonus");
      });
    },
    [mutate]
  );

  const loginTick = useCallback(() => {
    const today = dateKey();
    const cur = stateRef.current;
    if (!cur.profile.onboarded || cur.streak.lastLogin === today) return;
    mutate((draft, award) => {
      if (draft.streak.lastLogin === today) return;
      const wasYesterday = draft.streak.lastLogin === yesterdayKey(today);
      if (wasYesterday) {
        draft.streak.current += 1;
      } else {
        if (draft.streak.current >= 3) draft.streak.resets += 1;
        draft.streak.current = 1;
      }
      draft.streak.lastLogin = today;
      draft.streak.longest = Math.max(draft.streak.longest, draft.streak.current);
      const xp = streakXp(draft.streak.current);
      award(xp, `Day ${draft.streak.current} streak`);
      // Streak event rides alongside the XP event for the celebration banner.
      draft.days[today] = draft.days[today] || emptyDayProgress();
    });
  }, [mutate]);

  const submitQuiz = useCallback(
    (episodeId: string, correct: number, total: number) => {
      mutate((draft, award) => {
        const ep = draft.episodes[episodeId] || emptyEpisodeProgress();
        if (ep.quizDone) return;
        ep.quizDone = true;
        ep.quizCorrect = correct;
        ep.perfect = correct === total;
        draft.episodes[episodeId] = ep;
        draft.counters.quizCorrectTotal += correct;
        if (ep.perfect) draft.counters.perfectQuizzes += 1;
        day(draft).didQuiz = true;
        award(correct * XP_VALUES.quizCorrect, "Quiz answers");
        if (ep.perfect) award(XP_VALUES.perfectEpisode, "PERFECT EPISODE");
      });
    },
    [mutate]
  );

  const submitPaper = useCallback(
    (episodeId: string, choseBest: boolean) => {
      mutate((draft, award) => {
        const ep = draft.episodes[episodeId] || emptyEpisodeProgress();
        if (ep.paperDone) return;
        ep.paperDone = true;
        ep.paperBest = choseBest;
        draft.episodes[episodeId] = ep;
        draft.counters.papersDone += 1;
        day(draft).didPaper = true;
        award(XP_VALUES.paperTrade, "Paper trade executed");
      });
    },
    [mutate]
  );

  const submitScenario = useCallback(
    (episodeId: string, won: boolean) => {
      mutate((draft, award) => {
        const ep = draft.episodes[episodeId] || emptyEpisodeProgress();
        if (ep.scenarioDone) return;
        ep.scenarioDone = true;
        ep.scenarioWon = won;
        draft.episodes[episodeId] = ep;
        if (won) draft.counters.scenarioWins += 1;
        day(draft).didScenario = true;
        award(XP_VALUES.scenario, "Scenario call made");
      });
    },
    [mutate]
  );

  const submitBlitz = useCallback(
    (correct: boolean) => {
      mutate((draft, award) => {
        const d = day(draft);
        if (d.blitzDone) return;
        d.blitzDone = true;
        d.blitzCorrect = correct;
        draft.counters.blitzDone += 1;
        award(XP_VALUES.blitz, "Daily Blitz");
      });
    },
    [mutate]
  );

  const submitRead = useCallback(
    (correct: boolean) => {
      mutate((draft, award) => {
        const d = day(draft);
        if (d.readDone) return;
        d.readDone = true;
        d.readCorrect = correct;
        draft.counters.readsDone += 1;
        draft.counters.readStreak = correct ? draft.counters.readStreak + 1 : 0;
        award(XP_VALUES.marketRead, "Market Read");
      });
    },
    [mutate]
  );

  const submitFilm = useCallback(() => {
    mutate((draft, award) => {
      const d = day(draft);
      if (d.filmDone) return;
      d.filmDone = true;
      draft.counters.filmsDone += 1;
      award(XP_VALUES.filmRoom, "Film Room");
    });
  }, [mutate]);

  const submitBoss = useCallback(
    (correctParts: number) => {
      mutate((draft, award) => {
        const d = day(draft);
        if (d.bossDone) return;
        d.bossDone = true;
        d.bossCorrect = correctParts;
        draft.counters.bossDone += 1;
        award(correctParts * XP_VALUES.bossPerPart, "BOSS CHALLENGE");
      });
    },
    [mutate]
  );

  const recordDuel = useCallback(
    (won: boolean) => {
      mutate((draft, award) => {
        draft.duels.played += 1;
        if (won) {
          draft.duels.wins += 1;
          award(XP_VALUES.duelWin, "Duel victory");
        } else {
          draft.duels.losses += 1;
        }
      });
    },
    [mutate]
  );

  const answerTournament = useCallback(
    (week: string, slot: number, correct: boolean) => {
      mutate((draft, award) => {
        const t = draft.tournaments[week] || { answers: [null, null, null, null, null], done: false };
        if (t.answers[slot] !== null) return;
        t.answers[slot] = correct;
        draft.tournaments[week] = t;
        award(XP_VALUES.tournamentChallenge, "Tournament challenge");
      });
    },
    [mutate]
  );

  const finalizeTournament = useCallback(
    (week: string, placement: number) => {
      mutate((draft) => {
        const t = draft.tournaments[week];
        if (!t || t.done) return;
        t.done = true;
        t.placement = placement;
      });
    },
    [mutate]
  );

  const addPost = useCallback(
    (p: Omit<UserPost, "id" | "createdAt">) => {
      mutate((draft, award) => {
        draft.posts.unshift({
          ...p,
          id: `user-post-${draft.posts.length + 1}-${draft.xp}`,
          createdAt: new Date().toISOString(),
        });
        award(XP_VALUES.communityPost, "Thesis posted");
      });
    },
    [mutate]
  );

  const addComment = useCallback(
    (postId: string, text: string) => {
      mutate((draft, award) => {
        draft.comments.push({
          id: `user-comment-${draft.comments.length + 1}`,
          postId,
          text,
          createdAt: new Date().toISOString(),
        });
        award(XP_VALUES.communityComment, "Comment");
      });
    },
    [mutate]
  );

  const vote = useCallback(
    (postId: string, dir: 1 | -1) => {
      mutate((draft) => {
        if (draft.votes[postId] === dir) {
          delete draft.votes[postId];
        } else {
          draft.votes[postId] = dir;
        }
      });
    },
    [mutate]
  );

  const grantBadge = useCallback(
    (badgeId: string) => {
      mutate((draft) => {
        if (!draft.badges.includes(badgeId) && BADGE_MAP[badgeId]) {
          draft.badges.push(badgeId);
        }
      });
    },
    [mutate]
  );

  const resetAll = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setState(initialState());
    setEvents([]);
  }, []);

  const api: GameApi = {
    state,
    ready,
    events,
    dismissEvent,
    onboard,
    loginTick,
    submitQuiz,
    submitPaper,
    submitScenario,
    submitBlitz,
    submitRead,
    submitFilm,
    submitBoss,
    recordDuel,
    answerTournament,
    finalizeTournament,
    addPost,
    addComment,
    vote,
    grantBadge,
    resetAll,
  };

  return <GameContext.Provider value={api}>{children}</GameContext.Provider>;
}

export function useGame(): GameApi {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}
