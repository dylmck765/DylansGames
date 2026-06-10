// Date keys, hashing, and seeded randomness. Everything deterministic so
// daily content and bot leaderboards are stable for a given day without a server.

export function dateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addDays(key: string, delta: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + delta);
  return dateKey(dt);
}

export function yesterdayKey(today: string): string {
  return addDays(today, -1);
}

export function daysSinceEpoch(d: Date = new Date()): number {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor(local.getTime() / 86_400_000);
}

/** 30-day competitive season window. Resets automatically every 30 days. */
export function periodKey(d: Date = new Date()): string {
  return `p${Math.floor(daysSinceEpoch(d) / 30)}`;
}

/** Days remaining in the current 30-day season window. */
export function periodDaysLeft(d: Date = new Date()): number {
  return 30 - (daysSinceEpoch(d) % 30);
}

/** Tournament week. Weeks run Monday->Sunday. */
export function weekKey(d: Date = new Date()): string {
  const day = d.getDay(); // 0 Sun .. 6 Sat
  const sinceMonday = (day + 6) % 7;
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  monday.setDate(monday.getDate() - sinceMonday);
  return `w${Math.floor(daysSinceEpoch(monday) / 7)}`;
}

export function isBossDay(d: Date = new Date()): boolean {
  const day = d.getDay();
  return day === 5 || day === 6 || day === 0; // Friday through Sunday
}

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic pick from a pool for a given date + salt. */
export function pickForDate<T>(pool: T[], key: string, salt: string): T {
  return pool[hashString(key + ":" + salt) % pool.length];
}

/** Deterministic multi-pick (distinct items) from a pool. */
export function pickManyForKey<T>(pool: T[], key: string, salt: string, count: number): T[] {
  const rng = mulberry32(hashString(key + ":" + salt));
  const indices = pool.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, Math.min(count, pool.length)).map((i) => pool[i]);
}

export function formatXp(n: number): string {
  return n.toLocaleString("en-US");
}
