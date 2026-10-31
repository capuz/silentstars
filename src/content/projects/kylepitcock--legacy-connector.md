---
repo: "kylepitcock/Legacy-Connector"
name: "Legacy-Connector"
description: "A Minecraft mod that acts as a compatibility layer for older mods to run on newer verisons like 1.21.1 Neoforge"
readmeQualityOk: true
url: "https://github.com/kylepitcock/Legacy-Connector"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 38
forks: 0
openIssues: 39
closedIssues: 78
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T20:52:02Z"
lastCommitAt: "2026-10-31T19:00:56Z"
lastReleaseAt: "2026-10-25T01:10:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 40
maintainers: ["kylepitcock", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edcd8628da022d664a3ceb4d992b8c03de3387843680246b3c365d19fcb53910/kylepitcock/Legacy-Connector"
fundingLinks: ["KO_FI:https://ko-fi.com/kylepitcock"]
---

# Legacy Connector

Run **unmodified legacy Forge mods on NeoForge 1.21.1**. Drop 1.7.10 or 1.12.2 mod jars into your `mods` folder next to
this mod; it is translated at load time, the same way [Sinytra Connector](https://github.com/Sinytra/Connector)
runs Fabric mods on NeoForge. The original jar is never modified. Legacy jars can also go in `mods/1.7.10/` or
`mods/1.12.2/`; mods that bundle their own Mixin (common in 1.12.2: Spartan Weaponry, MixinBooter mods) must, because
NeoForge loads such jars from `mods/` as launcher plugins before they can be translated, and the game stops with
"Module ... contains package org.spongepowered...".

> **Status: beta (0.3.x).** 1.7.10 is in beta: content mods (Iron Chest, AgriCraft, BiblioCraft, Botania, Biomes O' Plenty, HBM,
> Thaumcraft, Witchery and many more) run with their blocks, items, entities, recipes, GUIs, world generation and dimensions, large
> tech packs load most of their mods, and Galacticraft with its addons runs with per-planet gravity and silent space. 1.12.2 is in
> alpha: big content mods (Botania, Blood Magic, Mekanism, EnderIO, Immersive Engineering, Tinkers' Construct, Quark, Biomes O' Plenty,
> Scape and Run:…
