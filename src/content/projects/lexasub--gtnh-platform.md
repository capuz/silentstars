---
repo: "lexasub/gtnh-platform"
name: "gtnh-platform"
description: "Gtnh (minecraft modpack) inspired platform (game in future)"
readmeQualityOk: true
url: "https://github.com/lexasub/gtnh-platform"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 7
forks: 2
openIssues: 26
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-28T13:46:27Z"
lastCommitAt: "2026-08-03T06:42:33Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["Sakshi20Deshmukh", "lexasub"]
openGraphImageUrl: "https://opengraph.githubassets.com/709daa8018a50f20b274b3c39ebf2a358f6ca8caf5ab8016a223aea806296c27/lexasub/gtnh-platform"
---

# GTNH Platform

**A from-scratch voxel game engine and simulation platform inspired by GregTech: New Horizons.**

Not a mod — a standalone C++ implementation with distributed architecture
(ECS simulation, binary protocol, 9 services). Part platform for experimenting
with GTNH-scale mechanics, part playable game with world, machines, pipes,
crafting, and electric tools. (Gtnh inspired game in future)

Built with C++ performance core + Go sidecars. Binary protocol (FlatBuffers + Asio TCP).

## Git History & Contributing

**Git history**: The current commit is the initial one. The development history was volatile (architecture and protocol changed multiple times), so I'll squash into a single clean commit once I set up the remote. If you need a draft branch with the full messy history (bad commit messages, broken intermediate states) — I can grant access separately.

**Looking for contributors.** Areas that need work:

| Area | Scope / keywords |
|------|-----------------|
| **Inventories** | EntityStateStore persistence, drag-and-drop state machine, WorldContainerInventory |
| **Crafting** | RecipeManager, macerator, WorkbenchStateManager, server-authoritative grid |
|…
