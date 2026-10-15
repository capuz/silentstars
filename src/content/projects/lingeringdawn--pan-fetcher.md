---
repo: "lingeringdawn/pan-fetcher"
name: "pan-fetcher"
description: "115 Cloud Drive RSS BT Aggregated Search Subscription Download Tool | Docker Deployment | Web Management Panel | WeCom Notifications | Multiple Indexers"
originalDescription: "115 网盘 RSS BT 聚合搜索订阅下载工具 | Docker 部署 | Web 管理面板 | 企业微信通知 | 多索引器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lingeringdawn/pan-fetcher"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["115", "automation", "bt", "cloud-storage", "crawler", "docker", "downloader", "go", "rss", "rss-feed"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T09:54:16Z"
lastCommitAt: "2026-10-15T08:32:57Z"
lastReleaseAt: "2026-07-15T06:02:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 36
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0620bc312cf668cc209a82131a439cae9b91da168c06b8578193a5408803cdc5/lingeringdawn/pan-fetcher"
discussionCount: 0
---

# pan-fetcher · 115 Cloud Drive RSS BT Download Subscription Tool

---

An automatic tool for tracking anime and TV series. Search for resources → add subscriptions → automatically push to 115 offline downloads, with the full workflow managed from a web panel. Supports Cookies / QR code login. All operations go through the official 115 API.

## ✨ Features

### 🎬 TMDB Discovery

Search for movies and TV shows, view full details (posters, synopses, ratings, genres), and jump to aggregated search with one click to find resources.

### 🔍 Aggregated Search

Based on Jackett, with hundreds of indexers. Tag filtering, keyword filtering, and paginated browsing. Search results are automatically deduplicated.

By default, it **filters out entries whose titles do not contain the search term**. Indexer sites match loosely, and short show titles often bring up many irrelevant results, so enabling this significantly reduces noise. It can be turned off on the settings page.

### 📡 Jackett Integration

Two usage modes, switchable on the settings page:

- **Built-in Jackett** (default): Automatically detects the local instance and reads its configuration (including the API Key). If none is…
