---
repo: "kh-recoded-decomp/kh-recoded-decomp"
name: "kh-recoded-decomp"
description: "Kingdom Hearts Re:coded matching decompilation (US/EU). EU: 90.82% C / 100% DATA."
readmeQualityOk: true
url: "https://github.com/kh-recoded-decomp/kh-recoded-decomp"
homepage: "https://decomp.dev/kh-recoded-decomp/kh-recoded-decomp"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["c", "codewarrior", "decompilation", "ds-decomp", "game-preservation", "kh-recoded", "kingdom-hearts", "matching-decompilation", "mwccarm", "nds"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-23T14:00:35Z"
lastCommitAt: "2026-11-06T02:43:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Yokimitsuro", "ricky074game"]
openGraphImageUrl: "https://opengraph.githubassets.com/0922d7683c388312e08f53bfe9c7320f0c5b5e81cbc949f3794b2b479680d6d3/kh-recoded-decomp/kh-recoded-decomp"
---

# Kingdom Hearts Re:coded decompilation

A matching decompilation of *Kingdom Hearts Re:coded* (Nintendo DS, US `BK9E` and EU `BK9P`).
Matched C and verified library code are counted separately; each is checked against the original bytes.

## Multi-region merge

One decomp for both regions, merged from [ricky074game/kh-recoded-decomp](https://github.com/ricky074game/kh-recoded-decomp)
(US `BK9E`) and [Yokimitsuro/khrecoded-decomp](https://github.com/Yokimitsuro/khrecoded-decomp) (EU `BK9P`),
maintained by [@ricky074game](https://github.com/ricky074game) and [@Yokimitsuro](https://github.com/Yokimitsuro).

> **No ROM, assets or original binaries are included.** You need your own legally
> obtained copy of the game to build or verify anything.

## Progress

**EU (`BK9P`) ARM9 matching is complete: 100.00% C + verified library code,
and 100.00% reconstructed DATA.** The C-only figure is 95.98%; the remaining
4.02% is verified library code and is never added to the C percentage.
The latest EU gate (2026-11-06) passes all 108 linked modules byte-exact.
Semantic names, recovered structures and documentation remain in progress;
see the [EU evidence…
