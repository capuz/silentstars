---
repo: "GabeRealB/parasite-eve-2-decomp"
name: "parasite-eve-2-decomp"
description: "An in-progress decompilation of the US release of Parasite Eve 2 on the Playstation 1. "
readmeQualityOk: true
url: "https://github.com/GabeRealB/parasite-eve-2-decomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [72, 25]
stars: 31
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-04-12T17:46:12Z"
lastCommitAt: "2026-09-12T00:59:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 40
maintainers: ["GabeRealB"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c62f1408ee753ea61319e9e06799d2aac8bd0db5e50313667b2a06c56887e44/GabeRealB/parasite-eve-2-decomp"
---

# Parasite Eve 2 Decompilation

A work-in-progress **matching decompilation** of *Parasite Eve II* for the Sony PlayStation.

The goal is to recover readable C that, when compiled with a period-correct toolchain, produces a binary **byte-identical** to the original executable.

| Item | Value |
|---|---|
| Platform | PlayStation (PSX / PS1) |
| Target | USA main executable `SLUS_010.42` |
| Disks (USA) | `SLUS-01042` (Disk 1), `SLUS-01055` (Disk 2) |
| Compiler | GCC 2.8.1 (PSX `cc1`) + maspsx |
| Libraries | Psy-Q 4.5 object files (see `lib/`) |
| License (project code) | [CC0 1.0](https://github.com/GabeRealB/parasite-eve-2-decomp/blob/HEAD/LICENSE) |

> **You must own the game.** This repository does not include ROMs, disc images, or copyrighted assets. Obtain a legal dump of your own discs.

## Status

### USA

| Component | Status |
|---|---|
| **Main executable** (`SLUS_010.42`) |  |
| **Gameplay overlay** — resident in-game code (actors, combat, inventory) |  |
| **Title overlay** — title / demo / main menu |  |

<details>
<summary><strong>Overlays</strong> (448 packages, all split)</summary>

Every package is split and matching.
An overlay is an extracted `.pe2pkg` package…
