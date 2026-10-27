---
repo: "nimbleflux/clickhouse-query-analyzer"
name: "clickhouse-query-analyzer"
description: "Simple UI to analyze ClickHouse query executions"
readmeQualityOk: true
url: "https://github.com/nimbleflux/clickhouse-query-analyzer"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [65, 34]
stars: 22
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-21T05:09:14Z"
lastCommitAt: "2026-10-27T12:39:41Z"
lastReleaseAt: "2026-05-27T12:53:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 26
maintainers: ["bartcode", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6de34f818ffaacae30212faad164b99eed5a521bbbf376f7b55390cfdd78019/nimbleflux/clickhouse-query-analyzer"
---

# ClickLens

A single-binary tool with a built-in web UI to analyze ClickHouse query executions. Connect to any ClickHouse instance, explore query logs, drill into CPU/memory/IO usage per thread, view flame graphs, compare queries side by side, and run ad-hoc SQL.

## Features

- **System Dashboard** — Overview of uptime, active queries/merges/parts, database sizes, top tables by size and part count, system metrics and events. Replica status and replication queue for clusters.
- **Replication** — Dedicated monitoring of `system.replicas`, `system.replication_queue`, pending `system.mutations`, and Keeper session health, with summary stat cards, 24h activity charts from `system.metric_log`, action-item badges, filters (database / errors-only / executing), and opt-in live auto-refresh.
- **DDL** — Distributed DDL queue (`system.distributed_ddl_queue`) and recent schema operations from `system.query_log`, surfacing stuck/failed `ON CLUSTER` DDL at a glance, with a configurable timeframe and ops-over-time chart.
- **Mutations** — Active `system.mutations` (`ALTER … UPDATE/DELETE/TTL` data rewrites) with parts-to-do, age, and failure detail, plus `KILL MUTATION`.
- **Merges** —…
