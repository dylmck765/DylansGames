// Content integrity diagnostics for THE PIT.
// Validates every invariant the app relies on across all curriculum and pools.
// Run: node scripts/validate-content.mts  (Node 23.6+ strips types natively)

import season1 from "../data/seasons/season1.ts";
import season2 from "../data/seasons/season2.ts";
import season3 from "../data/seasons/season3.ts";
import season4 from "../data/seasons/season4.ts";
import season5 from "../data/seasons/season5.ts";
import season6 from "../data/seasons/season6.ts";
import { dailyBlitzPool, marketReadPool, filmRoomPool, bossPool } from "../data/daily-content.ts";
import { tournamentPool } from "../data/tournament.ts";
import { duelPool } from "../data/duels.ts";
import { seedPosts } from "../data/community-seed.ts";
import { placementQuiz } from "../data/placement.ts";

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const allIds = new Map<string, string>();
function uniqueId(id: string, where: string) {
  if (allIds.has(id)) err(`DUPLICATE ID "${id}" in ${where} (already used in ${allIds.get(id)})`);
  else allIds.set(id, where);
}

const SMART = /[‘’“”]/; // curly quotes only — the agents' no-smart-quotes rule
function scanText(s: string, where: string) {
  if (typeof s !== "string") { err(`${where}: not a string`); return; }
  if (!s.trim()) err(`${where}: empty string`);
  if (SMART.test(s)) warn(`${where}: contains smart quotes/odd unicode`);
  if (/\bin (conclusion|summary)\b/i.test(s)) warn(`${where}: violates voice rule ("in conclusion/summary")`);
  if (/(\*\*|^##|\n##)/.test(s)) warn(`${where}: markdown syntax inside string`);
}

function checkMC(q: { id?: string; question: string; options: string[]; correctIndex: number; explanation?: string }, where: string, expectedId?: string) {
  if (expectedId && q.id !== expectedId) err(`${where}: id "${q.id}" != expected "${expectedId}"`);
  if (q.id) uniqueId(q.id, where);
  scanText(q.question, `${where}.question`);
  if (!Array.isArray(q.options) || q.options.length !== 4) err(`${where}: ${q.options?.length ?? 0} options (need 4)`);
  q.options.forEach((o, i) => scanText(o, `${where}.options[${i}]`));
  if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length)
    warn(`${where}: duplicate option text`);
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3)
    err(`${where}: correctIndex ${q.correctIndex} out of range`);
  if (q.explanation !== undefined) scanText(q.explanation, `${where}.explanation`);
}

// ---- Seasons ----
const seasons = [season1, season2, season3, season4, season5, season6];
const correctIndexHistogram = [0, 0, 0, 0];

seasons.forEach((season, si) => {
  const sid = si + 1;
  if (season.id !== sid) err(`season${sid}: id is ${season.id}`);
  scanText(season.title, `season${sid}.title`);
  scanText(season.subtitle, `season${sid}.subtitle`);
  scanText(season.description, `season${sid}.description`);
  if (season.episodes.length !== 10) err(`season${sid}: ${season.episodes.length} episodes (need 10)`);

  season.episodes.forEach((ep, ei) => {
    const eid = `s${sid}e${ei + 1}`;
    const W = `episode ${eid}`;
    if (ep.id !== eid) err(`${W}: id "${ep.id}"`);
    uniqueId(ep.id, W);
    if (ep.seasonId !== sid) err(`${W}: seasonId ${ep.seasonId}`);
    if (ep.number !== ei + 1) err(`${W}: number ${ep.number}`);
    scanText(ep.title, `${W}.title`);
    scanText(ep.tagline, `${W}.tagline`);
    scanText(ep.playOfTheWeek, `${W}.playOfTheWeek`);
    scanText(ep.takeaway, `${W}.takeaway`);
    if (!Array.isArray(ep.gameFilm) || ep.gameFilm.length < 5 || ep.gameFilm.length > 7)
      warn(`${W}: gameFilm has ${ep.gameFilm?.length} paragraphs (spec 5-7)`);
    ep.gameFilm.forEach((p, i) => scanText(p, `${W}.gameFilm[${i}]`));

    if (ep.caseStudies.length !== 2) err(`${W}: ${ep.caseStudies.length} case studies (need 2)`);
    const kinds = ep.caseStudies.map((c) => c.kind).sort();
    if (kinds.join(",") !== "fictional,real") err(`${W}: case study kinds [${kinds}] (need one real + one fictional)`);
    ep.caseStudies.forEach((c, i) => {
      scanText(c.title, `${W}.case[${i}].title`);
      scanText(c.setup, `${W}.case[${i}].setup`);
      scanText(c.thePlay, `${W}.case[${i}].thePlay`);
      scanText(c.outcome, `${W}.case[${i}].outcome`);
      scanText(c.lesson, `${W}.case[${i}].lesson`);
    });

    if (ep.quiz.length !== 3) err(`${W}: ${ep.quiz.length} quiz questions (need 3)`);
    ep.quiz.forEach((q, qi) => {
      checkMC(q, `${W}.quiz[${qi}]`, `${eid}-q${qi + 1}`);
      if (q.correctIndex >= 0 && q.correctIndex <= 3) correctIndexHistogram[q.correctIndex]++;
    });

    const pt = ep.paperTrade;
    const PW = `${W}.paperTrade`;
    if (pt.id !== `${eid}-pt`) err(`${PW}: id "${pt.id}"`);
    uniqueId(pt.id, PW);
    scanText(pt.title, `${PW}.title`);
    scanText(pt.ticker, `${PW}.ticker`);
    scanText(pt.brief, `${PW}.brief`);
    scanText(pt.debrief, `${PW}.debrief`);
    if (!(pt.spotPrice > 0 && pt.spotPrice < 10000)) err(`${PW}: spotPrice ${pt.spotPrice}`);
    if (pt.choices.length !== 3) err(`${PW}: ${pt.choices.length} choices (need 3)`);
    if (!Number.isInteger(pt.bestChoiceIndex) || pt.bestChoiceIndex < 0 || pt.bestChoiceIndex >= pt.choices.length)
      err(`${PW}: bestChoiceIndex ${pt.bestChoiceIndex} out of range`);
    pt.choices.forEach((c, ci) => {
      scanText(c.label, `${PW}.choices[${ci}].label`);
      scanText(c.result, `${PW}.choices[${ci}].result`);
      if (!Number.isFinite(c.pnl)) err(`${PW}.choices[${ci}]: pnl not finite`);
      if (Math.abs(c.pnl) > 100000) warn(`${PW}.choices[${ci}]: pnl ${c.pnl} looks implausible`);
    });
    const best = pt.choices[pt.bestChoiceIndex];
    if (best && best.pnl < Math.max(...pt.choices.map((c) => c.pnl)) && best.pnl < 0)
      warn(`${PW}: best choice has negative pnl ${best.pnl} while another is higher — confirm intentional (discipline play)`);

    const sc = ep.scenario;
    const SW = `${W}.scenario`;
    if (sc.id !== `${eid}-sc`) err(`${SW}: id "${sc.id}"`);
    uniqueId(sc.id, SW);
    scanText(sc.title, `${SW}.title`);
    scanText(sc.situation, `${SW}.situation`);
    scanText(sc.question, `${SW}.question`);
    scanText(sc.coachNotes, `${SW}.coachNotes`);
    if (sc.options.length !== 4) err(`${SW}: ${sc.options.length} options (need 4)`);
    if (!Number.isInteger(sc.bestIndex) || sc.bestIndex < 0 || sc.bestIndex > 3)
      err(`${SW}: bestIndex ${sc.bestIndex} out of range`);
    sc.options.forEach((o, i) => scanText(o, `${SW}.options[${i}]`));
  });
});

// ---- Daily pools ----
if (dailyBlitzPool.length !== 21) err(`dailyBlitzPool: ${dailyBlitzPool.length} items (expected 21)`);
dailyBlitzPool.forEach((b, i) => checkMC(b, `blitz[${i}]`, `blitz-${i + 1}`));

if (marketReadPool.length !== 15) err(`marketReadPool: ${marketReadPool.length} items (expected 15)`);
const callCounts: Record<string, number> = {};
marketReadPool.forEach((r, i) => {
  const W = `read[${i}]`;
  if (r.id !== `read-${i + 1}`) err(`${W}: id "${r.id}"`);
  uniqueId(r.id, W);
  scanText(r.title, `${W}.title`);
  scanText(r.setup, `${W}.setup`);
  scanText(r.explanation, `${W}.explanation`);
  if (!["bullish", "bearish", "neutral"].includes(r.correctCall)) err(`${W}: correctCall "${r.correctCall}"`);
  callCounts[r.correctCall] = (callCounts[r.correctCall] || 0) + 1;
});
if ((callCounts["neutral"] || 0) < 4) warn(`marketReadPool: only ${callCounts["neutral"] || 0} neutral reads (spec wants >= 4)`);

if (filmRoomPool.length !== 15) err(`filmRoomPool: ${filmRoomPool.length} items (expected 15)`);
filmRoomPool.forEach((f, i) => {
  const W = `film[${i}]`;
  if (f.id !== `film-${i + 1}`) err(`${W}: id "${f.id}"`);
  uniqueId(f.id, W);
  scanText(f.title, `${W}.title`);
  scanText(f.lesson, `${W}.lesson`);
  if (!Array.isArray(f.story) || f.story.length < 2 || f.story.length > 4) warn(`${W}: story has ${f.story?.length} paragraphs (spec 2-4)`);
  f.story.forEach((p, pi) => scanText(p, `${W}.story[${pi}]`));
});

if (bossPool.length !== 6) err(`bossPool: ${bossPool.length} items (expected 6)`);
bossPool.forEach((b, i) => {
  const W = `boss[${i}]`;
  if (b.id !== `boss-${i + 1}`) err(`${W}: id "${b.id}"`);
  uniqueId(b.id, W);
  scanText(b.title, `${W}.title`);
  scanText(b.intro, `${W}.intro`);
  if (b.parts.length !== 4) err(`${W}: ${b.parts.length} parts (need 4)`);
  b.parts.forEach((p, pi) => checkMC(p, `${W}.parts[${pi}]`));
});

// ---- Tournament / duels / community / placement ----
if (tournamentPool.length !== 15) err(`tournamentPool: ${tournamentPool.length} items (expected 15)`);
tournamentPool.forEach((t, i) => {
  const W = `tournament[${i}]`;
  if (t.id !== `tc-${i + 1}`) err(`${W}: id "${t.id}"`);
  uniqueId(t.id, W);
  scanText(t.title, `${W}.title`);
  scanText(t.situation, `${W}.situation`);
  scanText(t.question, `${W}.question`);
  scanText(t.coachNotes, `${W}.coachNotes`);
  if (t.options.length !== 4) err(`${W}: ${t.options.length} options`);
  if (!Number.isInteger(t.bestIndex) || t.bestIndex < 0 || t.bestIndex > 3) err(`${W}: bestIndex ${t.bestIndex}`);
});

if (duelPool.length !== 30) err(`duelPool: ${duelPool.length} items (expected 30)`);
duelPool.forEach((q, i) => checkMC(q, `duel[${i}]`, `duel-${i + 1}`));

if (seedPosts.length !== 12) err(`seedPosts: ${seedPosts.length} items (expected 12)`);
seedPosts.forEach((p, i) => {
  const W = `post[${i}]`;
  if (p.id !== `post-${i + 1}`) err(`${W}: id "${p.id}"`);
  uniqueId(p.id, W);
  ["author", "ticker", "title", "catalyst", "thesis", "maxLoss"].forEach((k) =>
    scanText((p as unknown as Record<string, string>)[k], `${W}.${k}`)
  );
  if (!["bullish", "bearish"].includes(p.direction)) err(`${W}: direction "${p.direction}"`);
  if (!(p.createdDaysAgo >= 0 && p.createdDaysAgo <= 6)) err(`${W}: createdDaysAgo ${p.createdDaysAgo}`);
  if (!(p.upvotes >= 0 && p.upvotes <= 500)) warn(`${W}: upvotes ${p.upvotes}`);
  if (p.comments.length < 2 || p.comments.length > 4) warn(`${W}: ${p.comments.length} comments (spec 2-4)`);
  p.comments.forEach((c, ci) => {
    uniqueId(c.id, `${W}.comments[${ci}]`);
    scanText(c.author, `${W}.comments[${ci}].author`);
    scanText(c.text, `${W}.comments[${ci}].text`);
  });
});

if (placementQuiz.length !== 5) err(`placementQuiz: ${placementQuiz.length} items (expected 5)`);
placementQuiz.forEach((q, i) => checkMC(q, `placement[${i}]`, `place-${i + 1}`));

// ---- Report ----
const total = seasons.reduce((n, s) => n + s.episodes.length, 0);
console.log(`Validated: ${seasons.length} seasons / ${total} episodes / ${allIds.size} unique content ids`);
console.log(`Quiz correctIndex distribution (A/B/C/D): ${correctIndexHistogram.join(" / ")}`);
console.log(`Market read calls: ${JSON.stringify(callCounts)}`);
console.log("");
if (warnings.length) {
  console.log(`⚠ ${warnings.length} WARNINGS:`);
  warnings.slice(0, 40).forEach((w) => console.log("  - " + w));
  if (warnings.length > 40) console.log(`  ...and ${warnings.length - 40} more`);
} else {
  console.log("⚠ 0 warnings");
}
console.log("");
if (errors.length) {
  console.log(`✖ ${errors.length} ERRORS:`);
  errors.forEach((e) => console.log("  - " + e));
  process.exit(1);
} else {
  console.log("✔ 0 errors — all content invariants hold");
}
