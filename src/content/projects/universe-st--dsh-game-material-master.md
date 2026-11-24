---
repo: "universe-st/dsh-game-material-master"
name: "dsh-game-material-master"
description: "DSH game material master plugin. Integrates the Seedream image generation model and the MiniMax video generation model to produce a variety of game assets."
originalDescription: "dsh游戏素材大师插件。接入seedream生图模型和minimax视频生成模型，可生成各种游戏素材。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/universe-st/dsh-game-material-master"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [57, 41]
topics: ["chroma-key", "cordis", "ffmpeg", "game-assets", "image-generation", "koishi", "minimax", "seedream", "spine", "sprite"]
stars: 188
forks: 27
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-19T21:54:25Z"
lastCommitAt: "2026-11-24T14:04:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 30
maintainers: ["universe-st"]
openGraphImageUrl: "https://opengraph.githubassets.com/0620217197f7fe777bbb91e02a37c9c3f684d6667c2bf3e234e4bdf0ae277963/universe-st/dsh-game-material-master"
---

[English](https://github.com/universe-st/dsh-game-material-master/blob/main/README.en.md) | Chinese

# Game Material Master

**Starting from a single character design sheet, batch-produce the assets that games actually need.**

Volcano Ark **Seedream** handles image generation, and **MiniMax** (or a local **ComfyUI**) handles image-to-video. Keying, frame extraction, pixel quantization, and compositing are all done locally with `ffmpeg`. No system image library is required, and assets are never sent to third-party services.
