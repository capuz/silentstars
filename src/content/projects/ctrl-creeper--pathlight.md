---
repo: "Ctrl-Creeper/pathlight"
name: "pathlight"
description: "Native macOS storage change monitor and disk space analyzer"
readmeQualityOk: true
url: "https://github.com/Ctrl-Creeper/pathlight"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [52, 48]
stars: 19
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-07-08T10:00:05Z"
lastCommitAt: "2026-09-19T02:47:37Z"
lastReleaseAt: "2026-09-18T03:02:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 39
maintainers: ["Ctrl-Creeper"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4eddd2b62bcb988602ec0b210cadaa44932233e62d9ba97ff156e4f877dfa77/Ctrl-Creeper/pathlight"
---

# Pathlight

Watches folders and tells you what changed on disk, when, and by how much. A native macOS app, and a window for Windows and Linux. Pick a folder, and Pathlight records every create, modify, delete, and move inside it — live in a floating monitor, or long-term in the background with history, trends, and growth alerts.

This is a fork of [Ctrl-Creeper/pathlight](https://github.com/Ctrl-Creeper/pathlight) that keeps only the file-change monitoring feature. The disk space analyzer (scanning, sunburst chart, file browser, trash actions) has been removed. The monitoring engine lives in a Rust core (`core/`). Three hosts sit on top of it: the macOS app, which takes its FSEvents stream and its byte attribution from the core and keeps exclusion, journal and history in Swift; `gui/`, a window for Windows and Linux that links the core directly and uses all of it; and `pathlight-monitor`, the same watches and settings from a terminal on any OS. They also share a journal format, held byte-for-byte by `core/tests/swift_compat.rs`, so any host reads another's history.

## Features

### Live Monitor

- **Watch any folder** and see changes stream in as they happen, in a pinnable…
