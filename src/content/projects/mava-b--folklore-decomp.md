---
repo: "Mava-b/folklore-decomp"
name: "folklore-decomp"
description: "Folklore PS3 Decomp with AI"
readmeQualityOk: true
url: "https://github.com/Mava-b/folklore-decomp"
language: "C"
languages: ["C"]
languagePcts: [61]
stars: 59
forks: 1
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-21T11:41:20Z"
lastCommitAt: "2026-11-08T14:14:26Z"
lastReleaseAt: "2026-10-31T13:36:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 38
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/16ca0c2d1a80555aff6bfc0cfc607e8db6920027eaaa24e43e355f2e9305d306/Mava-b/folklore-decomp"
---

# Folklore (PS3) — native PC recompilation

If you like this feel free to buy me a coffee :) https://ko-fi.com/mavab

Folklore (Game Republic / SCE, 2007) statically recompiled from its PS3
executable to native x86-64 Windows code with
[ps3recomp](https://github.com/sp00nznet/ps3recomp). There is no emulator: the
game's PowerPC and SPU code is translated to C++ and runs on a runtime that
stands in for the PS3's OS, with Direct3D 12 for graphics.

**This repository contains no game code and no Sony code.** You build the game
yourself from **your own disc**; setup does the translation on your PC. No PS3
firmware is needed: the SPU job system the game runs on (SPURS) is
reimplemented here ([`folklore/docs/SPURS.md`](https://github.com/Mava-b/folklore-decomp/blob/HEAD/folklore/docs/SPURS.md)).

**Status:** playable on the author's PC (Windows 11, Ryzen 7 7800X3D): it boots,
does the first-boot install, and plays, including capturing Folks with
the original motion controls. Expect rough edges.
[`folklore/docs/STATUS.md`](https://github.com/Mava-b/folklore-decomp/blob/HEAD/folklore/docs/STATUS.md) is the full engineering
log.

### New in v0.6: save slots

The launcher's new **Saves**…
