---
repo: "Megus/chipnomad-tracker"
name: "chipnomad-tracker"
description: "Chiptune tracker for handheld consoles like Anbernic RG35xx"
url: "https://github.com/Megus/chipnomad-tracker"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["chiptune", "music", "tracker-music"]
stars: 120
forks: 10
openIssues: 0
closedIssues: 4
watchers: 7
contributors: 8
recentReleases: 1
createdAt: "2025-03-24T04:01:35Z"
lastCommitAt: "2026-06-28T06:57:02Z"
lastReleaseAt: "2026-04-25T19:51:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 46
maintainers: ["Megus", "bcaccia", "koppi"]
openGraphImageUrl: "https://opengraph.githubassets.com/102e5cbdcf98e4d4ae93a78769092fa6eac9e629e004c76d8e3e31a8f0ecec4d/Megus/chipnomad-tracker"
---

# ChipNomad Tracker

ChipNomad is a multi-platform tracker with LSDJ-like interface designed for creating chiptune music. Primary target platforms are handheld game consoles like Anbernic RG35xx.

[ChipNomad manual](https://chipnomad.org/manual/)

[Join ChipNomad Discord server](https://discord.gg/PJarAn2QCW)

## Currently supported platforms

- [PortMaster](https://portmaster.games) ([list of supported devices](https://portmaster.games/supported-devices.html))
- Pre-2024 Anbernic RG35xx with GarlicOS 1.4
- macOS
- Windows
- Linux (x86_64 and ARM)

## Building

See [tracker/README.md](tracker/README.md) for detailed build instructions.

## Hardware Requirements

ChipNomad is written in pure C99 and can be ported to any platform that satisfies these requirements:

- Display capable of 40x20 characters
- 8 buttons: LEFT, RIGHT, UP, DOWN, A, B, START, SELECT
- Stereo 16-bit audio output
- CPU capable of running chip emulation or a platform with real chips

## Background

I (Megus) started this project because I want to make real chiptune music on the go. LSDJ is amazing but it's only
for GameBoy music. I come from ZX Spectrum scene, so I want to make music for AY-3-8910/YM2149F…
