---
repo: "chmonitor/chmonitor"
name: "chmonitor"
description: "Open-source operational advisor for ClickHouse — real-time monitoring plus AI-driven index/partition/materialized-view recommendations. Self-host or use the cloud."
readmeQualityOk: true
url: "https://github.com/chmonitor/chmonitor"
homepage: "https://chmonitor.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["clickhouse", "monitoring", "duyet", "chmonitor", "ai-agent", "cloudflare-workers", "database-monitoring", "mcp", "observability", "open-source"]
stars: 255
forks: 42
openIssues: 4
closedIssues: 440
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2023-11-16T13:18:24Z"
lastCommitAt: "2026-08-12T05:13:47Z"
lastReleaseAt: "2024-09-16T09:15:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 42
maintainers: ["duyet", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/719577983/19074cad-5b9a-4e4e-925a-7ebb6947e85e"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo.png">
  </picture>
</p>

<h1 align="center">chmonitor</h1>

**chmonitor is an operational advisor for ClickHouse** — not just a metrics viewer. It reads `system.*` and recommends projections, skip indexes, partition keys, PREWHERE rewrites, and materialized views (it *recommends*, and never auto-applies DDL), on top of the real-time query/cluster/replication monitoring you'd expect. Managed-ClickHouse AI tools stay locked to their own Cloud; chmonitor works the same way on Docker, Kubernetes, bare metal, or ClickHouse Cloud — self-host it free (GPL-3.0) or use the hosted [Cloud](#self-hosted-oss-vs-cloud-saas), same codebase either way.

</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/screenshots/overview-dark-with-bg.jpeg">
</picture>

> **Current release: [v0.3.0](https://github.com/chmonitor/chmonitor/releases/tag/v0.3.0).**
> Upgrading from v0.2? v0.3 rebuilds the app on TanStack Start. ClickHouse
> connection vars are unchanged; browser vars move from `NEXT_PUBLIC_*` to
> `VITE_*` (old names still work as a fallback). See
> **[Upgrading to v0.3](#upgrading-to-v03)**…
