---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [56, 24]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 11
forks: 3
openIssues: 10
closedIssues: 81
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-10-13T05:37:12Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 77
maintainers: ["keiretsu-kman-bot[bot]", "renovate[bot]", "kbpersonal"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ca355c58b52bc1b4337498f818e9ba4668d3d2c9b0349032b3121d60638ed79/keiretsu-labs/kubernetes-manifests"
postedAt: "2026-08-03T06:48:22.019Z"
---

### Keiretsu — Multi-Cluster Kubernetes Infrastructure

_Managed with Flux, Tailscale, and GitHub Actions_

#### Ottawa

#### Robbinsdale

#### St. Petersburg

---

Multi-cluster Kubernetes infrastructure managed with FluxCD GitOps. The three
Talos Linux clusters are connected by Cilium ClusterMesh over the UniFi
site-to-site VPN, with Tailscale for access and tailnet ingress, and share the same repository, platform conventions, and observability stack.

## Architecture

Three diagrams, each answering one question. They are meant to be read in
order, but each stands on its own. Click any of them for the full-size SVG —
GitHub scales them down to fit the page, and the labels are only legible at
full size. Each is committed in a light and a dark rendering, and served
through a `<picture>` element, so they follow your GitHub theme.

### 1 · Delivery — how a commit becomes running infrastructure

The `main` branch is the only durable state. Flux polls it, decrypts the SOPS
material, and reconciles three top-level Kustomizations per cluster. The two
things worth internalising: an app is deployed to a cluster **because a pointer
file exists** in that cluster's location tree, and one…
