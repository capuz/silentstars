---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [69, 29]
stars: 34
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-08-11T04:50:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["Ancalgonn", "dginovker", "Gleb302596555"]
openGraphImageUrl: "https://opengraph.githubassets.com/0904149c99be0cbc4301385d6af6f4c099c55fefd3c0c7b43ba022e0427ada74/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Reverse engineered with AI.

Goal: source code that rebuilds BFME 1's executable byte-for-byte.

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods
* The goal of this project _is not_ to mod the game. The point of the project is to get source code that can be compiled into a 1:1, bit by bit replica of BFME 1's binary. This ensures 100% accuracy and will enable future (insane) modifications

## Status

We currently have C++ functions in `Code/` and a patcher which can patch same-size custom functions into `lotrbfme.exe`. This is useful for modding.

The number that matters is **byte-exact C++**: about **13.5% of `.text`**, which is
**~18% of the game's real code** (a quarter of `.text` is linker `int3` padding that
needs no source and is excluded from the honest denominator). A further ~6% is
byte-verified assembly awaiting conversion. Every row in `reverse/functions.csv`
compiles or…
