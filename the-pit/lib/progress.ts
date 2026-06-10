// The full persisted player state and pure helpers over it.

export interface EpisodeProgress {
  quizDone: boolean;
  quizCorrect: number; // 0-3
  perfect: boolean;
  paperDone: boolean;
  paperBest: boolean; // picked the best play
  scenarioDone: boolean;
  scenarioWon: boolean; // picked the pro move
}

export interface DayProgress {
  blitzDone: boolean;
  blitzCorrect: boolean;
  readDone: boolean;
  readCorrect: boolean;
  filmDone: boolean;
  bossDone: boolean;
  bossCorrect: number;
  didQuiz: boolean;
  didPaper: boolean;
  didScenario: boolean;
}

export interface UserPost {
  id: string;
  ticker: string;
  direction: "bullish" | "bearish";
  title: string;
  catalyst: string;
  thesis: string;
  maxLoss: string;
  createdAt: string; // ISO
}

export interface UserComment {
  id: string;
  postId: string;
  text: string;
  createdAt: string;
}

export interface TournamentEntry {
  answers: (boolean | null)[]; // 5 slots; null = not attempted
  done: boolean;
  placement?: number; // 1-based final placement once done
}

export interface PitState {
  v: 1;
  profile: {
    handle: string;
    onboarded: boolean;
    createdAt: string;
    placementLevel: 0 | 1 | 2; // 0 = rookie, 1 = knows basics, 2 = knows greeks
    placementScore: number; // 0-5
  };
  xp: number;
  seasonPeriod: string; // 30-day window key
  seasonXp: number;
  streak: {
    current: number;
    longest: number;
    lastLogin: string; // dateKey of last counted day, "" if never
    resets: number; // times a streak of 3+ was lost
  };
  episodes: Record<string, EpisodeProgress>;
  days: Record<string, DayProgress>;
  duels: { wins: number; losses: number; played: number };
  tournaments: Record<string, TournamentEntry>;
  badges: string[];
  posts: UserPost[];
  comments: UserComment[];
  votes: Record<string, 1 | -1>;
  counters: {
    quizCorrectTotal: number;
    perfectQuizzes: number;
    scenarioWins: number;
    papersDone: number;
    blitzDone: number;
    readsDone: number;
    readStreak: number; // consecutive correct market reads
    filmsDone: number;
    bossDone: number;
  };
}

export function initialState(): PitState {
  return {
    v: 1,
    profile: { handle: "", onboarded: false, createdAt: "", placementLevel: 0, placementScore: 0 },
    xp: 0,
    seasonPeriod: "",
    seasonXp: 0,
    streak: { current: 0, longest: 0, lastLogin: "", resets: 0 },
    episodes: {},
    days: {},
    duels: { wins: 0, losses: 0, played: 0 },
    tournaments: {},
    badges: [],
    posts: [],
    comments: [],
    votes: {},
    counters: {
      quizCorrectTotal: 0,
      perfectQuizzes: 0,
      scenarioWins: 0,
      papersDone: 0,
      blitzDone: 0,
      readsDone: 0,
      readStreak: 0,
      filmsDone: 0,
      bossDone: 0,
    },
  };
}

export function emptyEpisodeProgress(): EpisodeProgress {
  return {
    quizDone: false,
    quizCorrect: 0,
    perfect: false,
    paperDone: false,
    paperBest: false,
    scenarioDone: false,
    scenarioWon: false,
  };
}

export function emptyDayProgress(): DayProgress {
  return {
    blitzDone: false,
    blitzCorrect: false,
    readDone: false,
    readCorrect: false,
    filmDone: false,
    bossDone: false,
    bossCorrect: 0,
    didQuiz: false,
    didPaper: false,
    didScenario: false,
  };
}

export function episodeComplete(p: EpisodeProgress | undefined): boolean {
  return !!p && p.quizDone && p.paperDone && p.scenarioDone;
}

export function completedEpisodeCount(state: PitState): number {
  return Object.values(state.episodes).filter(episodeComplete).length;
}

export function seasonEpisodeIds(seasonId: number): string[] {
  return Array.from({ length: 10 }, (_, i) => `s${seasonId}e${i + 1}`);
}

export function seasonComplete(state: PitState, seasonId: number): boolean {
  return seasonEpisodeIds(seasonId).every((id) => episodeComplete(state.episodes[id]));
}
