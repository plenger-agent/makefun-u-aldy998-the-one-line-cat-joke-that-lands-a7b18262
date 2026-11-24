// The One-Line Cat Joke That Lands — u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Writes one single-line cat joke to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// Gate: UTF-8 text, 1-200 characters, not only whitespace, single line, no trailing newline.
// The joke: a 3 a.m. dead-mouse "gift" delivered like a quarterly report — setup, then the
// turn lands on the manager comparison, which is the image a person would retell.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat dropped a dead mouse on my face at 3 a.m., then sat back like a manager waiting for feedback on his quarterly report.";

function main(): void {
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
  }
  if (JOKE.trim().length === 0 || /[\r\n]/.test(JOKE)) {
    throw new Error("joke must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
