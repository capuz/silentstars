---
repo: "NOFireAI/ravel"
name: "ravel"
description: "A distributed OpenTelemetry-native columnar datastore whose only backend is object storage."
readmeQualityOk: true
url: "https://github.com/NOFireAI/ravel"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["columnar-storage", "datafusion", "datastore", "distributed-systems", "logs", "metrics", "opentelemetry", "otel", "promql", "rust"]
stars: 48
forks: 4
openIssues: 498
closedIssues: 1181
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-14T11:52:50Z"
lastCommitAt: "2026-10-21T23:02:58Z"
lastReleaseAt: "2026-09-25T22:29:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["pmoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/74d217b4ee2d63513037a78198a18f39df1123eb4676d54a0afea3324cc706b8/NOFireAI/ravel"
discussionCount: 0
---

# Ravel

**Ravel acknowledges a write when S3 has it.**

Ravel is a database for OpenTelemetry metrics, logs, and traces. Object
storage is its only durable component: Ravel has no write-ahead log, no
replicated ingest quorum, and no StatefulSet. You can kill any Ravel process
at any instant, and every strictly acknowledged write is still there.

Strict acknowledgement is the default. Ravel acknowledges a request only after
every batch its points contributed to has its data object durably stored and
its commit record created. The response carries one commit token per shard
those points flushed through.

Buffered acknowledgement is opt-in per request. It
acknowledges after admission and enqueue to a shard actor, and it returns no
commit token. It gives up the crash guarantee of strict acknowledgement for
lower write latency. A crash between that acknowledgement and the flush loses
the buffered window. A flush whose store calls exceed the flush lifetime
budget is abandoned, and it drops rows that are already acknowledged, with no
crash.

The [consistency model](https://github.com/NOFireAI/ravel/blob/HEAD/docs/consistency-model.md) is normative for both
acknowledgement modes. [How…
