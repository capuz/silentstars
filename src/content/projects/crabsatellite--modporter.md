---
repo: "crabsatellite/modporter"
name: "modporter"
description: "Automated Minecraft mod migration tool — currently supports Forge 1.20.1 to NeoForge 1.21.1 via a 5-pass transformation pipeline (text, AST, structural, build, resources)"
readmeQualityOk: true
url: "https://github.com/crabsatellite/modporter"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["code-transformation", "forge", "kotlin", "migration-tool", "minecraft", "modding", "neoforge", "porting"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-08T09:44:40Z"
lastCommitAt: "2026-07-05T21:00:43Z"
lastReleaseAt: "2026-06-22T11:26:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 51
maintainers: ["crabsatellite"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2d20066df1d548f2827223ecac80f6713ded26020d2d4dc358ce6ebd6fda81f/crabsatellite/modporter"
---

# ModPorter

> **Work in progress / developer preview:** ModPorter is under active development. It is already useful for developers moving Forge 1.20.1 projects to NeoForge 1.21.1, and the current benchmark milestone proves hands-off strict runtime ports for selected large public mods. It is not yet a general guarantee that every Forge 1.20.1 mod will port without engineering work. A port is only considered successful when the automated build, dedicated server, GameTest server, client boot, client saved-world load, and log-clean gates pass.

General-purpose Minecraft mod migration tool. Currently supports **Forge 1.20.1 -> NeoForge 1.21.1**.

## Current Milestone

As of the current repository state, the strict real-mod gate has been verified for these large public benchmark targets:

| Target | Source | Strict gate status | Notes |
|--------|--------|--------------------|-------|
| The Aether | `The-Aether-Team/The-Aether`, `1.20.1-develop` | PASS | Compile, dedicated server, GameTest server, client boot, saved-world load, and log-clean audit passed. Remaining allowed log findings are machine-evidenced external dependency or source-inherited issues. |
| Twilight Forest |…
