---
repo: "jaenster/redivivus"
name: "redivivus"
description: "Diablo II (Diablo 2) 1.14d decompilation: the shipped Game.exe recovered as C++ source that builds. Not a reimplementation."
readmeQualityOk: true
url: "https://github.com/jaenster/redivivus"
homepage: "https://redivivus.app"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["blizzard", "cpp", "decompilation", "diablo-2", "diablo-ii", "game-preservation", "ghidra", "lord-of-destruction", "matching-decompilation", "reverse-engineering"]
stars: 80
forks: 27
openIssues: 86
closedIssues: 815
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2026-10-23T14:05:00Z"
lastCommitAt: "2026-11-25T13:15:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 38
maintainers: ["jaenster", "Nugwa628", "Commit-Will"]
openGraphImageUrl: "https://opengraph.githubassets.com/19407a563ffee24c16a7f5c5599003ba5c4500fd30bfea27bb90c1514a952dff/jaenster/redivivus"
---

# Redivivus

Diablo II: Lord of Destruction 1.14d, reverse-engineered into C++ that builds and runs.

At this commit (Ghidra database v2139):

- Builds strict (`-std=c++17`, no `-fpermissive`) and links with no undefined symbol.
- Single player works. A full playthrough has been completed on the Visual C++ 2005 build.
- Functions whose machine code is identical to 1.14d, compiled with Visual C++ 2005 SP1: 11,766 of 14,900 (79.0%), of which 2,820 hand-written.
- Code bytes identical: 1,396,427 of 2,612,801 (53.45%).
- Initialised data identical (tables, globals, initialisers): 341,584 of 344,485 bytes (99.16%), 1,724 of 1,966 symbols.
- A 64-bit build links (mingw x86-64, `-fpermissive`) and has never been run; 187 pointer-width casts left, from 7,955.
