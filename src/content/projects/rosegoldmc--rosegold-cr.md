---
repo: "RosegoldMC/rosegold.cr"
name: "rosegold.cr"
description: "Legal (Civ servers) minecraft bot client written in crystal"
url: "https://github.com/RosegoldMC/rosegold.cr"
homepage: "https://RosegoldMC.github.io/rosegold.cr/"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
topics: ["minecraft", "mineflayer"]
stars: 36
forks: 11
openIssues: 51
closedIssues: 83
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-06-06T01:02:43Z"
lastCommitAt: "2026-07-03T12:22:07Z"
lastReleaseAt: "2025-09-20T22:40:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["grepsedawk", "PhysicsGamer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/500250515/d0088dba-c93c-400f-a4b9-f9ea019abc11"
discussionCount: 1
---

# Rosegold

Minecraft botting client written in [Crystal](https://crystal-lang.org/), designed for [CivMC](https://civwiki.org/wiki/CivMC) and compliant with its [botting rules](https://civwiki.org/wiki/Botting#Botting_Rules).

```crystal
bot = Rosegold::Bot.join_game("play.civmc.net")

bot.move_to(100, 200)           # walk to coordinates
bot.inventory.pick! "diamond_sword"  # equip a sword
bot.attack                       # swing
bot.eat!                         # auto-eat when hungry
bot.craft("stick", 4)           # craft items by name
```

Rosegold handles the protocol, physics, and inventory management so you can focus on what your bot does.

## Getting Started

### 1. Install Crystal

Follow the [official Crystal installation guide](https://crystal-lang.org/install/) for your platform.

> Windows users: Crystal works best under [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux).

`shards` (Crystal's package manager, like npm) is included with Crystal.

### 2. Use the Template

The fastest way to start is with the [example template](https://github.com/RosegoldMC/example):

1. Click **[Use this…
