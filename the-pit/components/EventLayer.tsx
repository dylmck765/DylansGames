"use client";

// Renders the celebration queue: XP toasts auto-dismiss; rank-ups and badges
// take over the screen until acknowledged. One event at a time, in order.

import { useEffect } from "react";
import { useGame } from "@/lib/state";
import { BADGE_MAP } from "@/lib/badges";
import { RANKS } from "@/lib/xp";
import { formatXp } from "@/lib/util";

export default function EventLayer() {
  const { events, dismissEvent } = useGame();
  const ev = events[0];

  useEffect(() => {
    if (!ev) return;
    if (ev.kind === "xp" || ev.kind === "streak") {
      const t = setTimeout(dismissEvent, 1900);
      return () => clearTimeout(t);
    }
    if (ev.kind === "badge" && !BADGE_MAP[ev.badgeId]) dismissEvent();
  }, [ev, dismissEvent]);

  if (!ev) return null;

  if (ev.kind === "xp") {
    return (
      <div className="toast-layer">
        <div className="toast">
          <span className="xp-pop">+{formatXp(ev.amount)} XP</span>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>{ev.label}</span>
        </div>
      </div>
    );
  }

  if (ev.kind === "streak") {
    return (
      <div className="toast-layer">
        <div className="toast">
          🔥 <span className="xp-pop">DAY {ev.day}</span>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>+{formatXp(ev.xp)} XP streak bonus</span>
        </div>
      </div>
    );
  }

  if (ev.kind === "rankup") {
    const rank = RANKS[ev.rankIndex];
    return (
      <div className="overlay" onClick={dismissEvent}>
        <div className="rankup-card">
          <div className="kicker">⬆ RANK UP ⬆</div>
          <div className="big">{ev.rankName}</div>
          <p className="muted" style={{ marginBottom: 18 }}>
            {rank?.blurb ?? "The crowd is on its feet."}
          </p>
          <button className="btn btn-primary" onClick={dismissEvent}>
            Let&apos;s Go
          </button>
        </div>
      </div>
    );
  }

  // badge — unknown ids can't be queued (grant paths validate against BADGE_MAP),
  // but render nothing rather than mutate state mid-render if one ever slips in.
  const badge = BADGE_MAP[ev.badgeId];
  if (!badge) return null;
  return (
    <div className="overlay" onClick={dismissEvent}>
      <div className="rankup-card" style={{ borderColor: "var(--gold)", boxShadow: "0 0 60px rgba(255,198,45,0.25)" }}>
        <div className="kicker" style={{ color: "var(--gold)" }}>
          🏅 BADGE UNLOCKED
        </div>
        <div style={{ fontSize: 60, margin: "12px 0" }}>{badge.icon}</div>
        <div className="big" style={{ color: "var(--gold)", textShadow: "none", fontSize: 36 }}>
          {badge.name}
        </div>
        <p className="muted" style={{ marginBottom: 18 }}>{badge.desc}</p>
        <button className="btn btn-primary" onClick={dismissEvent}>
          Add It to the Case
        </button>
      </div>
    </div>
  );
}
