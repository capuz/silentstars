---
repo: "dNationCloud/kubernetes-monitoring"
name: "kubernetes-monitoring"
description: "Monitor your Kubernetes infrastructure and applications at a glance using semaphore principle (green/orange/red) "
readmeQualityOk: true
url: "https://github.com/dNationCloud/kubernetes-monitoring"
homepage: "https://www.dNation.cloud"
language: "Jsonnet"
languages: ["Jsonnet"]
languagePcts: [99]
topics: ["dnationcloud", "monitoring", "kubernetes"]
stars: 25
forks: 7
openIssues: 12
closedIssues: 64
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2020-10-20T09:42:13Z"
lastCommitAt: "2026-08-28T12:22:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 46
maintainers: ["viktor-cech", "github-bot-dnation", "MatusJenca2"]
openGraphImageUrl: "https://opengraph.githubassets.com/1760227cb0f7ce37afe722d9add0e35b0cb4e91e226a1059fd49108866ac34f7/dNationCloud/kubernetes-monitoring"
---

# dNation Kubernetes Monitoring

See status of your Kubernetes infrastructure and applications at a glance using semaphore (green/orange/red) principle:

It is a set of Grafana dashboards and Prometheus alerts written in [Jsonnet](https://jsonnet.org/). This Monitoring also supports multi-cluster monitoring by `Thanos` and following 3 basic design principles:

1. `Intuitive` - Green, orange and red colors signaling whether or not your action is needed
1. `Drill-down` - if you want details why something is green, orange or red, just click it
1. `Relevant information only` - provide only metrics relevant for this particular area of interest and drill-down level, side-by-side with logs (experimental feature)

Monitoring targets are:

| Kubernetes | Hosts | Applications |
|:----------:|:-----------:|:------------------:|
|  |  |  |

# Full Installation
In case your current Kubernetes installation doesn't contain Prometheus Operator, Grafana or Loki, please install [dNation Kubernetes Monitoring Stack](https://github.com/dNationCloud/kubernetes-monitoring-stack) helm chart (recommended).

# Dashboards and Alerts only Installation
In case your current Kubernetes installation already…
