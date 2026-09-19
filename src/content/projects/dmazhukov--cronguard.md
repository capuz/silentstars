---
repo: "dmazhukov/cronguard"
name: "cronguard"
description: "SLO-style observability for Kubernetes CronJobs — operator + Prometheus metrics"
readmeQualityOk: true
url: "https://github.com/dmazhukov/cronguard"
homepage: "https://artifacthub.io/packages/helm/cronguard/cronguard"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["artifact-hub", "cronjob", "go", "golang", "helm", "helm-chart", "kubernetes", "kubernetes-operator", "observability", "prometheus"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-25T03:29:34Z"
lastCommitAt: "2026-09-19T02:48:03Z"
lastReleaseAt: "2026-04-27T09:45:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 46
maintainers: ["dmazhukov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/567fa7d2cafd44ccaf744b64fe5c8de508ed82861669eace31e104ec8d261bcc/dmazhukov/cronguard"
discussionCount: 0
---

# CronGuard

**SLO-style observability for Kubernetes CronJobs.**

CronGuard is a small Kubernetes operator that wraps any existing `batch/v1.CronJob` with a `CronJobMonitor` custom resource. It watches child Jobs, tracks execution history, and exposes Prometheus metrics so you can alert on missed runs, duration overruns, and consecutive failures without hand-rolling PromQL against `kube-state-metrics`.

## Why

Kubernetes CronJobs fail silently in several common ways: a skipped run under `concurrencyPolicy: Forbid`, a Job that completes with no succeeded pods, control-plane drift pushing starts minutes late. Teams keep re-inventing the same fragile PromQL:

```promql
time() - kube_cronjob_status_last_successful_time{cronjob="..."} > 86400
```

CronGuard replaces that with a declarative SLO per CronJob.

## Quickstart

### Helm (OCI)

```bash
helm install cronguard oci://ghcr.io/dmazhukov/charts/cronguard \
  --version 0.4.1 \
  --namespace cronguard-system --create-namespace
```

### Helm (GitHub Pages)

```bash
helm repo add cronguard https://dmazhukov.github.io/cronguard/
helm repo update
helm install cronguard cronguard/cronguard --version 0.4.1 \
  --namespace…
