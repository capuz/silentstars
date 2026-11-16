---
repo: "luxardolabs/kidde-collector"
name: "kidde-collector"
description: "Headless Python collector: Kidde HomeSafe cloud API → InfluxDB → Grafana (smoke / CO / air-quality metrics)."
readmeQualityOk: true
url: "https://github.com/luxardolabs/kidde-collector"
homepage: "https://www.luxardolabs.com"
language: "Python"
languages: ["Python", "Makefile"]
languagePcts: [68, 30]
topics: ["collector", "dashboards", "grafana", "influxdb2", "iot", "kidde", "smart-alarm"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2024-03-02T17:04:17Z"
lastCommitAt: "2026-11-16T04:24:11Z"
lastReleaseAt: "2026-11-05T23:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 86
maintainers: ["luxardolabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/c08180d5a0f12a393cc6ab1cf27afb004eef1aab4af5fd3f5d773d41c93d029f/luxardolabs/kidde-collector"
---

# Kidde Collector

A headless **Python** data collector that polls the **Kidde HomeSafe** cloud API for smart smoke / CO / air-quality detector metrics and writes them to **InfluxDB** for monitoring and visualization in **Grafana**. It reaches OUT to Kidde and OUT to InfluxDB — it publishes **no inbound port**.

Part of the Luxardo Labs collector fleet; follows the collector fleet standard with **kasa-collector** as the reference implementation.

## Features

- Collects smoke / CO / air-quality detector metrics from the **Kidde HomeSafe** cloud API.
- Stores device + air-quality data in **InfluxDB** as time series.
- Ships **pre-built Grafana dashboards** ("By Device" and "By Measurement"), auto-provisioned in the dev/demo stacks — air quality, plus a **Safety & Power** row for smoke/CO alarms, battery and end-of-life state.
- **Docker-first** — a self-contained demo stack (`make demo-up`) runs with no Kidde account or hardware.

## Quickstart (no Kidde account, no hardware)

```bash
make demo-up      # fake Kidde endpoint + bundled InfluxDB + Grafana
# Grafana http://localhost:3000 (admin/admin) — dashboards populate from the fake feed
# Grafana is the only published port;…
