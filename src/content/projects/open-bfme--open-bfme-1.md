---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [64, 23]
stars: 76
forks: 18
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-07T08:35:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["TheThag", "gborges0727", "dginovker"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca3c1856f58ff743ba976709a675fbc7bbe0611d2a7d8278c8ef95490c98ca2/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: Source code that rebuilds BFME 1's executable byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods

## Status

The bar above tracks how much of the game rebuilds from what we hold — C++ we wrote, library source, generators,
libs we link. The rest is byte-true dumps of retail: a boundary, not source. Converting them
is the work.

Updated once daily from `master`, using `tools/progress.py`.
This is ledger-derived coverage; a clean `build.sh` run is the byte-match proof.

## Roadmap

* [ ] BFME 1 Source Code (see the live progress bar above)
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] AC fix
* [ ] World builder Source Code
* [ ] 16 player maps

## How You Can Help

Clone…
