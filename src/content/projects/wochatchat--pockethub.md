---
repo: "wochatchat/PocketHub"
name: "PocketHub"
description: "PocketHub — A well-crafted open-source GitHub client for Android (Kotlin + Jetpack Compose + Material 3)."
readmeQualityOk: true
url: "https://github.com/wochatchat/PocketHub"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 19
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-07-15T23:37:50Z"
lastCommitAt: "2026-08-28T14:23:32Z"
lastReleaseAt: "2026-08-28T14:23:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7150fb2136b40fbac8fe3679693fd053867d6fd5f61b05451e274f5f568fb943/wochatchat/PocketHub"
---

# PocketHub

</p>

A well-crafted open-source GitHub client for Android, built with Kotlin + Jetpack Compose + Material 3.

> Status: **Work in progress** (V1 — core client).

**[中文文档](https://github.com/wochatchat/PocketHub/blob/HEAD/README_zh.md)** · **[GitHub Releases](https://github.com/wochatchat/PocketHub/releases)**

---

## Features

### Authentication
- Personal Access Token (PAT)
- OAuth App (built-in default client + custom client override)

### Navigation (4 Tabs)
1. **Explore** — Trending repos/developers, followed activity
2. **Repositories** — Your repos + Starred, with filters and sorting
3. **Notifications** — Grouped by repository, unread/read
4. **Profile** — Multi-account, drafts, settings

Global search is available from the top bar.

### Repository Detail
Tabs: Overview (README) · Code (file tree) · Issues · PRs · Commits · Releases · Actions
*(Wiki / Projects are not yet available — planned for V2.)*

### Theming
- **Dark (Linear-inspired)** — default, compact, calm accent
- **Light (GitHub Primer-inspired)** — airy, warm cards

### Offline
- Room local cache on the main read paths (repos, issues, releases, trending, feed)
- Cache-first display with…
