---
repo: "astrobleem/SNES-SuperMonkeyIsland"
name: "SNES-SuperMonkeyIsland"
description: "A native SCUMM v5 interpreter for The Secret of Monkey Island on the Super Nintendo, using MSU-1 for asset streaming."
readmeQualityOk: true
url: "https://github.com/astrobleem/SNES-SuperMonkeyIsland"
language: "Assembly"
languages: ["Assembly", "Python", "C"]
languagePcts: [39, 31, 23]
stars: 12
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-01T17:00:00Z"
lastCommitAt: "2026-07-04T22:51:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 36
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ba37d863da43977ee5e40e1f0604effac038fc2a8c242bd74839ff324d34ef38/astrobleem/SNES-SuperMonkeyIsland"
---

# SNES Super Monkey Island

A native SCUMM v5 interpreter for *The Secret of Monkey Island* on the Super Nintendo, using MSU-1 for asset streaming.

| | |
|:---:|:---:|
|  |  |
| Beach with OCHR object rendering (rocks, shoreline) | SCUMM Bar background |
|  |  |
| Full verb bar with HDMA palette split | Guybrush scaled down near rocks via SA-1 CC Type 2 |
|  |  |
|  |  |
|  |  |

## Architecture

- **Language**: 65816 assembly with a custom OOP framework
- **Platform**: SNES + MSU-1 (SD2SNES / FXPAK Pro), SA-1 co-processor
- **Target**: MI1 VGA CD Talkie (`monkey.000` / `monkey.001`)
- **Input**: SNES Mouse (primary), joypad with virtual cursor (fallback)
- **Audio**: SPC700 native chip music + SFX via [Terrific Audio Driver](https://github.com/undisbeliever/terrific-audio-driver), MSU-1 reserved for voice acting
- **Assembler**: WLA-DX v9.3 (v9.4+ breaks the build)
- **ROM**: 4MB HiROM (SA-1 directly addressable)
- **Engine base**: Forked from Super Dragon's Lair Arcade (SNES MSU-1)

## Approach

Following the GBAGI model (Brian Provinciano's native AGI interpreter for GBA): a purpose-built, hardware-native interpreter that reads original game data files. Not a ScummVM port.…
