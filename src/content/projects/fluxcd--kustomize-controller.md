---
repo: "fluxcd/kustomize-controller"
name: "kustomize-controller"
description: "The GitOps Toolkit Kustomize reconciler"
readmeQualityOk: true
url: "https://github.com/fluxcd/kustomize-controller"
homepage: "https://fluxcd.io"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["gitops-toolkit"]
stars: 289
forks: 253
openIssues: 69
closedIssues: 351
watchers: 15
contributors: 104
recentReleases: 0
createdAt: "2020-04-15T05:57:38Z"
lastCommitAt: "2026-10-23T08:47:22Z"
lastReleaseAt: "2020-05-29T14:49:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 46
maintainers: ["matheuscscp", "stefanprodan", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/255819303/52f9ef00-7f3f-11ea-98ab-f686f0f50e95"
---

# kustomize-controller

The kustomize-controller is a [Flux](https://github.com/fluxcd/flux2) component,
specialized in running continuous delivery pipelines for infrastructure and workloads
defined with Kubernetes manifests and assembled with Kustomize.

The cluster desired state is described through a Kubernetes Custom Resource named `Kustomization`.
Based on the creation, mutation or removal of a `Kustomization` resource in the cluster,
the controller performs actions to reconcile the cluster current state with the desired state.

## Features

* watches for `Kustomization` objects
* fetches artifacts produced by [source-controller](https://github.com/fluxcd/source-controller) from `Source` objects 
* watches `Source` objects for revision changes 
* generates the `kustomization.yaml` file if needed
* generates Kubernetes manifests with Kustomize SDK
* decrypts Kubernetes secrets with Mozilla SOPS and KMS
* validates the generated manifests with Kubernetes server-side apply dry-run
- detects drift between the desired and state and cluster state
- corrects drift by patching objects with Kubernetes server-side apply
* prunes the Kubernetes objects removed from source
* checks the…
