---
repo: "ArchiveBox/abx-plugins"
name: "abx-plugins"
description: "🧩 Plugins and extractors that ArchiveBox + abx-dl use: chrome, ytdlp, wget, singlefile, readability, forum-dl, gallery-dl, papers-dl, and more..."
readmeQualityOk: true
url: "https://github.com/ArchiveBox/abx-plugins"
homepage: "https://plugins.archivebox.io"
language: "Python"
languages: ["Python"]
languagePcts: [62]
topics: ["abx", "archivebox", "chromium", "gallery-dl", "headless-browser", "internet-archiving", "puppeteer", "readability", "scraping", "singlefile"]
stars: 20
forks: 6
openIssues: 17
closedIssues: 19
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-02T00:24:45Z"
lastCommitAt: "2026-11-23T10:25:29Z"
lastReleaseAt: "2026-03-16T02:37:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["pirate"]
openGraphImageUrl: "https://opengraph.githubassets.com/85ec8207e5a6a3788041bcddfb2c5d6c9422e8b9c5407b8fc7d5bd1c232e1341/ArchiveBox/abx-plugins"
---

# [ArchiveBox Plugin Marketplace](https://plugins.archivebox.io/)

> **Tip**
>
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
