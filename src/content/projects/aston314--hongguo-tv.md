---
repo: "aston314/hongguo-tv"
name: "hongguo-tv"
description: "Android TV client: sidebar layout, Go core, GitHub Actions multi-ABI build"
originalDescription: "Android TV 客户端： 侧栏布局、Go 核心、GitHub Actions 多 ABI 构建"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/aston314/hongguo-tv"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [57, 23]
stars: 27
forks: 19
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T06:58:27Z"
lastCommitAt: "2026-11-02T15:17:19Z"
lastReleaseAt: "2026-10-07T16:11:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 54
maintainers: ["aston314", "fogfire"]
openGraphImageUrl: "https://opengraph.githubassets.com/43e1959a19504891be0e17f8cf11c22d5d189a64d8d0ed46f015c85e2cbcfef8/aston314/hongguo-tv"
---

# Hongguo Short Drama TV

Standalone Android TV client project, implemented as an Android shell with a Go core.

The current version includes a runnable Go local service, an Android TV shell, a Mac-style recommendation page, Hongguo category and detail APIs, and a built-in APK playback pipeline. It is built with GitHub Actions.

## Project Direction

- Keep the left sidebar and right content area of the Mac version; the recommendation page centers on the video feed.
- Redesign remote-control focus, panel fallback, and playback state restoration for TV.
- The Android shell, Go compilation, and packaging workflow reference `aston314/vidsrc-local-proxy`; the playback protocol reuses the verified signing and CENC decryption implementation.
- The APK is compiled on GitHub Actions for `arm64-v8a`, `armeabi-v7a`, and `x86_64`.

## Feature Scope

Recommendations, drama search, categories, rankings, new dramas, details, episode selection, continuous playback, same-series, next season, history, favorites, likes, reservations, account login, comments, danmaku, plus playback controls and download capabilities.

The scope lists goals and does not mean the above features are already…
