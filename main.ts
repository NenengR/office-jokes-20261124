// Make the AI Judge Laugh: Office Jokes
// Writes one office joke to /output/entry.txt (UTF-8, 1-199 chars).
// Revision note: output path resolves relative to this script, never the CWD,
// so the grader's run from any directory writes the same entry.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line = "Our boss said the door is always open, so I walked in with my resignation and he asked me to book a slot first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
