---
repo: "LootJunkieAzza/NVForever"
name: "NVForever"
description: "NVForever Rebuilt New Vegas Game Engine in Rust"
readmeQualityOk: true
url: "https://github.com/LootJunkieAzza/NVForever"
homepage: "http://nv-forever.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 148
forks: 15
openIssues: 146
closedIssues: 704
watchers: 5
contributors: 8
recentReleases: 8
createdAt: "2026-10-06T17:02:47Z"
lastCommitAt: "2026-11-14T21:56:50Z"
lastReleaseAt: "2026-11-11T20:09:11Z"
status: "newborn"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["LootJunkieAzza", "jojokengly", "spooknik"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d9660771830c876dbb1fd5355cb2f3e85fd03ed0426edc8b89bb60dc808469/LootJunkieAzza/NVForever"
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

Optional: NVIDIA DLSS upscaling on an RTX graphics card (Windows), with files downloaded
from NVIDIA: see [docs/dlss.md](https://github.com/LootJunkieAzza/NVForever/blob/HEAD/docs/dlss.md).

## Mods

- **Mod Organizer 2:** add `nvforever.exe` to MO2's executables (the drop-down beside
  **Run**,…
