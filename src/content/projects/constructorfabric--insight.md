---
repo: "constructorfabric/insight"
name: "insight"
description: "Constructor Insight defines roles and activities, connects to your systems through ready-to-use connectors (including AI tools), and measures productivity at individual, team, and organization levels. Drill from headline metrics down to source data."
readmeQualityOk: true
url: "https://github.com/constructorfabric/insight"
homepage: "https://www.constructorfabric.org"
language: "Rust"
languages: ["Rust", "Python", "TypeScript"]
languagePcts: [42, 27, 26]
topics: ["analytics", "analytics-engineering", "dashboards", "dwh", "git", "insight", "metrics"]
stars: 28
forks: 9
openIssues: 626
closedIssues: 1215
watchers: 1
contributors: 18
recentReleases: 2
createdAt: "2026-05-22T07:27:42Z"
lastCommitAt: "2026-10-30T11:03:10Z"
lastReleaseAt: "2026-10-14T16:57:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 48
maintainers: ["cyberantonz", "dependabot[bot]", "aleksdotbar"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0057da4c21c5b69ee049ef60ad701b506ee87aee9a1b826760a2026ab75653a/constructorfabric/insight"
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
