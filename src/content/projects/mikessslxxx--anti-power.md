---
repo: "mikessslxxx/anti-power"
name: "anti-power"
description: "Browse and clean local sessions for the Antigravity App and Antigravity CLI (agy)"
originalDescription: "查看并清理 Antigravity App 和 Antigravity CLI (agy) 的本地会话 | Browse and clean local sessions for the Antigravity App and Antigravity CLI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mikessslxxx/anti-power"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [69, 22]
topics: ["agy", "antigravity", "antigravity-cli", "rust", "session-manager", "tauri", "vue"]
stars: 114
forks: 7
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-01-13T10:30:59Z"
lastCommitAt: "2026-11-24T14:05:10Z"
lastReleaseAt: "2026-11-24T07:40:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 28
maintainers: ["mikessslxxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/47aeed435fb14da2bbcd5b84d043298a1f6646e74132cb0b9ffc2c12dcbe89dd/mikessslxxx/anti-power"
---

Chinese | <a href="README_EN.md">English</a>

> Browse and clean local sessions for the **Antigravity App** and **Antigravity CLI** (`agy`), with support for installing the Usage Monitor.

## Features

- Lists sessions from the Antigravity App (`~/.gemini/antigravity`) and the Antigravity CLI (`~/.gemini/antigravity-cli`), and also recognizes CC Switch's `~/.cc-switch/agy/<profile>/antigravity-cli`
- Search by title, project, or session ID; filter by source (shows the detected client version); view messages
- Delete sessions individually or in batches, with results shown for each one
- Flags index-only residual records (left behind when other tools delete session files), which can be hidden or deleted
- Preview and batch-clean empty model probe sessions in Magpie's standalone storage

Verified on macOS with Antigravity App 2.34.0 and Antigravity CLI 1.5.14. Windows and Linux packages have not been tested yet. Antigravity IDE (`~/.gemini/antigravity-ide`) is not supported.

## Cleanup Scope

Clean up the following data by source and session ID:
