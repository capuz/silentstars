---
repo: "BlackDark/prometheus_turbostat_exporter"
name: "prometheus_turbostat_exporter"
description: "An prometheus exporter for turbotstat (for monitoring different C-states and pkg-states)"
readmeQualityOk: true
url: "https://github.com/BlackDark/prometheus_turbostat_exporter"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cpupower", "golang", "prometheus", "prometheus-exporter", "turbostat"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-28T12:46:18Z"
lastCommitAt: "2026-07-05T20:55:43Z"
lastReleaseAt: "2025-06-05T21:02:18Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 62
maintainers: ["renovate[bot]", "BlackDark"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d8096f755d88ce0e3a1e21fe45c330e84d758ed0bd075ab633ff3fa7d9cd9f/BlackDark/prometheus_turbostat_exporter"
fundingLinks: ["GITHUB:https://github.com/BlackDark", "KO_FI:https://ko-fi.com/blackdark93"]
---

# Prometheus Turbostat Exporter

This Go application is a Prometheus exporter for turbostat metrics. 
It collects CPU and core statistics using the `turbostat` tool and exposes them in a format that Prometheus can scrape.

## Dashboard

You can use the provided dashboard in the folder `dashboards` or use this shared ones: https://grafana.com/grafana/dashboards/23537

## Features

- **Prometheus Integration**: Exposes metrics via an HTTP server for Prometheus to scrape.
- **Dynamic Metric Registration**: Automatically registers metrics based on turbostat output headers.
- **Configuration via Environment Variables**: Customize behavior using `.env` files.
- **Background Collection Mode**: Optionally collect metrics in the background at specified intervals.

## How to use

You can download the binaries for available platforms in the [Releases](https://github.com/BlackDark/prometheus_turbostat_exporter/releases).

- Run with `turbostat-exporter`. Default listener on `0.0.0.0:9101` (also displayed as logs),
- or run with docker (but must be run as priviliged to have all information available):
  `docker run -p 9101:9101 --privileged ghcr.io/blackdark/prometheus_turbostat_exporter:main`…
