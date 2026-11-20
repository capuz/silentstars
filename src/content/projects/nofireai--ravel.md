---
repo: "NOFireAI/ravel"
name: "ravel"
description: "A distributed OpenTelemetry-native columnar datastore whose only backend is object storage."
readmeQualityOk: true
url: "https://github.com/NOFireAI/ravel"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["columnar-storage", "datafusion", "datastore", "distributed-systems", "logs", "metrics", "opentelemetry", "otel", "promql", "rust"]
stars: 50
forks: 6
openIssues: 716
closedIssues: 1613
watchers: 0
contributors: 7
recentReleases: 7
createdAt: "2026-08-14T11:52:50Z"
lastCommitAt: "2026-11-20T05:48:41Z"
lastReleaseAt: "2026-09-25T22:29:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["pmoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/b50f4dc42635d53364a508ecee4d17ac371d0fcae9bd0a59f463658b33de81ee/NOFireAI/ravel"
discussionCount: 1
---

# Ravel

**Ravel acknowledges a write when S3 has it.**

Ravel is a database for OpenTelemetry metrics, logs, and traces that keeps
all of its state in object storage: any S3-compatible store, Google Cloud
Storage, or Azure Blob Storage. There is no write-ahead log, no replicated ingest quorum, and no
StatefulSet to run. Kill any Ravel process at any moment, and every strictly
acknowledged write is still in the bucket.

- **Query with what you have.** A Prometheus-compatible API for Grafana, and
  SQL over metrics, logs, and traces.
- **Read your own write.** Each acknowledgement returns a commit token. A
  query that carries it is guaranteed to see that write.
- **Serve many tenants.** Per-tenant encryption keys (SSE-KMS), legal hold,
  and admission limits.

## Quickstart

You need git and Docker with Compose. Nothing is compiled.

```sh
git clone https://github.com/NOFireAI/ravel.git
cd ravel
docker compose -f deploy/docker-compose/ravel.yml up -d
```

This pulls published images and starts RustFS for object storage,
`ravel-server` 0.34.0, an OpenTelemetry Collector that sends your host's
metrics and its own logs, and Grafana. Wait for the server to report ready:
