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
stars: 10
forks: 3
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-08-04T04:53:26Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 77
maintainers: ["renovate[bot]", "rajsinghtech", "kbpersonal"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a3b6f6f289fce86121b747ff1e59c94d253d3189c062923c40153d0d4264f55/keiretsu-labs/kubernetes-manifests"
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
