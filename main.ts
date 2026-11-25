import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent started Monday by confidently deleting its own to-do list, then spent the rest of the day looking for it.";

function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("line must not be empty");
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be blank");
  }
  if (line.length > 140) {
    throw new Error(`line is ${line.length} chars, max 140`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be exactly one line");
  }
  for (const ch of line) {
    const code = ch.charCodeAt(0);
    if (code < 32 || code === 127) {
      throw new Error("line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");
  // Read-back guard: the file on disk must be exactly what we wrote.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== LINE + "\n") {
    throw new Error("read-back mismatch: entry.txt does not match the line");
  }
  validateLine(readBack.replace(/\n$/, ""));
}

main();
