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
stars: 72
forks: 25
openIssues: 134
closedIssues: 231
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2026-10-23T14:05:00Z"
lastCommitAt: "2026-11-13T05:39:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 36
maintainers: ["jaenster", "Nugwa628", "Commit-Will"]
openGraphImageUrl: "https://opengraph.githubassets.com/20a0d3bbdc974c6dac3663e4d8799953992bca8df170b8cce00be462ad8fd5e7/jaenster/redivivus"
---

# Redivivus

Diablo II: Lord of Destruction 1.14d, reverse-engineered into C++ that builds and runs.

|At this commit|Ghidra database v2091|
|-|-|
|Build|every translation unit compiles with a strict `-std=c++17`, no `-fpermissive`; the executable links with no undefined symbol|
|Play|single player works; a full playthrough has been completed on the Visual C++ 2005 build|
|Modules|22 libraries, one per original module; 4 strict, with no include the original DLL imports did not allow|
|64-bit|all 464 files compile for x64 with Visual C++ 2005; 890 pointer-width casts left (from 7,955), [counted](https://github.com/jaenster/redivivus/blob/HEAD/asm_matching/msvc8/x64/README.md) by that compiler|

Machine code identical to 1.14d, compiled with Visual C++ 2005 SP1, the compiler of the original:

|Measure|Identical machine code|
|-|-|
|Functions|8,501 of 14,644 (58.1%)|
|Code|735,025 of 2,600,766 bytes (28.26%)|
|Instructions|1,855,071 of 2,600,766 bytes (71.3%), counting identical instructions in functions that still differ|

What is compared, what is left out (the C runtime, compiler-made exception code, PKWARE) and
the figures over the whole binary:…
