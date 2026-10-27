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
languagePcts: [56, 24]
stars: 15
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T06:58:27Z"
lastCommitAt: "2026-10-27T12:39:32Z"
lastReleaseAt: "2026-10-07T16:11:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 77
undervaluedScore: 59
maintainers: ["aston314", "Woka666"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1682bb1ed2ea2e965f40b92353a2f70c7f6dbb0c2a4fe43f78e1f3b38ad14de/aston314/hongguo-tv"
---

# 红果短剧 TV

An independent Android TV client project, implemented with an Android shell and a Go core.

The current version includes a runnable Go local service, an Android TV shell, a Mac-style recommendation page, 红果 category/detail APIs, and a built-in APK playback pipeline, built with GitHub Actions.

## Project Direction

- Keep the left sidebar and right content area of the Mac version; the recommendation page is centered on the video feed.
- Redesign remote control focus, panel fallback, and playback state restoration for TV.
- The Android shell, Go compilation, and packaging workflow reference `aston314/vidsrc-local-proxy`; the playback protocol reuses the verified signing and CENC decryption implementation.
- The APK is compiled on GitHub Actions, covering `arm64-v8a`, `armeabi-v7a`, and `x86_64`.

## Feature Scope

Recommendations, drama search, categories, rankings, new releases, details, episode selection, continuous playback, same series, next season, history, favorites, likes, reservations, account login, comments, danmaku, plus playback controls and download capabilities.

The scope describes goals and does not mean the features above are already implemented.…
