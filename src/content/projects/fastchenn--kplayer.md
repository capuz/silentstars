---
repo: "fastchenn/KPlayer"
name: "KPlayer"
description: "K Player is an Android WebDAV video player built with Kotlin, Jetpack Compose, and libmpv. It provides a folder-style media library, direct video URL playback, instant cached playback and switching, history, and folder navigation."
originalDescription: "K Player — 基于 Kotlin、Jetpack Compose 与 libmpv 的 Android WebDAV 播放器，打造专属于你自己的文件夹式媒体库，支持视频直链播放、缓存秒播秒切、历史记录与文件夹定位等。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fastchenn/KPlayer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T08:02:04Z"
lastCommitAt: "2026-11-12T05:43:10Z"
lastReleaseAt: "2026-11-10T05:17:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 53
maintainers: ["fastchenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d46471562f9a4f7754fe25518b826135f3e9b895597699312ab46c609494a2f6/fastchenn/KPlayer"
---

# K Player

An Android WebDAV video player with a dark Chinese-language interface, using the libmpv playback engine. Minimum Android version is 8.0. The release APK supports **arm64-v8a**.

[Download Android APK](https://github.com/fastchenn/KPlayer/releases/download/v0.3.9/k-player-0.3.9-arm64.apk) · [View release notes](https://github.com/fastchenn/KPlayer/releases/tag/v0.3.9)

## Interface Preview

  

## Download

Download `k-player-0.3.9-arm64.apk` from the [0.3.9 Release](https://github.com/fastchenn/KPlayer/releases/tag/v0.3.9). The same page provides the source code for the native components, APK signing information, and `SHA256SUMS.txt`.

0.3.9 is a release APK with debugging turned off. It keeps using the fixed K Player Release signing certificate from 0.3.1, so it can upgrade over 0.3.1 / 0.3.2 / 0.3.3 / 0.3.4 / 0.3.5 / 0.3.6 / 0.3.7 / 0.3.8 and earlier fixed-signature test builds, and it preserves app data. Future releases are set up to sign with the same key through a GitHub Actions encrypted secret, and the maintainer keeps a separate backup. The signing private key for 0.2.5 has not been found, and 0.3.0 used a different temporary CI key, so this version cannot…
