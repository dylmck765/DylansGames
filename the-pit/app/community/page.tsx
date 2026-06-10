"use client";

// The Pit community feed: trade theses, votes, Analyst of the Week.

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useGame } from "@/lib/state";
import { buildFeed, weeklyTop } from "@/lib/community";

type Sort = "top" | "new";

export default function CommunityPage() {
  const { state, ready, vote, grantBadge } = useGame();
  const [sort, setSort] = useState<Sort>("top");

  const feed = useMemo(() => buildFeed(state), [state]);
  const top = useMemo(() => weeklyTop(feed), [feed]);

  // Analyst of the Week: if the user's post tops the weekly board, hang the banner.
  useEffect(() => {
    if (ready && top?.isMine && !state.badges.includes("analyst-of-week")) {
      grantBadge("analyst-of-week");
    }
  }, [ready, top, state.badges, grantBadge]);

  if (!ready) return <main className="page" />;

  const sorted = [...feed].sort((a, b) =>
    sort === "top" ? b.score - a.score : a.ageDays - b.ageDays
  );

  return (
    <main className="page">
      <div className="row-between" style={{ marginTop: 10 }}>
        <div>
          <div className="kicker">THE PIT — COMMUNITY</div>
          <h1 className="display-italic" style={{ fontSize: 34 }}>Trade Theses</h1>
        </div>
        <Link href="/community/new" className="btn btn-primary btn-sm">+ Post Yours</Link>
      </div>

      {top && (
        <div className="card card-banner" style={{ borderColor: "var(--gold)", marginTop: 12 }}>
          <div className="kicker" style={{ color: "var(--gold)" }}>🧠 ANALYST OF THE WEEK — LEADING THESIS</div>
          <Link href={`/community/${top.id}`}>
            <p className="display" style={{ fontSize: 20, margin: "6px 0 2px" }}>{top.title}</p>
            <p className="muted" style={{ fontSize: 13 }}>
              {top.author} • {top.ticker} {top.direction === "bullish" ? "🟢" : "🔴"} • {top.score} votes
              {top.isMine && " • THAT'S YOU. Badge secured."}
            </p>
          </Link>
        </div>
      )}

      <div className="subnav" style={{ marginTop: 14 }}>
        <a className={sort === "top" ? "active" : ""} style={{ cursor: "pointer" }} onClick={() => setSort("top")}>
          🔥 Top
        </a>
        <a className={sort === "new" ? "active" : ""} style={{ cursor: "pointer" }} onClick={() => setSort("new")}>
          🕐 New
        </a>
      </div>

      {sorted.map((p) => {
        const myVote = state.votes[p.id] ?? 0;
        return (
          <div className="card" key={p.id} style={{ padding: "12px 14px" }}>
            <div className="row" style={{ alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 40 }}>
                <button className={`vote-btn ${myVote === 1 ? "on-up" : ""}`} onClick={() => vote(p.id, 1)}>▲</button>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>{p.score}</span>
                <button className={`vote-btn ${myVote === -1 ? "on-down" : ""}`} onClick={() => vote(p.id, -1)}>▼</button>
              </div>
              <Link href={`/community/${p.id}`} style={{ flex: 1, minWidth: 0 }}>
                <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                  <span className={`pill ${p.direction === "bullish" ? "pill-green" : "pill-red"}`}>
                    {p.ticker} {p.direction === "bullish" ? "▲ BULL" : "▼ BEAR"}
                  </span>
                  <span className="muted" style={{ fontSize: 12 }}>
                    {p.author}{p.isMine ? " (you)" : ""} • {p.ageDays === 0 ? "today" : `${p.ageDays}d ago`}
                  </span>
                </div>
                <p className="display" style={{ fontSize: 18, lineHeight: 1.15 }}>{p.title}</p>
                <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>
                  💬 {p.commentCount} comments • Max loss: {p.maxLoss.length > 60 ? p.maxLoss.slice(0, 60) + "…" : p.maxLoss}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
}
