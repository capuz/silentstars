---
repo: "Enzoo404/gravitybox"
name: "gravitybox"
description: "macOS native companion app for Google Antigravity: UI localization, quota monitoring, multi-account management, usage statistics, and cache maintenance"
originalDescription: "Google Antigravity 的 macOS 原生伴侣应用：界面汉化、配额监控、多账号管理、用量统计与缓存维护"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Enzoo404/gravitybox"
homepage: "https://github.com/Enzoo404/gravitybox#readme"
language: "JavaScript"
languages: ["JavaScript", "Swift", "TypeScript"]
languagePcts: [42, 32, 26]
topics: ["ai-tools", "antigravity", "macos", "menubar-app", "quota-monitor", "swift", "token-counter", "typescript", "chinese", "i18n"]
stars: 61
forks: 8
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-05T15:37:03Z"
lastCommitAt: "2026-11-23T13:26:14Z"
lastReleaseAt: "2026-11-21T14:28:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 39
maintainers: ["Enzoo404"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6e56dbffe6538194cc6da00134471873c71f2b805092116978d7b7bd048b467/Enzoo404/gravitybox"
---

Zero-Patch Bilingual UI · In-IDE Telemetry HUD · Dual-Window Quotas · Safe Account Switching · Reversible Cache Trim

---

## Overview

**GravityBox** (`GravityBox v1.2.0`) is a lightweight, native macOS utility for the official stable release of `/Applications/Antigravity.app`. It embeds a self-contained Node 22 engine and communicates via local loopback CDP and read-only SQLite transactions—never unpacking, modifying, or re-signing the official application bundle.

| Capability | What It Solves |
| :--- | :--- |
| **Runtime Localization** | Dynamically toggles Antigravity UI between English and Simplified Chinese (`2.23.0`–`2.34.0` verified dictionaries plus adaptive fallback for `2.35.0+`) with zero binary patches. Prompts, chats, code, and terminal output remain untouched. |
| **In-IDE Telemetry HUD** | Mounts a compact 3-capsule toolbar below each chat composer displaying turn time, TPS, token totals, cache hit rate, compaction state, and model context usage. |
