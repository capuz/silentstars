---
repo: "RatchetModding/Replanetizer"
name: "Replanetizer"
description: "Replanetizer is a Level Editor for the Ratchet & Clank HD collection."
readmeQualityOk: true
url: "https://github.com/RatchetModding/Replanetizer"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 87
forks: 22
openIssues: 15
closedIssues: 29
watchers: 7
contributors: 13
recentReleases: 0
createdAt: "2019-01-07T20:32:38Z"
lastCommitAt: "2026-10-31T07:46:26Z"
lastReleaseAt: "2021-08-13T15:30:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["MilchRatchet", "MichaelRelaxen", "CreepNT"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c603bc16cbf756aadca5facc52093fe5513487468965a10f226a6598704389/RatchetModding/Replanetizer"
---

Level Editor for the Ratchet and Clank Collection on PS3

# Features

Replanetizer is still in an early state of development. Its feature set entails:

 - Visualization
   - Level objects
   - Collision
   - Splines
   - Triggers
 - Editing
   - Transformation of level objects
   - Manipulation of variables
 - Export
   - Textures (`.png`, `.jpg`, `.bmp`)
   - Rigged models including animations (`.gltf`, `.dae`, `.obj`)
   - Level as a model (`.obj`)
   - Collision (`.obj`)
 - Live inspection of a game running in emulator ([RPCS3](https://github.com/RPCS3/rpcs3))

Support for Ratchet Deadlocked is available but low priority.

> If you are looking for a level editor for the PS2 versions of the games, use [Wrench](https://github.com/chaoticgd/wrench) instead.

# Binaries

You can find prebuilt binaries of Replanetizer in the releases section:

- [Release Builds](https://github.com/RatchetModding/Replanetizer/releases)

# Usage

First you need to unpack the game's files so that Replanetizer can access it. These files are packed in a file called `PS3Arc.psarc`. If you have the game installed in `RPCS3`, you can find the `PS3Arc.psarc` of Ratchet and Clank 1 (NPEA00385) in `[RPCS3…
