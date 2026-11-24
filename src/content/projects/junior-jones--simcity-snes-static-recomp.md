---
repo: "Junior-Jones/SimCity-SNES-Static-Recomp"
name: "SimCity-SNES-Static-Recomp"
description: "Static recompilation of SimCity (SNES) for Windows 10 and 11. ROM not included."
readmeQualityOk: true
url: "https://github.com/Junior-Jones/SimCity-SNES-Static-Recomp"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["c", "cpp", "game-preservation", "retro-gaming", "reverse-engineering", "sdl3", "simcity", "snes", "static-recomp", "static-recompilation"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-08-09T04:29:32Z"
lastCommitAt: "2026-11-24T14:08:42Z"
lastReleaseAt: "2026-09-05T03:27:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 37
maintainers: ["Junior-Jones"]
openGraphImageUrl: "https://opengraph.githubassets.com/4243c5712d8c4c984c9ac69d221b3985e552ca40c0263b569423dffb1a1846ea/Junior-Jones/SimCity-SNES-Static-Recomp"
discussionCount: 0
---

# SimCity SNES Static Recomp 2.0.0

Native Windows static recompilation frontend and core for SimCity on the Super
Nintendo Entertainment System.

The original game ROM is not included. Use an externally supplied, legally
obtained ROM matching the identity in `README.txt`.

## What fully static recompilation means

SimCity's executable W65C816 game instructions were analysed and translated
into generated native C before the application was built. Production dispatch
uses exact processor-state and program-counter contexts. It contains no
general-purpose SNES CPU interpreter, runtime opcode decoder, dynamic
recompiler, JIT, or automatic emulator fallback.
