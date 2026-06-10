"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/lib/state";
import { supabase } from "@/lib/supabase";

export default function NewThesisPage() {
  const router = useRouter();
  const { state, ready, addPost } = useGame();
  const [ticker, setTicker] = useState("");
  const [direction, setDirection] = useState<"bullish" | "bearish">("bullish");
  const [title, setTitle] = useState("");
  const [catalyst, setCatalyst] = useState("");
  const [thesis, setThesis] = useState("");
  const [maxLoss, setMaxLoss] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!ready) return <main className="page" />;
  if (!state.profile.onboarded) {
    router.push("/onboarding");
    return <main className="page" />;
  }

  const valid =
    ticker.trim().length >= 1 &&
    title.trim().length >= 8 &&
    catalyst.trim().length >= 10 &&
    thesis.trim().length >= 20 &&
    maxLoss.trim().length >= 10;

  const submit = async () => {
    if (!valid || submitting) return;
    setSubmitting(true);

    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

    await supabase.from("posts").insert({
      id,
      handle: state.profile.handle,
      ticker: ticker.trim().toUpperCase().slice(0, 6),
      direction,
      title: title.trim(),
      catalyst: catalyst.trim(),
      thesis: thesis.trim(),
      max_loss: maxLoss.trim(),
      upvotes: 0,
    });

    // Award XP locally
    addPost({
      ticker: ticker.trim().toUpperCase().slice(0, 6),
      direction,
      title: title.trim(),
      catalyst: catalyst.trim(),
      thesis: thesis.trim(),
      maxLoss: maxLoss.trim(),
    });

    router.push("/community");
  };

  return (
    <main className="page" style={{ maxWidth: 560 }}>
      <div className="kicker" style={{ marginTop: 10 }}>FILE YOUR REPORT</div>
      <h1 className="display-italic" style={{ fontSize: 32, marginBottom: 6 }}>Post a Trade Thesis</h1>
      <p className="muted" style={{ fontSize: 13, marginBottom: 16 }}>
        Structure makes you sharp. Every field is part of the discipline. +50 XP for posting.
      </p>

      <div className="card">
        <div className="grid-2">
          <div>
            <label className="lbl">Ticker</label>
            <input className="input" placeholder="NVDA" value={ticker} maxLength={6}
              onChange={(e) => setTicker(e.target.value.toUpperCase())} />
          </div>
          <div>
            <label className="lbl">Direction</label>
            <div className="row">
              <button className="btn btn-sm" style={{ flex: 1,
                  borderColor: direction === "bullish" ? "var(--green)" : undefined,
                  color: direction === "bullish" ? "var(--green)" : undefined }}
                onClick={() => setDirection("bullish")}>▲ Bull</button>
              <button className="btn btn-sm" style={{ flex: 1,
                  borderColor: direction === "bearish" ? "var(--red)" : undefined,
                  color: direction === "bearish" ? "var(--red)" : undefined }}
                onClick={() => setDirection("bearish")}>▼ Bear</button>
            </div>
          </div>
        </div>

        <label className="lbl">Headline</label>
        <input className="input" placeholder="One punchy line. Sell the thesis." value={title} maxLength={90}
          onChange={(e) => setTitle(e.target.value)} />

        <label className="lbl">Catalyst — why NOW?</label>
        <textarea className="input" rows={2} placeholder="Earnings Thursday? Breakout over a key level?"
          value={catalyst} onChange={(e) => setCatalyst(e.target.value)} />

        <label className="lbl">The Thesis</label>
        <textarea className="input" rows={4} placeholder="Your directional case. Levels, timeframe, what proves you right."
          value={thesis} onChange={(e) => setThesis(e.target.value)} />

        <label className="lbl">Max Loss — define the risk</label>
        <textarea className="input" rows={2} placeholder='e.g. "Risking $250 — full premium on 1 contract."'
          value={maxLoss} onChange={(e) => setMaxLoss(e.target.value)} />

        <button className="btn btn-primary btn-block" style={{ marginTop: 16 }}
          disabled={!valid || submitting} onClick={submit}>
          {submitting ? "Posting..." : "Post It to The Pit"}
        </button>
        {!valid && (
          <p className="muted" style={{ fontSize: 12, marginTop: 8, textAlign: "center" }}>
            Fill every section — pros don&apos;t file half a scouting report.
          </p>
        )}
      </div>
    </main>
  );
}
