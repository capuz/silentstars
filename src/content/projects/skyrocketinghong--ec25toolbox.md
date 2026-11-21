---
repo: "skyrocketingHong/EC25Toolbox"
name: "EC25Toolbox"
description: "A native macOS control center for EC25-class cellular modems, messaging, calls, GNSS, networking, eUICC, and remote management"
originalDescription: "A native macOS control center for EC25-class cellular modems, messaging, calls, GNSS, networking, eUICC, and remote management 面向 EC25 类蜂窝模块、短信、通话、GNSS、网络、eUICC 与远程管理的原生 macOS 控制中心"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/skyrocketingHong/EC25Toolbox"
homepage: "https://github.com/skyrocketingHong/EC25Toolbox/releases"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["cellular", "ec25", "esim", "estk", "euicc", "ims", "lpac", "macos", "menu-bar-app", "quectel"]
stars: 19
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-17T07:46:27Z"
lastCommitAt: "2026-11-21T13:30:35Z"
lastReleaseAt: "2026-09-01T08:10:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 30
maintainers: ["skyrocketingHong", "aabolfazl"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ff84aecce98ae24f281c13aed82a2d792bc5f2ee4a9e2215bbcbbaa0902473b/skyrocketingHong/EC25Toolbox"
---

English | <a href="README_ZH.md">Simplified Chinese</a>

  A native macOS control center for EC25-class cellular modems, messaging, calls, GNSS, networking, eUICC, and remote management

  A native macOS control center for EC25-class cellular modems, messaging, calls, GNSS, networking, eUICC, and remote management

EC25 Toolbox is a native macOS menu bar utility for Quectel EC25 and EC21, compatible Baiwang USB modems, and compatible first-generation DJI Cellular Dongle (LTE USB Modem) hardware. It communicates through IOKit and IOUSBHost and combines modem status, SMS, calls, SIM security, GNSS, networking, remote management, eUICC operations, and experimental VoWiFi in one SwiftUI application.

Current source version: **27.1.1** · Bundle identifier: **`ing.fuyaoskyrocket.ec25toolbox`**

> **Warning**
>
> **eSTK/eUICC, VoWiFi, and the optional QDC507 voice runtime are experimental.** Firmware, eUICC, SIM, carrier, access-network, and hardware differences can cause failures or data loss. Back up critical data and keep an independent recovery path before changing profiles, module configuration, or voice-routing state.
