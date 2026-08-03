---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 33
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-08-03T06:45:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["Ancalgonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e3e301190ce8a31e25c19a52deb69d2d357c0ced2661e76f0b37c7f087e0240/Open-BFME/Open-BFME-1"
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

About **8% of the game's functions** — and **~15% of its code bytes** — have been reverse-engineered and byte-for-byte verified against retail `lotrbfme.exe` (~6,300 of the exe's 78,506 functions). Every function in `reverse/functions.csv` compiles to bytes identical to the original.

## Roadmap

* [ ] BFME 1 Source Code (~8% done)
* [ ]…
