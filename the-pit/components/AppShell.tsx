"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { useGame } from "@/lib/state";
import { rankForXp } from "@/lib/xp";
import { formatXp } from "@/lib/util";
import Ticker from "./Ticker";
import EventLayer from "./EventLayer";

// Clean line icons for the bottom nav — sleeker than emoji and they take
// the active color from CSS via currentColor.
function NavIcon({ name }: { name: string }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5H6.5A2.5 2.5 0 0 0 4 22z" />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 4h10v6a5 5 0 0 1-10 0z" />
          <path d="M7 6H4a3 3 0 0 0 3 5" />
          <path d="M17 6h3a3 3 0 0 1-3 5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-8 8H4l2-3.5A8 8 0 1 1 21 12z" />
        </svg>
      );
    default:
      return null;
  }
}

const NAV = [
  { href: "/locker-room", label: "HQ", ico: "home" },
  { href: "/seasons", label: "Train", ico: "book" },
  { href: "/daily", label: "Daily", ico: "zap" },
  { href: "/leaderboard", label: "Compete", ico: "trophy" },
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
                <span className="v">{state.streak.current}</span> day{state.streak.current === 1 ? "" : "s"}
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
              <span className="ico"><NavIcon name={n.ico} /></span>
              {n.label}
            </Link>
          ))}
        </nav>
      )}

      <footer
        style={{
          textAlign: "center",
          padding: inApp ? "18px 16px 92px" : "18px 16px 26px",
          fontSize: 11,
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.36)",
        }}
      >
        Puma Capital, LLC
      </footer>

      <EventLayer />
    </>
  );
}
