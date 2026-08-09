---
repo: "TongWu/JAVDB_AutoSpider"
name: "JAVDB_AutoSpider"
description: "Javdb Auto Spider"
readmeQualityOk: true
url: "https://github.com/TongWu/JAVDB_AutoSpider"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["javdb"]
stars: 454
forks: 21
openIssues: 0
closedIssues: 23
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-06-27T01:42:33Z"
lastCommitAt: "2026-08-09T04:47:18Z"
lastReleaseAt: "2026-05-08T13:20:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 36
maintainers: ["TongWu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bed27ff883427009a4d8dde8b3fd83edd51cea42ae27c87f2bc73d2ab468917b/TongWu/JAVDB_AutoSpider"
---

# JavDB Auto Spider

A Python + Rust automation system for extracting torrent links from javdb.com and automatically adding them to qBittorrent. Designed as an ingestion pipeline before scraping platforms like [MDC-NG](https://github.com/mdc-ng/mdc-ng).

English | [简体中文](https://github.com/TongWu/JAVDB_AutoSpider/blob/HEAD/README_CN.md)

## Features

- **Modular Spider** — 14 specialized modules in `javdb/spider/`, fetches and filters entries with subtitle/today tags, extracts magnet links with priority ordering
- **Rust Acceleration** (optional) — PyO3 + maturin extension for 5-10x faster HTML parsing; falls back to pure Python automatically
- **Parallel Processing** — Multi-threaded detail page fetching with one worker per proxy; auto-activates in pool mode with 2+ proxies
- **Torrent Classification** — Priority-based categories: 字幕 (subtitle), hacked (UC无码破解 > UC > U无码破解 > U), no_subtitle
- **Dual Mode** — Daily mode (default pages) and Ad Hoc mode (custom URLs for actors, tags, etc.)
- **qBittorrent Integration** — Auto-upload torrents with categorization, file size filtering, and duplicate prevention
- **PikPak Bridge** — Transfer old torrents from qBittorrent to PikPak cloud…
