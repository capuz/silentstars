---
repo: "devlive-community/toolforge"
name: "toolforge"
description: "A fast, secure, lightweight and pluggable desktop toolbox for developers and power users"
readmeQualityOk: true
url: "https://github.com/devlive-community/toolforge"
homepage: "https://toolforge.devlive.org/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 31]
stars: 16
forks: 4
openIssues: 324
closedIssues: 76
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2025-11-21T06:14:01Z"
lastCommitAt: "2026-10-23T09:32:32Z"
lastReleaseAt: "2026-10-14T08:27:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 74
undervaluedScore: 63
maintainers: ["qianmoQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff92984d7f34c0fed28cb7e8a84c87492d74f0ef048f5b622917cfb38dae6b57/devlive-community/toolforge"
---

**A fast, secure, lightweight and pluggable desktop toolbox for developers and power users**

Built with Tauri 2 and Rust: all data is processed locally in Rust, every tool is an independent plugin,
and the modern interface supports light / dark themes, Chinese and English, and in-app updates.

---

## ✨ Features

- **Your data stays local**: parsing, formatting, encoding, hashing and file I/O all run in Rust. The frontend only renders results, and nothing leaves your machine.
- **Everything is a plugin**: every tool, built-in ones included, is an independent plugin with its own manifest, Rust backend, React UI and translations. The host hard-codes no tools.
- **Live feedback for long tasks**: heavy work such as hashing large files runs as a background task with live progress and logs, and can be cancelled at any time. The task center keeps the history and logs.
- **Modern interface**: semantic design tokens, light / dark themes, custom components and window controls, a ⌘K command palette, favorites and recently used tools.
- **Clipboard-aware ⌘K**: open the command palette and it recognizes what you copied (JSON, JWT, timestamps, UUIDs, colors, curl commands, cron expressions,…
