"use client";

// The Pit Report: the 4-week email sequence, viewable and copyable in-app.

import { useState } from "react";

const ISSUES = [
  {
    week: 1,
    subject: "🏟️ You made the roster. Here's your playbook.",
    body: `LISTEN UP, ROOKIE.

You signed up because stocks started feeling like watching the game from the parking lot. Options are the field pass. And nobody — NOBODY — walks onto this field without training camp.

Here's your Week 1 game plan:

▶ PLAY EPISODE 1. "Welcome to The Pit" — what an option actually is, in plain English, in 3 minutes. No textbook. Just film.

▶ START YOUR STREAK. Log in tomorrow and your daily bonus DOUBLES. Day 1 pays 50 XP. Day 6 pays 1,600. The math rewards the obsessed.

▶ TAKE THE DAILY BLITZ. One question. Sixty seconds. The shot clock is real and so is the XP.

This week's stat that matters: traders who complete 3 episodes in week one are the ones still here in season six. Be the stat.

See you in The Pit.

— THE DESK`,
  },
  {
    week: 2,
    subject: "📉 You can be RIGHT and still LOSE. Here's how.",
    body: `QUICK FILM SESSION.

A trader calls earnings perfectly. Stock gaps up 6%. Their call options open... DOWN 30%.

Sound like a glitch? It's not. It's the IV crush — the single most expensive lesson in options, and most people pay full retail for it with real money.

In The Pit, you pay for it with paper. That's the whole business model of being smart.

This week's plays:

▶ SEASON 2 IS CALLING. Delta, theta, IV — the Greeks are just stats on the back of the card. Learn to read them like a box score.

▶ FRIDAY = BOSS CHALLENGE. Four rounds. 2,000 XP on the table. Most rookies walk out with 1,000. Champions take the sweep.

▶ CHECK THE BOARD. Someone is sitting on top of the leaderboard. That seat isn't reserved.

Don't you dare break your streak now.

— THE DESK`,
  },
  {
    week: 3,
    subject: "⚔️ You've been called out.",
    body: `IT'S PERSONAL NOW.

The duel floor is open: same 5 questions, 15 seconds each, most correct wins. Ties go to the fastest gun. Winner takes 750 XP and eternal bragging rights.

This week's plays:

▶ FIGHT YOUR FIRST DUEL. Win it and the "Duelist" badge is yours. Lose it and... well, the film from a loss is free. Study it.

▶ POST A TRADE THESIS. Ticker. Direction. Catalyst. Max loss. The community votes, and the top thesis of the week takes "Analyst of the Week." Structure makes you sharp — half a scouting report helps nobody.

▶ TOURNAMENT CHECK. Five challenges dropped Monday. They close Sunday night. Top 3 finishers medal. You can't podium from the couch.

One more thing: risk discipline isn't a vibe, it's a number. If you haven't hit Season 4 yet ("Defense Wins Championships"), that's where accounts learn to survive.

— THE DESK`,
  },
  {
    week: 4,
    subject: "🐐 The gap between you and the GOAT rank is just reps.",
    body: `THE MONTH ONE REPORT CARD.

Thirty days ago you couldn't tell a strike price from a strikeout. Look at you now.

Here's what the film says about month two:

▶ EARNINGS SEASON (SEASON 5) IS THE PLAYOFFS. Expected moves, the IV run-up, the crush. This is where directional traders either get paid or get schooled. Get schooled here first — it's cheaper.

▶ BUILD YOUR SYSTEM (SEASON 6). Hot streaks fade. Systems compound. The final season turns everything you've learned into a written, repeatable, personal playbook. That's the diploma.

▶ THE 30-DAY SEASON BOARD JUST RESET. Everyone's back to zero. Fresh season, fresh race, and you've got a month of training the new blood doesn't.

The Pit doesn't graduate spectators. Finish the program.

— THE DESK`,
  },
];

export default function PitReportPage() {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = async (week: number, subject: string, body: string) => {
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
      setCopied(week);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard blocked — the text is still selectable on screen.
    }
  };

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>MARKETING DESK</div>
      <h1 className="display-italic" style={{ fontSize: 34 }}>The Pit Report</h1>
      <p className="muted" style={{ margin: "6px 0 18px", fontSize: 14 }}>
        The 4-week welcome sequence. Copy any issue straight into your email tool. Also lives in{" "}
        <code>marketing/pit-report-emails.md</code>.
      </p>

      {ISSUES.map((issue) => (
        <div className="card card-accent" key={issue.week}>
          <div className="row-between" style={{ marginBottom: 8 }}>
            <span className="kicker">WEEK {issue.week}</span>
            <button className="btn btn-sm" onClick={() => copy(issue.week, issue.subject, issue.body)}>
              {copied === issue.week ? "✅ Copied" : "📋 Copy"}
            </button>
          </div>
          <h3 className="display" style={{ fontSize: 20, marginBottom: 10 }}>{issue.subject}</h3>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "var(--font-body)",
              fontSize: 13.5,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            {issue.body}
          </pre>
        </div>
      ))}
    </main>
  );
}
