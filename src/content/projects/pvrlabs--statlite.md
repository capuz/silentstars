---
repo: "PVRLabs/statlite"
name: "statlite"
description: "A tiny self-hosted metrics dashboard for small servers. Spring Boot Actuator monitoring with SQLite, simple charts, and no Prometheus/Grafana stack required."
readmeQualityOk: true
url: "https://github.com/PVRLabs/statlite"
homepage: "https://pvrlabs.xyz/statlite/"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["actuator", "dashboard", "go", "metrics", "monitoring", "observability", "self-hosted", "spring-boot", "sqlite", "vps"]
stars: 121
forks: 2
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-07-14T16:49:50Z"
lastCommitAt: "2026-08-24T04:23:23Z"
lastReleaseAt: "2026-08-19T21:37:36Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 81
undervaluedScore: 34
maintainers: ["ejboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/06da004b5762de013edc845648c3155c4ee5cb64c36bd30c46b24bd4209e03d9/PVRLabs/statlite"
discussionCount: 2
---

# StatLite

A lightweight, self-hosted metrics dashboard with a small memory and operational
footprint, designed for applications running on VPSs and small servers. A single
Go binary monitors Spring Boot applications through Actuator and other
applications that expose [a small, fixed JSON metrics
endpoint](https://github.com/PVRLabs/statlite/blob/HEAD/docs/statlite-metrics-v1.md), without requiring Prometheus or Grafana.
It stores focused health, traffic, latency, CPU, memory, and optional host metrics
in SQLite.

**Website:** [pvrlabs.xyz/statlite](https://pvrlabs.xyz/statlite)

StatLite is built for [resource-constrained servers](https://github.com/PVRLabs/statlite/blob/HEAD/docs/low-resource-monitoring.md).
Low memory, CPU, disk, and operational overhead are treated as product
constraints.

Learn how to set up [lightweight Spring Boot monitoring without Prometheus and Grafana](https://pvrlabs.xyz/articles/lightweight-spring-boot-monitoring.html).

## Try it

```bash
docker run --rm \
  -p 127.0.0.1:9090:9090 \
  ghcr.io/pvrlabs/statlite:latest
```

Open <http://127.0.0.1:9090>. StatLite monitors itself by default, so the
dashboard starts with live data.

See the [Docker…
