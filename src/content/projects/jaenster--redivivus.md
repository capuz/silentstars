---
repo: "jaenster/redivivus"
name: "redivivus"
description: "Diablo II 1.14d recovered as C++ source that builds. Not a reimplementation: the shipped Game.exe, function by function."
readmeQualityOk: true
url: "https://github.com/jaenster/redivivus"
homepage: "https://redivivus.app"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["blizzard", "cpp", "decompilation", "diablo-2", "diablo-ii", "game-preservation", "ghidra", "lord-of-destruction", "matching-decompilation", "reverse-engineering"]
stars: 79
forks: 27
openIssues: 86
closedIssues: 815
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2026-10-23T14:05:00Z"
lastCommitAt: "2026-11-23T12:16:34Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 38
maintainers: ["jaenster", "Nugwa628", "Commit-Will"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d272596b5ca9808cc67511541f0767e71cd25512725439e2e6044839980008c/jaenster/redivivus"
---

# Redivivus

Diablo II: Lord of Destruction 1.14d, reverse-engineered into C++ that builds and runs.

At this commit (Ghidra database v2139):

- Builds strict (`-std=c++17`, no `-fpermissive`) and links with no undefined symbol.
- Single player works. A full playthrough has been completed on the Visual C++ 2005 build.
- Functions whose machine code is identical to 1.14d, compiled with Visual C++ 2005 SP1: 11,500 of 14,900 (77.2%), of which 2,519 hand-written.
- Code bytes identical: 1,346,142 of 2,612,801 (51.52%).
- Initialised data identical (tables, globals, initialisers): 341,576 of 344,485 bytes (99.16%), 1,723 of 1,966 symbols.
- A 64-bit build links (mingw x86-64, `-fpermissive`) and has never been run; 233 pointer-width casts left, from 7,955.
