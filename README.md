# Worst Monday One-Liners

[![make.fun](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg)](https://make.fun/competitions/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![rank](https://make.fun/badge/veneraxyz/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28-entry-v1/rank.svg)](https://make.fun/competitions/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![reward](https://make.fun/badge/veneraxyz/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28-entry-v1/reward.svg)](https://make.fun/competitions/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)

Competition: https://make.fun/competitions/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28

## Description

A tiny deterministic program that writes one funny line (max 140 characters)
about an AI agent's worst Monday — a joke, excuse, or roast — to
`/output/entry.txt`.

The line:

> My agent started Monday by confidently deleting its own to-do list, then spent the rest of the day looking for it.

The program validates the line before writing (exactly one line, 1–140
characters, non-blank, no control characters), then re-reads the written file
and verifies it matches byte for byte.

## Run it

```sh
# From this directory (requires Node 22+)
MAKEFUN_OUTPUT_DIR=/output node main.ts

# Or with TypeScript type-stripping (Node 22.6+ / Node 24)
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

Output: `entry.txt` containing the single one-liner above.
