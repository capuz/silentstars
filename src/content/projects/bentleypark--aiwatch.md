---
repo: "bentleypark/aiwatch"
name: "aiwatch"
description: "Real-time monitoring dashboard for 39 AI services — uptime, latency, incidents, AIWatch Score reliability ranking."
url: "https://github.com/bentleypark/aiwatch"
homepage: "https://ai-watch.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [65, 29]
topics: ["ai", "ai-monitoring", "cloudflare-workers", "dashboard", "devtools", "monitoring", "react", "status-page"]
stars: 15
forks: 2
openIssues: 36
closedIssues: 382
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-19T04:33:51Z"
lastCommitAt: "2026-06-25T01:38:54Z"
lastReleaseAt: "2026-04-13T03:09:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["bentleypark"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185924743/6702c89d-05ea-4beb-af2b-c9ba093adfed"
discussionCount: 0
---

# AIWatch

**English** | [한국어](README.ko.md)

Real-time monitoring dashboard for **41 AI services** — track status, latency, uptime, and incidents across major AI providers.

**[Dashboard](https://ai-watch.dev)** · **[Landing Page](https://ai-watch.dev/intro)**

| Desktop | Mobile |
|---------|--------|
|  |  |

**Share**

## 🛰️ Live Demo

Visit **[ai-watch.dev](https://ai-watch.dev)** — no signup required. Updated every 5 minutes via Cloudflare Workers.

## Features

- **Real-time status** — Operational / Degraded / Down for 41 AI services
- **PWA support** — Add to home screen, offline cache with Service Worker
- **Latency monitoring** — Direct API endpoint response time (RTT) for 28 probe-capable services, status page timing as fallback
- **24h latency trend** — Chart.js line chart with 5-min probe snapshots
- **Incident history** — Timeline with details from multiple status page formats
- **Official uptime** — Per-component uptime from Statuspage, incident.io, Better Stack
- **Component status breakdown** — Real-time per-component status (models, API surfaces, …) on ServiceDetails + Is X Down for 24 multi-component services, with collapsible section/model groups for long…
