---
repo: "3ndetz/unionclef"
name: "unionclef"
description: "Lets your agent loose block game"
readmeQualityOk: true
url: "https://github.com/3ndetz/unionclef"
language: "Java"
languages: ["Java"]
languagePcts: [86]
stars: 23
forks: 3
openIssues: 5
closedIssues: 19
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2026-03-16T17:24:17Z"
lastCommitAt: "2026-09-18T08:26:16Z"
lastReleaseAt: "2026-07-21T13:36:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["3ndetz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3361220c04ca066f8217043b895f3613343d9f60b9a0f25abe96681a9272f18/3ndetz/unionclef"
discussionCount: 3
---

# UnionClef

Letting agents loose in block game.

An open platform for building AI agents that play Minecraft — pathfinding, combat, survival, multiplayer. The goal is to make it easy for researchers, developers, and tinkerers to plug their agents into the game and see what happens.

Originally merged from **altoclef**, **shredder**, and **tungsten** into a single codebase. As of
the "G-0" migration (2026-08-24), **tungsten is the only compiled pathfinder** — shredder and
baritone stay in the tree as source reference only, not built, not run. No submodules, no
pre-built JARs, no tears.

## What's inside

| Module | What it does |
|--------|-------------|
| **altoclef** (root) | Autonomous bot — speedruns, PvP, SkyWars, Python scripting via Py4J |
| **tungsten/** | A\* pathfinder — the only pathfinding engine actually compiled and run. Movement, parkour, block break/place, combat |
| ~~shredder/~~ | Fork of baritone with WindMouse camera + tungsten bridge. **Not compiled** — kept as source reference for the parts not yet ported into tungsten |
| ~~baritone/~~ | Original pathfinding code. **Not compiled** — kept as reference |

**Minecraft 1.21** / **Fabric** / **Java 21**

> **[How…
