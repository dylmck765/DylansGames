"use client";

// Paper trading simulation: pick a play, see the simulated P/L print.

import { useState } from "react";
import type { PaperTradeSim } from "@/lib/types";

interface Props {
  sim: PaperTradeSim;
  done?: boolean;
  onComplete: (choseBest: boolean) => void;
}

export default function PaperTradeBlock({ sim, done, onComplete }: Props) {
  const [picked, setPicked] = useState<number | null>(null);

  if (done) {
    return (
      <div className="explain" style={{ borderColor: "var(--green)", background: "rgba(31,220,107,0.06)" }}>
        ✅ Trade already executed. XP banked.
      </div>
    );
  }

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onComplete(i === sim.bestChoiceIndex);
  };

  return (
    <div className="fade-up">
      <div className="row-between" style={{ marginBottom: 8 }}>
        <span className="pill pill-gold">
          {sim.ticker} @ ${sim.spotPrice.toFixed(2)}
        </span>
        <span className="pill">PAPER MONEY</span>
      </div>
      <p style={{ marginBottom: 12 }}>{sim.brief}</p>
      {sim.choices.map((c, i) => {
        let cls = "choice";
        if (picked !== null) {
          if (i === sim.bestChoiceIndex) cls += " correct";
          else if (i === picked) cls += " wrong";
        }
        return (
          <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)}>
            <strong>{c.label}</strong>
            {picked !== null && (
              <span style={{ display: "block", marginTop: 6, fontSize: 13 }}>
                {c.result}{" "}
                <strong style={{ color: c.pnl >= 0 ? "var(--green)" : "var(--red)" }}>
                  {c.pnl >= 0 ? "+" : "−"}${Math.abs(c.pnl).toLocaleString("en-US")}
                </strong>
              </span>
            )}
          </button>
        );
      })}
      {picked !== null && (
        <div className="explain">
          {picked === sim.bestChoiceIndex ? "✅ THAT is how you draw it up. " : "📋 Back to the film. "}
          {sim.debrief}
        </div>
      )}
    </div>
  );
}
