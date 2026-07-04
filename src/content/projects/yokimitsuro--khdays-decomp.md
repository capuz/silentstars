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
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-26T08:09:56Z"
lastCommitAt: "2026-07-04T23:17:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["Yokimitsuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/4509205f3fe736eb448d30988114ae3042aa4501ad819abf16fb211941898466/Yokimitsuro/khdays-decomp"
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
| Real C-decompiled matched functions | **5,533** / ~23,240 (~23.8% by function count) | Functions implemented in C and verified byte-exact |
| Real C-decompiled matched **bytes** | **465,526** / 4,728,790…
