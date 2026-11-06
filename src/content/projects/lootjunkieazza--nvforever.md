---
repo: "LootJunkieAzza/NVForever"
name: "NVForever"
description: "NVForever Rebuilt New Vegas Game Engine in Rust"
readmeQualityOk: true
url: "https://github.com/LootJunkieAzza/NVForever"
homepage: "http://nv-forever.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 102
forks: 6
openIssues: 113
closedIssues: 334
watchers: 4
contributors: 4
recentReleases: 7
createdAt: "2026-10-06T17:02:47Z"
lastCommitAt: "2026-11-06T11:24:45Z"
lastReleaseAt: "2026-11-04T20:23:17Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 37
maintainers: ["LootJunkieAzza", "spooknik", "TranqyPoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ae020f328b42f7cc86eb58c88d7d4b59f2ae6560ae247419bbee03b925b9fc5/LootJunkieAzza/NVForever"
fundingLinks: ["KO_FI:https://ko-fi.com/lootjunkieazza"]
discussionCount: 2
---

# NVForever

An open-source, clean-room reimplementation of the **Fallout: New Vegas** engine, in the
spirit of OpenMW. It runs on the data files of *your own copy* of the game; it ships no
Bethesda content and contains no Bethesda or Gamebryo code.

NVForever is not affiliated with or endorsed by Bethesda Softworks, ZeniMax Media,
Microsoft or Obsidian Entertainment. See [LEGAL.md](https://github.com/LootJunkieAzza/NVForever/blob/HEAD/LEGAL.md).

## Getting started

1. Own and install *Fallout: New Vegas* (base game; DLC optional).
2. Download a build from the [releases page](https://github.com/LootJunkieAzza/NVForever/releases)
   and unpack it **outside** the game folder.
3. Run `nvforever.exe` (or `./nvforever.sh` on Linux) and point it at your game folder
   when asked.

NVForever never writes into the game folder. Its settings, saves and logs live in
`Documents\My Games\NVForever`.

## Mods

- **Mod Organizer 2:** add `nvforever.exe` to MO2's executables (the drop-down beside
  **Run**, then **<Edit…>**) and start it from there. It loads the plugins ticked in MO2,
  in MO2's order, and the game folder MO2 manages. See…
