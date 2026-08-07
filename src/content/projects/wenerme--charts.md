---
repo: "wenerme/charts"
name: "charts"
description: "HELM Charts Collections"
readmeQualityOk: true
url: "https://github.com/wenerme/charts"
homepage: "https://wenerme.github.io/charts"
language: "Mustache"
languages: ["Mustache", "TypeScript", "Go Template"]
languagePcts: [32, 28, 27]
topics: ["helm", "charts", "helm-chart", "kubernetes", "k8s", "helm-charts", "mirror", "aggragate"]
stars: 15
forks: 10
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-07-03T10:03:54Z"
lastCommitAt: "2026-08-07T05:16:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 60
undervaluedScore: 65
maintainers: ["this-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d17e00124068726f627e7c5c93a555ed59dbecf0f1c4ea18a550632de2f47fe0/wenerme/charts"
---

# Helm Charts

Collection of offcial charts.

- https://charts.wener.tech
- https://wenerme.github.io/charts
- oci://docker.io
  - https://hub.docker.com/u/wcharts
- oci://quay.io
  - https://quay.io/organization/wcharts

```bash
# 阿里云 CDN
helm repo add wener https://charts.wener.tech
helm search repo wener/

# Github Pages
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/

# wener/charts
helm repo add weners https://charts.wener.tech/wener
helm search repo weners/
```

**[Demo YAML manifets for test](https://github.com/wenerme/charts/tree/master/public/s)**

```bash
kubectl apply -f https://charts.wener.tech/s/whoami.deploy.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.svc.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.ingress.yaml
```

## 镜像 Charts

### 动机

- Helm 官方 charts 已经在停止维护阶段，目前要求应用方自行维护和提供 REPO
- 通常官方 Chart 都在一个独立仓库，独立仓库通常只包含一个 Chart
- 仓库多了过后导致 `helm repo update` 非常慢
- 仓库多了过后查找 Chart 也困难
- 有些仓库被 GFW 拦截 - 镜像后易于访问

> [helm/stable 状态 ](https://github.com/helm/charts#status-of-the-project)
>
> 目前正在弃用，于 2020.11.13 停止维护，charts 由应用方自行维护。

### CI

- 基于 GitHub Action 自动拉取 Chart
- 基于 GitHub 定时 30 分钟 更新一次

---

## Mirror charts

###…
