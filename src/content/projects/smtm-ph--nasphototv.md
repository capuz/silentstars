---
repo: "SMTM-PH/NasPhotoTV"
name: "NasPhotoTV"
description: "Android TV client for the Feiniu fnOS photo album: timeline, albums, RAW, panorama, and video, with a StandBy-style photo screensaver and automatic LAN discovery of the NAS on first connection"
originalDescription: "飞牛 fnOS 相册的 Android TV 客户端：时间线/相册/RAW/全景/视频，StandBy 风格照片屏保，首次连接自动发现局域网 NAS"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SMTM-PH/NasPhotoTV"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [81]
stars: 25
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T02:55:19Z"
lastCommitAt: "2026-11-25T03:12:14Z"
lastReleaseAt: "2026-11-18T07:30:21Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 44
maintainers: ["SMTM-PH"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfa2a3f982c5933b5cb7f9a995fffdf9cb027d257f403e57101b4e7635b42dfa/SMTM-PH/NasPhotoTV"
---

# NAS Photo TV

> **Watch photos and videos from your NAS on your TV, and turn the TV into a breathing electronic photo frame.**

Android TV prototype app (Kotlin + Jetpack Compose). Package name `com.nasphoto.tv`, single Activity, pure Compose, no TV-specific libraries. The standby display is modeled on iPhone's StandBy: a large clock, photo ambience, weather, and burn-in prevention.

> 🍎 **Apple TV version**: native tvOS 1.2.8, supports tvOS 17+. For build, device signing, and distribution instructions, see [apple/README.md](https://github.com/SMTM-PH/NasPhotoTV/blob/HEAD/apple/README.md).

- Version: `1.2.14` (versionCode 20). [Download the officially signed APK from GitHub Releases](https://github.com/SMTM-PH/NasPhotoTV/releases/tag/v1.2.14)
- Tech stack: Kotlin 2.0.21 / AGP 8.7.3 / Compose BOM 2024.12.01 (Compose 1.7.6, material3 1.3.1) / **minSdk 24 (Android 7.0)**, compileSdk 35, targetSdk 34. `java.time` is provided by core library desugaring.
- Data source: **real Feiniu photo album** (`data/fn/`: WSS encrypted login, signed HTTP, AccessToken injection, LAN auto-discovery). Original files are streamed directly from the NAS.

---
