"use client";

// Generic multi-question quiz with instant reveal per question and a final
// callback once every question is answered. Used by episodes, bosses, duels.

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";

interface Props {
  questions: QuizQuestion[];
  done?: boolean; // already completed previously — show read-only banner
  doneText?: string;
  onComplete: (correctCount: number) => void;
}

export default function QuizBlock({ questions, done, doneText, onComplete }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [finished, setFinished] = useState(false);

  if (done) {
    return (
      <div className="explain" style={{ borderColor: "var(--green)", background: "rgba(31,220,107,0.06)" }}>
        ✅ {doneText || "Already in the books. XP banked."}
      </div>
    );
  }

  const answer = (qi: number, oi: number) => {
    if (answers[qi] !== null || finished) return;
    const next = [...answers];
    next[qi] = oi;
    setAnswers(next);
    if (next.every((a) => a !== null)) {
      setFinished(true);
      const correct = next.filter((a, i) => a === questions[i].correctIndex).length;
      onComplete(correct);
    }
  };

  return (
    <div>
      {questions.map((q, qi) => {
        const picked = answers[qi];
        return (
          <div key={q.id} style={{ marginBottom: 22 }} className="fade-up">
            <p style={{ fontWeight: 600, marginBottom: 10 }}>
              <span className="kicker" style={{ marginRight: 8 }}>Q{qi + 1}</span>
              {q.question}
            </p>
            {q.options.map((opt, oi) => {
              let cls = "choice";
              if (picked !== null) {
                if (oi === q.correctIndex) cls += " correct";
                else if (oi === picked) cls += " wrong";
              }
              return (
                <button key={oi} className={cls} disabled={picked !== null} onClick={() => answer(qi, oi)}>
                  {opt}
                </button>
              );
            })}
            {picked !== null && (
              <div className="explain">
                {picked === q.correctIndex ? "✅ BUCKETS. " : "❌ Off the rim. "}
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
