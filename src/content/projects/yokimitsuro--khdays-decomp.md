---
repo: "Yokimitsuro/khdays-decomp"
name: "khdays-decomp"
description: "Work-in-progress matching decompilation of Kingdom Hearts 358/2 Days (Nintendo DS)"
readmeQualityOk: true
url: "https://github.com/Yokimitsuro/khdays-decomp"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["c", "decompilation", "game-preservation", "kingdom-hearts", "matching-decompilation", "nds", "nintendo-ds", "reverse-engineering", "ds-decomp", "kh-days"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-26T08:09:56Z"
lastCommitAt: "2026-07-08T05:42:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["Yokimitsuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c5d828ac45b30544cf3283ba59e76a016df017b3ac7711e04a0e6d2fd7a9fb8/Yokimitsuro/khdays-decomp"
---

# khdays-decomp

A work-in-progress **matching decompilation** of *Kingdom Hearts 358/2 Days*
(Nintendo DS). The goal is C source that recompiles to a binary **byte-for-byte
identical** to the original game code.

> ### Disclaimer
> This repository does **NOT** contain the game ROM, any game assets, or any of
> the original binary/assembly. **An existing, legally-obtained copy of the game
> is required** to extract and build it.
>
> This project **is not, and will not, produce a port** to PC or any other
> platform. It is a decompilation of the original game code that can be compiled
> back into a binary identical to the original. All trademarks and the original
> game are property of their respective owners.

## Status

This project is in an early bootstrapping phase. Progress is intentionally split
into separate categories so inline ASM placeholders and SDK byte-match
identifications are not counted as real C decompilation.

| Category | Count | Meaning |
|---|---:|---|
| Real C-decompiled matched functions | **5,739** / ~23,240 (~24.7% by function count) | Functions implemented in C and verified byte-exact |
| Real C-decompiled matched **bytes** | **505,832** / 4,728,790…
