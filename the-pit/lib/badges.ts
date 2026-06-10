// Badge definitions. Every badge is a pure predicate over PitState so badges
// can be re-evaluated after any state change with zero bookkeeping.

import type { PitState } from "./progress";
import { episodeComplete, completedEpisodeCount, seasonComplete, seasonEpisodeIds } from "./progress";
import { RANKS, rankIndexForXp } from "./xp";

export interface BadgeDef {
  id: string;
  name: string;
  icon: string; // emoji
  desc: string;
  tier: "bronze" | "silver" | "gold" | "legend";
  check: (s: PitState) => boolean;
}

export const BADGES: BadgeDef[] = [
  {
    id: "draft-pick",
    name: "Draft Pick",
    icon: "📋",
    desc: "Complete onboarding and step into The Pit.",
    tier: "bronze",
    check: (s) => s.profile.onboarded,
  },
  {
    id: "first-blood",
    name: "First Blood",
    icon: "🩸",
    desc: "Complete your first lesson.",
    tier: "bronze",
    check: (s) => Object.values(s.episodes).some(episodeComplete),
  },
  {
    id: "on-fire",
    name: "On Fire",
    icon: "🔥",
    desc: "Hit a 7-day login streak.",
    tier: "silver",
    check: (s) => s.streak.longest >= 7,
  },
  {
    id: "iron-will",
    name: "Iron Will",
    icon: "🛡️",
    desc: "Hit a 30-day login streak.",
    tier: "gold",
    check: (s) => s.streak.longest >= 30,
  },
  {
    id: "comeback-kid",
    name: "Comeback Kid",
    icon: "🔄",
    desc: "Lose a streak, then rebuild it to 3 days.",
    tier: "silver",
    check: (s) => s.streak.resets >= 1 && s.streak.current >= 3,
  },
  {
    id: "rookie-season",
    name: "Rookie Season",
    icon: "🎓",
    desc: "Complete every episode in Season 1.",
    tier: "silver",
    check: (s) => seasonComplete(s, 1),
  },
  {
    id: "the-greek",
    name: "The Greek",
    icon: "🏛️",
    desc: "Master every Greeks episode — complete all of Season 2.",
    tier: "gold",
    check: (s) => seasonComplete(s, 2),
  },
  {
    id: "paper-hands-no-more",
    name: "Paper Hands No More",
    icon: "💎",
    desc: "Complete all risk management content — every episode of Season 4.",
    tier: "gold",
    check: (s) => seasonComplete(s, 4),
  },
  {
    id: "earnings-assassin",
    name: "Earnings Assassin",
    icon: "🗡️",
    desc: "Ace all of Season 5: perfect quiz and a won scenario in every episode.",
    tier: "legend",
    check: (s) =>
      seasonEpisodeIds(5).every((id) => {
        const p = s.episodes[id];
        return !!p && p.perfect && p.scenarioWon;
      }),
  },
  {
    id: "dynasty",
    name: "Dynasty",
    icon: "👑",
    desc: "Complete all 6 seasons. A career, not a season.",
    tier: "legend",
    check: (s) => [1, 2, 3, 4, 5, 6].every((sid) => seasonComplete(s, sid)),
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    icon: "🎯",
    desc: "Score perfect on 5 episode quizzes.",
    tier: "silver",
    check: (s) => s.counters.perfectQuizzes >= 5,
  },
  {
    id: "vol-crusher",
    name: "Vol Crusher",
    icon: "🌊",
    desc: "Win 10 scenario challenges.",
    tier: "gold",
    check: (s) => s.counters.scenarioWins >= 10,
  },
  {
    id: "paper-champion",
    name: "Paper Champion",
    icon: "📜",
    desc: "Complete 20 paper trade simulations.",
    tier: "gold",
    check: (s) => s.counters.papersDone >= 20,
  },
  {
    id: "buzzer-beater",
    name: "Buzzer Beater",
    icon: "⏱️",
    desc: "Complete 10 Daily Blitz challenges.",
    tier: "silver",
    check: (s) => s.counters.blitzDone >= 10,
  },
  {
    id: "hot-hand",
    name: "Hot Hand",
    icon: "🏀",
    desc: "Nail 3 Market Reads in a row.",
    tier: "silver",
    check: (s) => s.counters.readStreak >= 3,
  },
  {
    id: "film-junkie",
    name: "Film Junkie",
    icon: "🎬",
    desc: "Watch 10 Film Room breakdowns.",
    tier: "bronze",
    check: (s) => s.counters.filmsDone >= 10,
  },
  {
    id: "gym-rat",
    name: "Gym Rat",
    icon: "🏋️",
    desc: "Complete 25 episodes. Nobody outworks you.",
    tier: "gold",
    check: (s) => completedEpisodeCount(s) >= 25,
  },
  {
    id: "triple-double",
    name: "Triple Double",
    icon: "📊",
    desc: "Complete a quiz, a paper trade, and a scenario in a single day.",
    tier: "silver",
    check: (s) => Object.values(s.days).some((d) => d.didQuiz && d.didPaper && d.didScenario),
  },
  {
    id: "duelist",
    name: "Duelist",
    icon: "⚔️",
    desc: "Win your first head-to-head duel.",
    tier: "bronze",
    check: (s) => s.duels.wins >= 1,
  },
  {
    id: "undisputed",
    name: "Undisputed",
    icon: "🥊",
    desc: "Win 10 head-to-head duels.",
    tier: "gold",
    check: (s) => s.duels.wins >= 10,
  },
  {
    id: "boss-slayer",
    name: "Boss Slayer",
    icon: "🐉",
    desc: "Complete your first Friday Boss Challenge.",
    tier: "silver",
    check: (s) => s.counters.bossDone >= 1,
  },
  {
    id: "ring-chaser",
    name: "Ring Chaser",
    icon: "💍",
    desc: "Finish top 3 in a weekly tournament.",
    tier: "gold",
    check: (s) => Object.values(s.tournaments).some((t) => t.done && (t.placement ?? 99) <= 3),
  },
  {
    id: "tournament-champ",
    name: "Undefeated Champion",
    icon: "🏆",
    desc: "Win a weekly tournament outright.",
    tier: "legend",
    check: (s) => Object.values(s.tournaments).some((t) => t.done && t.placement === 1),
  },
  {
    id: "locker-room-leader",
    name: "Locker Room Leader",
    icon: "📣",
    desc: "Make 10 community contributions (theses + comments).",
    tier: "silver",
    check: (s) => s.posts.length + s.comments.length >= 10,
  },
  {
    id: "analyst-of-week",
    name: "Analyst of the Week",
    icon: "🧠",
    desc: "Post the top-voted trade thesis of the week.",
    tier: "gold",
    // Awarded imperatively by the community page when the user's post tops the weekly board.
    check: () => false,
  },
  {
    id: "the-goat",
    name: "The GOAT",
    icon: "🐐",
    desc: "Reach the maximum rank. There is no debate.",
    tier: "legend",
    check: (s) => rankIndexForXp(s.xp) === RANKS.length - 1,
  },
];

export const BADGE_MAP: Record<string, BadgeDef> = Object.fromEntries(BADGES.map((b) => [b.id, b]));

/** Returns ids of badges newly earned given the current state. */
export function evaluateBadges(s: PitState): string[] {
  const owned = new Set(s.badges);
  return BADGES.filter((b) => !owned.has(b.id) && b.check(s)).map((b) => b.id);
}
