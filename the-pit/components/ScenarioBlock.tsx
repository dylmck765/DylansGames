"use client";

// Single "what would you do?" decision with coach notes on reveal.
// Used by episode scenarios and tournament challenges.

import { useState } from "react";

interface Props {
  situation: string;
  question: string;
  options: string[];
  bestIndex: number;
  coachNotes: string;
  done?: boolean;
  doneText?: string;
  onComplete: (pickedBest: boolean) => void;
}

export default function ScenarioBlock({
  situation,
  question,
  options,
  bestIndex,
  coachNotes,
  done,
  doneText,
  onComplete,
}: Props) {
  const [picked, setPicked] = useState<number | null>(null);

  if (done) {
    return (
      <div className="explain" style={{ borderColor: "var(--green)", background: "rgba(31,220,107,0.06)" }}>
        ✅ {doneText || "Call already made. XP banked."}
      </div>
    );
  }

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onComplete(i === bestIndex);
  };

  return (
    <div className="fade-up">
      <p style={{ marginBottom: 10 }}>{situation}</p>
      <p style={{ fontWeight: 700, marginBottom: 10 }}>{question}</p>
      {options.map((opt, i) => {
        let cls = "choice";
        if (picked !== null) {
          if (i === bestIndex) cls += " correct";
          else if (i === picked) cls += " wrong";
        }
        return (
          <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)}>
            {opt}
          </button>
        );
      })}
      {picked !== null && (
        <div className="explain">
          {picked === bestIndex ? "✅ PRO MOVE. " : "❌ The film says otherwise. "}
          {coachNotes}
        </div>
      )}
    </div>
  );
}
