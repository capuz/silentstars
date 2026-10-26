---
repo: "kylepitcock/Legacy-Connector"
name: "Legacy-Connector"
description: "A Minecraft mod that acts as a compatibility layer for older mods to run on newer verisons like 1.21.1 Neoforge"
readmeQualityOk: true
url: "https://github.com/kylepitcock/Legacy-Connector"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 17
forks: 0
openIssues: 38
closedIssues: 41
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T20:52:02Z"
lastCommitAt: "2026-10-26T03:02:05Z"
lastReleaseAt: "2026-10-25T01:10:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 45
maintainers: ["kylepitcock", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab42f3924f31bcf7d64a2ae97e3cd0662cec457fab6cf0008b843ca922bae616/kylepitcock/Legacy-Connector"
fundingLinks: ["KO_FI:https://ko-fi.com/kylepitcock"]
---

# Legacy Connector

Run **unmodified legacy Forge mods on NeoForge 1.21.1**. Drop a 1.7.10 mod jar (1.12.2 mods are experimental, see the status table) into your `mods` folder next to
this mod; it is translated at load time, the same way [Sinytra Connector](https://github.com/Sinytra/Connector)
runs Fabric mods on NeoForge. The original jar is never modified.

> **Status: alpha (0.2.x).** 1.7.10 is the main target; 1.12.2 is experimental (loads and registers content, little verified in a real game; issue #64). Content mods (Iron Chest, AgriCraft, BiblioCraft, Botania, Biomes O'
> Plenty, HBM, Thaumcraft, Witchery and many more) load with their blocks, items, entities, recipes, GUIs,
> world generation and dimensions, and large tech packs load most of their mods; Galacticraft with its addons runs with per-planet gravity and silent space. Some features are still missing or
> unverified (see [Known compatibility issues](#known-compatibility-issues)), so back up your worlds.

**Compatibility list and reports: https://kylepitcock.github.io/Legacy-Connector/** (check a mod, or report how it worked for you).

## Screenshots

All taken in a real game client (NeoForge 1.21.1) with…
