"use client";

// The daily habit loop: Blitz (60s timer), Market Read, Film Room,
// and the Boss Challenge. Content rotates by date.

import { useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "@/lib/state";
import { dailyBlitzPool, marketReadPool, filmRoomPool, bossPool } from "@/data/daily-content";
import { dateKey, pickForDate } from "@/lib/util";

export default function DailyPage() {
  const { state, ready, submitBlitz, submitRead, submitFilm, submitBoss } = useGame();
  const today = dateKey();

  const blitz = useMemo(() => pickForDate(dailyBlitzPool, today, "blitz"), [today]);
  const read = useMemo(() => pickForDate(marketReadPool, today, "read"), [today]);
  const film = useMemo(() => pickForDate(filmRoomPool, today, "film"), [today]);
  const boss = useMemo(() => pickForDate(bossPool, today, "boss"), [today]);

  if (!ready) return <main className="page" />;
  const day = state.days[today];

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>TODAY&apos;S SLATE — {today}</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 4 }}>Daily Reps</h1>
      <p className="muted" style={{ marginBottom: 18, fontSize: 14 }}>
        Day {state.streak.current} streak. Show up tomorrow and the bonus doubles.
      </p>

      {/* DAILY BLITZ */}
      <div className="section-head">
        <h2>Daily Blitz</h2>
        <span className="pill pill-gold">+150 XP</span>
      </div>
      <div className="card card-accent">
        {day?.blitzDone ? (
          <BankedLine text={`Blitz complete — you ${day.blitzCorrect ? "nailed it" : "took the L, but banked the reps"}.`} />
        ) : (
          <BlitzGame
            question={blitz.question}
            options={blitz.options}
            correctIndex={blitz.correctIndex}
            explanation={blitz.explanation}
            onDone={submitBlitz}
          />
        )}
      </div>

      {/* MARKET READ */}
      <div className="section-head">
        <h2>Market Read</h2>
        <span className="pill pill-gold">+100 XP</span>
      </div>
      <div className="card card-accent">
        <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{read.title}</h3>
        {day?.readDone ? (
          <BankedLine text={`Read made — ${day.readCorrect ? "right call. The hot hand grows." : "wrong call. Even pros misread the field."}`} />
        ) : (
          <MarketReadGame
            setup={read.setup}
            correctCall={read.correctCall}
            explanation={read.explanation}
            onDone={submitRead}
          />
        )}
      </div>

      {/* FILM ROOM */}
      <div className="section-head">
        <h2>Film Room</h2>
        <span className="pill pill-gold">+50 XP</span>
      </div>
      <div className="card card-accent">
        <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{film.title}</h3>
        {day?.filmDone ? (
          <BankedLine text="Film watched. Lesson logged." />
        ) : (
          <FilmRoomViewer story={film.story} lesson={film.lesson} onDone={submitFilm} />
        )}
      </div>

      {/* BOSS */}
      <div className="section-head">
        <h2>Boss Challenge</h2>
        <span className="pill pill-red">UP TO 2,000 XP</span>
      </div>
      <div className="card" style={{ border: "1px solid var(--red)" }}>
        <h3 className="display" style={{ fontSize: 22, marginBottom: 6 }}>{boss.title}</h3>
        {day?.bossDone ? (
          <BankedLine text={`Boss fought: ${day.bossCorrect}/4 parts — ${(day.bossCorrect * 500).toLocaleString()} XP banked.`} />
        ) : (
          <BossGame intro={boss.intro} parts={boss.parts} onDone={submitBoss} />
        )}
      </div>
    </main>
  );
}

function BankedLine({ text }: { text: string }) {
  return (
    <div className="explain" style={{ borderColor: "var(--green)", background: "rgba(31,220,107,0.06)", margin: 0 }}>
      ✅ {text} Come back tomorrow.
    </div>
  );
}

// --- Daily Blitz: one question, 60-second clock. ---

function BlitzGame({
  question,
  options,
  correctIndex,
  explanation,
  onDone,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  onDone: (correct: boolean) => void;
}) {
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [picked, setPicked] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!started || picked !== null || expired) return;
    if (secondsLeft <= 0) {
      setExpired(true);
      if (!doneRef.current) {
        doneRef.current = true;
        onDone(false);
      }
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, secondsLeft, picked, expired, onDone]);

  if (!started) {
    return (
      <div style={{ textAlign: "center" }}>
        <p className="muted" style={{ marginBottom: 12 }}>
          One question. Sixty seconds. The clock starts when you say it does.
        </p>
        <button className="btn btn-primary" onClick={() => setStarted(true)}>Start the Clock</button>
      </div>
    );
  }

  const pick = (i: number) => {
    if (picked !== null || expired) return;
    setPicked(i);
    if (!doneRef.current) {
      doneRef.current = true;
      onDone(i === correctIndex);
    }
  };

  return (
    <div>
      <div className="row-between" style={{ marginBottom: 10 }}>
        <span className="kicker">SHOT CLOCK</span>
        <span className={`timer-ring ${secondsLeft <= 10 && picked === null && !expired ? "danger" : ""}`}>
          :{String(Math.max(0, secondsLeft)).padStart(2, "0")}
        </span>
      </div>
      <p style={{ fontWeight: 600, marginBottom: 10 }}>{question}</p>
      {options.map((opt, i) => {
        let cls = "choice";
        if (picked !== null || expired) {
          if (i === correctIndex) cls += " correct";
          else if (i === picked) cls += " wrong";
        }
        return (
          <button key={i} className={cls} disabled={picked !== null || expired} onClick={() => pick(i)}>
            {opt}
          </button>
        );
      })}
      {(picked !== null || expired) && (
        <div className="explain">
          {expired ? "⏰ BUZZER. Time gone. " : picked === correctIndex ? "✅ AT THE BUZZER. " : "❌ Off the mark. "}
          {explanation}
        </div>
      )}
    </div>
  );
}

// --- Market Read: call the direction, then justify it to yourself. ---

function MarketReadGame({
  setup,
  correctCall,
  explanation,
  onDone,
}: {
  setup: string;
  correctCall: "bullish" | "bearish" | "neutral";
  explanation: string;
  onDone: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!picked || submitted) return;
    setSubmitted(true);
    onDone(picked === correctCall);
  };

  const CALLS: { id: "bullish" | "bearish" | "neutral"; label: string }[] = [
    { id: "bullish", label: "Bullish" },
    { id: "bearish", label: "Bearish" },
    { id: "neutral", label: "No Trade" },
  ];

  return (
    <div>
      <p style={{ marginBottom: 12 }}>{setup}</p>
      <div className="row" style={{ marginBottom: 10 }}>
        {CALLS.map((c) => (
          <button
            key={c.id}
            className="btn btn-sm"
            style={{
              flex: 1,
              borderColor: picked === c.id ? "var(--red)" : undefined,
              background: picked === c.id ? "rgba(255,30,45,0.15)" : undefined,
            }}
            disabled={submitted}
            onClick={() => setPicked(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <label className="lbl">Your reasoning (the pros always write it down)</label>
      <textarea
        className="input"
        rows={2}
        placeholder="Why? One sentence minimum — future you will thank you."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        disabled={submitted}
      />
      {!submitted ? (
        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: 10 }}
          disabled={!picked || reason.trim().length < 5}
          onClick={submit}
        >
          Lock In the Call
        </button>
      ) : (
        <div className="explain">
          {picked === correctCall ? "✅ THE RIGHT READ. " : `❌ The desk had it ${correctCall.toUpperCase()}. `}
          {explanation}
        </div>
      )}
    </div>
  );
}

// --- Film Room: read the story, bank the lesson. ---

function FilmRoomViewer({ story, lesson, onDone }: { story: string[]; lesson: string; onDone: () => void }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      {story.map((p, i) => (
        <p key={i} style={{ marginBottom: 10, fontSize: 14.5 }}>{p}</p>
      ))}
      {revealed ? (
        <div className="explain">THE LESSON: {lesson}</div>
      ) : (
        <button
          className="btn btn-block"
          onClick={() => {
            setRevealed(true);
            onDone();
          }}
        >
          Reveal the Lesson (+50 XP)
        </button>
      )}
    </div>
  );
}

// --- Boss: 4-part gauntlet, 500 XP per correct part. ---

function BossGame({
  intro,
  parts,
  onDone,
}: {
  intro: string;
  parts: { question: string; options: string[]; correctIndex: number; explanation: string }[];
  onDone: (correctParts: number) => void;
}) {
  const [partIdx, setPartIdx] = useState(-1); // -1 = intro screen
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  if (partIdx === -1) {
    return (
      <div>
        <p style={{ marginBottom: 12 }}>{intro}</p>
        <button className="btn btn-primary btn-block" onClick={() => setPartIdx(0)}>
          Enter the Arena
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="display" style={{ fontSize: 30, color: correctCount >= 3 ? "var(--green)" : "var(--gold)" }}>
          {correctCount}/4 — {(correctCount * 500).toLocaleString()} XP
        </div>
        <p className="muted" style={{ marginTop: 6 }}>
          {correctCount === 4
            ? "FLAWLESS VICTORY. The boss never stood a chance."
            : correctCount >= 2
            ? "The boss is down, but you took some hits. Review the film."
            : "Rough night. Champions are made on nights like this — a new boss drops tomorrow."}
        </p>
      </div>
    );
  }

  const part = parts[partIdx];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === part.correctIndex) setCorrectCount((c) => c + 1);
  };

  const advance = () => {
    const finalCorrect = correctCount;
    if (partIdx >= parts.length - 1) {
      setFinished(true);
      onDone(finalCorrect);
    } else {
      setPartIdx(partIdx + 1);
      setPicked(null);
    }
  };

  return (
    <div className="fade-up" key={partIdx}>
      <div className="row-between" style={{ marginBottom: 10 }}>
        <span className="kicker">ROUND {partIdx + 1} OF {parts.length}</span>
        <span className="pill pill-gold">{correctCount} hits landed</span>
      </div>
      <p style={{ fontWeight: 600, marginBottom: 10 }}>{part.question}</p>
      {part.options.map((opt, i) => {
        let cls = "choice";
        if (picked !== null) {
          if (i === part.correctIndex) cls += " correct";
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
            {picked === part.correctIndex ? "✅ CLEAN HIT. " : "❌ The boss counters. "}
            {part.explanation}
          </div>
          <button className="btn btn-primary btn-block" onClick={advance}>
            {partIdx >= parts.length - 1 ? "Finish the Fight" : "Next Round →"}
          </button>
        </>
      )}
    </div>
  );
}
