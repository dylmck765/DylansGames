"use client";

// Single thesis thread: full breakdown plus comments.

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useGame } from "@/lib/state";
import { buildFeed } from "@/lib/community";
import { seedPosts } from "@/data/community-seed";

export default function ThesisPage() {
  const params = useParams<{ postId: string }>();
  const { state, ready, vote, addComment } = useGame();
  const [draft, setDraft] = useState("");

  const feed = useMemo(() => buildFeed(state), [state]);
  const post = feed.find((p) => p.id === params.postId);
  const seed = seedPosts.find((p) => p.id === params.postId);

  if (!ready) return <main className="page" />;
  if (!post) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <h2 className="display" style={{ fontSize: 26 }}>That thesis got deleted by the compliance desk.</h2>
        <Link href="/community" className="btn" style={{ marginTop: 14 }}>Back to The Pit</Link>
      </main>
    );
  }

  const myVote = state.votes[post.id] ?? 0;
  const userComments = state.comments.filter((c) => c.postId === post.id);

  const submitComment = () => {
    if (draft.trim().length < 3) return;
    addComment(post.id, draft.trim());
    setDraft("");
  };

  return (
    <main className="page" style={{ maxWidth: 620 }}>
      <Link href="/community" className="kicker" style={{ display: "inline-block", marginTop: 10 }}>
        ← BACK TO THE PIT
      </Link>

      <div className="card card-accent" style={{ marginTop: 10 }}>
        <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
          <span className={`pill ${post.direction === "bullish" ? "pill-green" : "pill-red"}`}>
            {post.ticker} {post.direction === "bullish" ? "▲ BULL" : "▼ BEAR"}
          </span>
          <span className="muted" style={{ fontSize: 12 }}>
            {post.author}{post.isMine ? " (you)" : ""} • {post.ageDays === 0 ? "today" : `${post.ageDays}d ago`}
          </span>
        </div>
        <h1 className="display" style={{ fontSize: 26, marginBottom: 12 }}>{post.title}</h1>

        <div className="kicker">CATALYST</div>
        <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{post.catalyst}</p>

        <div className="kicker">THE THESIS</div>
        <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{post.thesis}</p>

        <div className="kicker" style={{ color: "var(--gold)" }}>MAX LOSS — RISK DEFINED</div>
        <p style={{ margin: "4px 0 12px", fontSize: 14.5 }}>{post.maxLoss}</p>

        <div className="row">
          <button className={`btn btn-sm ${myVote === 1 ? "btn-primary" : ""}`} onClick={() => vote(post.id, 1)}>
            ▲ Boost ({post.score})
          </button>
          <button className="btn btn-sm" style={{ color: myVote === -1 ? "var(--red)" : undefined }}
            onClick={() => vote(post.id, -1)}>
            ▼ Fade
          </button>
        </div>
      </div>

      <div className="section-head"><h2>💬 The Booth ({post.commentCount})</h2></div>

      {seed?.comments.map((c) => (
        <div className="card" key={c.id} style={{ padding: "10px 14px" }}>
          <div className="kicker" style={{ fontSize: 11 }}>{c.author}</div>
          <p style={{ fontSize: 14, marginTop: 4 }}>{c.text}</p>
        </div>
      ))}
      {userComments.map((c) => (
        <div className="card" key={c.id} style={{ padding: "10px 14px", borderColor: "var(--red)" }}>
          <div className="kicker" style={{ fontSize: 11 }}>{state.profile.handle} (you)</div>
          <p style={{ fontSize: 14, marginTop: 4 }}>{c.text}</p>
        </div>
      ))}

      <div className="card">
        <label className="lbl">Add your take (+25 XP)</label>
        <textarea className="input" rows={2} placeholder="Coach it up or call it out — keep it sharp."
          value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button className="btn btn-primary btn-block" style={{ marginTop: 10 }}
          disabled={draft.trim().length < 3} onClick={submitComment}>
          Send It
        </button>
      </div>
    </main>
  );
}
