---
repo: "djeada/Standard-of-Iron"
name: "Standard-of-Iron"
description: "A modern real-time strategy (RTS) game engine built with C++20, Qt 6, and OpenGL 3.3 Core."
readmeQualityOk: true
url: "https://github.com/djeada/Standard-of-Iron"
homepage: "https://discord.gg/jVaBZP5PD"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 49
forks: 10
openIssues: 23
closedIssues: 462
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-09-28T10:40:58Z"
lastCommitAt: "2026-08-04T06:13:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["djeada", "Copilot", "abhishekmohank"]
openGraphImageUrl: "https://opengraph.githubassets.com/bce62d520b8146cc7d464ff1f0567758ab56b966fd15a42bc6ea4446493f9c7b/djeada/Standard-of-Iron"
---

# Standard of Iron

**A historical real-time strategy engine set during the Punic Wars**

Standard of Iron is a complete real-time strategy engine built for large-scale tactical battles between Rome and Carthage. It includes the full engine stack: rendering, audio, AI, gameplay systems, campaign persistence, and tools for creating and testing maps. The project supports persistent campaigns with save/load functionality, multiple playable factions with distinct unit rosters, and data-driven troop customization.

The engine is written in C++20, uses OpenGL 3.3 for rendering, and relies on Qt 6 for the interface layer.

Primary focus is army management and tactical strategy.

## Engine Systems

### Game Engine

The game logic layer follows an _Entity-Component-System_ architecture, in a simulation kernel that links no rendering code. This separates data storage from processing logic and lets the same match run with or without a screen.

- When units receive movement orders, the _pathfinding_ module computes grid-based routes through walkable cells. Formation spacing is applied only when initial targets are assigned; each unit then follows its own path.
- Damage resolution is handled…
