---
repo: "cplieger/plex-exporter"
name: "plex-exporter"
description: "Chart your Plex server's streams, transcodes, bandwidth and libraries in Grafana, with alerts"
readmeQualityOk: true
url: "https://github.com/cplieger/plex-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["distroless", "docker", "golang", "grafana", "metrics", "monitoring", "plex", "plex-media-server", "prometheus", "prometheus-exporter"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-13T00:20:40Z"
lastCommitAt: "2026-10-10T10:05:18Z"
lastReleaseAt: "2026-06-04T14:55:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["cplieger", "tribble-trouble[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4bb4c5d427621ead15cda3d3f0d232359ba5a96a376813726aeec82f6dcb40a/cplieger/plex-exporter"
---

# plex-exporter

plex-exporter puts your Plex server's streams, transcodes, bandwidth and library sizes into Prometheus, so you can watch them in Grafana and get alerts. It only reads from Plex. Your own Prometheus and Grafana store and show the data.

## What it does

plex-exporter lets you follow your Plex server in Grafana and alerts you to problems.

- Shows who watches what, on which device, and whether it plays directly or transcodes on your GPU or CPU.
- Tracks each stream's bandwidth and bitrate, and whether the viewer is local or remote.
- Counts each library's items, length and disk space, and lists its largest items with their last play.
- Adds host CPU, memory and bandwidth with Plex Pass.
- Comes with a Grafana dashboard and ten alert rules, one for a revoked token.

## Who it is for

plex-exporter is built for Plex server owners. It checks Plex for streams every 5 seconds, so a new stream appears within seconds.

You need a Plex Media Server and its admin token. plex-exporter's graphs and seven alerts come from your Prometheus, Grafana and Alertmanager, and three from Loki, which the [monitoring…
