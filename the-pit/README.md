# 🏟️ THE PIT

**[▶ Live Demo — dylmck765.github.io/DylansGames](https://dylmck765.github.io/DylansGames/)**

**The free, gamified training ground that turns stock investors into confident directional options traders.**

ESPN energy. Six seasons of curriculum. Daily habit loops, streaks, badges, duels, weekly tournaments, and a built-in community — all running 100% locally with zero paid services.

> THE PIT is an education and simulation platform. Nothing here is financial advice. All trading is paper trading.

---

## What's Inside

| System | What it does |
|---|---|
| **Curriculum Engine** | 6 seasons × 10 episodes. Each episode: a "game film" breakdown, 2 case studies (one real-historical, one fictional), a 3-question quiz, a paper-trade simulation, and a "what would you do?" scenario. |
| **XP & Ranks** | Quiz answers (100), paper trades (250), scenarios (300), perfect-episode bonus (500), duel wins (750), boss challenges (up to 2,000). Seven ranks: Bench Warmer → Practice Squad → Starter → All-Star → MVP → Hall of Famer → GOAT. |
| **Streaks** | Daily login bonus starts at 50 XP and doubles every consecutive day, capped at 1,600. |
| **Badges** | 26 badges from "First Blood" to "The GOAT," evaluated automatically after every action. |
| **Competition** | Global top-100 leaderboard, 30-day Season rankings (auto-reset), streak leaderboard, weekly 5-challenge tournaments (Mon–Sun, top 3 medal), and head-to-head duels vs real players' recorded runs (same 5 questions, most correct wins, time breaks ties). |
| **Daily Loop** | Daily Blitz (60-second shot clock), Market Read (call the direction + write your reasoning), Film Room (case study), and a daily Boss Challenge worth up to 2,000 XP. |
| **Community** | Reddit-style feed of structured Trade Theses (ticker / direction / catalyst / max loss), votes, comments, and a weekly "Analyst of the Week" badge. |
| **Onboarding** | Hype welcome → 5-question placement quiz → animated rank reveal → first episode auto-queued. High scorers skip Season 1 (or 1–2) and start with bonus XP. |
| **Marketing** | Landing page, shareable player-card PNG generator, and a 4-week "Pit Report" email sequence (in-app at `/pit-report` and in `marketing/pit-report-emails.md`). |
| **Live Tape** | The score ticker shows real Yahoo Finance quotes, baked into the build by `scripts/fetch-quotes.mjs` on a market-hours schedule. Falls back to a clearly-labeled simulated tape if quotes are missing or stale. |

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** — that's it. No database, no auth service, no paid APIs.
- All player state persists in `localStorage` (`thepit_state_v1`).
- Leaderboards, tournament standings, and duels are real players only, synced through Supabase. Duels are asynchronous PvP: you're matched against another player's recorded run on the same 5 questions.
- Daily/tournament content rotates deterministically from content pools keyed by date/week.
- Styling is hand-rolled CSS (Space Grotesk + Inter via Google Fonts) — no UI framework.

## Run It Locally

Requires Node.js 18.18+ (any current LTS).

```bash
cd the-pit
npm install
npm run dev
```

Open http://localhost:3000 — the landing page. Hit **"Step Into The Pit"** to onboard.

> **No Node on the machine?** This project was bootstrapped with a portable Node runtime in `../.tools/node-v24.16.0-win-x64`. You can use it directly:
> ```powershell
> $env:PATH = "$(Resolve-Path ..\.tools\node-v24.16.0-win-x64);$env:PATH"
> npm run dev
> ```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Deploy

Pushing to `main` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` (static export of the Next.js app). The same workflow also runs on a market-hours cron so the ticker tape stays fresh.

## Security Model

- **No secrets in this repo.** The only Supabase credential in client code is the *publishable* key, which is designed to be public — Row Level Security policies on the Supabase side decide what it can do (read + insert/upsert on the game tables; no deletes).
- **Local settings stay local.** All `.env*` files are gitignored (see `.env.example`). The secret service-role key must never appear in this repo or in client code.
- **Player state is local-first.** Progress lives in the browser's `localStorage`; only leaderboard/tournament/duel rows ever leave the device, and every field is length- and range-clamped before it's sent. Database CHECK constraints enforce the same limits server-side.
- **No accounts, no passwords, no PII.** Handles are free-form display names (sanitized to a safe character set).

## Project Map

```
the-pit/
├── app/
│   ├── page.tsx                  # Landing page (hero, live top-5 board)
│   ├── onboarding/               # Tryout: handle → placement quiz → rank reveal
│   ├── locker-room/              # Home dashboard: streak, rank, today's slate
│   ├── seasons/                  # Season list + per-season episode lists
│   ├── episode/[episodeId]/      # Full episode: film, cases, quiz, sim, scenario
│   ├── daily/                    # Daily Blitz / Market Read / Film Room / Boss
│   ├── leaderboard/              # Global / Season / Streak / Community boards
│   ├── tournament/               # Weekly 5-challenge tournament
│   ├── duels/                    # Head-to-head duel floor
│   ├── community/                # Trade thesis feed, composer, threads
│   ├── profile/                  # Stats, badge case, share card, reset
│   └── pit-report/               # 4-week email sequence, copyable
├── components/                   # AppShell, Ticker, quiz/sim/scenario blocks, ShareCard…
├── lib/
│   ├── types.ts                  # All content types
│   ├── state.tsx                 # GameProvider: XP, streaks, badges, persistence
│   ├── xp.ts                     # XP economy + rank ladder
│   ├── badges.ts                 # 26 badge definitions (pure predicates)
│   ├── content.ts                # Season aggregation + unlock rules
│   ├── community.ts              # Feed merging (seeded + user posts)
│   ├── progress.ts               # Persisted state shape
│   └── util.ts                   # Date keys, hashing, seeded RNG
├── data/
│   ├── seasons/season1..6.ts     # The full 60-episode curriculum
│   ├── daily-content.ts          # Blitz/read/film/boss pools
│   ├── tournament.ts             # Tournament challenge pool
│   ├── duels.ts                  # Duel question pool
│   ├── community-seed.ts         # Seeded community theses
│   └── placement.ts              # Onboarding placement quiz
└── marketing/pit-report-emails.md
```

## Design Notes

- **Mobile-first.** Bottom tab nav, thumb-sized targets, sticky score ticker — built to be used on a phone during market hours.
- **Broadcast aesthetic.** Dark `#0a0a0c` arena, crimson `#e5484d`, gold accents for XP, Space Grotesk display type, a real-quote ticker crawl, rank-up takeover animations. Every screen is a live broadcast, not a course page.
- **Celebrations are centralized.** Every XP award, rank-up, and badge unlock flows through one event queue (`EventLayer`), so rewards always fire no matter where they're earned.

Welcome to The Pit. 🐐
