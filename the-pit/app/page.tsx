"use client";

// Landing page: hero, how it works, social proof, leaderboard preview, waitlist.

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGame } from "@/lib/state";
import { getBots, type Bot } from "@/lib/bots";
import { formatXp } from "@/lib/util";

const TESTIMONIALS = [
  {
    handle: "@ThetaThief",
    text: "I knew stocks. I did NOT know options. Six seasons later I'm reading chains like box scores.",
  },
  {
    handle: "@BreakoutBecky",
    text: "The streak system got me. 41 days straight and I finally understand why my calls used to bleed out.",
  },
  {
    handle: "@FadeTheOpen",
    text: "Lost a duel to a guy named PutsOnGritty and immediately studied theta for two hours. This place works.",
  },
];

export default function LandingPage() {
  const { state, ready } = useGame();
  const [email, setEmail] = useState("");
  const [signed, setSigned] = useState(false);
  const [err, setErr] = useState("");
  // Bot XP carries a daily jitter; computing it during hydration would
  // mismatch the build-day values baked into the prerendered HTML.
  const [top5, setTop5] = useState<Bot[]>([]);
  useEffect(() => setTop5(getBots().slice(0, 5)), []);

  const joinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr("That email is a fumble. Try again.");
      return;
    }
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSigned(true);
    } catch {
      setSigned(true); // local-first: never block the user on a failed write
    }
  };

  return (
    <main className="page page-wide">
      <section className="hero">
        <div className="kicker" style={{ marginBottom: 10 }}>FREE • NO REAL MONEY • ALL GAME</div>
        <h1>
          WELCOME TO
          <br />
          THE <span className="pit">PIT</span>
        </h1>
        <p className="sub">
          The training ground where stock investors become confident directional options traders. Six seasons.
          Real playbooks. Daily reps. A leaderboard with your name on it — eventually.
        </p>
        <div className="row" style={{ justifyContent: "center", flexWrap: "wrap" }}>
          {ready && state.profile.onboarded ? (
            <Link href="/locker-room" className="btn btn-primary">
              ▶ Re-enter The Pit
            </Link>
          ) : (
            <Link href="/onboarding" className="btn btn-primary">
              ▶ Step Into The Pit
            </Link>
          )}
          <a href="#how" className="btn">How It Works</a>
        </div>
      </section>

      <div className="stat-banner">
        <div className="item"><div className="n">6</div><div className="l">Seasons</div></div>
        <div className="item"><div className="n">60</div><div className="l">Episodes</div></div>
        <div className="item"><div className="n">26</div><div className="l">Badges</div></div>
        <div className="item"><div className="n">∞</div><div className="l">Trash Talk</div></div>
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
              Friday Boss Challenges pay 2,000 XP.
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
              {top5.map((b, i) => (
                <tr key={b.id}>
                  <td className={`lb-rank ${i < 3 ? "top" : ""}`}>{i + 1}</td>
                  <td>{b.handle}</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    {formatXp(b.xp)}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="lb-rank">?</td>
                <td className="muted" style={{ fontStyle: "italic" }}>Your name goes here</td>
                <td style={{ textAlign: "right" }} className="muted">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="section-head"><h2>From the Locker Room</h2></div>
        <div className="how-grid">
          {TESTIMONIALS.map((t) => (
            <div className="card" key={t.handle}>
              <p style={{ fontSize: 14 }}>&ldquo;{t.text}&rdquo;</p>
              <p className="kicker" style={{ marginTop: 10 }}>{t.handle}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head"><h2>Get the Pit Report</h2></div>
        <div className="card card-banner">
          <p className="muted" style={{ marginBottom: 12 }}>
            Weekly digest: the best community thesis, the toughest scenario, and one play broken down film-style.
            Join the waitlist — first issue drops at kickoff.
          </p>
          {signed ? (
            <p className="green" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase" }}>
              ✅ You&apos;re on the list. Welcome to the program.
            </p>
          ) : (
            <form onSubmit={joinWaitlist} className="row" style={{ flexWrap: "wrap" }}>
              <input
                className="input"
                style={{ flex: 1, minWidth: 220 }}
                type="email"
                placeholder="you@tradingdesk.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Join the Waitlist</button>
              {err && <span className="red" style={{ fontSize: 13 }}>{err}</span>}
            </form>
          )}
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
