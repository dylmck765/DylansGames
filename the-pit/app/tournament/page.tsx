"use client";

// Weekly Tournament: 5 challenges drop Monday, close Sunday.
// 100 points per correct call. Standings are real players only,
// synced live through Supabase.

import { useEffect, useMemo, useState } from "react";
import { useGame } from "@/lib/state";
import { tournamentPool } from "@/data/tournament";
import { weekKey, pickManyForKey } from "@/lib/util";
import { supabase } from "@/lib/supabase";
import { syncTournament } from "@/lib/sync";
import CompeteNav from "@/components/CompeteNav";
import ScenarioBlock from "@/components/ScenarioBlock";

interface EntrantRow {
  week: string;
  handle: string;
  score: number;
  answered: number;
  done: boolean;
}

export default function TournamentPage() {
  const { state, ready, answerTournament, finalizeTournament, grantBadge } = useGame();
  const week = weekKey();
  const [field, setField] = useState<EntrantRow[]>([]);
  const [loadingField, setLoadingField] = useState(true);

  const challenges = useMemo(() => pickManyForKey(tournamentPool, week, "tourney", 5), [week]);

  const entry = state.tournaments[week] || { answers: [null, null, null, null, null], done: false };
  const answered = entry.answers.filter((a) => a !== null).length;
  const myScore = entry.answers.filter((a) => a === true).length * 100;
  const allAnswered = answered === 5;

  // Load this week's real entrants.
  useEffect(() => {
    supabase.from("tournament_scores").select("*").eq("week", week).then(({ data }) => {
      setField((data as EntrantRow[]) ?? []);
      setLoadingField(false);
    });
  }, [week]);

  // Push my score up whenever it changes so others see me in their standings.
  useEffect(() => {
    if (!ready || !state.profile.onboarded || answered === 0) return;
    syncTournament(week, state.profile.handle, myScore, answered, entry.done);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, week, myScore, answered, entry.done]);

  if (!ready) return <main className="page" />;

  // Standings: real entrants, with my row always reflecting local state.
  const others = field.filter((f) => f.handle !== state.profile.handle);
  const standings = others.map((f) => ({ handle: f.handle, score: f.score, isMe: false }));
  if (state.profile.onboarded) standings.push({ handle: state.profile.handle, score: myScore, isMe: true });
  standings.sort((a, b) => b.score - a.score);
  const myPlace = standings.findIndex((s) => s.isMe) + 1;

  const finalize = () => {
    finalizeTournament(week, myPlace);
    if (myPlace === 1) grantBadge("tournament-champ");
  };

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>WEEK {week.replace("w", "")} • MONDAY DROP, SUNDAY CLOSE</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>Weekly Tournament</h1>
      <CompeteNav />

      <div className="card card-banner row-between">
        <div>
          <div className="display" style={{ fontSize: 26, color: "var(--gold)" }}>{myScore} PTS</div>
          <div className="muted" style={{ fontSize: 12 }}>{answered}/5 challenges played</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="display" style={{ fontSize: 26 }}>
            {entry.done ? `FINAL: #${entry.placement}` : myPlace > 0 ? `#${myPlace}` : "—"}
          </div>
          <div className="muted" style={{ fontSize: 12 }}>of {standings.length} real {standings.length === 1 ? "entrant" : "entrants"}</div>
        </div>
      </div>

      {!entry.done && (
        <>
          {challenges.map((c, slot) => {
            const result = entry.answers[slot];
            return (
              <div className="card card-accent" key={c.id}>
                <div className="row-between" style={{ marginBottom: 8 }}>
                  <span className="kicker">CHALLENGE {slot + 1} OF 5</span>
                  {result !== null && (
                    <span className={`pill ${result ? "pill-green" : "pill-red"}`}>
                      {result ? "+100 PTS" : "0 PTS"}
                    </span>
                  )}
                </div>
                <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{c.title}</h3>
                <ScenarioBlock
                  situation={c.situation}
                  question={c.question}
                  options={c.options}
                  bestIndex={c.bestIndex}
                  coachNotes={c.coachNotes}
                  done={result !== null}
                  doneText={result ? "Nailed it. 100 points on the board." : "Missed it. The film never lies."}
                  onComplete={(won) => answerTournament(week, slot, won)}
                />
              </div>
            );
          })}

          {allAnswered && (
            <div className="card" style={{ textAlign: "center", borderColor: "var(--gold)" }}>
              <p className="display" style={{ fontSize: 20, marginBottom: 8 }}>
                All five in the books. Lock in your final placement?
              </p>
              <p className="muted" style={{ fontSize: 13, marginBottom: 12 }}>
                You&apos;re sitting at #{myPlace} with {myScore} points.
                {myPlace <= 3 ? " That's a podium finish." : ""}
              </p>
              <button className="btn btn-primary" onClick={finalize}>Certify the Result</button>
            </div>
          )}
        </>
      )}

      {entry.done && (
        <div className="card" style={{ textAlign: "center", borderColor: myPlace <= 3 ? "var(--gold)" : undefined }}>
          {entry.placement != null && entry.placement <= 3 && (
            <div style={{ fontSize: 40 }}>
              {entry.placement === 1 ? "🥇" : entry.placement === 2 ? "🥈" : "🥉"}
            </div>
          )}
          <div className="display" style={{ fontSize: 26 }}>
            FINAL PLACEMENT: #{entry.placement}
          </div>
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            {entry.placement && entry.placement <= 3
              ? "Podium finish. The ring is yours — check your badge case."
              : "No medal this week. New tournament drops Monday. Sharpen up."}
          </p>
        </div>
      )}

      <div className="section-head">
        <h2>Live Standings</h2>
        <span className="muted" style={{ fontSize: 12 }}>real players only</span>
      </div>
      <div className="card" style={{ padding: "6px 10px" }}>
        {loadingField ? (
          <p className="muted" style={{ textAlign: "center", padding: "20px 0" }}>Loading the field...</p>
        ) : standings.length === 0 ? (
          <p className="muted" style={{ textAlign: "center", padding: "20px 0" }}>
            Nobody has entered this week yet. Play a challenge to put your name up.
          </p>
        ) : (
          <table className="lb-table">
            <thead>
              <tr><th>#</th><th>Trader</th><th style={{ textAlign: "right" }}>Points</th></tr>
            </thead>
            <tbody>
              {standings.map((s, i) => (
                <tr key={s.handle} className={s.isMe ? "me" : ""}>
                  <td className={`lb-rank ${i < 3 ? "top" : ""}`}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                  </td>
                  <td>
                    {s.handle}
                    {s.isMe && <span className="pill pill-red" style={{ marginLeft: 8 }}>YOU</span>}
                  </td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
