---
repo: "justinjjlee/NHL-Analytics"
name: "NHL-Analytics"
description: "Data science analyses delving into National Hockey League (NHL) ice hockey statistics"
readmeQualityOk: true
url: "https://github.com/justinjjlee/NHL-Analytics"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["python", "julia", "julia-language", "sports", "sports-analytics", "sports-stats", "nhl", "nhl-data", "visualization", "machine-learning"]
stars: 30
forks: 4
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-07-31T15:52:09Z"
lastCommitAt: "2026-10-17T08:00:18Z"
lastReleaseAt: "2021-08-06T05:22:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 60
maintainers: ["github-actions[bot]", "justinjjlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/44d95b2935f629eb0d803d4cad1b2c5f031d30c392b1cb8b3b947cfd6976800d/justinjjlee/NHL-Analytics"
---

**NHL Analytics (Rinklytics)** is an end-to-end sports analytics platform and public open-data lakehouse. It collects, cleans, models, and visualizes National Hockey League (NHL) data, uncovering tactical behaviors, physical momentum, market odds efficiencies, and player career trajectories.

All deep-dive articles and analytical methodologies are published on **[Medium (@thinkingjustin)](https://medium.com/@thinkingjustin)**.

---

## 🏛️ System Scope & Architecture

The platform operates across four coordinated environments:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NHL API & Data Sources                          │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ Daily Automated Pulls (09:00 & 20:00 UTC)
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   GitHub Actions Automation & CI/CD                    │
│   • Scrapes raw box scores, odds, player logs, and play-by-play events │
│   • Commits incremental updates to latest/ repository files            │
│   • Deduplicates &…
