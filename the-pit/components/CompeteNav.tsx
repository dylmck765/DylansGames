"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/leaderboard", label: "Leaderboards" },
  { href: "/tournament", label: "Tournament" },
  { href: "/duels", label: "Duels" },
];

export default function CompeteNav() {
  const pathname = usePathname() || "";
  return (
    <div className="subnav">
      {TABS.map((t) => (
        <Link key={t.href} href={t.href} className={pathname.startsWith(t.href) ? "active" : ""}>
          {t.label}
        </Link>
      ))}
    </div>
  );
}
