---
repo: "Factor-64/RA2Snes"
name: "RA2Snes"
description: "RetroAchievements for SNES that runs on the QUsb2Snes webserver & rcheevos client"
readmeQualityOk: true
url: "https://github.com/Factor-64/RA2Snes"
language: "C"
languages: ["C", "QML"]
languagePcts: [53, 27]
stars: 48
forks: 2
openIssues: 5
closedIssues: 4
watchers: 8
contributors: 2
recentReleases: 0
createdAt: "2024-08-20T18:38:48Z"
lastCommitAt: "2026-08-30T00:43:55Z"
lastReleaseAt: "2025-06-11T19:42:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 35
maintainers: ["Factor-64", "wtl420"]
openGraphImageUrl: "https://opengraph.githubassets.com/929dc63f22ac67fec908e5cb83a9b226e5eba17271bb63a182cbe16d2d81fba1/Factor-64/RA2Snes"
---

# RA2Snes

RA2Snes is a program built using Qt 6.9 in C++ and C that bridges the QUsb2Snes webserver & rcheevos client to allow unlocking Achievements on real Super Nintendo Hardware through the SD2Snes USB port.

## Installation 

Download the latest firmware for your [SD2Snes](https://sd2snes.de/blog/downloads).

Download the latest version of [QUsb2Snes](https://github.com/Skarsnik/QUsb2snes/releases).

Plug the SD2Snes into your computer (Linux users may need to allow Serial Port communications to enable communication between QUsb2Snes and SD2Snes).

Run both QUsb2Snes and RA2Snes.

---

## Usage

### Configuration Files

Once RA2Snes has been run for the first time, the settings.ini file is created in the same directory as RA2Snes. This file holds all program settings, including your saved login information.

### Currently Unsupported Games

SD2Snes cannot currently read the memory of Super Game Boy and games with certain [enhancement chips](https://en.wikipedia.org/wiki/List_of_Super_NES_enhancement_chips).
| Chip | Supported |
|------|-----------|
| Base |     Y     | 
| DSP  |     Y     |
| CX4  |     N     | 
| GSU  |     N     |
| OBC1 |     N     |
| SA1  |     N     |…
