// One Line, One Chill — v2 rebuild (25 Nov 2026).
// A single sentence of horror, 115 characters, written to /output/entry.txt.
// The line: a bite mark that returns every morning, left by teeth too
// small to be human. One sentence, one chill, no gore for its own sake.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This is the third morning I have woken up with a bite mark on my shoulder, and the teeth are too small to be human.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);

console.log(`wrote ${outFile} (${LINE.length} characters)`);
console.log(LINE);

// v2 rebuild note: the v1 scar line lost its independent duel (2W-7L), so
// this line was re-authored from zero in this session to beat the five
// strongest field entries on fright and vividness, not on freshness alone.
