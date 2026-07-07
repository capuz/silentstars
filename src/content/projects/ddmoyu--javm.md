---
repo: "ddmoyu/javm"
name: "javm"
description: "Jav video management tool, including: scraping, downloading, and playback."
originalDescription: "Jav 视频管理工具，包含：刮削，下载，播放。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ddmoyu/javm"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [64, 27]
topics: ["download", "jav", "scaper"]
stars: 285
forks: 25
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T16:04:21Z"
lastCommitAt: "2026-07-07T06:35:57Z"
lastReleaseAt: "2026-04-01T15:53:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 27
maintainers: ["ddmoyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf11df5e9883f467ab850228ddcd7e57cc9274f759e27040d541b7a9aa22f396/ddmoyu/javm"
discussionCount: 1
---

# JAVM

A desktop video management tool based on Tauri + Vue 3 + Rust, focusing on an integrated process of "local media library + resource scraping + download management + deep linking".

## Features

1. Media Library Management
- Scan local directories and add to the library
- Directory-level management and statistics
- Duplicate video detection (based on file features and numbers)
- Supports moving, deleting video files, and synchronizing database updates

2. Resource Scraping
- Quickly retrieve resource information by entering numbers
- Supports multi-site scraping and task queues
- Writes video metadata, actors, tags, cover, NFO
- Supports batch cover screenshots and completion

3. Download Management
- Built-in download task queue and concurrency control
- Supports pause, resume, stop, retry, rename, and other operations
- Real-time download progress updates
- Optional automatic scraping after download

4. Playback and Screenshots
- Built-in player page
- Supports cover and screenshot management
- Supports cleaning/rebuilding screenshot data

5. Deep Linking
- Supports `javm://download?url=...&title=...`
- Can be directly invoked from browsers or other applications to create…
