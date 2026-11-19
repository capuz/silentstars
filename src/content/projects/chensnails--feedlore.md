---
repo: "chensnails/FeedLore"
name: "FeedLore"
description: "笺川 FeedLore · Self-hosted RSS reader and resource card wall (Node 22 + PostgreSQL + React)"
originalDescription: "笺川 FeedLore · 自托管 RSS 阅读器与资源卡片墙（Node 22 + PostgreSQL + React）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chensnails/FeedLore"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 36]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T09:39:29Z"
lastCommitAt: "2026-11-19T05:05:29Z"
lastReleaseAt: "2026-10-21T22:40:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["chensnails"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8920bb28133130d05a2bc909766b1efc10b9c5ff1d294ed3c5d02b6a2123ade/chensnails/FeedLore"
discussionCount: 0
---

# 笺川 · FeedLore

> Pick up what's worth reading: a self-hosted RSS reader + resource card wall.
> Multi-user · No ads · No telemetry · All data stays in your own PostgreSQL.

**Live demo**: https://feedlore.669600.xyz  (`demo` / `demo`)
Current version **2.5.2** (2.5.3 pending release) · [Changelog](https://github.com/chensnails/FeedLore/blob/HEAD/CHANGELOG.md) · [Quick start](#快速开始)

## Highlights

- **Two ways to read**: On the article page, click a title to expand the full text in place. The card wall lays out images and resource links in a grid, with one-click copy and recognition of common cloud-drive links.
- **Subscriptions and rules**: OPML import/export, group sorting, per-feed fetch frequency and full-text fetching; keyword/regex filtering, follow/block rules.
- **AI daily digest and MCP**: Organizes the last 24 hours of new items into a Chinese briefing. External AI clients can query channels, full article text, and digests directly via `/mcp` ([integration docs](https://github.com/chensnails/FeedLore/blob/HEAD/docs/MCP.md)).
- **Multi-user and roles**: Each person has their own subscriptions, read status, favorites, rules, and model configuration.
