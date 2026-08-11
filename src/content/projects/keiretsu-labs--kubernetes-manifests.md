---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [50, 20]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 9
forks: 3
openIssues: 3
closedIssues: 22
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-08-11T04:50:14Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 80
maintainers: ["rajsinghtech", "renovate[bot]", "kbpersonal"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3f85ffc35e57c5910387e10513ed43c02842dc48b59e49cd33d7af3c5260c07/keiretsu-labs/kubernetes-manifests"
postedAt: "2026-08-03T06:48:22.019Z"
---

### Keiretsu — Multi-Cluster Kubernetes Infrastructure

_Managed with Flux, Tailscale, and GitHub Actions_

</div>

#### Ottawa

</div>

#### Robbinsdale

</div>

#### St. Petersburg

</div>

---

Multi-cluster Kubernetes infrastructure managed with FluxCD GitOps. This repository manages three geographically distributed Talos Linux clusters connected via Tailscale mesh networking.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Tailscale Mesh                                 │
│                             (keiretsu.ts.net)                               │
└─────────────────────────────────────────────────────────────────────────────┘
         │                         │                         │
         ▼                         ▼                         ▼
┌─────────────────┐       ┌─────────────────┐       ┌──────────────────┐
│  talos-ottawa   │       │talos-robbinsdale│       │talos-stpetersburg│
│    (Ontario)    │       │   (Minnesota)   │       │    (Florida)     │
│                 │       │                 │       │                  │
│ • 3 nodes       │       │ • Multi-node    │…
