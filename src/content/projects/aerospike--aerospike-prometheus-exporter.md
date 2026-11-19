---
repo: "aerospike/aerospike-prometheus-exporter"
name: "aerospike-prometheus-exporter"
description: "Monitoring suite for the Aerospike DB"
readmeQualityOk: true
url: "https://github.com/aerospike/aerospike-prometheus-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 44
forks: 21
openIssues: 3
closedIssues: 15
watchers: 47
contributors: 25
recentReleases: 0
createdAt: "2019-06-10T13:13:32Z"
lastCommitAt: "2026-11-19T05:02:08Z"
lastReleaseAt: "2021-05-26T10:59:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 50
maintainers: ["mphanias", "dependabot[bot]", "ashaw-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf95a05429bbc7bac36d05adc1d026cee7937f7f7c0facebb10490e2e43c0bca/aerospike/aerospike-prometheus-exporter"
---

# Aerospike Prometheus Exporter

This repo contains Aerospike's monitoring agent for Prometheus. The exporter is part of the [Aerospike Monitoring Stack](https://aerospike.com/docs/database/observe/monitor/components).

The Aerospike Prometheus Exporter is now **generally available** (GA).
If you're an enterprise customer feel free to reach out to support with any questions.
We appreciate feedback from community members on the [issues](https://github.com/aerospike/aerospike-prometheus-exporter/issues).

Aerospike agent exports various stats, config from Aerospike Server as metrics in OpenMetrics format.
For more details about Aerospike Server Config refer [Aerospike System Config reference](https://aerospike.com/docs/database/reference/config) and for Aerospike Server Metrics refer [Aerospike System Metrics reference](https://aerospike.com/docs/database/reference/metrics).

**NOTE:** Some of the metrics are pseudo metrics. A pseudo metric is neither a configuration nor a statistic in the server but is exposed as a metric by the agent. For more details, refer to the [Pseudo Metrics](#pseudo-metrics) section.
