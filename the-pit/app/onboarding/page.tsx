"use client";

// Onboarding: hype welcome -> handle -> 5-question placement quiz ->
// animated rank reveal -> straight into the first unlocked episode.

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/lib/state";
import { placementQuiz } from "@/data/placement";

type Step = "welcome" | "handle" | "quiz" | "reveal";

export default function OnboardingPage() {
  const router = useRouter();
  const { onboard } = useGame();
  const [step, setStep] = useState<Step>("welcome");
  const [handle, setHandle] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const result = useMemo(() => {
    if (score >= 4)
      return {
        rank: "STARTER",
        line: "Most people start on the bench. Not you.",
        detail: "You know the basics and the Greeks. Seasons 1 and 2 are unlocked from day one — your campaign starts in Season 3 territory, with 3,000 XP in the bank.",
        firstEpisode: "s3e1",
      };
    if (score >= 2)
      return {
        rank: "PRACTICE SQUAD",
        line: "You've seen the field before. Time to earn the jersey.",
        detail: "You know what a call is — now we sharpen it. Season 1 is unlocked from day one, and you start with 1,000 XP.",
        firstEpisode: "s2e1",
      };
    return {
      rank: "BENCH WARMER",
      line: "Every GOAT started on the bench. Day one starts now.",
      detail: "Clean slate, full playbook ahead of you. Season 1, Episode 1 is queued up — your first XP is 90 seconds away.",
      firstEpisode: "s1e1",
    };
  }, [score]);

  const answerQuiz = (oi: number) => {
    if (picked !== null) return;
    setPicked(oi);
    const correct = oi === placementQuiz[qIndex].correctIndex;
    setTimeout(() => {
      const newScore = correct ? score + 1 : score;
      if (correct) setScore(newScore);
      setPicked(null);
      if (qIndex < placementQuiz.length - 1) {
        setQIndex(qIndex + 1);
      } else {
        onboard(handle, newScore);
        setStep("reveal");
      }
    }, 650);
  };

  if (step === "welcome") {
    return (
      <main className="page">
        <section className="hero" style={{ paddingTop: 40 }}>
          <div className="kicker" style={{ marginBottom: 10 }}>🎙️ LIVE FROM THE TUNNEL</div>
          <h1 style={{ fontSize: "clamp(40px, 11vw, 80px)" }}>
            THIS IS WHERE
            <br />
            <span className="pit" style={{ color: "var(--red)" }}>TRADERS</span> ARE MADE
          </h1>
          <p className="sub">
            You know stocks. You&apos;ve watched them run without you. Options are how directional conviction gets
            PAID — and nobody hands you that skill. You earn it. Rep by rep, play by play, season by season.
          </p>
          <p className="sub" style={{ marginTop: 0 }}>
            Five questions. That&apos;s the tryout. Let&apos;s see where you start.
          </p>
          <button className="btn btn-primary" onClick={() => setStep("handle")}>
            Start the Tryout
          </button>
        </section>
      </main>
    );
  }

  if (step === "handle") {
    return (
      <main className="page" style={{ maxWidth: 480 }}>
        <div className="card card-accent fade-up" style={{ marginTop: 40 }}>
          <div className="kicker">STEP 1 OF 2</div>
          <h2 className="display" style={{ fontSize: 28, margin: "8px 0" }}>
            What&apos;s on the back of your jersey?
          </h2>
          <p className="muted" style={{ marginBottom: 8 }}>
            This is the name the leaderboard learns to fear.
          </p>
          <input
            className="input"
            placeholder="e.g. DeltaDestroyer"
            value={handle}
            maxLength={24}
            onChange={(e) => setHandle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handle.trim() && setStep("quiz")}
            autoFocus
          />
          <button
            className="btn btn-primary btn-block"
            style={{ marginTop: 14 }}
            disabled={!handle.trim()}
            onClick={() => setStep("quiz")}
          >
            Lock It In
          </button>
        </div>
      </main>
    );
  }

  if (step === "quiz") {
    const q = placementQuiz[qIndex];
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <div style={{ marginTop: 30 }}>
          <div className="row-between" style={{ marginBottom: 10 }}>
            <span className="kicker">THE TRYOUT</span>
            <span className="pill">{qIndex + 1} / {placementQuiz.length}</span>
          </div>
          <div className="progress" style={{ marginBottom: 18 }}>
            <div style={{ width: `${((qIndex) / placementQuiz.length) * 100}%` }} />
          </div>
          <div className="card fade-up" key={q.id}>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>{q.question}</p>
            {q.options.map((opt, oi) => {
              let cls = "choice";
              if (picked !== null) {
                if (oi === q.correctIndex) cls += " correct";
                else if (oi === picked) cls += " wrong";
              }
              return (
                <button key={oi} className={cls} disabled={picked !== null} onClick={() => answerQuiz(oi)}>
                  {opt}
                </button>
              );
            })}
          </div>
          <p className="muted" style={{ fontSize: 13, textAlign: "center" }}>
            No pressure. Wrong answers just mean more reps — and reps are the whole point.
          </p>
        </div>
      </main>
    );
  }

  // reveal
  return (
    <main className="page" style={{ maxWidth: 520 }}>
      <div className="rankup-card fade-up" style={{ margin: "40px auto" }}>
        <div className="kicker">📡 SCOUTING REPORT IS IN</div>
        <p className="muted" style={{ margin: "14px 0 4px" }}>
          {handle || "Rookie"}, you&apos;re starting as a
        </p>
        <div className="big">{result.rank}</div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, textTransform: "uppercase" }}>
          {result.line}
        </p>
        <p className="muted" style={{ margin: "12px 0 22px", fontSize: 14 }}>{result.detail}</p>
        <button className="btn btn-primary btn-block" onClick={() => router.push(`/episode/${result.firstEpisode}`)}>
          ▶ Play Episode 1 Now
        </button>
        <button
          className="btn btn-block"
          style={{ marginTop: 10 }}
          onClick={() => router.push("/locker-room")}
        >
          Tour the Facility First
        </button>
      </div>
    </main>
  );
}
