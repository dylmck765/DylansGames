"use client";

// Sparring duels vs the house AI: same 5 questions, most correct wins,
// total time breaks ties. Opponents are clearly labeled as bots — live
// player-vs-player isn't possible on static hosting.

import { useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "@/lib/state";
import { duelPool } from "@/data/duels";
import { duelOpponent, simulateDuelRun, type Bot } from "@/lib/bots";
import { pickManyForKey, formatXp } from "@/lib/util";
import CompeteNav from "@/components/CompeteNav";

const QUESTION_SECONDS = 15;

type Phase = "lobby" | "playing" | "result";

export default function DuelsPage() {
  const { state, ready, recordDuel } = useGame();
  const [phase, setPhase] = useState<Phase>("lobby");
  const [duelNo, setDuelNo] = useState(0);
  const [opponent, setOpponent] = useState<Bot | null>(null);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
  const [myCorrect, setMyCorrect] = useState(0);
  const [myTimeMs, setMyTimeMs] = useState(0);
  const qStartRef = useRef(0);
  const recordedRef = useRef(false);

  const questions = useMemo(
    () => pickManyForKey(duelPool, `duel-${duelNo}`, "q", 5),
    [duelNo]
  );

  const oppRun = useMemo(
    () => (opponent ? simulateDuelRun(opponent, duelNo) : null),
    [opponent, duelNo]
  );

  // Per-question countdown.
  useEffect(() => {
    if (phase !== "playing" || picked !== null) return;
    if (secondsLeft <= 0) {
      // Timeout counts as a miss using the full clock.
      setPicked(-1);
      setMyTimeMs((t) => t + QUESTION_SECONDS * 1000);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft, picked]);

  const startDuel = () => {
    const n = state.duels.played + 1;
    setDuelNo(n);
    setOpponent(duelOpponent(n));
    setQIndex(0);
    setPicked(null);
    setMyCorrect(0);
    setMyTimeMs(0);
    setSecondsLeft(QUESTION_SECONDS);
    recordedRef.current = false;
    qStartRef.current = Date.now();
    setPhase("playing");
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setMyTimeMs((t) => t + (Date.now() - qStartRef.current));
    if (i === questions[qIndex].correctIndex) setMyCorrect((c) => c + 1);
  };

  const nextQuestion = () => {
    if (qIndex >= questions.length - 1) {
      setPhase("result");
      return;
    }
    setQIndex((q) => q + 1);
    setPicked(null);
    setSecondsLeft(QUESTION_SECONDS);
    qStartRef.current = Date.now();
  };

  if (!ready) return <main className="page" />;

  // --- result phase ---
  if (phase === "result" && opponent && oppRun) {
    const won = myCorrect > oppRun.correct || (myCorrect === oppRun.correct && myTimeMs <= oppRun.timeMs);
    if (!recordedRef.current) {
      recordedRef.current = true;
      // Defer so the state update doesn't fire mid-render.
      setTimeout(() => recordDuel(won), 0);
    }
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <CompeteNav />
        <div className="rankup-card" style={{ margin: "20px auto", borderColor: won ? "var(--green)" : "var(--red)" }}>
          <div className="kicker" style={{ color: won ? "var(--green)" : "var(--red)" }}>
            {won ? "VICTORY" : "DEFEAT"}
          </div>
          <div className="big" style={{ fontSize: 36, color: won ? "var(--green)" : "var(--red)", textShadow: "none" }}>
            {myCorrect} — {oppRun.correct}
          </div>
          <p className="muted" style={{ fontSize: 13 }}>
            vs {opponent.handle} (AI) • your time {(myTimeMs / 1000).toFixed(1)}s, theirs {(oppRun.timeMs / 1000).toFixed(1)}s
          </p>
          <p style={{ margin: "12px 0 18px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase" }}>
            {won
              ? `+${formatXp(750)} XP. ${opponent.handle} will be hearing about this one.`
              : "No XP. But the film from this loss is free — study it."}
          </p>
          <button className="btn btn-primary btn-block" onClick={startDuel}>Run It Back</button>
          <button className="btn btn-block" style={{ marginTop: 8 }} onClick={() => setPhase("lobby")}>
            Back to the Lobby
          </button>
        </div>
      </main>
    );
  }

  // --- playing phase ---
  if (phase === "playing" && opponent) {
    const q = questions[qIndex];
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <div className="row-between" style={{ margin: "14px 0" }}>
          <span className="pill pill-red">YOU: {myCorrect}</span>
          <span className="display" style={{ fontSize: 18 }}>VS {opponent.handle.toUpperCase()} <span className="pill" style={{ fontSize: 10 }}>AI</span></span>
          <span className={`timer-ring ${secondsLeft <= 5 && picked === null ? "danger" : ""}`} style={{ fontSize: 24 }}>
            :{String(Math.max(0, secondsLeft)).padStart(2, "0")}
          </span>
        </div>
        <div className="progress" style={{ marginBottom: 14 }}>
          <div style={{ width: `${(qIndex / questions.length) * 100}%` }} />
        </div>
        <div className="card fade-up" key={q.id}>
          <div className="kicker" style={{ marginBottom: 8 }}>QUESTION {qIndex + 1} OF {questions.length}</div>
          <p style={{ fontWeight: 600, marginBottom: 10 }}>{q.question}</p>
          {q.options.map((opt, i) => {
            let cls = "choice";
            if (picked !== null) {
              if (i === q.correctIndex) cls += " correct";
              else if (i === picked) cls += " wrong";
            }
            return (
              <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)}>
                {opt}
              </button>
            );
          })}
          {picked !== null && (
            <>
              <div className="explain">
                {picked === q.correctIndex ? "✅ " : picked === -1 ? "⏰ Shot clock violation. " : "❌ "}
                {q.explanation}
              </div>
              <button className="btn btn-primary btn-block" onClick={nextQuestion}>
                {qIndex >= questions.length - 1 ? "See the Final Score" : "Next →"}
              </button>
            </>
          )}
        </div>
      </main>
    );
  }

  // --- lobby ---
  const preview = duelOpponent(state.duels.played + 1);
  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>SPARRING — VS THE HOUSE AI</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>The Duel Floor</h1>
      <CompeteNav />

      <div className="card card-banner row-between">
        <div>
          <div className="display" style={{ fontSize: 26 }}>
            {state.duels.wins}W — {state.duels.losses}L
          </div>
          <div className="muted" style={{ fontSize: 12 }}>career record</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="display" style={{ fontSize: 26, color: "var(--gold)" }}>+750 XP</div>
          <div className="muted" style={{ fontSize: 12 }}>per victory</div>
        </div>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <div className="kicker">NEXT SPARRING PARTNER</div>
        <div className="display" style={{ fontSize: 30, margin: "8px 0" }}>
          {preview.handle} <span className="pill" style={{ verticalAlign: "middle" }}>AI</span>
        </div>
        <p className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
          A simulated opponent — train here, then take your real score to the leaderboard.
          Same 5 questions. 15 seconds each. Most correct wins — total time breaks the tie.
        </p>
        <button className="btn btn-primary btn-block" onClick={startDuel}>Start the Duel</button>
      </div>

      <p className="muted" style={{ fontSize: 12.5, textAlign: "center" }}>
        Win your first duel for the Duelist badge. Ten wins makes you Undisputed.
      </p>
    </main>
  );
}
