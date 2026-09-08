---
repo: "Ctrl-Creeper/pathlight"
name: "pathlight"
description: "Native macOS storage change monitor and disk space analyzer"
readmeQualityOk: true
url: "https://github.com/Ctrl-Creeper/pathlight"
language: "Swift"
languages: ["Swift", "Rust"]
languagePcts: [74, 26]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T10:00:05Z"
lastCommitAt: "2026-09-08T06:18:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 38
maintainers: ["Ctrl-Creeper", "colinvkim"]
openGraphImageUrl: "https://opengraph.githubassets.com/76dab73f041bdfaa36c781eef590b188e9ae4057f697c934878afdf6a6818702/Ctrl-Creeper/pathlight"
---

# Pathlight

A native macOS app that watches folders and tells you what changed on disk, when, and by how much. Pick a folder, and Pathlight records every create, modify, delete, and move inside it — live in a floating monitor, or long-term in the background with history, trends, and growth alerts.

This is a fork of [Ctrl-Creeper/pathlight](https://github.com/Ctrl-Creeper/pathlight) that keeps only the file-change monitoring feature. The disk space analyzer (scanning, sunburst chart, file browser, trash actions) has been removed. The monitoring engine is being moved into a Rust core (`core/`) so the same journal, attribution, and history logic can back Linux and Windows builds later; the macOS app already sources its FSEvents stream from it.

## Features

### Live Monitor

- **Watch any folder** and see changes stream in as they happen, in a pinnable floating window
- **Noise thresholds** — record every change, or only changes of 1 KB / 1 MB and larger
- **Size attribution** — each event carries the byte delta it caused, so you can see what actually grew or shrank

### Long-Term Monitoring

- **Persistent watches** across multiple folders, restored on every launch (optionally at…
