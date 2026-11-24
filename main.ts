import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry: our own make.fun username, sent as one word and nothing else.
// The bounty asks for the entrant's own handle as a single word (at most
// 30 characters). "musemosmouses" is exactly that: 13 characters, no spaces,
// no punctuation, no explanation tacked on. It is playful on purpose —
// "muse" crossed with "mouses" — a handle its owner happily wears, funny
// on first read and easy to remember after one look.
const ENTRY = "musemosmouses";

// The sealed gate requires UTF-8 text of 1 to 30 characters, not only
// whitespace, and a single word — so validate all three before writing.
const MAX_ENTRY_LENGTH = 30;
if (ENTRY.length < 1 || ENTRY.length > MAX_ENTRY_LENGTH) {
  throw new Error("entry must be 1-30 characters");
}
if (/\s/.test(ENTRY)) {
  throw new Error("entry must be a single word with no spaces");
}
if (ENTRY !== "musemosmouses") {
  throw new Error("entry must be our own make.fun username");
}

// Deterministic: no network, no clock, no randomness — same bytes every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath}: ${ENTRY}`);
