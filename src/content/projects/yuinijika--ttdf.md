---
repo: "YuiNijika/TTDF"
name: "TTDF"
description: "The Intuitive Typecho Theme Framework."
originalDescription: "The Intuitive Typecho Theme Framework."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YuiNijika/TTDF"
homepage: "https://blog.miomoe.cn/docs/ttdf/v5"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "typecho", "typecho-theme"]
stars: 52
forks: 5
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-08T20:12:40Z"
lastCommitAt: "2026-11-16T04:21:41Z"
lastReleaseAt: "2025-07-03T18:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["YuiNijika"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5117da2efe9682f8d160eb5895fb51a579f837eb8cd5d18859f6e6cac54476e/YuiNijika/TTDF"
---

# TTDF v5

> The Intuitive Typecho Theme Framework.

TTDF v5 is a modern theme development framework for Typecho 1.2.1+ / 1.3.x, requiring PHP 8.2+. The current version is `5.0.0-next`, maintained in parallel with the frozen `v4` branch.

## Features

- PSR-4 autoloading and the `TTDF\\` namespace
- Lightweight bootstrapper; production does not depend on Composer
- Native Typecho Widgets, routing, database, and security capabilities
- Secure automatic page routing and component loading
- Configurable page template mapping (Typecho entry templates → `app/components/` components)
- Admin settings panel based on Arco Design Vue, and component interaction regression testing
- Home, archive, post, page, and comment templates using native Typecho Widgets
- Deterministic Hook / Filter system
- Read-only public REST API and nonce-protected admin endpoints
- Custom settings table, JSON values, and one-time migration
- PHPUnit, PHPStan, and GitHub Actions

## Requirements

- PHP 8.2+
- Typecho 1.2.1+ / 1.3.x

## Installation

1. Place the theme directory into `usr/themes/`.
2. Enable the theme in the Typecho admin panel.
3. Open the theme settings and save once to initialize the `ttdf`…
