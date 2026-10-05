---
repo: "Yokimitsuro/khrecoded-decomp"
name: "khrecoded-decomp"
description: "Work-in-progress matching decompilation of Kingdom Hearts Re:coded (Nintendo DS)"
readmeQualityOk: true
url: "https://github.com/Yokimitsuro/khrecoded-decomp"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["c", "codewarrior", "decompilation", "ds-decomp", "game-preservation", "kingdom-hearts", "matching-decompilation", "mwccarm", "nds", "nintendo-ds"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-26T17:52:50Z"
lastCommitAt: "2026-10-05T10:46:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Yokimitsuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c3a41933d6717e5b4d89616185e90c95d1c22459b08fbc6820bd1bf47eb929/Yokimitsuro/khrecoded-decomp"
---

# khrecoded-decomp

A work-in-progress **matching decompilation** of *Kingdom Hearts Re:coded*
(Nintendo DS). The goal is C source that recompiles to a binary **byte-for-byte
identical** to the original game code.

> ### Disclaimer
> This repository does **NOT** contain the game ROM, any game assets, or any of
> the original binary/assembly. **An existing, legally-obtained copy of the game
> is required** to extract and build it.
>
> This repository is a **matching decompilation only**. It does not contain or
> produce a playable build or any redistributable game binary. All trademarks and
> the original game are property of their respective owners.

## Status

| Category | Count | Meaning |
|---|---:|---|
| Real C matched functions | **2,213** / 10,415 (21.2%) | Functions implemented in C and verified byte-exact |
| Real C matched **bytes** | **149,560** / 1,656,988 (9.03%) | Code bytes covered by real C; the honest progress figure |
| Assembly matched functions | **137** (7,734 bytes) | Original SDK, BIOS and DS Protect assembly, verified byte-exact; never counted as C |
| Reconstructed DATA bytes | **17,758** / 228,172 (7.78%) | Verified byte-exact .rodata, .data, .ctor and…
