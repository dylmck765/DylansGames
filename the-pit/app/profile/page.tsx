"use client";

// Player profile: career stats, the badge case, share card, and reset.

import Link from "next/link";
import { useState } from "react";
import { useGame } from "@/lib/state";
import { rankForXp } from "@/lib/xp";
import { BADGES } from "@/lib/badges";
import { episodeComplete } from "@/lib/progress";
import ShareCard from "@/components/ShareCard";

export default function ProfilePage() {
  const { state, ready, resetAll } = useGame();
  const [confirmReset, setConfirmReset] = useState(false);

  if (!ready) return <main className="page" />;
  if (!state.profile.onboarded) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <h2 className="display" style={{ fontSize: 28 }}>No player file found.</h2>
        <Link href="/onboarding" className="btn btn-primary" style={{ marginTop: 14 }}>Take the Tryout</Link>
      </main>
    );
  }

  const rank = rankForXp(state.xp);
  const episodesDone = Object.values(state.episodes).filter(episodeComplete).length;
  const owned = new Set(state.badges);

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>PLAYER FILE</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 16 }}>{state.profile.handle}</h1>

      <div className="section-head"><h2>Your Player Card</h2></div>
      <div className="card">
        <ShareCard
          handle={state.profile.handle}
          rankName={rank.name}
          xp={state.xp}
          badgeCount={state.badges.length}
          streak={state.streak.current}
          episodesDone={episodesDone}
        />
        <p className="muted" style={{ fontSize: 12, marginTop: 8, textAlign: "center" }}>
          Post it. Tag a friend. Make them take the tryout.
        </p>
      </div>

      <div className="section-head"><h2>Career Stats</h2></div>
      <div className="card">
        <table className="lb-table">
          <tbody>
            <Stat l="Rank" v={rank.name} />
            <Stat l="Career XP" v={state.xp.toLocaleString()} />
            <Stat l="Season XP (30-day)" v={state.seasonXp.toLocaleString()} />
            <Stat l="Current streak" v={`${state.streak.current} days`} />
            <Stat l="Longest streak" v={`${state.streak.longest} days`} />
            <Stat l="Episodes completed" v={`${episodesDone} / 60`} />
            <Stat l="Perfect quizzes" v={String(state.counters.perfectQuizzes)} />
            <Stat l="Scenario wins" v={String(state.counters.scenarioWins)} />
            <Stat l="Paper trades" v={String(state.counters.papersDone)} />
            <Stat l="Duel record" v={`${state.duels.wins}W — ${state.duels.losses}L`} />
            <Stat l="Boss challenges" v={String(state.counters.bossDone)} />
            <Stat l="Theses posted" v={String(state.posts.length)} />
          </tbody>
        </table>
      </div>

      <div className="section-head">
        <h2>The Badge Case</h2>
        <span className="pill pill-gold">{state.badges.length} / {BADGES.length}</span>
      </div>
      <div className="badge-grid" style={{ marginBottom: 16 }}>
        {BADGES.map((b) => {
          const has = owned.has(b.id);
          return (
            <div key={b.id} className={`badge-tile ${has ? b.tier : "locked"}`}>
              <div className="ico">{b.icon}</div>
              <div className="nm">{b.name}</div>
              <div className="ds">{b.desc}</div>
            </div>
          );
        })}
      </div>

      <div className="section-head"><h2>The Pit Report</h2></div>
      <Link href="/pit-report">
        <div className="card row-between">
          <span>Weekly digest templates — ready to send to your crew.</span>
          <span className="pill">VIEW →</span>
        </div>
      </Link>

      <div className="section-head"><h2>Danger Zone</h2></div>
      <div className="card" style={{ borderColor: "var(--red)" }}>
        {!confirmReset ? (
          <button className="btn btn-block" onClick={() => setConfirmReset(true)}>
            Retire This Player (Reset Everything)
          </button>
        ) : (
          <>
            <p style={{ marginBottom: 10, textAlign: "center" }}>
              This wipes your XP, badges, streak — the whole career. No undo. You sure?
            </p>
            <div className="grid-2">
              <button className="btn btn-primary" onClick={resetAll}>Yes, Full Reset</button>
              <button className="btn" onClick={() => setConfirmReset(false)}>Keep My Career</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function Stat({ l, v }: { l: string; v: string }) {
  return (
    <tr>
      <td className="muted">{l}</td>
      <td style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{v}</td>
    </tr>
  );
}
