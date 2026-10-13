---
repo: "ArchiveBox/abx-plugins"
name: "abx-plugins"
description: "🧩 Plugins and extractors that ArchiveBox + abx-dl use: chrome, ytdlp, wget, singlefile, readability, forum-dl, gallery-dl, papers-dl, and more..."
readmeQualityOk: true
url: "https://github.com/ArchiveBox/abx-plugins"
homepage: "https://plugins.archivebox.io"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [58, 22]
topics: ["abx", "archivebox", "chromium", "gallery-dl", "headless-browser", "internet-archiving", "puppeteer", "readability", "scraping", "singlefile"]
stars: 17
forks: 4
openIssues: 17
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T00:24:45Z"
lastCommitAt: "2026-10-13T10:57:52Z"
lastReleaseAt: "2026-03-16T02:37:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["pirate"]
openGraphImageUrl: "https://opengraph.githubassets.com/8569885f3cb13dc20a0d5eaaa4b5d09695a6da08592df129290347241a2c6094/ArchiveBox/abx-plugins"
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
