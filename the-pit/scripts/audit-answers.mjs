// Audit the question pools for answer-pattern tells:
//   1. how often the correct option is the strictly longest option
//   2. how correctIndex/bestIndex values are distributed
// Run from the-pit/: node scripts/audit-answers.mjs

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const FILES = [
  "data/seasons/season1.ts", "data/seasons/season2.ts", "data/seasons/season3.ts",
  "data/seasons/season4.ts", "data/seasons/season5.ts", "data/seasons/season6.ts",
  "data/daily-content.ts", "data/tournament.ts", "data/duels.ts", "data/placement.ts",
];

function loadModule(src) {
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  new Function("module", "exports", "require", js)(mod, mod.exports, () => {
    throw new Error("runtime import in data file — audit script needs updating");
  });
  return mod.exports;
}

// Recursively find anything shaped like a multiple-choice question.
function collect(node, out, seen = new Set()) {
  if (!node || typeof node !== "object" || seen.has(node)) return;
  seen.add(node);
  if (Array.isArray(node)) {
    for (const item of node) collect(item, out, seen);
    return;
  }
  const idx = typeof node.correctIndex === "number" ? node.correctIndex
    : typeof node.bestIndex === "number" ? node.bestIndex : null;
  if (idx !== null && Array.isArray(node.options)) {
    out.push({ options: node.options, idx, id: node.id ?? "?" });
  }
  for (const v of Object.values(node)) collect(v, out, seen);
}

let grandTotal = 0, grandLongest = 0;
const grandDist = [0, 0, 0, 0];
let bad = 0;

for (const rel of FILES) {
  const src = await readFile(join(root, rel), "utf8");
  const exported = loadModule(src);
  const qs = [];
  collect(exported, qs);

  let longest = 0;
  const dist = [0, 0, 0, 0];
  for (const q of qs) {
    if (q.idx < 0 || q.idx >= q.options.length) {
      console.error(`  !! ${rel} ${q.id}: index ${q.idx} out of range`);
      bad++;
      continue;
    }
    dist[q.idx]++;
    const lens = q.options.map((o) => String(o).length);
    if (lens[q.idx] === Math.max(...lens) && lens.filter((l) => l === lens[q.idx]).length === 1) {
      longest++;
    }
  }
  grandTotal += qs.length;
  grandLongest += longest;
  dist.forEach((d, i) => (grandDist[i] += d));
  const pct = qs.length ? Math.round((longest / qs.length) * 100) : 0;
  console.log(`${rel}: ${qs.length} questions | correct-is-longest ${longest} (${pct}%) | index dist [${dist.join(", ")}]`);
}

console.log("---");
const pct = grandTotal ? Math.round((grandLongest / grandTotal) * 100) : 0;
console.log(`TOTAL: ${grandTotal} questions | correct-is-longest ${grandLongest} (${pct}%) | index dist [${grandDist.join(", ")}]`);
if (bad) {
  console.error(`${bad} questions with out-of-range indices`);
  process.exit(1);
}
