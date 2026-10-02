---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [56, 23]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 11
forks: 3
openIssues: 24
closedIssues: 66
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-10-02T09:45:48Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 75
maintainers: ["renovate[bot]", "rajsinghtech"]
openGraphImageUrl: "https://opengraph.githubassets.com/55e32861dbcca1b04e513a1488b9d313126431f91d58c9b2d6d55584b32bd2ea/keiretsu-labs/kubernetes-manifests"
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

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/diagrams/1-delivery.dark.svg">
  </picture>
</a>

The `main` branch is the only durable state. Flux polls it, decrypts the SOPS
material, and reconciles three top-level Kustomizations per…
