---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [64, 20]
stars: 169
forks: 47
openIssues: 1
closedIssues: 0
watchers: 7
contributors: 64
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-10-31T09:53:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 22
maintainers: ["Arakmar", "CallumReynolds", "McMickey93"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0974c586002bfd5dfae54be8cd2a36bc897b7f9257508f5ff223525753e8303/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: rebuild BFME 1's retail executable byte for byte from source, and use that source to fix and improve the game.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* We rewrite the game's code as C++, one small piece at a time.
* Each piece must rebuild to the exact bytes of the original game exe (BFME 1, version 1.03).
* When every piece matches and links, the whole game is open source, and we can fix bugs and make mods.

### What the bars measure

* **Rebuilt from source**: code rebuilding to the original exe's exact bytes, partly generated code or prebuilt libraries.
* **Game code in C++**: the game's own code (no libraries) in C++.
* **Linking**: that code in files that link cleanly (link census).

[Interactive report](https://open-bfme.github.io/Open-BFME-1/)

## Status

Source: `game/` and `worldbuilder/`, with their ledgers in `targets/`. Original
binaries, toolchains and references: `inputs/`. Mods: `mods/`.

## Roadmap

* [ ] BFME 1 Source Code
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] [AC…
