---
repo: "Wave-RF/WaveHouse"
name: "WaveHouse"
description: "Schema-aware real-time API gateway for ClickHouse. Async ingestion with per-table batching, JWT/JWKS auth, Hasura-style access policies, query caching, real-time SSE streaming, optional deduplication."
readmeQualityOk: true
url: "https://github.com/Wave-RF/WaveHouse"
homepage: "https://wavehouse.dev"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["analytics", "api-gateway", "clickhouse", "go", "jwt", "nats", "observability", "rbac", "real-time", "sse"]
stars: 40
forks: 1
openIssues: 246
closedIssues: 225
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-03-24T15:52:09Z"
lastCommitAt: "2026-10-13T10:57:54Z"
lastReleaseAt: "2026-10-13T08:26:04Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 43
maintainers: ["EricAndrechek", "taitelee", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1190772458/2ee4013a-de2d-4950-9bdc-c4bec456e9ed"
discussionCount: 0
---

ClickHouse® is a great database with a subpar API. WaveHouse fixes that.

  The open-source real-time API gateway for ClickHouse: schema-aware ingest, async batching, real-time SSE streaming, and tiered query caching.
  All in a single binary.

---

## Quick Start Guide

```bash
git clone https://github.com/Wave-RF/WaveHouse.git && cd WaveHouse
docker compose -f deployments/compose/standalone.yaml up -d
```

The in-repo compose spins up WaveHouse and ClickHouse. Then, create a table (or import your existing schema):

```bash
docker compose -f deployments/compose/standalone.yaml exec clickhouse \
  clickhouse-client --query "CREATE TABLE IF NOT EXISTS events (kind String, user String, received_timestamp DateTime64(3,'UTC') DEFAULT now64(3,'UTC')) ENGINE=MergeTree ORDER BY kind"
```

Then, stream live events in one terminal, ingest one in another, and watch the ingested events arrive from the stream:

```bash
curl -N "http://localhost:8080/v1/stream?table=events" & sleep 1
```

> [!IMPORTANT]
> No auth is needed to ingest with the trial policy the stack mounts from `deployments/compose/settings/`. The policy is VERY permissive, and not intended for production deployments.

```bash…
