---
repo: "Senguk520/CodeRelay-tools"
name: "CodeRelay-tools"
description: "CodeBuddy / WorkBuddy Account pool manager — Centrally manage multiple CodeBuddy China station accounts, with built-in local OpenAI-compatible reverse proxy, multi-account scheduling / quota monitoring / daily check-in / API Key management / model synchronization and local caching / request statistics / system tray notifications. Multi-account routing, quota monitoring, daily check-in, local reverse proxy & more."
originalDescription: "CodeBuddy / WorkBuddy 账号池管理工具 · Account pool manager —— 集中管理 CodeBuddy 中国站多账号，内置本地 OpenAI 兼容反代，多账号调度 / 配额监控 / 每日签到 / API Key 管理 / 模型同步与本地缓存 / 请求统计 / 系统托盘通知。Multi-account routing, quota monitoring, daily check-in, local reverse proxy & more."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Senguk520/CodeRelay-tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["api", "codebuddy", "ide", "openai", "proxy", "workbuddy"]
stars: 27
forks: 5
openIssues: 6
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-09-01T17:24:34Z"
lastCommitAt: "2026-10-04T10:01:56Z"
lastReleaseAt: "2026-09-29T17:47:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 42
maintainers: ["Senguk520", "github-actions[bot]", "hmbbjack"]
openGraphImageUrl: "https://opengraph.githubassets.com/59135830fa2c5d8c8c00c2aa9bfc071bef625021e0c9e0241c954a254406956a/Senguk520/CodeRelay-tools"
---

# CodeRelay

A **Windows desktop management tool** for advanced users: centrally manage CodeBuddy China station account pools, and run a local **OpenAI-compatible reverse proxy service**, allowing clients like Cursor, CodeBuddy IDE, etc. to access multiple accounts through a unified local address, with load balancing, cooling-off periods, and quota scheduling according to policies.

[English](https://github.com/Senguk520/CodeRelay-tools/blob/HEAD/README.en.md) | **English**

> Visually adopts 'macOS flavor, Windows behavior': grayscale hierarchy + semantic status colors, narrow bar navigation, custom frameless title bar, persistent service status bar at the bottom.

---

## Features

- **Account pool management**: Supports three methods to add accounts—OAuth/web login, manual token pasting, and configuration file import; account health status, cooling-off periods, quotas, and binding relationships at a glance; supports long-press drag-and-drop to reorder accounts, account export for backup and migration.
- **Daily check-in**: Single account check-in or one-click check-in for all accounts.
- **API Key management**: `sk-*` prefix support, account binding range, model restrictions,…
