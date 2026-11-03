---
repo: "cdlongbow/115StrmTool"
name: "115StrmTool"
description: "Windows tool for 115 cloud drive STRM generation, check-in, and Emby 302 reverse proxying."
originalDescription: "Windows下，115网盘STRM生成、签到与Emby 302反代工具。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cdlongbow/115StrmTool"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 16
recentReleases: 8
createdAt: "2026-05-29T03:26:06Z"
lastCommitAt: "2026-11-03T12:47:08Z"
lastReleaseAt: "2026-10-05T16:08:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 59
maintainers: ["MonkeyCode-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/83db7c5cc4ef0797f3f4859d23e1a3f129d83c54982c70d78fa0aff0d7a21213/cdlongbow/115StrmTool"
---

# 115 Cloud Drive STRM Generation, Check-in, and Emby Reverse Proxy Tool

115 cloud drive STRM generation + check-in + Emby reverse proxy Windows desktop tool. It lets Emby play videos from 115 cloud drive directly, without relay downloads.

Ported from the 115 cloud drive STRM assistant and Emby 302 reverse proxy in [DDSRem-Dev/MoviePilot-Plugins](https://github.com/DDSRem-Dev/MoviePilot-Plugins) into a standalone Windows desktop tool.

## Features

- **STRM file generation**: Full sync scans 115 cloud drive directories. Incremental sync compares SHA1 and processes only the differences (automatically falls back to full sync on the first run). Supports Rust-accelerated batch processing, a real-time progress bar, and cancellation at any time.
- **Fast whole-tree scan**: Full and incremental scans use the 115 recursive whole-tree API to fetch an entire subtree at once, reducing scan requests for libraries with tens of thousands of files to single digits. Automatically falls back to per-directory traversal when the API is unavailable (enabled by default, can be turned off in the P115 settings).
- **Directory node cache clearing**: The P115 settings page can clear the 115 directory…
