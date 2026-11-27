---
repo: "prometheus/opentelemetry-collector-bridge"
name: "opentelemetry-collector-bridge"
description: "[EXPERIMENTAL] An adapter between client_golang's registry and OTel Collector's Receiver Interfaces"
readmeQualityOk: true
url: "https://github.com/prometheus/opentelemetry-collector-bridge"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 7
forks: 3
openIssues: 16
closedIssues: 6
watchers: 2
contributors: 55
recentReleases: 1
createdAt: "2026-03-06T13:53:22Z"
lastCommitAt: "2026-11-27T12:53:41Z"
lastReleaseAt: "2026-10-22T17:43:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 58
maintainers: ["ArthurSens", "renovate[bot]", "prombot"]
openGraphImageUrl: "https://opengraph.githubassets.com/97123019fd640a74c6539e06215c7b92471460e479aa60420c642a2af43c7014/prometheus/opentelemetry-collector-bridge"
---

# opentelemetry-collector-bridge

[EXPERIMENTAL] An adapter between client_golang's registry and OTel Collector's Receiver Interfaces

## Benchmarks

The full end-to-end benchmark suite is published to GitHub Pages at
<https://prometheus.github.io/opentelemetry-collector-bridge/dev/bench>.

To reproduce the published benchmark run locally:

```sh
go test -run=^$ -bench=BenchmarkScrapeAndExport -benchmem ./...
```
