---
repo: "YuKongA/Updater-KMP"
name: "Updater-KMP"
description: "[Multiplatform] Get HyperOS/MIUI recovery ROM info"
readmeQualityOk: true
url: "https://github.com/YuKongA/Updater-KMP"
homepage: "https://t.me/YuKongAsCIChannel"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["compose", "compose-multiplatform", "miuix"]
stars: 353
forks: 41
openIssues: 0
closedIssues: 32
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2024-05-05T07:19:14Z"
lastCommitAt: "2026-10-29T10:36:22Z"
lastReleaseAt: "2026-07-06T09:39:49Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 37
maintainers: ["dependabot[bot]", "YuKongA", "wxxsfxyzm"]
openGraphImageUrl: "https://opengraph.githubassets.com/08503727d1bd618c8eba01ded5a25aa5c65da914a1d38af7f590b9bd27e01d80/YuKongA/Updater-KMP"
---

# Updater-KMP

This is an app to get Xiaomi official recovery rom information.
Use [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/) + [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/).
**Android** / **Desktop(JVM)** / **iOS** / **macOS** are fully supported.
**Webpage([WasmJs](https://yukonga.github.io/Updater-WasmJs/))** is also basically supported.

## Usage

When obtaining the release version, system version suffix can be automatically completed using `AUTO`.  
For example: `OS3.0.306.0.AUTO` / `V14.0.4.0.AUTO`.

When obtaining the other version, please enter the complete system version yourself.  
For example: `OS1.0.23.12.19.DEV` / `V14.0.23.5.8.DEV`.

## Notes

Only supported `MIUI9` and above versions. The most extreme case is: Redmi 1S (armani), MIUI9, Android4.4.

Only devices in the list of [device.json](https://github.com/YuKongA/Updater-KMP/blob/device-list/device.json) are supported use `AUTO` to complete automatically, other devices still need to manually enter the full system version.

When you are not logged in with a Xiaomi account, you can use the miotaV3-v1 interface to obtain any detailed information of the `Pubilc…
