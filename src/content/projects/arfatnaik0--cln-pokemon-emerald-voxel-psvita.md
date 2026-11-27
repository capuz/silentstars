---
repo: "Arfatnaik0/CLN-Pokemon-emerald-voxel-psvita"
name: "CLN-Pokemon-emerald-voxel-psvita"
description: "This is port of the pokeemerald repo and the multiplatform fork for the psvita made from fully decompiled version of emerald"
readmeQualityOk: true
url: "https://github.com/Arfatnaik0/CLN-Pokemon-emerald-voxel-psvita"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 24
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-15T08:46:21Z"
lastCommitAt: "2026-11-27T16:26:34Z"
lastReleaseAt: "2026-11-25T11:29:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 32
maintainers: ["Arfatnaik0"]
openGraphImageUrl: "https://opengraph.githubassets.com/cabaaed889779da43b3a37d9cc5aadf3faf0380df6025ba7373309ccc50b88ad/Arfatnaik0/CLN-Pokemon-emerald-voxel-psvita"
---

# Pokémon Emerald Voxel: PS Vita Port

| 2D Mode (`816×544` 3:2 / `960×544` Wide) | 3D Voxel Overworld (`vitaGL`) |
| :---: | :---: |
|  |  |

Native PlayStation Vita port of Pokémon Emerald based off [`pokeemerald-multiplatform`](https://github.com/gradenGnostic/pokeemerald-multiplatform) with a hardware-accelerated 3D voxel overworld powered by `vitaGL`.

## Features

- Locked **60 FPS** at the default `222 MHz` ARM clock in both 2D GBA mode and 3D voxel overworld mode.
- Hardware-accelerated 3D voxel overworld with polygonal buildings, roof cutaways, continuous terrain, billboard trees, signposts, and rustling grass.
- Automatic fallback to 2D GBA rendering for battles, menus, unmapped interiors, and transitions.
- Support for `816×544` (`3:2` pixel-accurate) and `960×544` (widescreen) display modes.
- Follower Pokémon support via external `FMN1` sprite packs.
- Low-overhead native `42060 Hz` synth audio resampled to `44100 Hz`.
- Saves, config, and logs stored in `ux0:data/pokeemerald/`.
