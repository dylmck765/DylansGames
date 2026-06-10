"use client";

// The Locker Room: home base. Streak, rank progress, today's slate,
// continue-training CTA, and a peek at the board.

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGame } from "@/lib/state";
import { rankForXp, nextRank, rankProgress } from "@/lib/xp";
import { nextEpisode, getSeason } from "@/lib/content";
import { dateKey, formatXp, periodDaysLeft } from "@/lib/util";
import { supabase } from "@/lib/supabase";
import { episodeComplete } from "@/lib/progress";
import CountUp from "@/components/CountUp";

export default function LockerRoom() {
  const { state, ready } = useGame();
  const [standing, setStanding] = useState<number | null>(null);

  // Real global rank: how many live players sit above me on the board.
  useEffect(() => {
    if (!ready || !state.profile.onboarded) return;
    supabase
      .from("leaderboard")
      .select("handle", { count: "exact", head: true })
      .gt("xp", state.xp)
      .then(({ count }) => {
        if (count !== null) setStanding(count + 1);
      });
  }, [ready, state.profile.onboarded, state.xp]);

  if (!ready) return <main className="page" />;

  if (!state.profile.onboarded) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <h2 className="display" style={{ fontSize: 30, marginBottom: 12 }}>You haven&apos;t made the roster yet</h2>
        <Link href="/onboarding" className="btn btn-primary">Take the Tryout</Link>
      </main>
    );
  }

  const rank = rankForXp(state.xp);
  const next = nextRank(state.xp);
  const ep = nextEpisode(state);
  const season = getSeason(ep.seasonId);
  const today = state.days[dateKey()];
  const completedCount = Object.values(state.episodes).filter(episodeComplete).length;

  const slate = [
    { href: "/daily", label: "Daily Blitz", done: !!today?.blitzDone, xp: 150 },
    { href: "/daily", label: "Market Read", done: !!today?.readDone, xp: 100 },
    { href: "/daily", label: "Film Room", done: !!today?.filmDone, xp: 50 },
    { href: "/daily", label: "Boss Challenge", done: !!today?.bossDone, xp: 2000 },
  ];

  return (
    <main className="page">
      <div className="row-between" style={{ margin: "10px 0 16px" }}>
        <div>
          <div className="kicker">THE LOCKER ROOM</div>
          <h1 className="display-italic" style={{ fontSize: 34 }}>
            {state.profile.handle}
          </h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="display" style={{ fontSize: 30, color: "var(--gold)" }}>
            <CountUp value={state.xp} /> <span style={{ fontSize: 16 }}>XP</span>
          </div>
          <div className="muted" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {standing !== null ? `#${standing} on the global board` : "climbing the board"}
          </div>
        </div>
      </div>

      {/* Rank progress */}
      <div className="card card-accent">
        <div className="row-between">
          <span className="display" style={{ fontSize: 22 }}>{rank.name}</span>
          {next && (
            <span className="muted" style={{ fontSize: 12.5 }}>
              {formatXp(next.minXp - state.xp)} XP to {next.name}
            </span>
          )}
        </div>
        <div className="progress" style={{ marginTop: 8 }}>
          <div style={{ width: `${rankProgress(state.xp) * 100}%` }} />
        </div>
        <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
          <span className="pill">{state.streak.current}-day streak</span>
          <span className="pill">{state.badges.length} badges</span>
          <span className="pill">{completedCount}/60 episodes</span>
        </div>
      </div>

      {/* Continue training */}
      <div className="section-head">
        <h2>Up Next in Training</h2>
        <Link href="/seasons" className="kicker">Full Schedule →</Link>
      </div>
      <Link href={`/episode/${ep.id}`}>
        <div className="card card-banner" style={{ borderLeft: "4px solid var(--red)" }}>
          <div className="kicker">
            SEASON {ep.seasonId} • EPISODE {ep.number} {season ? `— ${season.title}` : ""}
          </div>
          <h3 className="display" style={{ fontSize: 26, margin: "6px 0" }}>{ep.title}</h3>
          <p className="muted" style={{ fontSize: 14 }}>{ep.tagline}</p>
          <div className="row" style={{ marginTop: 12 }}>
            <span className="btn btn-primary btn-sm">Roll the Film</span>
            <span className="muted" style={{ fontSize: 12 }}>up to 1,350 XP on the table</span>
          </div>
        </div>
      </Link>

      {/* Today's slate */}
      <div className="section-head">
        <h2>Today&apos;s Slate</h2>
        <span className="pill pill-red">{slate.filter((s) => s.done).length}/{slate.length} DONE</span>
      </div>
      {slate.map((s) => (
        <Link key={s.label} href={s.href}>
          <div className="card row-between" style={{ padding: "12px 16px", opacity: s.done ? 0.55 : 1 }}>
            <span className="display" style={{ fontSize: 18 }}>{s.label}</span>
            <span className={`pill ${s.done ? "pill-green" : "pill-gold"}`}>
              {s.done ? "BANKED" : `+${formatXp(s.xp)} XP`}
            </span>
          </div>
        </Link>
      ))}

      {/* Compete strip */}
      <div className="section-head">
        <h2>The Arena</h2>
        <span className="muted" style={{ fontSize: 12 }}>Season resets in {periodDaysLeft()} days</span>
      </div>
      <div className="grid-2">
        <Link href="/tournament">
          <div className="card" style={{ textAlign: "center", marginBottom: 0 }}>
            <div className="display" style={{ fontSize: 18 }}>Weekly Tournament</div>
            <div className="muted" style={{ fontSize: 12 }}>5 challenges. Top 3 get rings.</div>
          </div>
        </Link>
        <Link href="/duels">
          <div className="card" style={{ textAlign: "center", marginBottom: 0 }}>
            <div className="display" style={{ fontSize: 18 }}>Sparring Duels</div>
            <div className="muted" style={{ fontSize: 12 }}>
              {state.duels.wins}W — {state.duels.losses}L vs the house AI.
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
