---
repo: "WatchMeJoustMyFlags/JoustMania"
name: "JoustMania"
description: "Raspberry Pi Jousting at its finest"
readmeQualityOk: true
url: "https://github.com/WatchMeJoustMyFlags/JoustMania"
homepage: "http://joustmania.com"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [54, 38]
stars: 5
forks: 2
openIssues: 49
closedIssues: 766
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-11T14:47:23Z"
lastCommitAt: "2026-10-22T08:35:05Z"
lastReleaseAt: "2026-03-16T20:21:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 88
maintainers: ["aepfli"]
openGraphImageUrl: "https://opengraph.githubassets.com/485867fe3be0aa092f95e38d6148daa9e722042088c089dd36f2d9631719edb7/WatchMeJoustMyFlags/JoustMania"
---

**Microservices-based motion gaming platform for PlayStation Move controllers.**

A cloud-native refactor of the [original JoustMania](https://github.com/adangert/JoustMania) party game system, rebuilt with modern observability practices. Ideal for learning distributed systems, gRPC, and OpenTelemetry.

## Quick Start

### With PS Move Controllers (Raspberry Pi / Linux)

```bash
git clone https://github.com/WatchMeJoustMyFlags/JoustMania.git
cd JoustMania
./setup.sh    # Install dependencies, Bluetooth config, pairing daemon
```

The setup script will guide you through installation and optionally enable autostart on boot.

### Demo Mode (No Hardware)

```bash
git clone https://github.com/WatchMeJoustMyFlags/JoustMania.git
cd JoustMania
make up-mock
```

**Open the dashboard:** http://localhost

| Interface | URL | Purpose |
|-----------|-----|---------|
| Dashboard | http://localhost | Main UI, controller visualization |
| Jaeger | http://localhost/jaeger/ | Distributed tracing |
| VictoriaMetrics | http://localhost/victoria-metrics/vmui/ | Metrics (Prometheus query API) |
| Grafana | http://localhost/grafana/ | Dashboards (anonymous access enabled; no login configured) |

## Game…
