---
repo: "ArchiveBox/abx-plugins"
name: "abx-plugins"
description: "🧩 Plugins and extractors that ArchiveBox + abx-dl use: chrome, ytdlp, wget, singlefile, readability, forum-dl, gallery-dl, papers-dl, and more..."
readmeQualityOk: true
url: "https://github.com/ArchiveBox/abx-plugins"
homepage: "https://plugins.archivebox.io"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [55, 23, 20]
topics: ["abx", "archivebox", "chromium", "gallery-dl", "headless-browser", "internet-archiving", "puppeteer", "readability", "scraping", "singlefile"]
stars: 17
forks: 3
openIssues: 17
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T00:24:45Z"
lastCommitAt: "2026-10-09T18:56:43Z"
lastReleaseAt: "2026-03-16T02:37:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["pirate"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b4a29e9fbe9cb9c2664c7d9eaaddce836f3a22c9b80cbc88a43941e1d9546ef/ArchiveBox/abx-plugins"
---

# [ArchiveBox Plugin Marketplace](https://plugins.archivebox.io/)

> [!TIP]
> **[➡️ View The Live Gallery 🌠](https://plugins.archivebox.io/)**
> [](https://plugins.archivebox.io/)

ArchiveBox-compatible plugin suite (hooks and config schemas).

This package contains standalone plugin hook scripts and config schemas. A hook
can be run directly as a CLI; runners such as [`abx-dl`](https://github.com/archiveBox/abx-dl)
and [`archivebox`](https://github.com/archiveBox/ArchiveBox) add orchestration,
environment setup, and cache projection around the same scripts.

## Usage

Tools like `abx-dl` and ArchiveBox can discover plugins from this package
without symlinks or environment-variable tricks.

## Plugin Contract

### Directory layout

Each plugin lives under `plugins/<name>/` and may include:

- `config.json` config schema
- optional `config.json > screenshot` points to a plugin-owned JSON recipe, such as `"screenshot": "screenshot.json"`
- optional generic catalog metadata in `config.json`: `category`, `display_order`, `hidden`, and `x-auto-run` (set false for hooks that require explicit host selection)
- optional `snapshot_thumbnail_cards` declarations in `config.json` identify…
