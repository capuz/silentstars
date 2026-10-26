---
repo: "madesroches/micromegas"
name: "micromegas"
description: "Unified observability for logs, metrics and traces — low overhead instrumentation (Rust, Unreal Engine 5), OTLP ingestion, SQL analytics on DataFusion over Parquet, presentation through notebooks, Grafana and Python. Self-hosted."
readmeQualityOk: true
url: "https://github.com/madesroches/micromegas"
homepage: "https://micromegas.info"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 21]
topics: ["apache-arrow", "datafusion", "flight-sql", "logging", "metrics", "observability", "time-series", "traces", "rust", "unreal-engine-5"]
stars: 56
forks: 10
openIssues: 61
closedIssues: 383
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2024-01-27T14:17:06Z"
lastCommitAt: "2026-10-26T18:06:11Z"
lastReleaseAt: "2025-09-18T20:23:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["madesroches-ubi", "madesroches"]
openGraphImageUrl: "https://opengraph.githubassets.com/405b7850be29e8690062cb0e2bf4018b38950e8d940c2f1eab776ea0d8985bf4/madesroches/micromegas"
discussionCount: 0
---

---

Micromegas is an observability system designed to provide unified insights into complex applications. It allows you to collect and analyze logs, metrics, and traces in a single, scalable database. Our goal is to help you spend less time reproducing bugs and more time understanding and improving your software's quality and performance.

## Objectives

*   Empower developers with comprehensive insights, eliminating time-consuming bug reproduction.
*   Quantify issue frequency and severity to allow better priority management.
*   Provide detailed traces based on high-frequency telemetry to enable a deep understanding of every issue.

## Key Features

*   **🚀 Unified Observability:** Store and query logs, metrics, and traces together to get a complete picture of your application's behavior.
*   **🔌 OpenTelemetry Compatible:** Native OTLP/HTTP ingestion alongside the high-performance native protocol — point any OTel SDK at the ingestion service and have logs, metrics, and traces land in the lakehouse.
*   **⚡ Low-Overhead Instrumentation:** Client-side instrumentation adds minimal overhead, averaging just **20 ns per event** in the calling thread.
*   **🌊 High-Frequency Data…
