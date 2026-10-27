---
repo: "yanruying/douyin-downloader"
name: "douyin-downloader"
description: "Douyin profile works parsing and download"
originalDescription: "抖音主页作品解析下载"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yanruying/douyin-downloader"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [71, 22]
stars: 73
forks: 5
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-10-19T06:25:56Z"
lastCommitAt: "2026-10-27T12:39:57Z"
lastReleaseAt: "2026-10-27T00:46:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 31
maintainers: ["yanruying"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f216bfd95290f3a21f9f8674dde5dc71e49a638ca461eefb372eafda2ef8a13/yanruying/douyin-downloader"
---

# Douyin Works Download Tool v4.0

A batch download desktop app for Douyin works, built with Tauri 2 and Rust. It supports four capture modes: profile works, liked works, favorited works, and single works. It includes resumable downloads, a global network speed display, a system tray, and Excel export.

Downloading, network speed sampling, Cookie management, and Douyin API requests all run inside the Rust process. No external programs such as aria2 or ffmpeg are required.

Author: 颜如嘤 - YanRuYing

## Features

| Module | Description |
| --- | --- |
| Four capture modes | Single work (video/image set), profile works, liked works, favorited works |
| QR code login | Opens Douyin in an embedded WebView and automatically reads Cookies, no manual copying needed |
| Batch download | Supports batch fetching for multiple users, with each user's works stored in separate directories |
| Resumable downloads | After an interruption, `.tmp` files are kept and the download resumes from the breakpoint next time |
| Global network speed | Samples the system network interface receive rate, refreshed every 500ms |
| Categorized saving | Automatically organizes the directory structure by user,…
