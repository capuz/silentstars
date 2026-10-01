---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 20]
stars: 113
forks: 29
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 42
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-10-01T10:23:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["admiraly", "gborges0727"]
openGraphImageUrl: "https://opengraph.githubassets.com/09d82b778f492f1facaa12b467af603d75e86d6217c0ba1cf6db89ea749272c5/Open-BFME/Open-BFME-1"
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
* **Linking**: the part of that code in files that link cleanly (link census).

<details open>
<summary><b>Progress over time and code map</b></summary>

[Interactive report](https://open-bfme.github.io/Open-BFME-1/)

</details>

## Status

Source: `game/` and `worldbuilder/`, with their ledgers in `targets/`. Original
binaries, toolchains and references: `inputs/`. Mods: `mods/`.

## Roadmap

* [ ] BFME 1 Source Code
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120…
