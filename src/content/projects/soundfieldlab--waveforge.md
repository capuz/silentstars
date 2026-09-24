---
repo: "SoundFieldLab/WaveForge"
name: "WaveForge"
description: "A music software supporting multi-platform integration, AutoMix, powerful acoustic effects, unique MV background walls, elegant design"
originalDescription: "支持多平台融合、AutoMix、强大的声学效果、独特的MV背景墙、优雅的一款音乐软件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SoundFieldLab/WaveForge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-08T11:34:43Z"
lastCommitAt: "2026-09-24T07:31:26Z"
lastReleaseAt: "2026-08-29T17:09:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 59
maintainers: ["YoshinoRinn", "Castoricef", "IceFireIcer"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd91fccf587d7dc52651250e28648bbfa46621b95f453eaae894c5a8179bf59b/SoundFieldLab/WaveForge"
---

# WaveForge

Immersive desktop music player (Windows / Electron), supporting **QQ Music + NetEase Cloud Music** dual platforms: search, playback, lyrics, visualization, smart recommendations, seamless playback (DJ-level transitions), desktop mode and wallpaper integration. Repository also contains **Android TV** and **Apple Lyrics/Explore** multi-platform branches.

## Quick Start

```bash
npm install                    # Install dependencies
npm run dev:electron           # One-click launch: Vite(3000) + API(3001) + Electron window
```

Development commands must be run from the confirmed WaveForge project root. Teams may have the working directory as the project root itself, or have the `WaveForge/` subdirectory within a multi-project/AI working directory as the project root; external automation should first verify `package.json`, `scripts/dev-electron.mjs`, `desktop/main.cjs`, then use `npm --prefix "<project root>" run dev:electron`. Do not hardcode machine-specific absolute paths in scripts or documentation.

- **Advanced Features (Smart AutoMix Beat Matching)**: The project has a built-in Python 3.13 runtime (`resources/python-embed/`) ready to use; launch…
