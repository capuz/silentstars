---
repo: "r-snes/r-snes"
name: "r-snes"
description: "This is the main repository of the R-SNES emulator"
readmeQualityOk: true
url: "https://github.com/r-snes/r-snes"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 43
closedIssues: 104
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-03-04T16:28:30Z"
lastCommitAt: "2026-10-21T21:15:24Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 79
maintainers: ["C0Florent", "tibaudlemaout", "ClementBaziret"]
openGraphImageUrl: "https://opengraph.githubassets.com/a11fb65d2d4de51b6908243d5f69d0b2870692d57202948a955d3e14123ddef3/r-snes/r-snes"
discussionCount: 1
---

# R-SNES

R-SNES aims to be a decently fast and very accurate SNES emulator, while staying easy to understand as per modern coding standards.

> [!NOTE]
> For now, this is still a work in progress. We successfully run and pass the full [test ROM](https://github.com/gilyon/snes-tests) suite, but we're still some way from running actual commercial games.
The [plugin system](#plugins) is functional, with several modules already implemented: RAM manipulation, CPU, PPU, display, and file read/write.
>
> For the sake of brevity (and optimism!), some parts of this README describe features of the emulator as if they were already complete, which may not yet be the case.

## Project purpose

Being a SNES emulator, R-SNES allows users to play SNES games. We also try to stay performant (low resource usage on the host machine) and accurate to our best effort (trying to make games behave the exact same as they would on the original console).

### Plugins

We also wish to make the player experience extensible with Lua plugins which can affect many parts of the emulator, be run automatically for each rendered frame, on each CPU cycle, or when a specific value in memory changes (among other…
