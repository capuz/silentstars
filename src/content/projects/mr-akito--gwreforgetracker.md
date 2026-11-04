---
repo: "Mr-Akito/GWReforgeTracker"
name: "GWReforgeTracker"
description: "A simple Guild Wars Quest Tracker to mark quests as in-progress or completed while having the Wiki View within it."
readmeQualityOk: true
url: "https://github.com/Mr-Akito/GWReforgeTracker"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 20]
stars: 9
forks: 2
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-11-29T08:43:59Z"
lastCommitAt: "2026-11-04T02:57:04Z"
lastReleaseAt: "2026-11-04T02:46:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 29
maintainers: ["Mr-Akito"]
openGraphImageUrl: "https://opengraph.githubassets.com/c94d1983a1e08248e695911ba38f3e165d7338a8fb3d970ec3cfc29cb3ba2f82/Mr-Akito/GWReforgeTracker"
---

# Guild Wars Reforge Quest Tracker

## Version: 1.0.3

Created by: Akito

A high-performance desktop quest journal and progression tracker for Guild Wars. Built on an **HTML5 presentation engine** (`PySide6` + `QWebEngineView` + `QWebChannel`) with visual design and fluid animation concepts inspired by **[reactbits.dev](https://reactbits.dev)** and **[animejs.com](https://animejs.com)**.

---

### Visual Overhaul, Performance, & Stability Architecture (v1.0.3)

* **Configurable Low GPU / Hardware Performance Mode:**
  * Toggleable from both the main header bar (`⚡`) and the Settings menu to reduce GPU consumption on lower-spec graphics hardware by disabling the background canvas, glass blur shaders, and continuous wave loops.
* **Flicker-Free Display & Zero-Stutter Scrolling:**
  * Uses offscreen pre-rendered canvas sprites, CSS content containment (`contain: content`), and surgical in-place DOM updates so toggling quest states or scrolling through 931 quests maintains smooth performance without compositor flickering.
* **Fluid Liquid Wave Progress Bar & Real-Time Campaign Metrics:**
  * Animated liquid fill bar with toggleable wave motion, tracking **Completed / Total**…
