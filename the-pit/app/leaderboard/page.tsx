"use client";

import { useEffect, useState } from "react";
import { useGame } from "@/lib/state";
import { supabase, type LBRow } from "@/lib/supabase";
import { formatXp, periodDaysLeft } from "@/lib/util";
import CompeteNav from "@/components/CompeteNav";

type Board = "global" | "season" | "streak" | "community";

const BOARDS: { id: Board; label: string }[] = [
  { id: "global", label: "Global" },
  { id: "season", label: "Season" },
  { id: "streak", label: "Streaks" },
  { id: "community", label: "Community" },
];

interface DisplayRow {
  handle: string;
  value: number;
  isMe: boolean;
  sub?: string;
}

export default function LeaderboardPage() {
  const { state, ready } = useGame();
  const [board, setBoard] = useState<Board>("global");
  const [players, setPlayers] = useState<LBRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("leaderboard")
      .select("*")
      .order(board === "streak" ? "streak" : board === "season" ? "season_xp" : "xp", { ascending: false })
      .limit(100)
      .then(({ data }) => {
        setPlayers((data as LBRow[]) ?? []);
        setLoading(false);
      });
  }, [board]);

  if (!ready) return <main className="page" />;

  const me = state.profile.onboarded ? state.profile.handle : null;

  let rows: DisplayRow[] = [];
  let valueLabel = "XP";

  if (board === "global") {
    rows = players.map((p) => ({ handle: p.handle, value: p.xp, isMe: p.handle === me, sub: p.rank_name }));
    if (me && !rows.find((r) => r.isMe)) {
      rows.push({ handle: me, value: state.xp, isMe: true, sub: "—" });
      rows.sort((a, b) => b.value - a.value);
    }
    valueLabel = "XP";
  } else if (board === "season") {
    rows = players.map((p) => ({ handle: p.handle, value: p.season_xp, isMe: p.handle === me }));
    if (me && !rows.find((r) => r.isMe)) {
      rows.push({ handle: me, value: state.seasonXp, isMe: true });
      rows.sort((a, b) => b.value - a.value);
    }
    valueLabel = "Season XP";
  } else if (board === "streak") {
    rows = players.map((p) => ({ handle: p.handle, value: p.streak, isMe: p.handle === me }));
    if (me && !rows.find((r) => r.isMe)) {
      rows.push({ handle: me, value: state.streak.current, isMe: true });
      rows.sort((a, b) => b.value - a.value);
    }
    valueLabel = "Day Streak";
  } else {
    // Community board stays local — posts/votes live in localStorage
    rows = me ? [{ handle: me, value: state.posts.length * 25 + state.comments.length * 5, isMe: true }] : [];
    valueLabel = "Pit Points";
  }

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
          <a key={b.id} className={board === b.id ? "active" : ""} style={{ cursor: "pointer" }} onClick={() => setBoard(b.id)}>
            {b.label}
          </a>
        ))}
      </div>

      {board === "season" && (
        <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          Season rankings reset every 30 days. {periodDaysLeft()} days left in this one — climb now.
        </p>
      )}
      {board === "streak" && (
        <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          Longest active daily streaks. Miss a day, lose the flame.
        </p>
      )}
      {board === "community" && (
        <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          Points earned from posting theses and commenting in the feed.
        </p>
      )}

      <div className="card" style={{ padding: "6px 10px" }}>
        {loading ? (
          <p className="muted" style={{ textAlign: "center", padding: "20px 0" }}>Loading the board...</p>
        ) : rows.length === 0 ? (
          <p className="muted" style={{ textAlign: "center", padding: "20px 0" }}>
            No players yet — you could be #1.
          </p>
        ) : (
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
                    {r.sub && <span className="muted" style={{ fontSize: 11, marginLeft: 6 }}>{r.sub}</span>}
                  </td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>
                    {formatXp(r.value)}
                  </td>
                </tr>
              ))}
              {meBelowCut && (
                <tr className="me">
                  <td className="lb-rank">{myIndex + 1}</td>
                  <td>{me}<span className="pill pill-red" style={{ marginLeft: 8 }}>YOU</span></td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>
                    {formatXp(rows[myIndex].value)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
