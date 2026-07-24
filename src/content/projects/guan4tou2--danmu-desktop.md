---
repo: "guan4tou2/danmu-desktop"
name: "danmu-desktop"
description: "Display bullet screen directly on the desktop"
originalDescription: "直接在桌面顯示彈幕 Display bullet screen directly on the desktop"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/guan4tou2/danmu-desktop"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [51, 30]
topics: ["danmu", "electron-app", "nodejs", "bulletscreen", "danmuku"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-03-28T17:50:41Z"
lastCommitAt: "2026-07-24T06:09:04Z"
lastReleaseAt: "2025-04-22T14:33:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 69
maintainers: ["guan4tou2", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/620450057/25cf86e6-7bf1-484f-ae14-89555b55e5fa"
discussionCount: 1
---

# danmu-desktop

Display bullet screen directly on the desktop

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

For a complete capability inventory (server routes, admin pages, persistence map, scope guardrails), see [docs/FEATURES.md](https://github.com/guan4tou2/danmu-desktop/blob/HEAD/docs/FEATURES.md). For the full documentation map, see [docs/README.md](https://github.com/guan4tou2/danmu-desktop/blob/HEAD/docs/README.md).

## Overview

This project is divided into two parts:

1. Danmu-Desktop
   - Client-side application that runs on your computer to display danmu
   - Supports Windows, MacOS, and Linux
   - Published as a portable desktop package: Windows portable x64 `.exe`,
     macOS arm64 `.zip`, plus Linux AppImage / `.deb`
   - Windows updater metadata is not published while the Windows channel stays
     portable-only; macOS update metadata targets the ZIP package

2. Server
   - Creates a web interface for danmu input
   - Manages danmu delivery to connected clients
   - Includes admin panel for configuration, source fingerprint logging, and history review
   - OBS Browser Source overlay (`/overlay` route)
   - Plugin SDK for…
