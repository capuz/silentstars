---
repo: "YuriPlanet/vera20k"
name: "vera20k"
description: "Red Alert 2: Yuri's Revenge rebuilt in Rust / Rust rewrite of Red Alert 2: Yuri's Revenge"
originalDescription: "Red Alert 2: Yuri's Revenge rebuilt in Rust / 用 Rust 重写的《红警2：尤里的复仇》"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YuriPlanet/vera20k"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [79, 21]
topics: ["red-alert-2", "redalert2", "rts", "real-time-strategy", "command-and-conquer", "yuris-revenge", "yurisrevenge", "ra2", "openra"]
stars: 80
forks: 18
openIssues: 223
closedIssues: 161
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-03-29T15:31:02Z"
lastCommitAt: "2026-10-12T11:15:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 31
maintainers: ["hrusten", "996666925", "1372704087"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d63f8adbd888d3265553980771746eb53c0765dce82bc6e985e34d777bb574f/YuriPlanet/vera20k"
---

&nbsp;&nbsp;

# VERA20k

VERA20k is a rewrite of the original engine, `gamemd.exe`. It uses the original game files,
so you'll need your own copy of Red Alert 2: Yuri's Revenge.

VERA20k is made by gamers, for gamers, and gamers have the final say in where it goes.

## Project goals

1. Keep the gameplay, visuals and atmosphere of the original Red Alert 2: Yuri's Revenge.
2. Support bigger battles: up to **30 players** and **20,000 units** on 500×500 maps.
3. Incorporate known RTS features, old and new, and some never seen before.
4. Integrated multiplayer client

## Current status

**Mid development.** Local skirmish is playable on Windows against a basic AI. Retail and
random maps, menus, base building, harvesting, combat and save/load are in place, but there's
still a lot to fix and finish.

Multiplayer, campaigns and the original AI are still missing. Aircraft, mind control, bridges
and several weapons and effects need more work. We haven't demonstrated 30-player,
20,000-unit battles yet.

## Build and run

You need:

- **The game:** Red Alert 2: Yuri's Revenge.
- **Rust and Git:** current stable [Rust](https://rustup.rs/), installed with rustup, and…
