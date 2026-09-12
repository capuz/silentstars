---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [43, 41]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 10
forks: 3
openIssues: 24
closedIssues: 62
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-09-12T04:57:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 76
maintainers: ["rajsinghtech", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3f6e676afb4cad4abbcf4fe28c64a305f9438461ddd51906bfb7d4a917799fc/keiretsu-labs/kubernetes-manifests"
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
