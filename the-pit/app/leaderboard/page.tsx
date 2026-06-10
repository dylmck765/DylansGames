"use client";

// Leaderboards: Global top 100, 30-day Season rankings, Streaks, Community.

import { useState } from "react";
import { useGame } from "@/lib/state";
import { getBots } from "@/lib/bots";
import { formatXp, periodDaysLeft } from "@/lib/util";
import CompeteNav from "@/components/CompeteNav";

type Board = "global" | "season" | "streak" | "community";

const BOARDS: { id: Board; label: string }[] = [
  { id: "global", label: "Global" },
  { id: "season", label: "Season" },
  { id: "streak", label: "Streaks" },
  { id: "community", label: "Community" },
];

export default function LeaderboardPage() {
  const { state, ready } = useGame();
  const [board, setBoard] = useState<Board>("global");

  if (!ready) return <main className="page" />;

  const bots = getBots();
  const me = state.profile.onboarded ? state.profile.handle : null;

  let rows: { handle: string; value: number; isMe: boolean }[] = [];
  let valueLabel = "XP";

  if (board === "global") {
    rows = bots.map((b) => ({ handle: b.handle, value: b.xp, isMe: false }));
    if (me) rows.push({ handle: me, value: state.xp, isMe: true });
    valueLabel = "XP";
  } else if (board === "season") {
    rows = bots.map((b) => ({ handle: b.handle, value: b.seasonXp, isMe: false }));
    if (me) rows.push({ handle: me, value: state.seasonXp, isMe: true });
    valueLabel = "Season XP";
  } else if (board === "streak") {
    rows = bots.map((b) => ({ handle: b.handle, value: b.streak, isMe: false }));
    if (me) rows.push({ handle: me, value: state.streak.current, isMe: true });
    valueLabel = "Day Streak";
  } else {
    rows = bots.map((b) => ({ handle: b.handle, value: b.communityScore, isMe: false }));
    if (me) {
      const myScore = state.posts.length * 25 + state.comments.length * 5;
      rows.push({ handle: me, value: myScore, isMe: true });
    }
    valueLabel = "Pit Points";
  }

  rows.sort((a, b) => b.value - a.value);
  const myIndex = rows.findIndex((r) => r.isMe);
  const top100 = rows.slice(0, 100);
  const meBelowCut = myIndex >= 100;

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>THE STANDINGS</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>Leaderboards</h1>
      <CompeteNav />

      <div className="subnav">
        {BOARDS.map((b) => (
          <a
            key={b.id}
            className={board === b.id ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => setBoard(b.id)}
          >
            {b.label}
          </a>
        ))}
      </div>

      {board === "season" && (
        <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          ⏳ Season rankings reset every 30 days. {periodDaysLeft()} days left in this one — climb now.
        </p>
      )}
      {board === "streak" && (
        <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          🔥 Longest active daily streaks. Miss a day, lose the flame.
        </p>
      )}

      <div className="card" style={{ padding: "6px 10px" }}>
        <table className="lb-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Trader</th>
              <th style={{ textAlign: "right" }}>{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {top100.map((r, i) => (
              <tr key={r.handle + i} className={r.isMe ? "me" : ""}>
                <td className={`lb-rank ${i < 3 ? "top" : ""}`}>
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                </td>
                <td>
                  {r.handle}
                  {r.isMe && <span className="pill pill-red" style={{ marginLeft: 8 }}>YOU</span>}
                </td>
                <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>
                  {formatXp(r.value)}
                </td>
              </tr>
            ))}
            {meBelowCut && (
              <tr className="me">
                <td className="lb-rank">{myIndex + 1}</td>
                <td>
                  {me}
                  <span className="pill pill-red" style={{ marginLeft: 8 }}>YOU</span>
                </td>
                <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>
                  {formatXp(rows[myIndex].value)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
