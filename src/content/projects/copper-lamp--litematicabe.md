---
repo: "copper-lamp/LitematicaBE"
name: "LitematicaBE"
description: "Next-generation projection tool for Minecraft Bedrock Edition: the best BDS shared projection system. It also works with the vanilla mc client and supports easy placement."
originalDescription: "Minecraft 基岩版跨时代投影工具 - 最好的BDS共享投影系统，原版mc客户端也可使用，支持轻松放置"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/copper-lamp/LitematicaBE"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bds", "levilamina", "levilamina-mod", "levilauncher", "litematica", "minecraft"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2026-03-15T05:10:08Z"
lastCommitAt: "2026-11-13T18:34:00Z"
lastReleaseAt: "2026-11-01T11:02:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 28
maintainers: ["magicobs0z", "magicobsz", "Shisizhou0706"]
openGraphImageUrl: "https://opengraph.githubassets.com/945426a30267f308110efb8fdc3c29ccc77a94f162ccbc1f84966746f7c3eb2a/copper-lamp/LitematicaBE"
discussionCount: 0
---

·
    ·
    ·
    ·
    ·

LitematicaBE is a projection plugin for Bedrock Edition servers (BDS + LeviLamina). It supports reading both `.litematica` and `.mcstructure` formats. It writes projections using geometry-native custom blocks and supports very large files, layer-by-layer viewing, a projection printer, litematica-format export, and other practical features. It aims to provide a one-stop projection service for Bedrock servers.

## Quick Start

> [!IMPORTANT]
> LitematicaBE consists of a "server plugin + BP/RP add-on pack." Everything is loaded on the LLBDS server, and players automatically receive the resource pack when they join.

1. Install lip (skip if already installed):

   ```shell
   npm install -g @levimc/lip
   ```

2. **Server**: run this in the BDS root directory:

   ```shell
   lip install github.com/copper-lamp/LitematicaBE
   ```

   The plugin is installed to `plugins/LitematicaBE/`. BP and RP are installed to `behavior_packs/` and `resource_packs/` respectively.

3. **Enable the add-on packs**: write each BP/RP header's `pack_id` and `version` into `worlds/<world name>/world_behavior_packs.json` and `world_resource_packs.json` (or enable them in the save…
