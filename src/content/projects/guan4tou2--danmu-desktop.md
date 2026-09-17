---
repo: "guan4tou2/danmu-desktop"
name: "danmu-desktop"
description: "直接在桌面顯示彈幕 Display bullet screen directly on the desktop"
readmeQualityOk: true
url: "https://github.com/guan4tou2/danmu-desktop"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [49, 34]
topics: ["danmu", "electron-app", "nodejs", "bulletscreen", "danmuku"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-03-28T17:50:41Z"
lastCommitAt: "2026-09-17T08:51:24Z"
lastReleaseAt: "2025-04-22T14:33:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 69
maintainers: ["guan4tou2", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/620450057/9a800f5a-cf2a-40bd-a42e-ef539a71fd00"
discussionCount: 1
---

# danmu-desktop

Display bullet screen directly on the desktop
在桌面直接顯示彈幕

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
