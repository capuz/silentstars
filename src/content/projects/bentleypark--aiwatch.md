---
repo: "bentleypark/aiwatch"
name: "aiwatch"
description: "Real-time monitoring dashboard for 45 AI services — uptime, latency, incidents, AIWatch Score reliability ranking."
readmeQualityOk: true
url: "https://github.com/bentleypark/aiwatch"
homepage: "https://ai-watch.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [71, 24]
topics: ["ai", "ai-monitoring", "cloudflare-workers", "dashboard", "devtools", "monitoring", "react", "status-page"]
stars: 22
forks: 5
openIssues: 65
closedIssues: 531
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-19T04:33:51Z"
lastCommitAt: "2026-07-28T14:56:44Z"
lastReleaseAt: "2026-04-13T03:09:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["bentleypark"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185924743/6702c89d-05ea-4beb-af2b-c9ba093adfed"
discussionCount: 0
---

# AIWatch

**English** | [한국어](https://github.com/bentleypark/aiwatch/blob/HEAD/README.ko.md)

Real-time monitoring dashboard for **45 AI services** — track status, latency, uptime, and incidents across major AI providers.

**[Dashboard](https://ai-watch.dev)** · **[Landing Page](https://ai-watch.dev/intro)**

| Desktop | Mobile |
|---------|--------|
|  |  |

**Share**

## 🛰️ Live Demo

Visit **[ai-watch.dev](https://ai-watch.dev)** — no signup required. Updated every 5 minutes via Cloudflare Workers.

## Features

- **Real-time status** — Operational / Degraded / Down for 45 AI services
- **PWA support** — Add to home screen, offline cache with Service Worker
- **Latency monitoring** — Direct endpoint response time (RTT) for 33 probe-capable services, status page timing as fallback
- **24h latency trend** — Chart.js line chart with 5-min probe snapshots
- **Incident history** — Timeline with details from multiple status page formats
- **Uptime** — 30-day uptime **computed by AIWatch** from each provider's own published records, rather than copied from the % they display (weighted: full outage 1.0, partial/degraded 0.3, announced maintenance excluded). Sources that don't fit…
