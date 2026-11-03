---
repo: "ConSol-Monitoring/apache_mod_prometheus_status"
name: "apache_mod_prometheus_status"
description: "mod_prometheus_status is a Prometheus white box exporter for Apache metrics similar to mod_status with additional request time/size metrics including custom labeling."
readmeQualityOk: true
url: "https://github.com/ConSol-Monitoring/apache_mod_prometheus_status"
language: "C"
languages: ["C", "Go"]
languagePcts: [55, 24]
stars: 19
forks: 9
openIssues: 1
closedIssues: 6
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2019-12-17T20:40:24Z"
lastCommitAt: "2026-11-03T19:05:55Z"
lastReleaseAt: "2021-04-28T07:56:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 45
maintainers: ["sni", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ed02391404dbf9c28673ee3875be2f85fc49f2f63912737b6d17eaab2ffdf0/ConSol-Monitoring/apache_mod_prometheus_status"
---

# mod_prometheus_status

mod_prometheus_status is a [Prometheus](https://prometheus.io/) white box exporter
for [Apache HTTPD](https://httpd.apache.org/) with metrics similar to mod_status
plus per-request metrics.

The exporter is a loadable Apache module and serves metrics directly via the
apache webserver. It comes with dynamic and flexible labeling, see the example
configuration below.

## How it works

Since prometheus exporters are usually bound to a single process and the apache
webserver is a multi process daemon, this module starts a metrics collector in
the parent httpd process.

Upon start of the main collector it creates the prometheus client library registry
based on the `PrometheusStatusLabelNames`. Then it opens a unix socket to
receive the metrics updates from the child workers.

On each request, the client worker sends its metrics based on
`PrometheusStatusLabelValues`, which utilizes Apaches LogFormat, to the metrics
collector.

## Build Requirements

- gcc compiler to build (4.9 or newer)
  - apache header files
- golang
- docker/docker-compose for running tests

## Installation

> **_NOTE:_** Pre-build modules are available at…
