---
repo: "LootJunkieAzza/NVForever"
name: "NVForever"
description: "NVForever Rebuilt New Vegas Game Engine in Rust"
readmeQualityOk: true
url: "https://github.com/LootJunkieAzza/NVForever"
homepage: "http://nv-forever.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 35
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 4
createdAt: "2026-10-06T17:02:47Z"
lastCommitAt: "2026-10-24T00:16:05Z"
lastReleaseAt: "2026-10-21T18:20:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 42
maintainers: ["LootJunkieAzza"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f34477bb7ef689254825c29efd0e5050d6a037469fb50061969c2a33f0ed570/LootJunkieAzza/NVForever"
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
