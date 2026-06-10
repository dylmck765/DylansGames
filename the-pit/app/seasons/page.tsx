"use client";

// The full six-season schedule.

import Link from "next/link";
import { useGame } from "@/lib/state";
import { SEASONS, isEpisodeUnlocked } from "@/lib/content";
import { episodeComplete } from "@/lib/progress";

export default function SeasonsPage() {
  const { state, ready } = useGame();
  if (!ready) return <main className="page" />;

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>THE PROGRAM</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 16 }}>Six Seasons to the Hall</h1>

      {SEASONS.map((season) => {
        const done = season.episodes.filter((e) => episodeComplete(state.episodes[e.id])).length;
        const anyUnlocked = season.episodes.some((e) => isEpisodeUnlocked(e.id, state));
        return (
          <Link key={season.id} href={`/seasons/${season.id}`}>
            <div className="card card-accent" style={{ opacity: anyUnlocked ? 1 : 0.5 }}>
              <div className="row-between">
                <div>
                  <div className="kicker">SEASON {season.id}{anyUnlocked ? "" : " • LOCKED"}</div>
                  <h2 className="display" style={{ fontSize: 24 }}>{season.title}</h2>
                  <p className="muted" style={{ fontSize: 13 }}>{season.subtitle}</p>
                </div>
                <div style={{ textAlign: "right", minWidth: 70 }}>
                  <div className="display" style={{ fontSize: 26, color: done === 10 ? "var(--green)" : "var(--gold)" }}>
                    {done}/10
                  </div>
                  <div className="muted" style={{ fontSize: 11, textTransform: "uppercase" }}>episodes</div>
                </div>
              </div>
              <div className="progress" style={{ marginTop: 10 }}>
                <div style={{ width: `${(done / 10) * 100}%` }} />
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
