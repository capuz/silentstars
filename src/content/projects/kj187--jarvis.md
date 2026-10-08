---
repo: "kj187/jarvis"
name: "jarvis"
description: "Jarvis is an open source web frontend for Prometheus Alertmanager — interactive, realtime, and self-hosted."
readmeQualityOk: true
url: "https://github.com/kj187/jarvis"
homepage: "https://kj187.github.io/jarvis/"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [48, 42]
topics: ["alerting", "alertmanager", "monitoring", "on-call", "prometheus-alertmanager", "prometheus", "helm", "kubernetes", "self-hosted", "sre"]
stars: 65
forks: 2
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T11:25:14Z"
lastCommitAt: "2026-10-08T10:51:12Z"
lastReleaseAt: "2026-06-19T08:22:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 37
maintainers: ["kj187", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1260324034/1c22f5f5-f44a-44c7-8873-2f8b21ad6dff"
discussionCount: 0
---

**Jarvis** is an open source web frontend for Prometheus Alertmanager — interactive, realtime, and self-hosted.

It was inspired by [Karma](https://github.com/prymitive/karma), which is a great project. However, I was missing features that matter for day-to-day on-call work: full persistence across restarts, the ability to comment on individual alerts, a claiming system so the team knows who is handling what, and a solid foundation to build further operational tooling on top of. Jarvis is the result.

## Why Jarvis?

Most Alertmanager UIs are read-only dashboards. Jarvis is built for teams that need to *act* on alerts, not just observe them:

- **Realtime alerts** via WebSocket — no page reload required
- **Persistent history** — full alert lifecycle stored in SQLite or PostgreSQL, with a grace period that prevents ghost-resolve noise on a missed poll
- **Claiming & comments** — assign an alert to yourself, leave fingerprint-bound notes that survive restarts and re-fires
- **Multi-cluster & Alertmanager HA** — every cluster live in one view; point one cluster at an HA gossip group and alerts are deduplicated by fingerprint
- **Silences with confidence** — live preview of exactly…
