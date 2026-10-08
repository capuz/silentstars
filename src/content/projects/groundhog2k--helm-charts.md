---
repo: "groundhog2k/helm-charts"
name: "helm-charts"
description: "Helm charts for open source applications - ready to use for deployment on Kubernetes"
readmeQualityOk: true
url: "https://github.com/groundhog2k/helm-charts"
language: "Go Template"
languages: ["Go Template", "Mustache"]
languagePcts: [62, 38]
stars: 182
forks: 85
openIssues: 5
closedIssues: 620
watchers: 5
contributors: 39
recentReleases: 0
createdAt: "2020-10-07T07:05:28Z"
lastCommitAt: "2026-10-08T10:52:14Z"
lastReleaseAt: "2020-10-30T18:21:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 45
maintainers: ["github-actions[bot]", "groundhog2k", "choopm"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c943952fa180abe6e450614552e3062ca08d0f97790a03693024941cb690ba0/groundhog2k/helm-charts"
discussionCount: 3
---

# helm-charts

Helm charts for some famous open source projects - ready to use in your Kubernetes environment

## TL;DR

```bash
helm repo add groundhog2k https://groundhog2k.github.io/helm-charts/
helm repo update
```

## Introduction

This repository contains various helm charts for some famous open source projects.
Goal was to create some universal charts that use the original docker images from [Docker Hub](https://hub.docker.com) instead of the modified version which Bitnami offers.

The advantage is that most of these charts are platform independent and will run on x64/amd64 and arm64v8 (Raspberry Pi 3/4) Kubernetes clusters.

## Prerequisites

- Helm 3.x

## Adding this helm repository

To add this repository to the helm configuration:

```bash
helm repo add groundhog2k https://groundhog2k.github.io/helm-charts/
```

## Using this helm repository

To install a chart from this repository (example with Redis):

```bash
helm install my-redis groundhog2k/redis
```

## Removing this helm repository

To remove the helm repository from helm configuration:

```bash
helm repo remove groundhog2k
```
