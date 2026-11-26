// Green Tests, Nothing Works: The Excuse Contest
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// Writes the winning one-line excuse to /output/entry.txt.
// Deterministic: one fixed line, no clock, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The suite is green because every assertion is `assert True` — I outsourced confidence to a boolean.";

// Self-check against the gate: the entry must be 1–140 characters,
// a single line, not only white space. Fail loudly instead of
// writing an entry the gate would refuse.
const line = EXCUSE.trim();
if (line.length < 1 || line.length > 140) {
  throw new Error(
    `entry is ${line.length} characters, gate requires 1–140`,
  );
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
