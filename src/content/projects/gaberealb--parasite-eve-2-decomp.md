---
repo: "GabeRealB/parasite-eve-2-decomp"
name: "parasite-eve-2-decomp"
description: "An in-progress decompilation of the US release of Parasite Eve 2 on the Playstation 1. "
readmeQualityOk: true
url: "https://github.com/GabeRealB/parasite-eve-2-decomp"
language: "C"
languages: ["C"]
languagePcts: [78]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-04-12T17:46:12Z"
lastCommitAt: "2026-08-05T06:05:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["GabeRealB"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cc5d1900d9cdc3a16a698e9e79c06d0c432c0fc70216c226d8e366e4a00d8db/GabeRealB/parasite-eve-2-decomp"
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
| **Main executable** (`SLUS_010.42`) | In progress — partially decompiled; matched C rebuilds byte-identically, with remaining functions still in assembly (`INCLUDE_ASM`) |

<details>
<summary><strong>Overlays</strong> (448 — all not started)</summary>

Descriptions are best-effort: source path and load address come from…
