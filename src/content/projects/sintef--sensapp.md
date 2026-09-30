---
repo: "SINTEF/sensapp"
name: "sensapp"
description: "SensApp, time-series with ease."
readmeQualityOk: true
url: "https://github.com/SINTEF/sensapp"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["data-engineering", "gateway", "influxdb", "iot-platform", "mqtt", "pipelines", "prometheus-remote-write", "rust", "sensors-data-collection", "time-series"]
stars: 24
forks: 6
openIssues: 8
closedIssues: 10
watchers: 6
contributors: 9
recentReleases: 1
createdAt: "2011-09-23T18:24:12Z"
lastCommitAt: "2026-09-30T09:56:55Z"
lastReleaseAt: "2026-09-30T09:05:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 51
maintainers: ["fungiboletus"]
openGraphImageUrl: "https://opengraph.githubassets.com/f426a131bcddb9e6c2f77311761cfe7b82e18aa65320890ef932315c69f72221/SINTEF/sensapp"
---

# 

SensApp is an open-source sensor data platform developed by SINTEF.

It handles time-series data ingestion, storage, and retrieval. From small edge devices to big data digital twins, SensApp *may* be useful.

## SensApp Allows You to Process Years of Sensor Data Efficiently

SensApp is compatible with Prometheus and InfluxDB, but with an alternative architecture that prioritise data analysis and long-term storage over ingestion performance and real-time monitoring.

Dealing with system statistics for the last 24 hours? InfluxDB or Prometheus are excellent choices. Fetching average bathroom temperatures over the last 10 years grouped by day? SensApp will compute that instantly while InfluxDB or Prometheus will take a little while.

But you don't have to chose, both InfluxDB and Prometheus can replicate their data to SensApp for long-term storage and analysis. So you get the best of both worlds.

You can also use SensApp as a standalone time-series database.

## Quickstart

The quickest way to run SensApp is with SQLite so no external database is required.

Start SensApp with SQLite:

```bash
SENSAPP_STORAGE_CONNECTION_STRING=sqlite://sensapp.db \
cargo run
```

By default,…
