---
repo: "dividebysandwich/stealth-mission-89"
name: "stealth-mission-89"
description: "A spiritual successor to old DOS stealth fighter simulations, with VR support"
readmeQualityOk: true
url: "https://github.com/dividebysandwich/stealth-mission-89"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["bevy-engine", "flight-simulator", "rust-lang", "steam-frame", "virtual-reality"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 3
recentReleases: 4
createdAt: "2023-10-20T19:41:52Z"
lastCommitAt: "2026-10-21T23:35:31Z"
lastReleaseAt: "2026-10-21T13:59:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 80
maintainers: ["dividebysandwich", "xan2622"]
openGraphImageUrl: "https://opengraph.githubassets.com/68c35b9bea82650081aa98fb7a2b515eaac3dffe1f3f8d2cc73e995617fb69ba/dividebysandwich/stealth-mission-89"
---

# Stealth Mission 89

A Rust/Bevy 0.19 remake of DOS-era 3D flight simulations with VR support

> **📖 [User Manual](https://github.com/dividebysandwich/stealth-mission-89/blob/HEAD/docs/manual.md)**

## Running
```sh
cargo run --release
```
Pick a theater, situation, mission type, weather, opponents and aircraft in the menu. The briefing
shows the generated mission.

Command-line options:

| Option | Effect |
|---|---|
| `--mission <seed> [--theater-index N]` | fly a generated mission directly |
| `--theater ce` / `--fly` | fly from the menu's defaults, skipping it |
| `--weather random\|clear\|scattered\|broken\|overcast\|storm` | the mission's weather (default: rolled from the seed, odds by theater) |
| `--cloud-cover <percent>` | coverage of the weather's main cloud layer (default: rolled) |
| `--modern` | modern rendering touches (smooth gradients and haze, subtle shading, MSAA) |
| `--aircraft f117\|f16` | the flown aircraft: the F-117A (default) or the F-16C, which has its own cockpit (with an RWR scope instead of the radar bar graph) and flight model |
| `--classic-avionics` | the original's MFD pages instead of the F-16 style formats (HSD, HARM, targeting pod, map, stores…
