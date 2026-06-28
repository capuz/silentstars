---
repo: "encounter/aurora"
name: "aurora"
description: "A source-level GameCube & Wii compatibility layer"
url: "https://github.com/encounter/aurora"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["compatibility-layer", "gamecube", "gx", "wii", "dawn", "webgpu"]
stars: 418
forks: 83
openIssues: 7
closedIssues: 16
watchers: 6
contributors: 39
recentReleases: 0
createdAt: "2022-07-27T15:25:30Z"
lastCommitAt: "2026-06-28T03:10:07Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 35
maintainers: ["encounter", "Ahmad8864", "Irastris"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad22145eee9a72987ae67c0656370129535578493d4521a6140ed078ef19c49b/encounter/aurora"
---

</div>
<br/>

Aurora is a source-level GameCube & Wii compatibility layer intended for use with game decompilation projects.

Originally developed for use in [Metaforce](https://github.com/AxioDL/metaforce), a Metroid Prime reverse engineering project.
It now powers several completed source ports, including [Dusklight](https://github.com/TwilitRealm/dusklight).

### Features

- Application layer using SDL3
  - Runs on Windows, Linux, macOS, iOS, tvOS, Android
- GX compatibility layer
  - Graphics API support: D3D12, Vulkan, Metal
  - Highly accurate and performant GX implementation
  - Robust pipeline cache system with "transferable" cache support for releases
  - Dolphin-compatible texture pack support
  - Widescreen & resolution scaling support
  - Custom APIs for offscreen rendering
- PAD compatibility layer
  - Utilizes `SDL_Gamepad` for wide controller support, including GameCube controller adapters
  - Automatically saves and loads controller bindings and port mappings
  - Gyro & mouse support
- DVD compatibility layer
  - Utilizes [nod](https://github.com/encounter/nod) to support all GameCube/Wii disc image types, including RVZ
- CARD compatibility layer
  - Full…
