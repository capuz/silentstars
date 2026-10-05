---
repo: "nechodom/hyperion"
name: "hyperion"
description: "Rust hosting control panel for Debian. Multi-node clustering, kernel-enforced quotas, tamper-evident audit log, and live progress bars on every operation. The Cloudpanel / HestiaCP alternative that doesn't shell-template PHP at root."
readmeQualityOk: true
url: "https://github.com/nechodom/hyperion"
homepage: "https://hyperion.nechodom.cz/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["axum", "debian", "hosting-control-panel", "hosting-panel", "htmx", "nginx", "php-fpm", "rust", "self-hosted", "self-hosting"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T10:26:22Z"
lastCommitAt: "2026-10-05T10:47:28Z"
lastReleaseAt: "2026-07-03T07:21:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["nechodom"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc90ad4f6436c0c27d8e21eda6dd6016209fc2eed6bba4092c35441be95002e/nechodom/hyperion"
---

# Hyperion

**A self-hosted, multi-node hosting control panel, written in Rust.**

One agent binary per server, one web UI on the master. Hyperion provisions
PHP, static, and reverse-proxy sites end to end — Linux user, nginx vhost,
PHP-FPM pool, database, TLS, WordPress — in a single transaction that rolls
back cleanly if any step fails. Drive a fleet of servers from one screen, a
scriptable HTTP API, and a CLI — and import what you already run on HestiaCP
or CloudPanel.

[Install](#install) · [Features](#features) · [Remote API](#remote-api) · [Import](#import-from-another-panel) · [Architecture](#architecture) · [Status](#status)

---

> [!NOTE]
> **Running in production.** Hyperion currently serves real customer sites on
> two production deployments. It is still a young project — it has not been
> exercised across a large fleet, and the multi-node path has seen less traffic
> than the single-node one — so keep backups and report anything that breaks.

---

## Screenshots

| Dashboard | Cluster stats |
| --- | --- |
| [](docs/screenshots/dashboard.png) | [](docs/screenshots/stats.png) |
| KPI tiles, load and bandwidth sparklines, audit feed. | Cluster and per-node metrics,…
