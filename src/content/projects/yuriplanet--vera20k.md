---
repo: "YuriPlanet/vera20k"
name: "vera20k"
description: "Red Alert 2: Yuri's Revenge rebuilt in Rust / 用 Rust 重写的《红警2：尤里的复仇》"
readmeQualityOk: true
url: "https://github.com/YuriPlanet/vera20k"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [77, 22]
topics: ["red-alert-2", "redalert2", "rts", "real-time-strategy", "command-and-conquer", "yuris-revenge", "yurisrevenge", "ra2", "openra"]
stars: 147
forks: 34
openIssues: 184
closedIssues: 324
watchers: 0
contributors: 12
recentReleases: 1
createdAt: "2026-03-29T15:31:02Z"
lastCommitAt: "2026-10-21T08:48:21Z"
lastReleaseAt: "2026-10-21T08:15:37Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 32
maintainers: ["hrusten", "zzzzzzh123", "ckbk456"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8d11a1550ec7e575e5de32c42c45e009737b503bf7b1ddf302e5530c8fd6c4/YuriPlanet/vera20k"
---

# VERA20K

VERA20K is a community-led rewrite of the original engine, `gamemd.exe`. It uses the original
game files, so you'll need your own copy of Red Alert 2: Yuri's Revenge.

VERA20K is made by gamers, for gamers, and gamers have the final say in where it goes.

## Project goals

1. Keep the gameplay, visuals and atmosphere of the original Red Alert 2: Yuri's Revenge.
2. Support bigger battles: up to **30 players** and **20,000 units** on 500×500 maps.
3. Incorporate known RTS features and some never seen before.
4. Integrated multiplayer client

## Current status

**In active development.**

- **Skirmish:** Playable on Windows, Linux and macOS, with original and random maps,
  base building, harvesting, combat and save/load.
- **Campaigns:** Missions can launch; support remains incomplete.
- **AI:** Parts of the original AI handle base building and scripted attacks.
- **Ongoing work:** Gameplay accuracy, visuals and performance.
- **Multiplayer:** Network play is not available yet.
- **Scale:** Battles with 30 players and 20,000 units have not yet been demonstrated.

## Architecture

The engine has three main parts:

- **Simulation:** Owns gameplay state and logic.
-…
