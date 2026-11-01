---
repo: "LootJunkieAzza/NVForever"
name: "NVForever"
description: "NVForever Rebuilt New Vegas Game Engine in Rust"
readmeQualityOk: true
url: "https://github.com/LootJunkieAzza/NVForever"
homepage: "http://nv-forever.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 53
forks: 2
openIssues: 42
closedIssues: 205
watchers: 4
contributors: 3
recentReleases: 6
createdAt: "2026-10-06T17:02:47Z"
lastCommitAt: "2026-11-01T22:59:07Z"
lastReleaseAt: "2026-10-29T16:47:46Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["LootJunkieAzza", "spooknik"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a89cb2bd94525f909f20ab2a23d40346c6cf87f0b4ad399a8df589aeb0d3dc5/LootJunkieAzza/NVForever"
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
