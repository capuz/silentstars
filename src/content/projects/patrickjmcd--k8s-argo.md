---
repo: "patrickjmcd/k8s-argo"
name: "k8s-argo"
description: "ArgoCD Deployment of Home Kubernetes Cluster"
readmeQualityOk: true
url: "https://github.com/patrickjmcd/k8s-argo"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [61, 28]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-12-12T04:36:38Z"
lastCommitAt: "2026-11-17T12:18:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 64
maintainers: ["patrickjmcd"]
openGraphImageUrl: "https://opengraph.githubassets.com/01c51505e443bde276b3e9f034aaeb2616b1f8d7cc1fb1cf7ef07af452fd80e4/patrickjmcd/k8s-argo"
---

# k8s-argo

GitOps repository for the homelab k3s cluster, reconciled by
[Flux](https://fluxcd.io) (Argo CD until Oct 2026; the name is historical).
Push to `main` on Gitea and Flux applies it. Day-to-day conventions live in
[`CLAUDE.md`](https://github.com/patrickjmcd/k8s-argo/blob/HEAD/CLAUDE.md); the migration record is
[`docs/flux-migration.md`](https://github.com/patrickjmcd/k8s-argo/blob/HEAD/docs/flux-migration.md).

## Layout

```
clusters/home/            # Everything Flux applies
├── kustomization.yaml    # root (synced by the operator-created flux-system Kustomization)
├── flux-operator.yaml    # Flux Operator HelmRelease (+ web UI)
├── flux-instance.yaml    # FluxInstance: Flux version, components, git source
├── notifications.yaml    # Flux errors -> Alertmanager -> ntfy
├── cronjobs.yaml         # Kustomization for cronjobs/
├── apps/                 # one Kustomization / HelmRelease per app; media ResourceSet
└── core/                 # one per core component; helm-repositories.yaml
apps/                     # App manifests (HomelabApp instances, kustomize)
core/                     # Core component manifests and chart extras
cronjobs/                 # Scheduled…
