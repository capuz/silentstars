---
repo: "AmirrezaFarnamTaheri/ConfigStream"
name: "ConfigStream"
description: "ConfigStream collects, deduplicates, tests, and ranks free VPN/proxy configs from hundreds of public sources, then publishes ready-to-use outputs on GitHub Pages. Scheduled runs (GitHub Actions) export Base64 subscriptions, Clash YAML, raw lists, and JSON metadata. Use for casual, non-sensitive browsing."
readmeQualityOk: true
url: "https://github.com/AmirrezaFarnamTaheri/ConfigStream"
homepage: "https://amirrezafarnamtaheri.github.io/ConfigStream/"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 9
forks: 2
openIssues: 17
closedIssues: 10
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-10-24T13:21:11Z"
lastCommitAt: "2026-08-30T09:15:29Z"
lastReleaseAt: "2025-11-23T09:26:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 62
maintainers: ["AmirrezaFarnamTaheri", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5d54e16499165280365451402ce1962cca898fc86b62c1c954061ba3f0203e/AmirrezaFarnamTaheri/ConfigStream"
---

# ConfigStream

**[English](https://github.com/AmirrezaFarnamTaheri/ConfigStream/blob/HEAD/README.md) • [فارسی](https://github.com/AmirrezaFarnamTaheri/ConfigStream/blob/HEAD/README_FA.md) • [简体中文](https://github.com/AmirrezaFarnamTaheri/ConfigStream/blob/HEAD/README_ZH.md) • [Русский](https://github.com/AmirrezaFarnamTaheri/ConfigStream/blob/HEAD/README_RU.md)**

ConfigStream is a sovereignty-grade, zero-budget anti-censorship platform. It continuously aggregates, validates, and distributes resilient proxy configurations under hostile network conditions.

> **Release status:** v3.2.0 is a conditional release candidate, not a verified production release. `docs/readiness.json` is the machine-readable authority and `STATUS.md` is generated from it. Production readiness requires passing exact-head CI, a sealed pipeline artifact, historical secret review, and a live GitHub Pages digest/smoke check for the same commit.

## Getting Started

### Prerequisites
- **Python 3.10+**
- **Docker** (Recommended for production)
- **Node.js 24+** (Optional, for frontend development)
- **Go 1.24+** (Optional, for high-performance tester builds)

### 🚀 Quick Start (Docker)
```bash
docker compose up…
