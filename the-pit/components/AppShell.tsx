"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { useGame } from "@/lib/state";
import { rankForXp } from "@/lib/xp";
import { formatXp } from "@/lib/util";
import Ticker from "./Ticker";
import EventLayer from "./EventLayer";

const NAV = [
  { href: "/locker-room", label: "HQ", ico: "🏟️" },
  { href: "/seasons", label: "Train", ico: "📚" },
  { href: "/daily", label: "Daily", ico: "⚡" },
  { href: "/leaderboard", label: "Compete", ico: "🏆" },
  { href: "/community", label: "The Pit", ico: "📣" },
];

// Routes that show the full app chrome (ticker + bottom nav).
const APP_PREFIXES = [
  "/locker-room",
  "/seasons",
  "/episode",
  "/daily",
  "/leaderboard",
  "/tournament",
  "/duels",
  "/community",
  "/profile",
  "/pit-report",
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const { state, ready, loginTick } = useGame();
  const inApp = APP_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (ready && state.profile.onboarded) loginTick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, state.profile.onboarded, pathname]);

  const rank = rankForXp(state.xp);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link href={state.profile.onboarded ? "/locker-room" : "/"} className="logo">
            THE <span className="pit">PIT</span>
          </Link>
          {inApp && ready && state.profile.onboarded && (
            <Link href="/profile" className="topbar-stats">
              <span className="stat-chip">
                <span className="streak-flame">🔥</span> {state.streak.current}
              </span>
              <span className="stat-chip">
                <span className="v">{formatXp(state.xp)}</span> XP
              </span>
              <span className="stat-chip">{rank.name}</span>
            </Link>
          )}
        </div>
        {inApp && <Ticker />}
      </header>

      {children}

      {inApp && (
        <nav className="bottomnav">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                pathname.startsWith(n.href) ||
                (n.href === "/seasons" && pathname.startsWith("/episode")) ||
                (n.href === "/leaderboard" && (pathname.startsWith("/tournament") || pathname.startsWith("/duels")))
                  ? "active"
                  : ""
              }
            >
              <span className="ico">{n.ico}</span>
              {n.label}
            </Link>
          ))}
        </nav>
      )}

      <EventLayer />
    </>
  );
}
