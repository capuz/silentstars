---
repo: "west-shell/obsidian-xiangqi"
name: "obsidian-xiangqi"
description: "Chinese chess (xiangqi 象棋) variation tree."
readmeQualityOk: true
url: "https://github.com/west-shell/obsidian-xiangqi"
homepage: "https://space.bilibili.com/156446344"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [41, 33]
topics: ["chess", "xiangqi", "obsidian-plugin"]
stars: 15
forks: 6
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-16T22:55:21Z"
lastCommitAt: "2026-09-28T10:06:30Z"
lastReleaseAt: "2025-07-05T15:14:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 77
maintainers: ["west-shell"]
openGraphImageUrl: "https://opengraph.githubassets.com/073e714269ccda514a1a7e8359763ee5d0595940dd5a9e30330e4ff140932cc8/west-shell/obsidian-xiangqi"
---

# Chinese Chess

[English](https://github.com/west-shell/obsidian-xiangqi/blob/HEAD/README.md) | [中文](https://github.com/west-shell/obsidian-xiangqi/blob/HEAD/README.zh.md)

If you like this project, feel free to check out my page on  
Likes, coins, and feedback are greatly appreciated.

## Overview

Obsidian plugin for Chinese chess rendering and exploration inside notes. Supports PGN file viewing, two code block types (`fen`, `tree`), full xiangqi rules via [xiangqi.js](https://github.com/west-shell/xiangqi.js), interactive board via [xiangqiground](https://github.com/west-shell/xiangqiground), variation tree visualization, and built-in engine analysis powered by [Pikafish](https://github.com/official-pikafish/Pikafish) (WASM).

## PGN File Support

Open `.pgn` files directly in Obsidian — the plugin registers a dedicated `.pgn` file view with an interactive board interface.

- **Manual Save**: Any changes (moves, variations, comments, annotations) are saved back to the file when clicking Save button
- **Variation Tree**: Interactive tree graph showing all branches — click nodes to navigate
- **Comments & Annotations**: Supports branch diagram and board annotation symbols,…
