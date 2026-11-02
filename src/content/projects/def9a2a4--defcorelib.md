---
repo: "def9a2a4/defCoreLib"
name: "defCoreLib"
description: "core library with shared functionality"
readmeQualityOk: true
url: "https://github.com/def9a2a4/defCoreLib"
language: "Java"
languages: ["Java"]
languagePcts: [88]
stars: 6
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-06T03:36:13Z"
lastCommitAt: "2026-11-02T17:56:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 72
undervaluedScore: 43
maintainers: ["def9a2a4"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2fff560881013f06855789564fbbebb7ad724b97246561271fb32a049f4fee/def9a2a4/defCoreLib"
---

Shared core library for the [*def9a2a4*](https://def9a2a4.github.io/) plugin family - a data-driven custom-block engine plus demo content. On its own it only ships the engine and some command-only demo items; other plugins build their features on top of it. See https://def9a2a4.github.io/defCoreLib-docs/

## What it provides

- **Custom-block engine** - YAML-driven player-head blocks with states, redstone behavior, particles, light, storage, and animated display entities. In particular, the use of custom heads and display entities allows cool visuals ***without any mods or resource packs!***
- **Custom items & heads, recipe registration, and persistence** (chunk scan + self-healing) that companion plugins reuse instead of reimplementing.
- **Mechanism engine** - turns groups of blocks into moving display entities + colliders: glue-based doors/drawbridges and mechanical minecarts.
- **Recipe gating** - companion plugins switch their content's recipes on by namespace, so installing one adds a coherent, craftable feature set.
- ~20 **command-only** demo blocks (candles, redstone/binary displays, storage barrels, alarms, spinning/pulsing decorations) - grab them with `/defcorelib…
