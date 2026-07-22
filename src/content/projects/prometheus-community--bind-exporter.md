---
repo: "prometheus-community/bind_exporter"
name: "bind_exporter"
description: "Prometheus exporter for BIND"
readmeQualityOk: true
url: "https://github.com/prometheus-community/bind_exporter"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 350
forks: 107
openIssues: 9
closedIssues: 71
watchers: 83
contributors: 71
recentReleases: 0
createdAt: "2015-08-27T15:03:59Z"
lastCommitAt: "2026-07-22T06:11:27Z"
lastReleaseAt: "2024-11-06T15:02:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 28
maintainers: ["prombot", "dependabot[bot]", "SuperQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/e42a9727725a5e76bb1d8599a7158c92fd59a85be1809d180dc3064c13e3966b/prometheus-community/bind_exporter"
---

# Bind Exporter

Export BIND (named/dns) v9+ service metrics to Prometheus.

## Getting started

### Build and run from source
```bash
go get github.com/prometheus-community/bind_exporter
cd $GOPATH/src/github.com/prometheus-community/bind_exporter
make
./bind_exporter [flags]
```

### Run in Docker container

1. Pull Docker container using a specific version:
```bash
docker pull prometheuscommunity/bind-exporter:v0.3.0
```
2. Run in a Docker container (as daemon), use `--network host` when communicating with `named` via `localhost`:
```bash
docker run -d --network host prometheuscommunity/bind-exporter:v0.3.0
```

### Examples

Run `bind_exporter` in a Docker container and communicate with `named` on non-default statistics URL:
```bash
docker run -d prometheuscommunity/bind-exporter:v0.3.0 --bind.stats-url http://<IP/hostname>:8053
```

## TLS and basic authentication

The Bind Exporter supports TLS and basic authentication.

To use TLS and/or basic authentication, you need to pass a configuration file
using the `--web.config.file` parameter. The format of the file is described
[in the exporter-toolkit…
