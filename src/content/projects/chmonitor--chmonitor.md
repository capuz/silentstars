---
repo: "chmonitor/chmonitor"
name: "chmonitor"
description: "Open-source operational advisor for ClickHouse — real-time monitoring plus AI-driven index/partition/materialized-view recommendations."
readmeQualityOk: true
url: "https://github.com/chmonitor/chmonitor"
homepage: "https://chmonitor.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["clickhouse", "monitoring", "duyet", "chmonitor", "ai-agent", "cloudflare-workers", "database-monitoring", "mcp", "observability", "open-source"]
stars: 305
forks: 48
openIssues: 13
closedIssues: 789
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-11-16T13:18:24Z"
lastCommitAt: "2026-10-21T23:36:37Z"
lastReleaseAt: "2024-09-16T09:15:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 41
maintainers: ["duyet", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/719577983/19074cad-5b9a-4e4e-925a-7ebb6947e85e"
---

· <a href="https://chmonitor.dev/">Website</a>
  · <a href="https://docs.chmonitor.dev">Docs</a>
  · <a href="https://docs.chmonitor.dev/guide/getting-started">Getting started</a>
  · <a href="#quick-start">Quick start</a>

**chmonitor** is a dashboard and advisor for ClickHouse. It reads `system.*`
tables and shows what the cluster is doing — queries, merges, replication,
storage, health — then recommends what to change next.

It does **not** apply DDL for you. Recommendations stay recommendations.

Runs the same way on Docker, Kubernetes, bare metal, or ClickHouse Cloud.
Self-host it free (GPL-3.0), or use the [hosted demo](https://dash.chmonitor.dev/overview?host=0).

Current release: **[v0.3.7](https://github.com/chmonitor/chmonitor/releases/tag/v0.3.7)**.
Upgrading from v0.2? See [Migrate to v0.3](https://docs.chmonitor.dev/reference/migrating/v0-3).

---

## What it does

| You need | chmonitor |
|---|---|
| See the cluster | Overview, topology, health checks, 30+ charts |
| Catch expensive work | Running, slow, failed, and historical queries |
| Understand data | Explorer, table size, parts, compression, TTLs |
| Keep replicas healthy | Merges, mutations, replication queue,…
