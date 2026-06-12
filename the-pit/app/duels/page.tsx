"use client";

// PvP duels against recorded runs from real players, scored Kahoot-style.
// Every duel draws a fresh random set of 5 questions, so you never face the
// same five twice in a row. Each question is worth up to 100 points: answer
// correctly and the faster you lock it in, the more of those points you keep,
// decaying from 100 down to 50 as the 15-second clock runs out. A wrong answer
// or a timeout is worth nothing. Highest total score wins. You're matched
// against another real player's banked run, and the opponent's score is read
// from the correct count and time they recorded. Every run you finish is banked
// so the next player can be matched against you. No bots anywhere.

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "@/lib/state";
import { duelPool } from "@/data/duels";
import { pickManyForKey, formatXp } from "@/lib/util";
import { supabase, type DuelRunRow } from "@/lib/supabase";
import CompeteNav from "@/components/CompeteNav";

const QUESTION_SECONDS = 15;
const LIMIT_MS = QUESTION_SECONDS * 1000;
const MAX_Q_POINTS = 100;
const QUESTIONS_PER_DUEL = 5;
const MAX_SCORE = MAX_Q_POINTS * QUESTIONS_PER_DUEL;
const FACED_KEY = "thepit_faced_runs";

type Phase = "lobby" | "playing" | "result";

// Kahoot-style points for a correct answer: full value when instant, decaying
// to half by the buzzer. msUsed is how long you took to answer this question.
function pointsForCorrect(msUsed: number): number {
  const f = Math.min(1, Math.max(0, msUsed / LIMIT_MS));
  return Math.round(MAX_Q_POINTS * (1 - 0.5 * f));
}

// We only bank a player's correct count and total time, so we estimate an
// opponent's Kahoot score by spreading their time evenly across their run and
// scoring each correct answer at that pace.
function estimateOpponentScore(run: DuelRunRow): number {
  if (run.correct <= 0) return 0;
  const avgMs = Math.min(LIMIT_MS, run.time_ms / QUESTIONS_PER_DUEL);
  return run.correct * pointsForCorrect(avgMs);
}

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
  const [elapsedMs, setElapsedMs] = useState(0);
  const [myCorrect, setMyCorrect] = useState(0);
  const [myScore, setMyScore] = useState(0);
  const [myTimeMs, setMyTimeMs] = useState(0);
  const [lastPoints, setLastPoints] = useState(0);
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

  // A fresh random questionsKey each duel gives a fresh random set of 5.
  const questions = useMemo(
    () => (questionsKey ? pickManyForKey(duelPool, questionsKey, "q", QUESTIONS_PER_DUEL) : []),
    [questionsKey]
  );

  // Single 100ms ticker drives the countdown ring, the live point meter, and
  // the timeout. It only runs while a question is open (picked === null).
  useEffect(() => {
    if (phase !== "playing" || picked !== null) return;
    const start = qStartRef.current;
    const id = setInterval(() => {
      const e = Date.now() - start;
      if (e >= LIMIT_MS) {
        clearInterval(id); // stop now so a second tick can't double-count time
        setElapsedMs(LIMIT_MS);
        setPicked(-1); // timeout: no points
        setLastPoints(0);
        setMyTimeMs((t) => t + LIMIT_MS);
      } else {
        setElapsedMs(e);
      }
    }, 100);
    return () => clearInterval(id);
  }, [phase, picked, qIndex]);

  const beginQuestion = () => {
    setPicked(null);
    setElapsedMs(0);
    setLastPoints(0);
    qStartRef.current = Date.now();
  };

  const startDuel = () => {
    const pool = candidates ?? [];
    const faced = new Set(loadFaced());
    const fresh = pool.filter((r) => !faced.has(r.id));
    const pickFrom = fresh.length ? fresh : pool;
    setOpponent(pickFrom.length ? pickFrom[Math.floor(Math.random() * pickFrom.length)] : null);
    // Fresh random seed every duel so the five questions randomize each time.
    setQuestionsKey(`${me}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e9).toString(36)}`);
    setQIndex(0);
    setMyCorrect(0);
    setMyScore(0);
    setMyTimeMs(0);
    recordedRef.current = false;
    beginQuestion();
    setPhase("playing");
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    const used = Math.min(LIMIT_MS, Date.now() - qStartRef.current);
    setElapsedMs(used);
    setPicked(i);
    setMyTimeMs((t) => t + used);
    if (i === questions[qIndex].correctIndex) {
      const pts = pointsForCorrect(used);
      setMyScore((s) => s + pts);
      setMyCorrect((c) => c + 1);
      setLastPoints(pts);
    } else {
      setLastPoints(0);
    }
  };

  const nextQuestion = () => {
    if (qIndex >= questions.length - 1) {
      setPhase("result");
      return;
    }
    setQIndex((q) => q + 1);
    beginQuestion();
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
            Duels are against real players, so make the roster first.
          </p>
          <Link href="/onboarding" className="btn btn-primary">Take the Tryout</Link>
        </div>
      </main>
    );
  }

  // --- result phase ---
  if (phase === "result") {
    const oppScore = opponent ? estimateOpponentScore(opponent) : null;
    const won = opponent
      ? myScore > (oppScore as number) || (myScore === oppScore && myTimeMs <= opponent.time_ms)
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
        correct: Math.min(QUESTIONS_PER_DUEL, Math.max(0, myCorrect)),
        time_ms: Math.min(3_600_000, Math.max(0, Math.round(myTimeMs))),
      }).then(() => {});
    }

    if (!opponent) {
      return (
        <main className="page" style={{ maxWidth: 560 }}>
          <CompeteNav />
          <div className="rankup-card" style={{ margin: "20px auto", borderColor: "var(--gold)", boxShadow: "none" }}>
            <div className="kicker" style={{ color: "var(--gold)" }}>RUN BANKED</div>
            <div className="big" style={{ color: "var(--gold)" }}>{myScore}</div>
            <p className="muted" style={{ fontSize: 13 }}>
              points on {myCorrect}/{QUESTIONS_PER_DUEL} in {(myTimeMs / 1000).toFixed(1)}s. The floor was empty, so you set the bar.
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
            {myScore} — {oppScore}
          </div>
          <p className="muted" style={{ fontSize: 13 }}>
            vs {opponent.handle} (recorded run) • you went {myCorrect}/{QUESTIONS_PER_DUEL} in {(myTimeMs / 1000).toFixed(1)}s, they went {opponent.correct}/{QUESTIONS_PER_DUEL} in {(opponent.time_ms / 1000).toFixed(1)}s
          </p>
          <p style={{ margin: "12px 0 18px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>
            {won
              ? `+${formatXp(750)} XP. ${opponent.handle} will see this on the board.`
              : "No XP this time. The film from a loss is free, so study it and run it back."}
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
    const pointsNow = pointsForCorrect(elapsedMs);
    const pointsPct = (pointsNow / MAX_Q_POINTS) * 100;
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <div className="row-between" style={{ margin: "14px 0" }}>
          <span className="pill pill-red">YOU: {myScore}</span>
          <span className="display" style={{ fontSize: 18 }}>
            {opponent ? `VS ${opponent.handle.toUpperCase()}` : "SETTING THE BAR"}
          </span>
          <span className={`timer-ring ${secondsLeftFrom(elapsedMs) <= 5 && picked === null ? "danger" : ""}`} style={{ fontSize: 24 }}>
            :{String(secondsLeftFrom(elapsedMs)).padStart(2, "0")}
          </span>
        </div>
        <div className="progress" style={{ marginBottom: 14 }}>
          <div style={{ width: `${(qIndex / questions.length) * 100}%` }} />
        </div>
        <div className="card fade-up" key={q.id}>
          <div className="row-between" style={{ marginBottom: 8 }}>
            <div className="kicker">QUESTION {qIndex + 1} OF {questions.length}</div>
            {picked === null && (
              <div className="kicker" style={{ color: "var(--gold)" }}>{pointsNow} PTS UP FOR GRABS</div>
            )}
          </div>
          {picked === null && (
            <div className="progress" style={{ marginBottom: 12, height: 4 }}>
              <div style={{ width: `${pointsPct}%`, background: "var(--gold)" }} />
            </div>
          )}
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
                {picked === q.correctIndex
                  ? `✅ +${lastPoints} points. `
                  : picked === -1
                    ? "⏰ Shot clock violation. 0 points. "
                    : "❌ 0 points. "}
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
              You get five random questions, 15 seconds each. Every question is worth up
              to {MAX_Q_POINTS} points, and the clock eats into that the longer you wait, so
              answer fast and answer right. A wrong answer is worth nothing. Highest total
              score out of {MAX_SCORE} takes the duel.
            </p>
            <button className="btn btn-primary btn-block" onClick={startDuel}>Find an Opponent</button>
          </>
        ) : (
          <>
            <div className="kicker">THE FLOOR IS EMPTY</div>
            <div className="display" style={{ fontSize: 24, margin: "8px 0" }}>No runs to face yet</div>
            <p className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              Play a run anyway. It gets banked, and the next player to walk in gets matched
              against your score.
            </p>
            <button className="btn btn-primary btn-block" onClick={startDuel}>Set the Bar</button>
          </>
        )}
      </div>

      <p className="muted" style={{ fontSize: 12.5, textAlign: "center" }}>
        Duels are asynchronous, so opponents are real players&apos; recorded runs and nobody
        has to be online at once. Win your first duel for the Duelist badge.
      </p>
    </main>
  );
}

// Whole seconds left on the 15s shot clock, from elapsed milliseconds.
function secondsLeftFrom(elapsedMs: number): number {
  return Math.max(0, Math.ceil((LIMIT_MS - elapsedMs) / 1000));
}
