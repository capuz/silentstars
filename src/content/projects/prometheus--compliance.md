---
repo: "prometheus/compliance"
name: "compliance"
description: "A set of tests to check compliance with various Prometheus interfaces"
readmeQualityOk: true
url: "https://github.com/prometheus/compliance"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 158
forks: 55
openIssues: 18
closedIssues: 10
watchers: 1
contributors: 70
recentReleases: 0
createdAt: "2021-04-07T17:56:39Z"
lastCommitAt: "2026-10-28T09:57:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 39
maintainers: ["bwplotka", "SuperQ", "prombot"]
openGraphImageUrl: "https://opengraph.githubassets.com/49f9fa131f2daa7889ac37d88bcdd5184cf42abc902bcc578574243ecd622ef7/prometheus/compliance"
discussionCount: 1
---

# Prometheus Compliance Tests

This repo contains code to test compliance with various Prometheus standards. Anyone taking part in CNCF's [Prometheus Conformance](https://github.com/cncf/prometheus-conformance) Program will need to run the tests in here against their own implementations.

If you are reading this as someone testing their own implementation or considering to do so: There is a _LOT_ of work that's planned but not executed yet. If you have time or headcount to invest in uplifting everyone's compliance, [please talk to us](https://prometheus.io/community/).

There are several [software categories](https://docs.google.com/document/d/1VGMme9RgpclqF4CF2woNmgFqq0J7nqHn-l72uNmAxhA/) something can be tested in. If something does not seem to fit existing categories, please also talk to us.

## Alert Generator

The [alert_generator](https://github.com/prometheus/compliance/blob/HEAD/alert_generator/README.md) directory contains a shim at the moment. It will test correct generation and emitting of alerts towards Alertmanager.

## OpenMetrics

The [openmetrics](https://github.com/prometheus/compliance/blob/HEAD/openmetrics/README.md) directory contains a reference to the…
