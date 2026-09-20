---
repo: "kfwcc/wstats"
name: "wstats"
description: "A privately-deployed website analytics system, Wstats (WebStats) is a self-hosted website analytics platform that keeps every byte of your traffic data!"
originalDescription: "一套私有化部署的网站统计系统，Wstats (WebStats) is a self-hosted website analytics platform that keeps every byte of your traffic data！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kfwcc/wstats"
homepage: "https://wstats.kfw.cc"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["analytics", "google-analytics", "web-analytics"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-16T08:45:47Z"
lastCommitAt: "2026-09-20T08:40:18Z"
lastReleaseAt: "2026-09-20T03:38:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 23
maintainers: ["kfwcc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b227da890fa5c8dced4f8cca9e7edafad52f02c4f6b9fd5a3a9ded9b6b6a2873/kfwcc/wstats"
---

# Website Analytics System (WebStats)

Self-hosted website analytics platform: **Native PHP + MySQL + Redis** backend, **React + Semi Design** admin panel, **Zero-dependency JS SDK** frontend collection. Supports multi-site, multi-user (registration/login + file verification), multi-language (Chinese/EN).

> Currently delivered: Overview dashboard (PV/UV/IP/bounce rate/average duration/activity trends/today's real-time hourly breakdown), **Traffic Source Analysis** (channel composition/trends/external links/UTM series/ad platforms), session list + complete single-session behavior logs, registration/login, multi-site management + two-step file verification, SDK installation guide (**verified sites cannot be modified, SDK available only after verification**). The remaining 12 in-depth modules (visitors/journey/ads/performance/replay/heatmap/funnel/geography/big screen…) have reserved full-field schema at the collection layer and database level per plan, to be delivered iteratively by phase.

---

## 1. Architecture Overview

```
┌──────────── Tracked Site ────────────┐      ┌────────────── WebStats Server ──────────────┐
│ <script src="…/sdk/wstat.js"      │      │  Entry:…
