---
repo: "ZoeyVid/Stacker"
name: "Stacker"
description: "A plugin to stack player above player (and throw them)! "
url: "https://github.com/ZoeyVid/Stacker"
homepage: "https://modrinth.com/plugin/stacker-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["minecraft", "spigot", "bukkit"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 10
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-07-22T17:43:36Z"
lastCommitAt: "2026-07-04T06:11:43Z"
lastReleaseAt: "2023-01-21T16:35:01Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 67
maintainers: ["Zoey2936", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6b53b4f5e78aac3de371bd6f689fbdb426181c2c3ec2b18c10f4c38ece92fb6/ZoeyVid/Stacker"
discussionCount: 3
---

# [Stacker](https://github.com/ZoeyVid/Stacker)

A plugin to stack player above player (and throw them)! <br/>
This plugin works with the Minecraft versions 1.13-1.21 <br/>

## Commands & Permissions

| **Command** | **Description** | **Needed Permission** | **Default** |
| ----------- | --------------- | --------------------- | ----------- |
| `/stacker [help]` | view a help menu | `stacker.help` | all |
| `/stacker immune` | toggle yourself the possibility of being stacked by others | `stacker.immune.self` | all |
| `/stacker immune <player>` | toggle for others the possibility of being stacked by others | `stacker.immune.other` | op |
| `/stacker toggle` | toggle yourself the ability to stack others | `stacker.use.self` | all |
| `/stacker toggle <player>` | toggle for others the ability to stack others | `stacker.use.other` | op |

- The `stacker` permission gives all permissions.
- The `stacker.immune` permission gives all permissions which start with `stacker.immune.`.
- The `stacker.immune.other` permission includes `stacker.immune.self`.
- The `stacker.use` permission gives all permissions which start with `stacker.use.`.
- The `stacker.use.other` permission includes…
