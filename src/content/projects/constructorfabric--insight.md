---
repo: "constructorfabric/insight"
name: "insight"
description: "Constructor Insight defines roles and activities, connects to your systems through ready-to-use connectors (including AI tools), and measures productivity at individual, team, and organization levels. Drill from headline metrics down to source data."
readmeQualityOk: true
url: "https://github.com/constructorfabric/insight"
homepage: "https://www.constructorfabric.org"
language: "Rust"
languages: ["Rust", "TypeScript", "Python"]
languagePcts: [38, 30, 25]
topics: ["analytics", "analytics-engineering", "dashboards", "dwh", "git", "insight", "metrics"]
stars: 10
forks: 9
openIssues: 525
closedIssues: 846
watchers: 1
contributors: 131
recentReleases: 1
createdAt: "2026-05-22T07:27:42Z"
lastCommitAt: "2026-08-28T15:32:09Z"
lastReleaseAt: "2026-08-03T01:48:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 63
maintainers: ["aleksdotbar", "Gregory91G", "cyberantonz"]
openGraphImageUrl: "https://opengraph.githubassets.com/22745024f2963dd012cfbd2a1c21a44980779d3dc0c33d336ba61f131a3775be/constructorfabric/insight"
---

# Insight

> Decision Intelligence Platform

**Insight** is an extensible platform that collects operational data from across an organisation's toolchain, resolves all activity to unified person identities, and delivers actionable analytics for productivity improvement, bottleneck detection, process performance tracking, and team health reviews.

This repository is the **monorepo** for the Insight product. It contains:
- **`src/`** — source code for all platform components
- **`docs/`** — canonical product and technical specifications (specs, designs, ADRs)

- [What Is Insight](#what-is-insight)
- [Architecture Overview](#architecture-overview)
  - [Components](#components)
  - [Bronze → Silver → Gold pipeline](#bronze--silver--gold-pipeline)
- [Repository Structure](#repository-structure)
  - [Root scripts](#root-scripts)
  - [`src/`](#src)
  - [`docs/`](#docs)
  - [`inbox/`](#inbox)
- [Connector Coverage](#connector-coverage)
- [Key Concepts](#key-concepts)
- [Quick Start](#quick-start)
  - [Local development (Docker Compose)](#local-development-docker-compose)
  - [Cluster deployment](#cluster-deployment)
  - [Configure connectors](#configure-connectors)
  - [Services and…
