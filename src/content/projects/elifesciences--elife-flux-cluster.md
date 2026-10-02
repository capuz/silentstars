---
repo: "elifesciences/elife-flux-cluster"
name: "elife-flux-cluster"
description: "Definition of eLife's k8s cluster and deployments to it. Automatically applied via Flux."
readmeQualityOk: true
url: "https://github.com/elifesciences/elife-flux-cluster"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 5
forks: 1
openIssues: 7
closedIssues: 16
watchers: 6
contributors: 23
recentReleases: 0
createdAt: "2020-07-24T12:10:26Z"
lastCommitAt: "2026-10-02T09:59:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 70
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6b27d086322d5618f4ffc626ccae2437f487fc1af4e87d747e3142b19f2a79/elifesciences/elife-flux-cluster"
---

# eLife k8s/Flux Production Cluster

EKS cluster name: __kubernetes-aws--flux-prod__

Use this git repo to control the cluster state (no `kubectl` or `helm`
cli action needed/wanted).

-   [Flux](https://fluxcd.io/docs/) will try to apply any `yaml` file in
    this repo to the cluster
-   [HelmController](https://fluxcd.io/docs/components/helm/) allows
    use of helm charts
-   We currently have three [Kustomizations](https://fluxcd.io/docs/components/kustomize/) defined: `crds`, `system` and `deployments` (each pointed at the root directory named the same). Only Yaml files found in these folders are loaded, in a dependency order (see "Kustomizations" below)

Cluster infrastructure is defined in [builder](https://github.com/elifesciences/builder) in the [kubernetes-aws section](https://github.com/elifesciences/builder/blob/52d3c002d1246910243a44e88c7d94d26052e104/projects/elife.yaml#L1999).

Users can configure `kubectl` for this cluster with:

        aws eks update-kubeconfig --name kubernetes-aws--flux-prod

Dashboards
==========

- [Kubernetes Dashboard](https://k8s-dashboard.flux-prod.elifesciences.org)
- [Grafana…
