"use client";

// One season's episode list.

import Link from "next/link";
import { useParams } from "next/navigation";
import { useGame } from "@/lib/state";
import { getSeason, isEpisodeUnlocked } from "@/lib/content";
import { episodeComplete } from "@/lib/progress";

export default function SeasonPage() {
  const params = useParams<{ seasonId: string }>();
  const { state, ready } = useGame();
  const season = getSeason(Number(params.seasonId));

  if (!ready) return <main className="page" />;
  if (!season) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <h2 className="display" style={{ fontSize: 26 }}>That season doesn&apos;t exist.</h2>
        <Link href="/seasons" className="btn" style={{ marginTop: 14 }}>Back to the Schedule</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link href="/seasons" className="kicker" style={{ display: "inline-block", marginTop: 10 }}>
        ← ALL SEASONS
      </Link>
      <div className="kicker" style={{ marginTop: 8 }}>SEASON {season.id}</div>
      <h1 className="display-italic" style={{ fontSize: 32 }}>{season.title}</h1>
      <p className="muted" style={{ margin: "6px 0 18px", fontSize: 14 }}>{season.description}</p>

      {season.episodes.map((ep) => {
        const p = state.episodes[ep.id];
        const complete = episodeComplete(p);
        const unlocked = isEpisodeUnlocked(ep.id, state);
        const inner = (
          <div className="card row-between" style={{ padding: "13px 16px", opacity: unlocked ? 1 : 0.45 }}>
            <div className="row" style={{ minWidth: 0 }}>
              <span
                className="display"
                style={{
                  fontSize: 22,
                  color: complete ? "var(--green)" : unlocked ? "var(--red)" : "var(--muted)",
                  width: 34,
                }}
              >
                {complete ? "✓" : ep.number}
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="display" style={{ fontSize: 18, lineHeight: 1.15 }}>{ep.title}</div>
                <div className="muted" style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {ep.tagline}
                </div>
              </div>
            </div>
            <span className="pill" style={{ flexShrink: 0 }}>
              {!unlocked ? "🔒" : complete ? (p?.perfect ? "⭐ PERFECT" : "DONE") : "PLAY"}
            </span>
          </div>
        );
        return unlocked ? (
          <Link key={ep.id} href={`/episode/${ep.id}`}>{inner}</Link>
        ) : (
          <div key={ep.id}>{inner}</div>
        );
      })}
    </main>
  );
}
