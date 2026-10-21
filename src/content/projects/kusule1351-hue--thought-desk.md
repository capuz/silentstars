---
repo: "kusule1351-hue/thought-desk"
name: "thought-desk"
description: "A fast, local-first Notion alternative built with Rust + Tauri. Block editor, nested pages, full-text search, black-and-white UI, ~115 MB RAM."
readmeQualityOk: true
url: "https://github.com/kusule1351-hue/thought-desk"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [44, 38]
topics: ["desktop-app", "local-first", "notes", "notion-alternative", "rust", "sqlite", "svelte", "tauri", "typescript"]
stars: 80
forks: 9
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-10-11T18:19:34Z"
lastCommitAt: "2026-10-21T17:31:47Z"
lastReleaseAt: "2026-10-21T14:38:59Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 31
maintainers: ["claude", "kusule1351-hue", "brandonrbridges"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7fafc66d9ebb780cd7fb7136485e32c3dd5c9aecec17a970270c3693580ad7e/kusule1351-hue/thought-desk"
---

# Thought Desk

A fast, local-first notes workspace in the spirit of Notion: nested pages, a block editor, full-text search, databases, plus assignments, a calendar and a file library that all link together. It has a custom title bar, a vertical sidebar and a black-and-white look with optional accent colors. Built with **Rust + Tauri 2 + TypeScript** (Svelte 5 components).

## Download

**Windows 10 and 11:** get the `_x64-setup.exe` installer (about 3 MB) from the [latest release](https://github.com/kusule1351-hue/thought-desk/releases/latest). The installer isn't code-signed yet, so Windows may show "Windows protected your PC": click **More info**, then **Run anyway**. From 0.5.1 on, the app updates itself: it checks for a new version when it starts, and installs it with one click. A Microsoft Store version and Linux builds are coming soon.

## Why it's light

| | Thought Desk | Typical Electron notes app |
|---|---|---|
| Installer / binary | ~4.4 MB exe | 80–200 MB |
| Memory, open | ~115 MB | 300–600 MB |
| Memory, minimized | ~95 MB | unchanged |

*Private working set summed over all processes, measured on Windows 11 with the release build.*

- **System WebView instead of a…
