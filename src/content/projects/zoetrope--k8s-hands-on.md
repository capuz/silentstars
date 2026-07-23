---
repo: "zoetrope/k8s-hands-on"
name: "k8s-hands-on"
description: "A Kubernetes cluster to learn Kubernetes. It includes Argo CD, Grafana, Prometheus, Loki, Tempo, Phlare and VictoriaMetrics."
originalDescription: "A Kubernetes cluster to learn Kubernetes. It includes Argo CD, Grafana, Prometheus, Loki, Tempo, Phlare and VictoriaMetrics."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/zoetrope/k8s-hands-on"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [50, 23]
stars: 11
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-03-07T02:15:31Z"
lastCommitAt: "2026-07-23T06:15:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 55
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b073a92067ede6b1ee970961ba5ec3fa41e325e3a59727f8874b7ac31e8e6f/zoetrope/k8s-hands-on"
---

# k8s-hands-on

## Directory Structure

- manifests: Various application manifests
- todo: Sample TODO application

## Prerequisites

This hands-on session works on Linux, WSL2 (Ubuntu), and macOS (Intel Chip). Please install the following software in advance.

- Install Go
    - https://golang.org/dl/
- Install Docker
    - https://docs.docker.com/get-docker/
- Install commands like make, curl, unzip, etc.
    - For macOS, you need to install Command Line Tools for Xcode.
- Install aqua
    - https://aquaproj.github.io/docs/tutorial-basics/quick-start

## How to Use

### Tool Setup

The CLI tools used in this hands-on session are managed by [aqua](https://aquaproj.github.io). Please set up the CLI tools with the following command.

```console
aqua policy allow aqua-policy.yaml
aqua i -l
```

### Launching the Kubernetes Cluster

Start the Kubernetes cluster with kind.

```console
make launch-k8s
```

## Deploying Applications

Deploy Argo CD.

```console
make deploy-argocd
```

Wait until all Applications are Synced.

```console
make sync-applications
```

After a few minutes, the application deployment will be complete.

## How to View Metrics

You can use the following four…
