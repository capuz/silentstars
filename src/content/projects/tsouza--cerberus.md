---
repo: "tsouza/cerberus"
name: "cerberus"
description: "Drop-in Prometheus / Loki / Tempo HTTP gateway for ClickHouse. Translate PromQL, LogQL, and TraceQL into optimized CH SQL — keep Grafana, swap the backend."
readmeQualityOk: true
url: "https://github.com/tsouza/cerberus"
homepage: "https://cerberus.foo"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["clickhouse", "golang", "grafana", "logql", "loki", "observability", "open-source", "opentelemetry", "otel", "prometheus"]
stars: 72
forks: 6
openIssues: 9
closedIssues: 1150
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-05T21:29:01Z"
lastCommitAt: "2026-10-20T08:49:34Z"
lastReleaseAt: "2026-06-17T13:19:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["tsouza", "dependabot[bot]", "R-Studio"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b8166bf6c1fd920a67d2ce78e54c35604e2c536b71793fe274df6748ffcfefd/tsouza/cerberus"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/tsouza"]
discussionCount: 0
---

### Drop-in Prometheus / Loki / Tempo HTTP gateway for ClickHouse

_Keep Grafana, alerting, and your CLI tooling. Swap the backend._

Cerberus lets you keep your metrics, logs, and traces in **ClickHouse**
and go on querying them from **Grafana** with **PromQL, LogQL, and
TraceQL** — as if Prometheus, Loki, and Tempo were still doing the work.

It is a **read-only query gateway**. You add it to Grafana as three
datasources (one Prometheus, one Loki, one Tempo). When you run a query,
cerberus translates it into ClickHouse SQL, runs it, and hands back the
normal Prometheus / Loki / Tempo response. Grafana can't tell the
difference, so your existing dashboards and alerts keep working unchanged.

      WRITE SIDE                      READ SIDE
                             (PromQL · LogQL · TraceQL)
  ┌────────────────┐         ┌──────────┐    ┌─────────┐
  │ OTel Collector │         │ cerberus │◀───│ Grafana │
  └───────┬────────┘         └────┬─────┘    └─────────┘
          │ writes                │ reads
          │    ┌─────────────┐    │
          └───▶│ ClickHouse  │◀───┘
               └─────────────┘

**Cerberus never ingests telemetry.** Your OpenTelemetry Collector already…
