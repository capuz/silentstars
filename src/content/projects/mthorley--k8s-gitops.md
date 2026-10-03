---
repo: "mthorley/k8s-gitops"
name: "k8s-gitops"
description: "k8s gitops using FluxCD for home Pi clusters"
readmeQualityOk: true
url: "https://github.com/mthorley/k8s-gitops"
language: "HCL"
languages: ["HCL", "JavaScript"]
languagePcts: [62, 30]
topics: ["gitops", "raspberrypi", "kubernetes"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-05-30T05:17:01Z"
lastCommitAt: "2026-10-03T09:22:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 68
maintainers: ["mthorley"]
openGraphImageUrl: "https://opengraph.githubassets.com/384fb53150ec07a4c97832c496bc51a873d70360be392bb14628d8def20a25f1/mthorley/k8s-gitops"
---

# k8s-gitops

k8s gitops using FluxCD for home clusters running on raspberry pi's to support IoT and home automation. This repo targets two clusters: staging and production and aims to keep a common set of manifests between them, using kustomize to patch values specific for the target clusters.

This is very much WIP.

## How it works

Uses [FluxCD](https://fluxcd.io/docs/) to "synchronise" manifests in this repo to local Pi clusters. Each cluster will eventually be consistent with manifests in this repo.

## Configuration

### Clusters

Two physically separate Pi clusters

* Staging
* Production

### Infrastructure

| Workload | Source | Purpose |
| -------- | ------ | ------- |
| [metallb](https://metallb.universe.tf/) | raw manifests | BGP routing from Unifi to k8s for both staging and production clusters |
| [nfs-storage](https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner/tree/master/charts/nfs-subdir-external-provisioner) | raw manifests | NFS storage |
| [vault](https://www.vaultproject.io/docs/platform/k8s/helm) | helm (TBD) | Secrets management |
| [victoria-metrics](https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/) | flux…
