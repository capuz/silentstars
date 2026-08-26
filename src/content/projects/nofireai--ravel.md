---
repo: "NOFireAI/ravel"
name: "ravel"
description: "A distributed OpenTelemetry-native columnar datastore whose only backend is object storage."
readmeQualityOk: true
url: "https://github.com/NOFireAI/ravel"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["columnar-storage", "datafusion", "datastore", "distributed-systems", "logs", "metrics", "opentelemetry", "otel", "promql", "rust"]
stars: 43
forks: 1
openIssues: 185
closedIssues: 230
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-14T11:52:50Z"
lastCommitAt: "2026-08-26T04:12:35Z"
lastReleaseAt: "2026-08-20T19:46:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 39
maintainers: ["pmoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/f176c77d072cb66a358fbad9ec84e4d302d48a7907ed55d70b4bb04434576425/NOFireAI/ravel"
discussionCount: 0
---

# Ravel

**The write is acknowledged when S3 has it. Not before.**

Ravel is an OpenTelemetry-native database for metrics, logs, and traces where
object storage is the only durable component. No write-ahead log. No ingester
quorum. No StatefulSet. Kill any Ravel process at any instant, and every
acknowledged write is still there.

## Why it is built this way

Every self-hosted observability stack ends up storing data on object storage.
Almost none of them start there. Mimir, Loki, Tempo, and Thanos buffer writes in
a replicated ingest tier with local disks, then ship to object storage later.
That is why running them means running a write-ahead log, PersistentVolumeClaims,
replication factors, and rollout ordering.

Ravel makes the object store the first stop. An ingest shard builds an immutable
columnar segment in memory, PUTs it, PUTs a commit record, and only then answers
the exporter. The response carries a commit token. Pass that token back to a
query and you read your own write, with no listing race.

The trade is explicit. You pay object-store latency on the write path, and you
delete the entire stateful tier. Ravel's job is to make that a good trade.

## What works today

|…
