---
repo: "cxong/cwolfmap"
name: "cwolfmap"
description: "Wolf 3D map reader in C"
readmeQualityOk: true
url: "https://github.com/cxong/cwolfmap"
language: "C++"
languages: ["C++", "C"]
languagePcts: [52, 48]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-05-17T03:42:13Z"
lastCommitAt: "2026-08-18T04:08:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 48
maintainers: ["cxong"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba26fb7c86b4a89843da25a8b0b304d251a59b30e022eb97f8a502baa14af64d/cxong/cwolfmap"
---

# cwolfmap

Wolf 3D map and data reader in C

This project implements a C library that reads Wolf 3D maps (GameMaps format): http://www.shikadi.net/moddingwiki/GameMaps_Format
Plus other data like music and sound effects. Example programs are available for extracting/playing music/sounds, printing maps to console.

Use this library as a basis for your Wolf3D-engine games and mods that use original game data.

## Features

- Read map data, levels, planes
- Extract and play adlib music (WLF/IMF files)
- Play adlib sound effects
- Extract and play digital sound (RAW/WAV)
- Extract and play OGG-in-WAD music (Super 3D Noah's Ark)

### Supported Games

- Blake Stone: Aliens of Gold (shareware, registered)
- Spear of Destiny
- Spear of Destiny mission packs
- Super 3D Noah's Ark
- Wolfenstein 3D (shareware, registered)

### Not Supported

- Graphics/tiles/sprites
- Advanced tiles like patrol and AI behaviour
