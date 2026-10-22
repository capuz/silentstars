---
repo: "EricFL1998/HyperModes"
name: "HyperModes"
description: "A native-style mode and automation tool built for HyperOS"
originalDescription: "一个为HyperOS 打造的原生风格模式与自动化工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/EricFL1998/HyperModes"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-07-21T03:49:40Z"
lastCommitAt: "2026-10-22T08:51:59Z"
lastReleaseAt: "2026-08-11T13:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/098d79198b1b52cd1cf8395c9f3424e842566d605baba4cb7b11c82715d0a1e9/EricFL1998/HyperModes"
---

A native-style mode and automation tool built for HyperOS.

> [!IMPORTANT]
> **System requirements**: Android 17 (API 37) or later, and **Xiaomi HyperOS 4**.
> This version only supports OS4. OS3 (Android 16 and below) devices cannot install it, and the module will not load on older systems.

## Core Features

### 1. Deep system integration, extremely stable
The core logic of HyperModes runs in the `system_server` process. The app itself is only a configuration editor, which means:
- **Native experience**: Mode switching responds quickly, with no third-party background service resident.
- **Process independent**: Even if the HyperModes app is cleaned up or uninstalled, configured automation logic still runs accurately in the system.
- **Ultra-low power consumption**: Triggered by native system mechanisms, so it generates no extra standby power draw.

### 2. Deep integration with the official Clock app
Sleep mode connects directly to the bedtime feature of the official HyperOS Clock app:
- **Data sync**: Fully inherits the bedtime settings from the official Clock app.
- **High stability**: Uses the system's built-in bedtime trigger mechanism to solve the problem of third-party apps…
