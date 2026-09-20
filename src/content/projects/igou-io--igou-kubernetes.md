---
repo: "igou-io/igou-kubernetes"
name: "igou-kubernetes"
description: "Manifests that are deployed to my Kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/igou-io/igou-kubernetes"
language: "Makefile"
languages: ["Makefile", "Go Template"]
languagePcts: [75, 25]
stars: 11
forks: 1
openIssues: 5
closedIssues: 16
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-05-08T20:43:15Z"
lastCommitAt: "2026-09-20T08:45:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 67
maintainers: ["renovate[bot]", "igou-dev[bot]", "david-igou"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccb5c25736c85b7853e77bc2225a8281eab49949c2a30552ebbca6ef5d87dccf/igou-io/igou-kubernetes"
---

# igou-kubernetes

GitOps configuration for my vanilla Kubernetes homelab clusters, following the
same app-of-apps layout as [igou-openshift](https://github.com/igou-io/igou-openshift),
but deploying platform operators from their official upstream Helm charts
instead of OLM.

## Layout

```
.helm/charts/argocd-app-of-app/  Helm chart that templates Argo CD Applications/AppProjects
clusters/<name>/                 Per-cluster GitOps root (values.yaml lists that cluster's apps)
components/                      Reusable platform components (namespace + kustomize + upstream helm chart)
groups/all/                      Kustomize component with AppProjects + baseline apps every cluster gets
docs/                            Operational docs
```

Every component directory is a `kustomization.yaml` that pulls an upstream
Helm chart via kustomize's `helmCharts` field, plus any raw manifests
(namespace, RBAC, ExternalSecrets). Argo CD renders them with
`kustomize build --enable-helm`.

## Components

| Component | Source | Sync wave |
|---|---|---|
| argocd | argoproj.github.io/argo-helm | 0 |
| external-secrets-operator | charts.external-secrets.io | 0 |
| cert-manager | charts.jetstack.io…
