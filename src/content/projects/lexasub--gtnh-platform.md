---
repo: "lexasub/gtnh-platform"
name: "gtnh-platform"
description: "Gtnh (minecraft modpack) inspired platform (game in future)"
readmeQualityOk: true
url: "https://github.com/lexasub/gtnh-platform"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 8
forks: 2
openIssues: 24
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2026-06-28T13:46:27Z"
lastCommitAt: "2026-09-28T10:06:40Z"
lastReleaseAt: "2026-08-10T13:06:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["lexasub"]
openGraphImageUrl: "https://opengraph.githubassets.com/5675555409fb7a832da1fff8f2cf60f5269b868fe730fdaab0645f895a616653/lexasub/gtnh-platform"
---

# GTNH Platform

**A from-scratch voxel game engine and simulation platform inspired by GregTech: New Horizons.**

Not a mod — a standalone distributed implementation (ECS simulation, binary protocol,
9 daemons + engine/game/content libraries). Part platform for experimenting with GTNH-scale mechanics,
part playable game with world, machines, pipes, crafting, electric tools, and quests.

Built with C++ performance core + Go sidecars. Binary protocol (FlatBuffers + TCP).

## Contributing

**Looking for contributors.** Areas that need work:

| Area | Scope / keywords |
|------|-----------------|
| **Assets** | Textures, models, sprites for items, blocks, and machines |
| **UI** | MachineWindow, Drill UI, inventory drag-and-drop, ImGui widgets |
| **Pipes/cables** | PipeNetwork BFS, CableGraph, HeatLoss, transformers, item/fluid transport |
| **Inventories** | EntityStateStore persistence, inventory drag-and-drop polish, WorldContainerInventory |
| **Crafting** | RecipeManager YAML recipes, server-authoritative grid, condition evaluation |
| **Questbook** | Quest library, quest data, completion tracking, rewards, exchange market |
| **Heat transfer** | Boiler, overheat, water→steam,…
