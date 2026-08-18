---
repo: "constructorfabric/insight"
name: "insight"
description: "Constructor Insight defines roles and activities, connects to your systems through ready-to-use connectors (including AI tools), and measures productivity at individual, team, and organization levels. Drill from headline metrics down to source data."
readmeQualityOk: true
url: "https://github.com/constructorfabric/insight"
homepage: "https://www.constructorfabric.org"
language: "Rust"
languages: ["Rust", "Python", "TypeScript"]
languagePcts: [37, 28, 27]
topics: ["analytics", "analytics-engineering", "dashboards", "dwh", "git", "insight", "metrics"]
stars: 7
forks: 8
openIssues: 527
closedIssues: 725
watchers: 0
contributors: 123
recentReleases: 1
createdAt: "2026-05-22T07:27:42Z"
lastCommitAt: "2026-08-18T03:54:28Z"
lastReleaseAt: "2026-08-03T01:48:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 69
maintainers: ["aleksdotbar", "hello1101n", "Gregory91G"]
openGraphImageUrl: "https://opengraph.githubassets.com/69bd44e82115b73f02935d4d67807f9422b6fabf129ef5703cf98bdc35d2ea0c/constructorfabric/insight"
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
