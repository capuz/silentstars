---
repo: "cedricziel/signaldb"
name: "signaldb"
description: "A signal database for OpenTelemetry"
readmeQualityOk: true
url: "https://github.com/cedricziel/signaldb"
homepage: "https://cedricziel.github.io/signaldb/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [77, 21]
topics: ["apm", "logs", "metrics", "opentelemetry", "profiles", "prometheus", "promql", "traces"]
stars: 6
forks: 0
openIssues: 45
closedIssues: 380
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2024-10-30T19:31:19Z"
lastCommitAt: "2026-10-04T10:01:16Z"
lastReleaseAt: "2026-07-30T09:59:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 88
maintainers: ["cedricziel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4740754b7557d5a95d827aa4b213780fda9aa832e555c3d42e10d2c8cc60e72b/cedricziel/signaldb"
fundingLinks: ["GITHUB:https://github.com/cedricziel"]
---

# SignalDB

**Observability for your homelab — one binary, one data directory.**

SignalDB stores traces, logs, metrics, and continuous profiles. It ingests
OpenTelemetry natively, answers Grafana's Tempo, Loki, Prometheus, and
Pyroscope APIs, and ships a built-in Explore UI — so you get a full
observability stack from a single process, without running four separate
systems to get four signals.

It is designed to be **stupidly easy to run small** and able to **scale out
when you outgrow small**: the same binary that runs on a Raspberry Pi or a
NAS with SQLite and local disk splits into independent services backed by
PostgreSQL and S3-compatible object storage.

**Try it:** [signaldb-demo.58lab.org](https://signaldb-demo.58lab.org) runs SignalDB
fed by the [OpenTelemetry Demo](https://github.com/open-telemetry/opentelemetry-demo)
shop. Sign in with `demo@example.com` / `demo` (read-only).

## Why homelabbers run it

- **One process, no dependencies.** SQLite catalog, local-disk storage,
  sensible defaults. No JVM, no Zookeeper, no sidecar zoo.
- **Bounded disk usage.** A built-in compactor enforces 30-day retention by
  default and compacts Parquet files in the background — it…
