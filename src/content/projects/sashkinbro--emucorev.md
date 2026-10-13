---
repo: "sashkinbro/EmuCoreV"
name: "EmuCoreV"
description: "PlayStation Vita emulator for Android with a custom UI, game library, catalog, and Vita3K-based core."
readmeQualityOk: true
url: "https://github.com/sashkinbro/EmuCoreV"
homepage: "https://emucorev.web.app/"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [70, 26]
topics: ["android", "arm64", "cmake", "emulator", "jetpack-compose", "jni", "kotlin", "playstation-vita", "ps-vita", "vita3k"]
stars: 233
forks: 7
openIssues: 4
closedIssues: 84
watchers: 9
contributors: 2
recentReleases: 0
createdAt: "2026-04-23T06:40:33Z"
lastCommitAt: "2026-10-13T10:57:52Z"
lastReleaseAt: "2026-06-07T21:37:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 29
maintainers: ["sashkinbro"]
openGraphImageUrl: "https://opengraph.githubassets.com/951c0530945f5fb038d9cf24a527e4bca92b21cb4c1534e389e97b980e1498f3/sashkinbro/EmuCoreV"
---

# EmuCoreV

EmuCoreV is a PlayStation Vita emulator for Android. It combines a custom Android interface, library and catalog UX, installer flows, and runtime controls with a Vita3K-based emulation core adapted for this app.

## Highlights

- Vita3K-based native core integrated into a Kotlin + Jetpack Compose Android app
- Library and catalog screens with cover art, metadata, media, and compatibility badges
- Firmware, update, `VPK`, `ZIP`, `PKG`, `zRIF`, `RIF`, and `work.bin` install flows
- In-game overlay, per-game settings, and Android-first storage and setup flows
- App language selection and localized UI resources

## Screenshots

In-game captures running on a Snapdragon 8 Elite Gen 5 device with the Vulkan renderer:

| God of War Collection | FIFA 15 |
| --- | --- |
|  |  |

| Assassin's Creed III Liberation | Rayman Legends |
| --- | --- |
|  |  |

| Gravity Rush | |
| --- | --- |
|  | |

## What This Repository Contains

This repository contains the Android application, Compose UI, JNI bridge code, bundled Vita3K source tree, catalog assets, and supporting build tooling used by EmuCoreV.

## Tech Stack

- Kotlin + Jetpack Compose
- Android DataStore
- JNI bridge to native…
