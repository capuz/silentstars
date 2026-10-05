---
repo: "universe-st/dsh-game-material-master"
name: "dsh-game-material-master"
description: "DSH Game Material Master plugin. Integrates Seedream image generation model and MiniMax video generation model to generate various game assets."
originalDescription: "dsh游戏素材大师插件。接入seedream生图模型和minimax视频生成模型，可生成各种游戏素材。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/universe-st/dsh-game-material-master"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [57, 41]
topics: ["chroma-key", "cordis", "ffmpeg", "game-assets", "image-generation", "koishi", "minimax", "seedream", "spine", "sprite"]
stars: 33
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-19T21:54:25Z"
lastCommitAt: "2026-10-05T10:47:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["universe-st", "qiufl-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebd85e91766bc31a6a62e7e4b1afcba07a00efddc16f985334084ded5c307c05/universe-st/dsh-game-material-master"
---

[English](https://github.com/universe-st/dsh-game-material-master/blob/main/README.en.md) | Chinese

# Game Material Master

**Starting from a single character design image, batch-create actual game assets for use in games.**

Volcano Ark's **Seedream** handles image generation, **MiniMax** handles image-to-video conversion, and chroma key removal, frame extraction, pixel quantization, and image composition are all completed locally using `ffmpeg` — no system image libraries needed, and assets won't be sent to third-party services.

> **30 seconds to get started**: `dsh plugin --profile web add dsh-game-material-master` → Restart DSH → Click "Game Material Master" in the sidebar → Fill in two API Keys in settings → Create new project, upload design image → Click "Generate rotation video"
> (Default path: character rotates in place at constant speed, then automatically crops eight directions; to generate images for each direction, switch the method in stage ①).

Four modules share the same "generate → review → re-run" workspace. Each stage can be **redone independently**, and each output item can be **individually marked "passed"**; "review mode" can be set to have the agent…
