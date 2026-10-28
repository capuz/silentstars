---
repo: "WatchMeJoustMyFlags/JoustMania"
name: "JoustMania"
description: "Raspberry Pi Jousting at its finest"
readmeQualityOk: true
url: "https://github.com/WatchMeJoustMyFlags/JoustMania"
homepage: "http://joustmania.com"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [56, 34]
stars: 5
forks: 2
openIssues: 44
closedIssues: 907
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-10-11T14:47:23Z"
lastCommitAt: "2026-10-28T09:40:59Z"
lastReleaseAt: "2026-10-28T09:31:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 92
maintainers: ["aepfli", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57f5c201d0ce4238eddd32c037bd5c8a14e16c962462ceeca4d2764fb39409b1/WatchMeJoustMyFlags/JoustMania"
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
