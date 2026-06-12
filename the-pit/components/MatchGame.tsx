"use client";

// The Match: a daily timed matching game. Twenty tiles, ten pairs. Tap a chart
// or term, then tap its mate. You start at a full score and the clock and any
// missed taps chip away at it, so speed and accuracy both pay.

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { MatchPair, MatchShape, MatchTile } from "@/lib/types";
import { hashString, mulberry32 } from "@/lib/util";

const START_SCORE = 1000;
const FLOOR_SCORE = 100;
const MS_PER_POINT = 120; // you shed roughly eight points a second
const WRONG_PENALTY = 50; // each mismatched tap

function liveScore(elapsedMs: number, wrongTaps: number): number {
  const raw = START_SCORE - Math.floor(elapsedMs / MS_PER_POINT) - wrongTaps * WRONG_PENALTY;
  return Math.max(FLOOR_SCORE, Math.min(START_SCORE, raw));
}

// Every chart and payoff diagram is drawn here as SVG, themed via currentColor.
function ChartArt({ shape }: { shape: MatchShape }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const axis = (
    <line x1="6" y1="40" x2="94" y2="40" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="3 3" />
  );
  const ref = (y: number) => (
    <line x1="6" y1={y} x2="94" y2={y} stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="3 3" />
  );
  let body: ReactNode = null;
  switch (shape) {
    case "long-call": body = (<>{axis}<polyline points="8,48 50,48 92,12" {...s} /></>); break;
    case "long-put": body = (<>{axis}<polyline points="8,12 50,48 92,48" {...s} /></>); break;
    case "covered-call": body = (<>{axis}<polyline points="8,52 52,20 92,20" {...s} /></>); break;
    case "bull-call-spread": body = (<>{axis}<polyline points="8,50 34,50 64,18 92,18" {...s} /></>); break;
    case "bear-put-spread": body = (<>{axis}<polyline points="8,18 34,18 64,50 92,50" {...s} /></>); break;
    case "short-put": body = (<>{axis}<polyline points="8,56 46,34 92,34" {...s} /></>); break;
    case "long-straddle": body = (<>{axis}<polyline points="8,14 50,54 92,14" {...s} /></>); break;
    case "iron-condor": body = (<>{axis}<polyline points="8,52 26,52 40,22 60,22 74,52 92,52" {...s} /></>); break;
    case "breakout": body = (<>{ref(36)}<polyline points="8,46 30,44 50,46 70,30 92,12" {...s} /></>); break;
    case "breakdown": body = (<>{ref(28)}<polyline points="8,18 30,20 50,18 70,34 92,52" {...s} /></>); break;
    case "uptrend": body = (<polyline points="8,52 28,44 48,46 68,28 92,14" {...s} />); break;
    case "downtrend": body = (<polyline points="8,12 28,20 48,18 68,36 92,52" {...s} />); break;
    case "consolidation": body = (<>{ref(20)}{ref(46)}<polyline points="8,33 24,24 40,42 56,24 72,42 92,30" {...s} /></>); break;
    case "double-top": body = (<polyline points="8,50 28,18 46,34 64,18 92,52" {...s} />); break;
    case "double-bottom": body = (<polyline points="8,16 28,50 46,32 64,50 92,16" {...s} />); break;
    case "gap-up": body = (<><polyline points="8,48 38,46" {...s} /><polyline points="50,24 92,16" {...s} /></>); break;
    case "gap-down": body = (<><polyline points="8,18 38,20" {...s} /><polyline points="50,40 92,48" {...s} /></>); break;
    case "ascending-triangle": body = (<>{ref(24)}<polyline points="8,50 24,26 40,44 56,26 72,38 88,26 92,22" {...s} /></>); break;
    case "descending-triangle": body = (<>{ref(44)}<polyline points="8,18 24,42 40,26 56,42 72,32 88,42 92,46" {...s} /></>); break;
    case "short-call": body = (<>{axis}<polyline points="8,34 48,34 92,58" {...s} /></>); break;
    case "short-straddle": body = (<>{axis}<polyline points="8,54 50,18 92,54" {...s} /></>); break;
  }
  return (
    <svg viewBox="0 0 100 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
      {body}
    </svg>
  );
}

interface Tile { id: string; pairId: string; face: MatchTile }

export default function MatchGame({
  pairs,
  seedKey,
  onDone,
}: {
  pairs: MatchPair[];
  seedKey: string;
  onDone: (score: number) => void;
}) {
  // Build the 20 tiles and shuffle them with a seed tied to the day, so the
  // board is the same puzzle for everyone who plays it that day.
  const tiles = useMemo<Tile[]>(() => {
    const arr: Tile[] = [];
    for (const p of pairs) {
      arr.push({ id: `${p.id}-a`, pairId: p.id, face: p.a });
      arr.push({ id: `${p.id}-b`, pairId: p.id, face: p.b });
    }
    const rng = mulberry32(hashString(`${seedKey}:matchgrid`));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [pairs, seedKey]);

  const [started, setStarted] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string[]>([]);
  const [wrongTaps, setWrongTaps] = useState(0);
  const [finished, setFinished] = useState(false);
  const startRef = useRef(0);
  const doneRef = useRef(false);

  // Count-up clock while playing.
  useEffect(() => {
    if (!started || finished) return;
    const id = setInterval(() => setElapsedMs(Date.now() - startRef.current), 100);
    return () => clearInterval(id);
  }, [started, finished]);

  // Finish once every pair is matched.
  useEffect(() => {
    if (!started || finished || matched.size < pairs.length) return;
    const score = liveScore(Date.now() - startRef.current, wrongTaps);
    setFinished(true);
    if (!doneRef.current) {
      doneRef.current = true;
      onDone(score);
    }
  }, [matched, started, finished, pairs.length, wrongTaps, onDone]);

  const begin = () => {
    startRef.current = Date.now();
    setStarted(true);
  };

  const tap = (t: Tile) => {
    if (finished || wrong.length > 0 || matched.has(t.pairId)) return;
    if (sel === null) {
      setSel(t.id);
      return;
    }
    if (sel === t.id) {
      setSel(null);
      return;
    }
    const first = tiles.find((x) => x.id === sel);
    if (first && first.pairId === t.pairId) {
      setMatched((m) => new Set(m).add(t.pairId));
      setSel(null);
    } else {
      setWrong([sel, t.id]);
      setWrongTaps((w) => w + 1);
      setSel(null);
      setTimeout(() => setWrong([]), 550);
    }
  };

  if (!started) {
    return (
      <div style={{ textAlign: "center" }}>
        <p className="muted" style={{ marginBottom: 12 }}>
          Twenty tiles, ten matches. Pair each chart and term with its mate. You open at {START_SCORE.toLocaleString()} points
          and the clock keeps chipping away, so move fast and tap clean.
        </p>
        <button className="btn btn-primary" onClick={begin}>Start the Clock</button>
      </div>
    );
  }

  const score = liveScore(elapsedMs, wrongTaps);
  const sec = Math.floor(elapsedMs / 1000);
  const clock = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

  return (
    <div>
      <div className="row-between" style={{ marginBottom: 12 }}>
        <span className="pill pill-gold">{score.toLocaleString()} pts</span>
        <span className="muted" style={{ fontSize: 13 }}>{matched.size}/{pairs.length} matched</span>
        <span className="timer-ring" style={{ fontSize: 20 }}>{clock}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
        {tiles.map((t) => {
          const isMatched = matched.has(t.pairId);
          const isSel = sel === t.id;
          const isWrong = wrong.includes(t.id);
          const border = isWrong
            ? "var(--red)"
            : isMatched
              ? "var(--green)"
              : isSel
                ? "var(--gold)"
                : "rgba(255,255,255,0.14)";
          const color = isMatched
            ? "var(--green)"
            : isWrong
              ? "var(--red)"
              : isSel
                ? "var(--gold)"
                : "rgba(255,255,255,0.92)";
          return (
            <button
              key={t.id}
              onClick={() => tap(t)}
              disabled={isMatched}
              style={{
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                borderRadius: 8,
                border: `1.5px solid ${border}`,
                background: isMatched
                  ? "rgba(31,220,107,0.08)"
                  : isSel
                    ? "rgba(229,180,77,0.12)"
                    : "rgba(255,255,255,0.03)",
                color,
                cursor: isMatched ? "default" : "pointer",
                opacity: isMatched ? 0.55 : 1,
                transition: "border-color .15s, opacity .2s, background .15s",
                overflow: "hidden",
              }}
            >
              {t.face.svg ? (
                <ChartArt shape={t.face.svg} />
              ) : (
                <span style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.15, textAlign: "center", fontFamily: "var(--font-display)" }}>
                  {t.face.text}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="muted" style={{ fontSize: 12, textAlign: "center", marginTop: 10 }}>
        Tap a tile, then tap its match. A miss costs you {WRONG_PENALTY} points.
      </p>
    </div>
  );
}
