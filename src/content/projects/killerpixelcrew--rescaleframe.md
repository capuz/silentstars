---
repo: "KillerPixelCrew/ReScaleFrame"
name: "ReScaleFrame"
description: "A framework for reverse engineering games to add modern upscaling and frame generation."
readmeQualityOk: true
url: "https://github.com/KillerPixelCrew/ReScaleFrame"
language: "C++"
languages: ["C++"]
languagePcts: [57]
topics: ["ace-combat-7", "frame-generation", "game-modding", "upscaling", "xess"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-09-05T16:37:36Z"
lastCommitAt: "2026-10-18T08:16:44Z"
lastReleaseAt: "2026-10-18T06:14:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 50
maintainers: ["NightHammer1000"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab58745ab06a6dd453b6f5f6d8fa1ccedc7e6993e793c9a27978380ab53ba40c/KillerPixelCrew/ReScaleFrame"
---

# ReScaleFrame

**A framework for engine-aware upscaling, frame generation and latency integration.**

ReScaleFrame connects game-specific rendering hooks to a shared native runtime. Each game
integration finds the right scene data and puts the processed result back into the engine's frame.
The runtime handles the vendor SDKs, graphics resources, settings and presentation.

The goal is to share that infrastructure across games and GPU vendors while keeping each game's
rendering rules in its own integration. A [KillerPixelCrew](https://github.com/KillerPixelCrew) project.

## Current status

**Ace Combat 7 is the first working integration.** Its engine-owned upscaling path and corrected
wing/cloud rendering are accepted in game, with full-resolution UI and the in-game settings overlay.
The AC7 proxy loads the game plugin and shared runtime services.

| Area | Status |
| --- | --- |
| DLSS Super Resolution / DLAA | Working in AC7 |
| Game detection and native SDK | Game ABI 13 with lifecycle, CPU events and renderer callbacks; AC7 and Unity Mono paths implemented; Project Wingman has a native temporal graph observer |
| Frame generation and latency | Current source implements…
