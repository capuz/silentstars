---
repo: "OhMyMeme/OhMyMeme"
name: "OhMyMeme"
description: "Lightweight cross-platform meme/sticker pack management system - Desktop edition"
originalDescription: "轻量化跨平台表情包管理系统-桌面端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/OhMyMeme/OhMyMeme"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 23]
topics: ["manager", "meme", "memes"]
stars: 320
forks: 12
openIssues: 14
closedIssues: 11
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-07-23T10:53:06Z"
lastCommitAt: "2026-09-19T01:38:11Z"
lastReleaseAt: "2026-07-29T04:44:35Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 26
maintainers: ["TNTXZ", "Ze514", "Adsicmes"]
openGraphImageUrl: "https://opengraph.githubassets.com/135856305dc0aa0bc22b2013bd2774c62ae7a8efc0efa71fe374696e46b7a116/OhMyMeme/OhMyMeme"
---

# OhMyMeme

Lightweight cross-platform meme/sticker pack management system — Break through sticker limits, invoke with hotkey, search and copy instantly.

### **QQ Discussion Group: 891636253**

## Features

- **System Tray Operation** — Minimize resource usage, persistent background running
- **Single Instance Running** — Auto-detect existing instances on startup (Windows named mutex / POSIX lock files), alert and exit on Windows, silent exit on other platforms, preventing data conflicts from multiple instances
- **Global Hotkey** — Default `Ctrl+Alt+N` to show/hide main panel; optional display on current mouse screen for Windows (disabled by default). Built-in self-healing during runtime: callback exceptions won't crash the keyboard listener thread, watchdog thread periodically detects listener thread health, Windows uses harmless F15 probe (every 30s) to verify keyboard hook isn't silently removed by system, auto-restart listener and re-register on any failure without software restart; hotkey-related events (registration/exception/thread death/self-healing) are appended to `data_dir/hotkey.log` for troubleshooting
- **Sticker Management** — Import/search/tag…
