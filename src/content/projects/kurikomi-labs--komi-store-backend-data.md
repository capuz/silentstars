---
repo: "kurikomi-labs/komi-store-backend-data"
name: "komi-store-backend-data"
description: "GitHub Store Knowledge base"
readmeQualityOk: true
url: "https://github.com/kurikomi-labs/komi-store-backend-data"
homepage: "https://github-store.org/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-31T16:15:25Z"
lastCommitAt: "2026-07-30T06:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c20e0b69aa66db2a8149aa06a665fbdafdfe79266166cdfc84c693f1faed457d/kurikomi-labs/komi-store-backend-data"
---

# GitHub Store API

Automated pipeline that discovers open-source desktop and mobile applications on GitHub and categorizes them by platform and popularity. Runs daily via GitHub Actions and outputs structured JSON consumed by the GitHub Store frontend.

## What It Does

The script searches GitHub for repositories that ship **real platform installers** (`.apk`, `.exe`, `.dmg`, `.deb`, etc.) in their releases, then categorizes and ranks them:

| Category | Description | Sorting |
|---|---|---|
| **Trending** | Repos with high star velocity and recent activity | Trending score (platform relevance + star velocity) |
| **New Releases** | Repos with a stable release in the last 14 days | Release date (newest first) |
| **Most Popular** | Repos with 5,000+ stars | Star count |

Each category is fetched across 4 platforms:

| Platform | Installer types | Primary languages |
|---|---|---|
| **Android** | `.apk` (Alpine `.apk` excluded via `is_android_apk`) | Kotlin, Java |
| **Windows** | `.exe`, `.msi` | C#, C++, Rust |
| **macOS** | `.dmg`, `.pkg` | Swift, Objective-C |
| **Linux** | `.AppImage`, `.deb`, `.rpm`, `.pkg.tar.zst` | C++, Rust, C |

## Requirements

- Python 3.11+
- GitHub…
