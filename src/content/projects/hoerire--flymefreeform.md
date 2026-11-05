---
repo: "Hoerire/FlymeFreeform"
name: "FlymeFreeform"
description: "An Xposed module that recreates Flyme's small-window interaction on ColorOS"
originalDescription: "在 ColorOS 上复刻 Flyme 小窗交互的 Xposed 模块"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Hoerire/FlymeFreeform"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-11-03T00:31:30Z"
lastCommitAt: "2026-11-05T11:25:19Z"
lastReleaseAt: "2026-11-05T10:56:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 12
maintainers: ["Hoerire"]
openGraphImageUrl: "https://opengraph.githubassets.com/de13512e86dd4cb04a9806c482eb13fd21a19e20fb9acf130cd931cd389aed2d/Hoerire/FlymeFreeform"
---

On ColorOS, make the floating small windows at hand more convenient: swipe diagonally inward from a bottom corner of the screen to bring up a fan-shaped menu, slide to the app you want and release, and the small window opens directly. When you're done, tap outside the window to close it.

This project is an Xposed module. It adds no resident service and instead relies on hooking the system's existing freeform window and sidebar capabilities.

## Preview

## Features

- **Fan-shaped activation**: Swipe diagonally up and inward from the left or right bottom corner to bring up the fan-shaped menu. When you slide onto a slot, its icon enlarges as feedback. Release to open it in a small window.
- **"More" panel**: Split into "Favorites" and "Recent" groups. Favorites follow the settings and ordering from the system Smart Sidebar. Recent lists recently opened apps.
- **Close on outside tap**: Single or double tap outside the small window to close it. This behavior can also be turned off entirely.
- **Swipe up for mini window**: Quickly swipe up on the bottom bar of the small window to switch it to a mini window.
- **Shortcut management**: Apps, dual apps (clones), sidebar tools, and…
