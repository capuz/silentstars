---
repo: "WatchMeJoustMyFlags/JoustMania"
name: "JoustMania"
description: "Raspberry Pi Jousting at its finest"
readmeQualityOk: true
url: "https://github.com/WatchMeJoustMyFlags/JoustMania"
homepage: "http://joustmania.com"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [56, 35]
stars: 5
forks: 2
openIssues: 64
closedIssues: 850
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-11T14:47:23Z"
lastCommitAt: "2026-10-27T09:01:58Z"
lastReleaseAt: "2026-03-16T20:21:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 89
maintainers: ["aepfli"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb7316db18f0375329a9ef8347d1d94efa49f395404415f539ef4834dccdb5fb/WatchMeJoustMyFlags/JoustMania"
---

**Microservices-based motion gaming platform for PlayStation Move controllers.**

A cloud-native refactor of the [original JoustMania](https://github.com/adangert/JoustMania) party game system, rebuilt with modern observability practices. Ideal for learning distributed systems, gRPC, and OpenTelemetry.

## Quick Start

### With PS Move Controllers (Raspberry Pi / Linux)

```bash
git clone https://github.com/WatchMeJoustMyFlags/JoustMania.git
cd JoustMania
./setup.sh    # Docker, Bluetooth config; then .env.local, autostart and the pinned version
```

The setup script guides you through the installation, then offers a private `.env.local`, autostart on boot and pins the checkout to a release (or an exact commit) with its images pulled, so the Pi also starts without a network ([UC-060](https://github.com/WatchMeJoustMyFlags/JoustMania/blob/HEAD/docs/use_cases/UC-060.md) A6). The autostart runs the full stack; the lite stack is for manual tests only.

### Demo Mode (No Hardware)

```bash
git clone https://github.com/WatchMeJoustMyFlags/JoustMania.git
cd JoustMania
make up-mock
```

**Open the dashboard:** http://localhost

| Interface | URL | Purpose |
|-----------|-----|---------|
|…
