---
repo: "WatchMeJoustMyFlags/JoustMania"
name: "JoustMania"
description: "Raspberry Pi Jousting at its finest"
readmeQualityOk: true
url: "https://github.com/WatchMeJoustMyFlags/JoustMania"
homepage: "http://joustmania.com"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [55, 39]
stars: 5
forks: 2
openIssues: 92
closedIssues: 525
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-11T14:47:23Z"
lastCommitAt: "2026-10-17T07:58:40Z"
lastReleaseAt: "2026-03-16T20:21:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 83
maintainers: ["aepfli"]
openGraphImageUrl: "https://opengraph.githubassets.com/b89c9b3d19d04aacb27dccb1d6702af193644c321dae2fc75c7b5a0a52a09eb0/WatchMeJoustMyFlags/JoustMania"
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

**Open the dashboard:** http://localhost:8080

| Interface | URL | Purpose |
|-----------|-----|---------|
| Dashboard | http://localhost:8080 | Main UI, controller visualization |
| Jaeger | http://localhost:8080/jaeger/ | Distributed tracing |
| Prometheus | http://localhost:8080/prometheus/ | Metrics |
| Grafana | http://localhost:8080/grafana/ | Dashboards (admin/joustmania) |

## Game Modes

- **Joust FFA** - Free-for-all…
