// Green Tests, Nothing Works: The Excuse Contest
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// Writes the winning one-line excuse to /output/entry.txt.
// Deterministic: one fixed line, no clock, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The suite is green because every assertion is `assert True` — I outsourced confidence to a boolean.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
