---
repo: "grafana/xk6-output-influxdb"
name: "xk6-output-influxdb"
description: "k6 extension to output real-time test metrics to an InfluxDB 2.x database"
readmeQualityOk: true
url: "https://github.com/grafana/xk6-output-influxdb"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["k6", "grafana-dashboard", "influxdb", "xk6", "k6-output"]
stars: 83
forks: 43
openIssues: 8
closedIssues: 13
watchers: 134
contributors: 16
recentReleases: 0
createdAt: "2021-10-18T09:36:15Z"
lastCommitAt: "2026-10-26T03:02:18Z"
lastReleaseAt: "2024-08-29T08:58:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 36
maintainers: ["renovate-sh-app[bot]", "mstoykov", "inancgumus"]
openGraphImageUrl: "https://opengraph.githubassets.com/267640010cbdff3e9aa639b3412c1aefd319cdc98f221cbd6b1a0b847a9cfd86/grafana/xk6-output-influxdb"
---

# xk6-output-influxdb
k6 extension for [InfluxDB v2](https://docs.influxdata.com/influxdb/v2.0), it adds the support for the latest `v2` version and the compatibility API for v1.8+.

#### **Why is this output not directly part of `k6` core?**
The `k6` core already supports the [InfluxDB v1](https://k6.io/docs/results-visualization/influxdb-+-grafana) so the natural feeling would be to do the same for the `v2`. Unfortunately, the `v2` has introduced some breaking changes in the core parts of the API. This would make it difficult to support both versions without taking a bunch of compromises for maintaining the retro-compatibility or introducing breaking changes in the current user experience of the k6's InfluxDB output, with a high probability to create more confusion for k6's users. For this main reason, the `k6` development team has decided to create a new and independent extension for InfluxDB v2.

# Install

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git
- [xk6](https://github.com/grafana/xk6#install)

1. Build with `xk6`:

```bash
xk6 build --with…
