---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 21]
stars: 101
forks: 26
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 37
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-28T10:07:08Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 29
maintainers: ["TheThag", "jonathan", "gborges0727"]
openGraphImageUrl: "https://opengraph.githubassets.com/d61a13f08305f2917ddb79087424044ca3770d85abbfc9b383cb8d7db3d9fc6e/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: reach 100% independently rebuilt byte parity with BFME 1's retail executable outside explicitly declared `no_ground_truth` ranges, while pursuing game-modernization improvements.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods

## Status

The bar above tracks source that rebuilds from what this repository holds.
Game source lives in `game/`, WorldBuilder source in `worldbuilder/`, and their
separate recovery ledgers in `targets/`. Original binaries, toolchains and
reference sources live in `inputs/`; mods remain in `mods/`.

## Roadmap

* [ ] BFME 1 Source Code (see the live progress bar above)
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] [AC fix](https://github.com/Open-BFME/Open-BFME-1/blob/HEAD/mods/features/055-ac-attack-view/README.md) (partial…
