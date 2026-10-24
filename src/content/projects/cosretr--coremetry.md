---
repo: "cosretr/coremetry"
name: "coremetry"
description: "Enterprise OpenTelemetry APM — traces, metrics, logs, profiles on ClickHouse"
readmeQualityOk: true
url: "https://github.com/cosretr/coremetry"
homepage: "https://cosretr.github.io/coremetry/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 34]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-13T08:37:29Z"
lastCommitAt: "2026-10-24T08:08:00Z"
lastReleaseAt: "2026-05-13T20:22:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 65
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8b5f605cc95ad21b5aa995549ec4b1b96de842a4dc648afb0c2a7e5864066331/cosretr/coremetry"
---

# Coremetry

**Open-source, OpenTelemetry-native APM with a built-in AI SRE assistant.**

Coremetry takes OTLP over gRPC and HTTP, with no proprietary agent or SDK,
and keeps traces, logs and span-derived aggregates in **ClickHouse**. Metrics are read with
**PromQL**, either from ClickHouse or from an external **VictoriaMetrics**
or other Prometheus-compatible store. Logs come from ClickHouse or an existing
**Elasticsearch** cluster and are joined to traces by `trace_id`. A
**Tempo** backend can serve as the fallback for traces that were sampled out
before they reached Coremetry. All of this ships as one Go binary with the
web UI embedded and is installed with one Helm chart.

| | |
|---|---|
| [](docs/screenshots/dashboard.png) **Per-operation RED view of a service** | [](docs/screenshots/service-graph.png) **Service map built from trace edges** |
| [](docs/screenshots/problems.png) **Problems inbox: anomalies, alert rules and exception groups, prioritised** | [](docs/screenshots/slos.png) **SLOs with error-budget burn rate** |
| [](docs/screenshots/endpoints.png) **Endpoints across services: error rate, status mix, latency** | [](docs/screenshots/logs.png) **Logs with level…
