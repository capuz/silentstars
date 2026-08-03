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
openIssues: 6
closedIssues: 14
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-08-03T06:44:05Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 77
maintainers: ["renovate[bot]", "rajsinghtech", "kbpersonal"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a4003c7e961fc170967a1e3fd0e85d3c80c3217986d1ef7ab3df78cbb29759/keiretsu-labs/kubernetes-manifests"
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
