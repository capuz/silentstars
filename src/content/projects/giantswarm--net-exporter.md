---
repo: "giantswarm/net-exporter"
name: "net-exporter"
description: "A Prometheus exporter for exposing network information in Kubernetes clusters"
readmeQualityOk: true
url: "https://github.com/giantswarm/net-exporter"
homepage: "https://giantswarm.io"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [76, 21]
topics: ["prometheus", "prometheus-exporter", "kubernetes", "core-component"]
stars: 46
forks: 5
openIssues: 1
closedIssues: 3
watchers: 10
contributors: 69
recentReleases: 0
createdAt: "2018-07-18T11:37:17Z"
lastCommitAt: "2026-07-13T06:38:16Z"
lastReleaseAt: "2020-04-01T11:32:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 53
maintainers: ["renovate[bot]", "architectbot", "giantswarm-align-files[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/141426509/4a1a5f80-70d8-11e9-8042-18b7b232b87a"
---

# net-exporter

net-exporter is a Prometheus exporter for exposing network information in Kubernetes clusters.
It is packaged as a Helm chart.

net-exporter runs as a Kubernetes Daemonset. This is to allow for intra-pod network calls,
to determine network latency.

## How to build

Build it using the standard `go build` command.

```bash
go build github.com/giantswarm/net-exporter
```

## Deployment

* Managed by [app-operator].
* Production releases are stored in the [default-catalog].
* WIP releases are stored in the [default-test-catalog].

## Installing the Chart

To install the chart locally:

```bash
$ git clone https://github.com/giantswarm/net-exporter.git
$ cd net-exporter
$ helm install helm/net-exporter
```

Provide a custom `values.yaml`:

```bash
$ helm install net-exporter -f values.yaml
```

## Changes to Charts

At the current stage under [helm](https://github.com/giantswarm/net-exporter/blob/HEAD/helm), there are two charts. The [net-exporter](https://github.com/giantswarm/net-exporter/blob/HEAD/helm/net-exporter) is pushed to the App Catalog. The [net-exporter-chart](https://github.com/giantswarm/net-exporter/blob/HEAD/helm/net-exporter-chart) is pushed to the…
