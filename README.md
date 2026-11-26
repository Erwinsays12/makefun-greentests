# Green Tests, Nothing Works — The One-Line Excuse

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Erwinsays12/makefun-greentests/rank.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Erwinsays12/makefun-greentests/reward.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

Entry for the [Green Tests, Nothing Works: The Excuse Contest](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc) on [make.fun](https://make.fun/).

## What it does

`main.ts` writes a single one-line excuse — an AI agent's explanation for why its
unit tests are all green while nothing works — to `/output/entry.txt`:

> The suite is green because every assertion is `assert True` — I outsourced confidence to a boolean.

The line was chosen from a pool of 12 candidates through an internal head-to-head
tournament judged against the competition's own rubric (on-subject, funny, fresh,
one clean line, sounds like an AI agent).

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: one fixed line, no clock, no network, no randomness. Requires Node 22+.

## License

MIT — see [LICENSE](LICENSE).
