---
repo: "jaigner-hub/ocarina-of-time-recomp"
name: "ocarina-of-time-recomp"
description: "Static recompilation of The Legend of Zelda: Ocarina of Time into a native PC program"
readmeQualityOk: true
url: "https://github.com/jaigner-hub/ocarina-of-time-recomp"
language: "C"
languages: ["C"]
languagePcts: [83]
stars: 38
forks: 3
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2026-11-05T17:28:37Z"
lastCommitAt: "2026-11-06T13:19:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 21
maintainers: ["jaigner-hub"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf266e609629232972e6a15e017a385a1cc9d5fe58a01d8876f0264e25d9b3a0/jaigner-hub/ocarina-of-time-recomp"
---

# Ocarina of Time PC Recomp

Research project: static recompilation of *The Legend of Zelda: Ocarina of Time* (title id `04004860224DEC00`) into a
native Windows program, by the method of [totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) as carried
to further games by [fe3h-pc-recomp](https://github.com/jaigner-hub/fe3h-pc-recomp) and
[metroid-prime-4-recomp](https://github.com/jaigner-hub/metroid-prime-4-recomp). The game's code is lifted to C,
compiled for x86-64 and linked with a host runtime that stands in for the console's OS and graphics API on Vulkan.

This is the fourth game on that code and the first Switch 2 title, so the project also tests how much of the shared
core survives a new console generation.

## Status

As of 2026-11-06 (details and dates in [docs/plan.md](https://github.com/jaigner-hub/ocarina-of-time-recomp/blob/HEAD/docs/plan.md), the shader work in
[docs/phase3.md](https://github.com/jaigner-hub/ocarina-of-time-recomp/blob/HEAD/docs/phase3.md)):

- The dump extracts (`tools/extract_nup.py`, the Switch 2's `.nup` container and zbic-compressed NSOs), the three
  game modules lift to C and `oot.exe` builds and links (Phase 1).
- The game runs…
