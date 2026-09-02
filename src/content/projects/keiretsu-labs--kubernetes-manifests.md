---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Shell"
languages: ["Shell"]
languagePcts: [59]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 10
forks: 3
openIssues: 8
closedIssues: 51
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-09-02T06:34:10Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 78
maintainers: ["rajsinghtech", "renovate[bot]", "rajsinghtechbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/53dda3f5b457ea96f7e5b6e9eef2c3b3f49872c6ff328695d61641d805347023/keiretsu-labs/kubernetes-manifests"
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
Talos Linux clusters are connected by a Tailscale mesh and share the same
repository, platform conventions, and observability stack.

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
material, and reconciles three top-level Kustomizations per cluster. The two
things worth internalising: an app is deployed to a cluster…
