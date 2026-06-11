"use client";

// PvP duels against recorded runs from real players. You're randomly matched
// against another player's banked run and answer the exact same 5 questions
// they faced; most correct wins, total time breaks ties. Every run you finish
// is banked so other players can be matched against you. No bots anywhere.

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "@/lib/state";
import { duelPool } from "@/data/duels";
import { pickManyForKey, formatXp } from "@/lib/util";
import { supabase, type DuelRunRow } from "@/lib/supabase";
import CompeteNav from "@/components/CompeteNav";

const QUESTION_SECONDS = 15;
const FACED_KEY = "thepit_faced_runs";

type Phase = "lobby" | "playing" | "result";

function loadFaced(): number[] {
  try {
    return JSON.parse(localStorage.getItem(FACED_KEY) || "[]");
  } catch {
    return [];
  }
}

function markFaced(id: number) {
  try {
    const faced = loadFaced();
    faced.push(id);
    localStorage.setItem(FACED_KEY, JSON.stringify(faced.slice(-200)));
  } catch { /* ignore */ }
}

export default function DuelsPage() {
  const { state, ready, recordDuel } = useGame();
  const [phase, setPhase] = useState<Phase>("lobby");
  const [candidates, setCandidates] = useState<DuelRunRow[] | null>(null);
  const [opponent, setOpponent] = useState<DuelRunRow | null>(null);
  const [questionsKey, setQuestionsKey] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
  const [myCorrect, setMyCorrect] = useState(0);
  const [myTimeMs, setMyTimeMs] = useState(0);
  const qStartRef = useRef(0);
  const recordedRef = useRef(false);

  const me = state.profile.handle;
  const inLobby = phase === "lobby";

  // Pull recent runs from other players to match against.
  useEffect(() => {
    if (!ready || !state.profile.onboarded || !inLobby) return;
    supabase
      .from("duel_runs")
      .select("*")
      .neq("handle", me)
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => setCandidates((data as DuelRunRow[]) ?? []));
  }, [ready, state.profile.onboarded, me, inLobby]);

  const questions = useMemo(
    () => (questionsKey ? pickManyForKey(duelPool, questionsKey, "q", 5) : []),
    [questionsKey]
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
    const pool = candidates ?? [];
    const faced = new Set(loadFaced());
    const fresh = pool.filter((r) => !faced.has(r.id));
    const pickFrom = fresh.length ? fresh : pool;
    if (pickFrom.length) {
      // Random real opponent; replay their exact question set.
      const run = pickFrom[Math.floor(Math.random() * pickFrom.length)];
      setOpponent(run);
      setQuestionsKey(run.questions_key);
    } else {
      // Empty floor: set the bar with a fresh run for others to face.
      setOpponent(null);
      setQuestionsKey(`${me}-${Date.now().toString(36)}`);
    }
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

  // Duels need a handle: runs are banked under your name.
  if (!state.profile.onboarded) {
    return (
      <main className="page">
        <div className="kicker" style={{ marginTop: 10 }}>HEAD-TO-HEAD — REAL PLAYERS</div>
        <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>The Duel Floor</h1>
        <CompeteNav />
        <div className="card" style={{ textAlign: "center", padding: "36px 20px" }}>
          <p className="display" style={{ fontSize: 20 }}>You need a handle to duel.</p>
          <p className="muted" style={{ margin: "6px 0 14px", fontSize: 13 }}>
            Duels are against real players — make the roster first.
          </p>
          <Link href="/onboarding" className="btn btn-primary">Take the Tryout</Link>
        </div>
      </main>
    );
  }

  // --- result phase ---
  if (phase === "result") {
    const won = opponent
      ? myCorrect > opponent.correct || (myCorrect === opponent.correct && myTimeMs <= opponent.time_ms)
      : null;

    if (!recordedRef.current) {
      recordedRef.current = true;
      if (opponent) {
        markFaced(opponent.id);
        // Defer so the state update doesn't fire mid-render.
        const w = won === true;
        setTimeout(() => recordDuel(w), 0);
      }
      // Bank my run so other players can face it.
      supabase.from("duel_runs").insert({
        handle: me.slice(0, 24),
        questions_key: questionsKey.slice(0, 64),
        correct: Math.min(5, Math.max(0, myCorrect)),
        time_ms: Math.min(3_600_000, Math.max(0, Math.round(myTimeMs))),
      }).then(() => {});
    }

    if (!opponent) {
      return (
        <main className="page" style={{ maxWidth: 560 }}>
          <CompeteNav />
          <div className="rankup-card" style={{ margin: "20px auto", borderColor: "var(--gold)", boxShadow: "none" }}>
            <div className="kicker" style={{ color: "var(--gold)" }}>RUN BANKED</div>
            <div className="big" style={{ color: "var(--gold)" }}>{myCorrect}/5</div>
            <p className="muted" style={{ fontSize: 13 }}>
              in {(myTimeMs / 1000).toFixed(1)}s — the floor was empty, so you set the bar.
            </p>
            <p style={{ margin: "12px 0 18px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>
              Your run is now waiting on the duel floor. The next real player gets matched against it.
            </p>
            <button className="btn btn-primary btn-block" onClick={() => setPhase("lobby")}>
              Back to the Lobby
            </button>
          </div>
        </main>
      );
    }

    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <CompeteNav />
        <div className="rankup-card" style={{ margin: "20px auto", borderColor: won ? "var(--green)" : "var(--red)", boxShadow: "none" }}>
          <div className="kicker" style={{ color: won ? "var(--green)" : "var(--red)" }}>
            {won ? "VICTORY" : "DEFEAT"}
          </div>
          <div className="big" style={{ fontSize: 36, color: won ? "var(--green)" : "var(--red)" }}>
            {myCorrect} — {opponent.correct}
          </div>
          <p className="muted" style={{ fontSize: 13 }}>
            vs {opponent.handle} (recorded run) • your time {(myTimeMs / 1000).toFixed(1)}s, theirs {(opponent.time_ms / 1000).toFixed(1)}s
          </p>
          <p style={{ margin: "12px 0 18px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>
            {won
              ? `+${formatXp(750)} XP. ${opponent.handle} will see this on the board.`
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
  if (phase === "playing") {
    const q = questions[qIndex];
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <div className="row-between" style={{ margin: "14px 0" }}>
          <span className="pill pill-red">YOU: {myCorrect}</span>
          <span className="display" style={{ fontSize: 18 }}>
            {opponent ? `VS ${opponent.handle.toUpperCase()}` : "SETTING THE BAR"}
          </span>
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
  const waiting = candidates?.length ?? null;
  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>HEAD-TO-HEAD — REAL PLAYERS</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>The Duel Floor</h1>
      <CompeteNav />

      <div className="card card-banner row-between">
        <div>
          <div className="display" style={{ fontSize: 26 }}>
            {state.duels.wins}W — {state.duels.losses}L
          </div>
          <div className="muted" style={{ fontSize: 12 }}>career record vs real players</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="display" style={{ fontSize: 26, color: "var(--gold)" }}>+750 XP</div>
          <div className="muted" style={{ fontSize: 12 }}>per victory</div>
        </div>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        {waiting === null ? (
          <p className="muted" style={{ padding: "10px 0" }}>Scanning the duel floor...</p>
        ) : waiting > 0 ? (
          <>
            <div className="kicker">MATCHMAKING</div>
            <div className="display" style={{ fontSize: 28, margin: "8px 0" }}>
              {waiting} run{waiting === 1 ? "" : "s"} from real players on the floor
            </div>
            <p className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              You&apos;ll be matched against a random player&apos;s recorded run and answer the
              exact same 5 questions they faced. 15 seconds each. Most correct wins —
              total time breaks the tie.
            </p>
            <button className="btn btn-primary btn-block" onClick={startDuel}>Find an Opponent</button>
          </>
        ) : (
          <>
            <div className="kicker">THE FLOOR IS EMPTY</div>
            <div className="display" style={{ fontSize: 24, margin: "8px 0" }}>No runs to face yet</div>
            <p className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              Play a run anyway — it gets banked, and the next player to walk in
              gets matched against you.
            </p>
            <button className="btn btn-primary btn-block" onClick={startDuel}>Set the Bar</button>
          </>
        )}
      </div>

      <p className="muted" style={{ fontSize: 12.5, textAlign: "center" }}>
        Duels are asynchronous — opponents are real players&apos; recorded runs, so nobody
        has to be online at the same time. Win your first duel for the Duelist badge.
      </p>
    </main>
  );
}
