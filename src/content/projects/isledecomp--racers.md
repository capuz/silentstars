---
repo: "isledecomp/racers"
name: "racers"
description: "A decompilation of LEGO Racers (1999)"
readmeQualityOk: true
url: "https://github.com/isledecomp/racers"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 106
forks: 13
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 11
recentReleases: 1
createdAt: "2026-04-07T23:05:40Z"
lastCommitAt: "2026-11-02T13:38:20Z"
lastReleaseAt: "2026-11-02T13:38:14Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 36
maintainers: ["DustStormPettigrew", "ChiefBoyardee", "foxtacles"]
openGraphImageUrl: "https://opengraph.githubassets.com/74c50e76874574a4c43e015a527f5a4600824f247549ee91c8cc100ff92c3437/isledecomp/racers"
---

# LEGO Racers Decompilation

This is a work-in-progress decompilation of LEGO Racers (1999). It aims to be as accurate as possible, matching the recompiled instructions to the original machine code as much as possible. The goal is to provide a workable codebase that can be modified, improved, and ported to other platforms later on.

This project is modeled after the [LEGO Island decompilation](https://github.com/isledecomp/isle).

> **Note:** This repository is for decompilation only and its code is true to the original release. It will not compile for targets other than 32-bit Windows. For a modern adaptation of the LEGO Racers codebase with native compatibility for all major platforms and the Web, see [racers-portable](https://github.com/isledecomp/racers-portable) instead.

## Status

`LEGORacers.exe` is almost fully decompiled and most of `GolDP.dll` is done. The recompiled game is already playable, but the software renderer is not functional yet. Contributions are welcome.

## Building

This project uses the [CMake](https://cmake.org/) build system, which allows for a high degree of versatility regarding compilers and development environments. For the most accurate results,…
