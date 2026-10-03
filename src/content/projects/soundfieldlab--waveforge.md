---
repo: "SoundFieldLab/WaveForge"
name: "WaveForge"
description: "Supports multi-platform fusion, AutoMix, powerful acoustic effects, unique MV background wall, an elegant music software"
originalDescription: "支持多平台融合、AutoMix、强大的声学效果、独特的MV背景墙、优雅的一款音乐软件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SoundFieldLab/WaveForge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-08T11:34:43Z"
lastCommitAt: "2026-10-03T09:21:25Z"
lastReleaseAt: "2026-08-29T17:09:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["YoshinoRinn", "Castoricef"]
openGraphImageUrl: "https://opengraph.githubassets.com/63a32916f9954791ed60a300f9c041128fd58bb0c2855ace7746476950b5b528/SoundFieldLab/WaveForge"
---

# WaveForge

Immersive desktop music player (Windows / Electron) supporting **QQ Music + NetEase Cloud Music** dual platforms: search, playback, lyrics, visualization, intelligent recommendations, seamless transitions (DJ-grade crossfade), desktop mode and wallpaper integration. Repository also contains **Android TV** and **Apple Lyrics/Explore** multi-platform branches.

## Quick Start

```bash
npm install                    # Install dependencies
npm run dev:electron           # One-click startup: Vite(3000) + API(3001) + Electron window
```

Development commands must be run from the confirmed WaveForge project root. The team allows the working directory itself to be the project root, or allows a `WaveForge/` subdirectory under a multi-project/AI working directory to be the project root; external automation should first verify `package.json`, `scripts/dev-electron.mjs`, `desktop/main.cjs`, then use `npm --prefix "<project root>" run dev:electron`. Do not write machine-specific absolute paths into scripts or documentation.

- **Advanced Features (Smart AutoMix Beat Matching)**: Project has built-in Python 3.13 runtime (`resources/python-embed/`), ready to use; start…
