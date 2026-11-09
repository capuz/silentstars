---
repo: "IvanCraft623/MobPlugin"
name: "MobPlugin"
description: "Plugin for PocketMine-MP that implements mobs ai"
readmeQualityOk: true
url: "https://github.com/IvanCraft623/MobPlugin"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["pmmp", "pmmp-plugins", "pmmp5", "pocketmine", "pocketmine-plugin"]
stars: 40
forks: 15
openIssues: 3
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-03-16T19:02:24Z"
lastCommitAt: "2026-11-08T22:28:00Z"
lastReleaseAt: "2026-07-27T22:14:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["IvanCraft623", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03784b90d851c669870546e745326622c2b16c016c550de16ad3cf5f5812760b/IvanCraft623/MobPlugin"
---

---

## 📃 Description

MobPlugin is a plugin for [PocketMine-MP](https://github.com/pmmp/PocketMine-MP) that implements mob AI aiming to replicate vanilla Minecraft: Bedrock Edition behavior as closely as possible.

For a full breakdown of what's implemented and what's planned, see the [Vanilla Minecraft Feature Tracking](https://github.com/IvanCraft623/MobPlugin/issues/36) issue.

> ⚠️ **Warning:** The plugin is still under active development and some features are not yet complete.

---

## ⚙️ How It Works

### Async Pathfinding
Pathfinding is computed off the main thread using [Pathfinder](https://github.com/IvanCraft623/Pahtfinder), a custom virion that does the pathfinding in PHP. This ensures that even complex mob navigation doesn't cause server lag spikes.

### Goal-based Finite State Machine (FSM)
Each mob has a set of **goals** with priorities — things like attacking, fleeing, wandering, or looking at players. Every tick, the mob evaluates which goals are applicable and runs the highest-priority one, switching seamlessly when conditions change. This mirrors how vanilla Minecraft handles mob AI, producing natural and predictable behavior.

### Natural Spawning
Mobs spawn…
