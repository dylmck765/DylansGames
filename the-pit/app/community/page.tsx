"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGame } from "@/lib/state";
import { supabase, type PostRow } from "@/lib/supabase";

type Sort = "top" | "new";

export default function CommunityPage() {
  const { state, ready, addComment } = useGame();
  const [sort, setSort] = useState<Sort>("top");
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState<Record<string, 1 | -1>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (!ready) return;
    try {
      const saved = JSON.parse(localStorage.getItem("thepit_votes") || "{}");
      setVotes(saved);
    } catch { /* ignore */ }

    supabase.from("posts").select("*").then(({ data }) => {
      setPosts((data as PostRow[]) ?? []);
      setLoading(false);
    });
  }, [ready]);

  const handleVote = (postId: string, dir: 1 | -1) => {
    const current = votes[postId] ?? 0;
    const delta = current === dir ? -dir : dir;
    const newVote = current === dir ? 0 : dir;

    setPosts((prev) => prev.map((p) => p.id === postId ? { ...p, upvotes: p.upvotes + delta } : p));
    setVotes((prev) => {
      const updated = { ...prev };
      if (newVote === 0) delete updated[postId];
      else updated[postId] = newVote as 1 | -1;
      try { localStorage.setItem("thepit_votes", JSON.stringify(updated)); } catch { /* ignore */ }
      return updated;
    });
    supabase.from("posts").update({ upvotes: posts.find(p => p.id === postId)!.upvotes + delta })
      .eq("id", postId).then(() => {});
  };

  const submitComment = (postId: string) => {
    if (draft.trim().length < 3) return;
    addComment(postId, draft.trim());
    setDraft("");
  };

  if (!ready) return <main className="page" />;

  const ageDays = (createdAt: string) =>
    Math.max(0, Math.floor((Date.now() - new Date(createdAt).getTime()) / 86_400_000));

  const top = [...posts]
    .filter((p) => new Date(p.created_at) > new Date(Date.now() - 7 * 86400000))
    .sort((a, b) => b.upvotes - a.upvotes)[0] ?? null;

  const sorted = [...posts].sort((a, b) =>
    sort === "top" ? b.upvotes - a.upvotes : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const activePost = selected ? posts.find((p) => p.id === selected) ?? null : null;

  // Post detail view
  if (activePost) {
    const isMe = activePost.handle === state.profile.handle;
    const days = ageDays(activePost.created_at);
    const myVote = votes[activePost.id] ?? 0;
    const myComments = state.comments.filter((c) => c.postId === activePost.id);

    return (
      <main className="page" style={{ maxWidth: 620 }}>
        <a className="kicker" style={{ display: "inline-block", marginTop: 10, cursor: "pointer" }}
          onClick={() => { setSelected(null); setDraft(""); }}>
          ← BACK TO THE PIT
        </a>

        <div className="card card-accent" style={{ marginTop: 10 }}>
          <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            <span className={`pill ${activePost.direction === "bullish" ? "pill-green" : "pill-red"}`}>
              {activePost.ticker} {activePost.direction === "bullish" ? "▲ BULL" : "▼ BEAR"}
            </span>
            <span className="muted" style={{ fontSize: 12 }}>
              {activePost.handle}{isMe ? " (you)" : ""} • {days === 0 ? "today" : `${days}d ago`}
            </span>
          </div>
          <h1 className="display" style={{ fontSize: 26, marginBottom: 12 }}>{activePost.title}</h1>

          <div className="kicker">CATALYST</div>
          <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{activePost.catalyst}</p>

          <div className="kicker">THE THESIS</div>
          <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{activePost.thesis}</p>

          <div className="kicker" style={{ color: "var(--gold)" }}>MAX LOSS — RISK DEFINED</div>
          <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{activePost.max_loss}</p>

          <div className="row">
            <button className={`btn btn-sm ${myVote === 1 ? "btn-primary" : ""}`}
              onClick={() => handleVote(activePost.id, 1)}>▲ Boost ({activePost.upvotes})</button>
            <button className="btn btn-sm" style={{ color: myVote === -1 ? "var(--red)" : undefined }}
              onClick={() => handleVote(activePost.id, -1)}>▼ Fade</button>
          </div>
        </div>

        {myComments.length > 0 && (
          <>
            <div className="section-head"><h2>💬 Your Takes</h2></div>
            {myComments.map((c) => (
              <div className="card" key={c.id} style={{ padding: "10px 14px", borderColor: "var(--red)" }}>
                <div className="kicker" style={{ fontSize: 11 }}>{state.profile.handle} (you)</div>
                <p style={{ fontSize: 14, marginTop: 4 }}>{c.text}</p>
              </div>
            ))}
          </>
        )}

        <div className="card" style={{ marginTop: 12 }}>
          <label className="lbl">Add your take (+25 XP)</label>
          <textarea className="input" rows={2} placeholder="Coach it up or call it out — keep it sharp."
            value={draft} onChange={(e) => setDraft(e.target.value)} />
          <button className="btn btn-primary btn-block" style={{ marginTop: 10 }}
            disabled={draft.trim().length < 3} onClick={() => submitComment(activePost.id)}>Send It</button>
        </div>
      </main>
    );
  }

  // Feed view
  return (
    <main className="page">
      <div className="row-between" style={{ marginTop: 10 }}>
        <div>
          <div className="kicker">THE PIT — COMMUNITY</div>
          <h1 className="display-italic" style={{ fontSize: 34 }}>Trade Theses</h1>
        </div>
        {state.profile.onboarded && (
          <Link href="/community/new" className="btn btn-primary btn-sm">+ Post Yours</Link>
        )}
      </div>

      {top && (
        <div className="card card-banner" style={{ borderColor: "var(--gold)", marginTop: 12 }}>
          <div className="kicker" style={{ color: "var(--gold)" }}>🧠 ANALYST OF THE WEEK — LEADING THESIS</div>
          <p className="display" style={{ fontSize: 20, margin: "6px 0 2px", cursor: "pointer" }}
            onClick={() => setSelected(top.id)}>{top.title}</p>
          <p className="muted" style={{ fontSize: 13 }}>
            {top.handle} • {top.ticker} {top.direction === "bullish" ? "🟢" : "🔴"} • {top.upvotes} votes
          </p>
        </div>
      )}

      <div className="subnav" style={{ marginTop: 14 }}>
        <a className={sort === "top" ? "active" : ""} style={{ cursor: "pointer" }} onClick={() => setSort("top")}>🔥 Top</a>
        <a className={sort === "new" ? "active" : ""} style={{ cursor: "pointer" }} onClick={() => setSort("new")}>🕐 New</a>
      </div>

      {loading ? (
        <p className="muted" style={{ textAlign: "center", padding: "40px 0" }}>Loading the feed...</p>
      ) : sorted.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <p className="display" style={{ fontSize: 22 }}>Nothing filed yet.</p>
          <p className="muted" style={{ marginTop: 6 }}>Be the first to post a thesis.</p>
          {state.profile.onboarded && (
            <Link href="/community/new" className="btn btn-primary" style={{ marginTop: 14 }}>+ Post Yours</Link>
          )}
        </div>
      ) : (
        sorted.map((p) => {
          const myVote = votes[p.id] ?? 0;
          const days = ageDays(p.created_at);
          const isMe = p.handle === state.profile.handle;
          return (
            <div className="card" key={p.id} style={{ padding: "12px 14px" }}>
              <div className="row" style={{ alignItems: "stretch" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 40 }}>
                  <button className={`vote-btn ${myVote === 1 ? "on-up" : ""}`} onClick={() => handleVote(p.id, 1)}>▲</button>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>{p.upvotes}</span>
                  <button className={`vote-btn ${myVote === -1 ? "on-down" : ""}`} onClick={() => handleVote(p.id, -1)}>▼</button>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingLeft: 10, cursor: "pointer" }}
                  onClick={() => setSelected(p.id)}>
                  <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                    <span className={`pill ${p.direction === "bullish" ? "pill-green" : "pill-red"}`}>
                      {p.ticker} {p.direction === "bullish" ? "▲ BULL" : "▼ BEAR"}
                    </span>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {p.handle}{isMe ? " (you)" : ""} • {days === 0 ? "today" : `${days}d ago`}
                    </span>
                  </div>
                  <p className="display" style={{ fontSize: 18, lineHeight: 1.15 }}>{p.title}</p>
                  <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>
                    {p.catalyst.length > 80 ? p.catalyst.slice(0, 80) + "…" : p.catalyst}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </main>
  );
}
