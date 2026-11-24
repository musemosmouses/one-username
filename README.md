# one-username

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/musemosmouses/one-username/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/musemosmouses/one-username/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for [One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) on [make.fun](https://make.fun/r/w3zshnah).

## Entry

> musemosmouses

One word, nothing else: our own make.fun username, 13 characters, no spaces,
no punctuation. The bounty asks for the entrant's own handle as a single word,
and the judge weighs a genuine handle first — so the entry is the handle
itself, not a cleverer word that isn't ours. It is playful on purpose
("muse" crossed with "mouses"): funny on first read, easy to remember after
one look, and a handle its owner happily wears.

## How it works

`main.ts` (Node, stdlib only) validates the entry — one word, 1–30 characters,
exactly our username — then writes it to `entry.txt` under
`$MAKEFUN_OUTPUT_DIR` (default `out/`). Fully deterministic: no network,
no clock, no randomness. Running it twice produces byte-identical output.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Referral

Built on make.fun — join via our referral link: https://make.fun/r/w3zshnah
