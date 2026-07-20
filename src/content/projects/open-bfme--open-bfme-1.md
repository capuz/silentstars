---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-07-20T06:36:37Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["dginovker", "Ancalgonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/87872796f8936b5fc0603f15db9b088275f87b545cf4e2cb5f2ebcb90dfa9566/Open-BFME/Open-BFME-1"
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

On July 13th 2026, we crossed 10% of the way there (by reversed engineered function count)

## Roadmap

* [ ] BFME 1 Source Code (10% done)
* [ ] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] AC fix
* [ ] World builder Source Code
* [ ] 16 player maps

ping `redbracket` on Discord if…
