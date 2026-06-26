---
repo: "oteldb/oteldb"
name: "oteldb"
description: "OpenTelemetry signal storage"
url: "https://github.com/oteldb/oteldb"
homepage: "https://oteldb.tech"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["open-telemetry", "otel", "clickhouse", "loki", "observability", "prometheus", "tempo", "clickhouse-server", "grafana", "monitoring"]
stars: 73
forks: 8
openIssues: 49
closedIssues: 37
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2023-05-19T09:04:44Z"
lastCommitAt: "2026-06-26T21:31:06Z"
lastReleaseAt: "2023-12-17T14:45:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["tdakkota", "ernado", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/642749947/674a81e7-f955-4097-9def-8848d578816f"
discussionCount: 0
---

</p>

# oteldb [![codecov](https://img.shields.io/codecov/c/github/oteldb/oteldb?label=cover)](https://codecov.io/gh/oteldb/oteldb) [![experimental](https://img.shields.io/badge/-experimental-blueviolet)](https://go-faster.org/docs/projects/status#experimental)

The next generation, [OpenTelemetry-first][otel] aggregation system for metrics, traces and logs.

Compatible with [PromQL][promql], [TraceQL][traceql] and [LogQL][logql].

Based on [ClickHouse][clickhouse], fastest open-source (Apache 2.0) column-oriented database.

[clickhouse]: https://clickhouse.com/
[otel]: https://opentelemetry.io/

Supported query languages:
- [PromQL][promql] ([Prometheus][prometheus]) for metrics, [>99% compatibility][compliance]
- [TraceQL][traceql] ([Grafana Tempo][tempo]) for traces
- [LogQL][logql] ([Grafana Loki][loki]) for logs

[traceql]: https://grafana.com/docs/tempo/latest/traceql/
[logql]: https://grafana.com/docs/loki/latest/query/
[promql]: https://prometheus.io/docs/prometheus/latest/querying/basics/

[prometheus]: https://prometheus.io/
[loki]: https://grafana.com/oss/loki/
[tempo]: https://grafana.com/oss/tempo/

Supported ingestion protocols:
- Prometheus remote write, including…
