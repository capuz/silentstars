---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [64, 20]
stars: 172
forks: 49
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 65
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-11-06T13:19:00Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 22
maintainers: ["claude", "McMickey93", "yamoling"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea59f49046a205a04dc7a31941101d61ec9adcf7efb4d180aad0acd59365d9dd/Open-BFME/Open-BFME-1"
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
