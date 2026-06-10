"use client";

// Landing page: hero, how it works, live leaderboard preview.

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGame } from "@/lib/state";
import { supabase, type LBRow } from "@/lib/supabase";
import { formatXp } from "@/lib/util";

export default function LandingPage() {
  const { state, ready } = useGame();
  const [top5, setTop5] = useState<LBRow[]>([]);
  useEffect(() => {
    supabase.from("leaderboard").select("handle,xp,rank_name").order("xp", { ascending: false }).limit(5)
      .then(({ data }) => setTop5((data as LBRow[]) ?? []));
  }, []);

  return (
    <main className="page page-wide">
      <section className="hero">
        <div className="kicker" style={{ marginBottom: 10 }}>FREE • NO REAL MONEY • ALL GAME</div>
        <h1>
          Welcome to
          <br />
          The <span className="pit">Pit</span>
        </h1>
        <p className="sub">
          The training ground where stock investors become confident directional options traders. Six seasons.
          Real playbooks. Daily reps. A leaderboard with your name on it — eventually.
        </p>
        <div className="row" style={{ justifyContent: "center", flexWrap: "wrap" }}>
          {ready && state.profile.onboarded ? (
            <Link href="/locker-room" className="btn btn-primary">
              Re-enter The Pit
            </Link>
          ) : (
            <Link href="/onboarding" className="btn btn-primary">
              Step Into The Pit
            </Link>
          )}
          <a href="#how" className="btn">How It Works</a>
        </div>
      </section>

      <div className="stat-banner">
        <div className="item"><div className="n">6</div><div className="l">Seasons</div></div>
        <div className="item"><div className="n">60</div><div className="l">Episodes</div></div>
        <div className="item"><div className="n">26</div><div className="l">Badges</div></div>
        <div className="item"><div className="n">$0</div><div className="l">Real Money</div></div>
      </div>

      <section id="how">
        <div className="section-head"><h2>How It Works</h2></div>
        <div className="how-grid">
          <div className="card card-accent">
            <div className="kicker">01 — TRAIN</div>
            <h3 className="display" style={{ fontSize: 24, margin: "6px 0" }}>Watch the Film</h3>
            <p className="muted">
              Six seasons of game-film breakdowns. Calls, puts, the Greeks, earnings plays, sizing — taught like
              an analyst desk, not a lecture hall.
            </p>
          </div>
          <div className="card card-accent">
            <div className="kicker">02 — COMPETE</div>
            <h3 className="display" style={{ fontSize: 24, margin: "6px 0" }}>Run the Plays</h3>
            <p className="muted">
              Quizzes, paper-trade sims, and scenario calls — all worth XP. Daily Blitz keeps your streak alive.
              The daily Boss Challenge pays up to 2,000 XP.
            </p>
          </div>
          <div className="card card-accent">
            <div className="kicker">03 — CLIMB</div>
            <h3 className="display" style={{ fontSize: 24, margin: "6px 0" }}>Take the Crown</h3>
            <p className="muted">
              Climb from Bench Warmer to GOAT. Duel other traders head-to-head. Win weekly tournaments. Hang your
              banner in The Pit.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>The Board, Right Now</h2>
          <span className="pill pill-red">LIVE</span>
        </div>
        <div className="card">
          <table className="lb-table">
            <thead>
              <tr><th>#</th><th>Trader</th><th style={{ textAlign: "right" }}>XP</th></tr>
            </thead>
            <tbody>
              {top5.length === 0 ? (
                <tr>
                  <td colSpan={3} className="muted" style={{ textAlign: "center", padding: "14px 0", fontStyle: "italic" }}>
                    Be the first name on the board.
                  </td>
                </tr>
              ) : (
                top5.map((b, i) => (
                  <tr key={b.handle}>
                    <td className={`lb-rank ${i < 3 ? "top" : ""}`}>{i + 1}</td>
                    <td>{b.handle}</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                      {formatXp(b.xp)}
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td className="lb-rank">?</td>
                <td className="muted" style={{ fontStyle: "italic" }}>Your name goes here</td>
                <td style={{ textAlign: "right" }} className="muted">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "30px 0 10px" }} className="muted">
        <p style={{ fontSize: 12, maxWidth: 560, margin: "0 auto" }}>
          THE PIT is an education and simulation platform. Nothing here is financial advice. All trading is paper
          trading. Options involve real risk — that&apos;s why we practice in the gym first.
        </p>
      </footer>
    </main>
  );
}
