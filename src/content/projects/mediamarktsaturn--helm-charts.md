---
repo: "MediaMarktSaturn/helm-charts"
name: "helm-charts"
description: "Helm charts maintained and used by the MMS Technology team."
readmeQualityOk: true
url: "https://github.com/MediaMarktSaturn/helm-charts"
homepage: "https://helm-charts.mms.tech/"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
topics: ["charts", "dependency-track", "helm", "helm-charts", "kubernetes", "owasp", "owasp-dependencycheck"]
stars: 18
forks: 1
openIssues: 2
closedIssues: 3
watchers: 6
contributors: 700
recentReleases: 0
createdAt: "2023-01-30T20:19:34Z"
lastCommitAt: "2026-07-20T06:34:22Z"
lastReleaseAt: "2023-05-10T12:18:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 45
maintainers: ["dependabot[bot]", "beiertu-mms", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/595306938/542a00f0-b483-40a1-be9d-15a8cbee126c"
discussionCount: 0
---

# MediaMarktSaturn Technology - Helm-Charts

This repository contains Helm charts bundled and used by the MediaMarktSaturn Technology team.

## Usage

With helm cli:

`helm repo add mediamarktsaturn https://helm-charts.mms.tech`

With FluxCD:

```yaml
---
apiVersion: source.toolkit.fluxcd.io/v1
kind: HelmRepository
metadata:
  name: mediamarktsaturn
spec:
  interval: 120m
  url: https://helm-charts.mms.tech
```

## Charts

### [dependency-track](https://github.com/MediaMarktSaturn/helm-charts/tree/main/charts/dependency-track)

The [OWASP Dependency-Track](https://owasp.org/www-project-dependency-track/) project with separate deployments for API-server and frontend.

### [pod-cleanup](https://github.com/MediaMarktSaturn/helm-charts/tree/main/charts/pod-cleanup)

A CronJob that deletes terminated/failed pods from a Kubernetes cluster.

Useful when e.g. provisioning Google Kubernetes Engine clusters with preemptible nodes. The preemption leads to pods being shut down during node recreation, however the pods are still kept and displayed when listing them.

### [http-metronome](https://github.com/MediaMarktSaturn/helm-charts/tree/main/charts/http-metronome)

Creates CronJobs for…
