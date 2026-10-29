---
repo: "ohto-ai/PostLive"
name: "PostLive"
description: "Qt / FFmpeg desktop client for a study live-streaming platform (student project)"
originalDescription: "Qt / FFmpeg desktop client for a study live-streaming platform (student project)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ohto-ai/PostLive"
language: "C++"
languages: ["C++"]
languagePcts: [79]
topics: ["qt", "cpp", "desktop-client", "ffmpeg", "live-streaming", "student-project", "windows"]
stars: 10
forks: 6
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-09-22T16:00:39Z"
lastCommitAt: "2026-10-29T05:49:37Z"
lastReleaseAt: "2020-11-18T02:34:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 51
maintainers: ["ohto-ai", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/297700469/298b8a00-1226-11eb-9f03-105abdd1c019"
---

# PostLive

> A learning-focused live streaming desktop client: login, user profile, camera preview and RTMP streaming.
> Written in C++17 / Qt 5.15 / FFmpeg, for Windows 10 / 11 x64.
>
> A learning-focused live streaming desktop client built with C++17, Qt 5.15 and FFmpeg.

> [!WARNING]
> This is a 2020 course / learning project. Only its engineering organization has been completed; features are incomplete. Code and interfaces should not be used directly in production environments.

## Interface

## Feature Status

| Module | Status | Description |
| --- | --- | --- |
| Login window | ✅ | Account / password validation, avatar display, remember password (saves token) |
| Auto login | ✅ | Reads `auto_login` from `application.json` and starts login automatically on launch |
| User profile | ✅ | After login, requests avatar and gender from `/api` |
| Camera | ✅ | Enumerate devices, local preview, device switching |
| Microphone | ✅ | Enumerate DirectShow audio devices, supports `virtual-audio-capturer` |
| Resolution | ✅ | Select output resolution via dropdown |
| RTMP streaming | ✅ | `QProcess` invokes FFmpeg, overlays logo watermark, can start / stop broadcast |
| System tray | ✅ |…
