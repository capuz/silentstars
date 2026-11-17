---
repo: "FIOIU8/DevInfo"
name: "DevInfo"
description: "An Android device information viewer built with Kotlin Compose, providing detailed display of hardware, system, network, and other information."
originalDescription: "An Android device information viewer built with Kotlin Compose, providing detailed display of hardware, system, network, and other information. | 一款基于 Kotlin Compose 开发的 Android 设备信息查看工具，提供详细的硬件、系统、网络等信息展示。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FIOIU8/DevInfo"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T15:10:52Z"
lastCommitAt: "2026-11-17T14:43:37Z"
lastReleaseAt: "2026-07-26T14:09:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["FIOIU8"]
openGraphImageUrl: "https://opengraph.githubassets.com/966da64b4ae3fd866c0552e39eeb3594038274881bad21ce1ad9be3d5b45c737/FIOIU8/DevInfo"
---

# DevInfo

| Device Overview | Real-time Metrics & Categorized Info | Hardware Details |
| --- | --- | --- |
| <img src="https://raw.githubusercontent.com/FIOIU8/DevInfo/HEAD/readme_overview.png" width="220" alt="Device Overview"> | <img src="https://raw.githubusercontent.com/FIOIU8/DevInfo/HEAD/readme_overview_metrics.png" width="220" alt="Real-time Metrics & Categorized Info"> | <img src="https://raw.githubusercontent.com/FIOIU8/DevInfo/HEAD/readme_hardware_details.png" width="220" alt="Hardware Details"> |

DevInfo is an Android device information viewer written in Kotlin and Jetpack Compose. It collects device information locally, provides a real-time hardware overview, categorized details, theme and language settings, and can export the information as a Magisk/KernelSU ZIP module.

## Features

### Device Information and Real-time Overview

- The details page uses seven horizontal pages: Device, Screen, SoC & Storage, Battery & Network, Camera, Sensors, and More. Existing fields are kept and grouped by purpose. Switch by tapping the top tabs or swiping horizontally.
- Covers Android version, SDK, ABI, kernel, security patch, screen, memory/storage, battery, network, sensors,…
