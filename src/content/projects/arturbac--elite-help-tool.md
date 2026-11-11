---
repo: "arturbac/elite_help_tool"
name: "elite_help_tool"
description: "Elite Dangerous companion app"
readmeQualityOk: true
url: "https://github.com/arturbac/elite_help_tool"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["cpp23", "elite-dangerous"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T15:04:29Z"
lastCommitAt: "2026-11-11T10:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 62
maintainers: ["arturbac"]
openGraphImageUrl: "https://opengraph.githubassets.com/51fa66aa57cc9253f78044a649e3ee6a114a5748abfc74665a88384627ed03fc/arturbac/elite_help_tool"
discussionCount: 2
---

# elite_help_tool
Elite Dangerous companion: journal tracking and in-game overlay for exploration, exobiology and BGS

EHT (Elite Help Tool) is a companion for Elite Dangerous that follows the game's journal as you play and draws what matters straight into the game through a Vulkan overlay. It started as a way to plan exploration, deciding which planets are worth mapping and in what order. Since then it has grown to cover exobiology with species prediction and a codex, BGS work with tick tracking and influence history, missions, trade and in-game screenshots. Written in C++23, out of my own love of exploring the galaxy.

> **Linux only, for now.** EHT and its in-game overlay are built and tested only on Linux, with
> Elite Dangerous running under Proton.

## What it does

- **[In-game overlay](https://github.com/arturbac/elite_help_tool/blob/HEAD/doc/overlay.md)** drawn straight into the frame by a Vulkan layer: side bands, head-up readouts in a dogfight, the system map, GPU/CPU temperatures, the frame shift drive's health below full, the frame rate in the corner of the middle screen, trouble with Frontier's servers told while it happens, the other players in the instance, a…
