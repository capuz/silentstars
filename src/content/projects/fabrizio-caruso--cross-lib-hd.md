---
repo: "Fabrizio-Caruso/CROSS-LIB-HD"
name: "CROSS-LIB-HD"
description: "CROSS-LIB HD: Cross-Lib with a higher number of tiles"
readmeQualityOk: true
url: "https://github.com/Fabrizio-Caruso/CROSS-LIB-HD"
language: "C"
languages: ["C", "C++"]
languagePcts: [46, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-26T21:37:23Z"
lastCommitAt: "2026-08-28T14:32:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 53
maintainers: ["Fabrizio-Caruso"]
openGraphImageUrl: "https://opengraph.githubassets.com/85d69dbde08e4dc87e33e5bfdabb1a61130f19261078d11dc6b66da1ee484b11/Fabrizio-Caruso/CROSS-LIB-HD"
---

# CROSS-LIB-HD
CROSS-LIB-HD is CROSS-LIB with a higher number of tiles but slightly larger binaries and fewer colors on a couple of targets.

More information on CROSS-LIB is here: https://github.com/Fabrizio-Caruso/CROSS-LIB

**REMARK**
This is still a work process.

## CROSS-LIB-HD vs CROSS-LIB
Both CROSS-LIB and CROSS-LIB-HD have 37 fixed (26 letters, 10 digits and 1 empty tile). The main difference is the total number of supported tiles (fixed and redefinable).

- **CROSS-LIB-HD**: at least 128 total tiles, i.e., 91 redefinable tiles,
- **CROSS-LIB**: supports at most 64 total tiles: i.e.,  27 redefinable tiles.

### Same targets as CROSS-LIB
It is possible to support the same set of targets as CROSS-LIB even for targets that cannot have 91 redefinable tiles in the same colors and video modes as the ones used by CROSS-LIB.

We can use:

- __fewer colors__ -> When a given target cannot have 91 redefinable tiles for each available color in CROSS-LIB, it may be possible to have those tiles with fewer color variations or in a different screen mode.
- __ASCII tiles__ -> If there were a target with graphics that cannot have 91 redefinable monochromatic tiles, the target can still…
