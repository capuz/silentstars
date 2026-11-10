---
repo: "Institut-du-Numerique-Responsable/perf-sentinel"
name: "perf-sentinel"
description: "Lightweight, polyglot performance anti-pattern detection with built-in carbon-aware scoring."
readmeQualityOk: true
url: "https://github.com/Institut-du-Numerique-Responsable/perf-sentinel"
homepage: "https://perf-sentinel.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["cli", "devtools", "green-software", "microservices", "observability", "opentelemetry", "performance", "rust", "sql", "tracing"]
stars: 44
forks: 4
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-14T10:26:54Z"
lastCommitAt: "2026-11-10T11:38:20Z"
lastReleaseAt: "2026-04-16T08:14:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 45
maintainers: ["robintra", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1181573685/4a32ecbf-13bd-418d-af90-dcda3c53af05"
discussionCount: 0
---

**Self-hosted single binary (17 MB idle, RSS then set by `max_retained_findings`) that detects I/O anti-patterns (N+1, redundant calls, slow SQL/HTTP, fanout) in your services' OpenTelemetry traces and turns that exact I/O into an energy and carbon estimate. Run it as a CI quality gate on captured traces (or for local exploration and post-mortems), or as a long-running OTLP daemon (live dashboard, Prometheus metrics, query API).**

> **Read this first**
> - **Prerequisite:** your services must emit OpenTelemetry traces (SQL + HTTP spans), or dd-trace bridged through a Collector, and those spans must carry the query text (`db.statement` / `db.query.text`) and the target URL (`http.url` / `url.full`). Language-specific setup (Java / C# / Rust / Go / Node.js / Python / Ruby / PHP): [docs/INSTRUMENTATION.md](https://github.com/Institut-du-Numerique-Responsable/perf-sentinel/blob/HEAD/docs/INSTRUMENTATION.md). Without an OpenTelemetry SDK, teams on Datadog can bridge dd-trace through the OTel Collector `datadogreceiver` instead, see [Coming from…
