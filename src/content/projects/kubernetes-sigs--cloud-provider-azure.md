---
repo: "kubernetes-sigs/cloud-provider-azure"
name: "cloud-provider-azure"
description: "Cloud provider for Azure"
readmeQualityOk: true
url: "https://github.com/kubernetes-sigs/cloud-provider-azure"
homepage: "https://cloud-provider-azure.sigs.k8s.io/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cloud-providers", "kubernetes", "azure", "k8s-sig-cloud-provider"]
stars: 295
forks: 335
openIssues: 42
closedIssues: 507
watchers: 14
contributors: 545
recentReleases: 0
createdAt: "2018-03-21T06:25:16Z"
lastCommitAt: "2026-07-29T06:14:19Z"
lastReleaseAt: "2021-02-24T02:57:07Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 47
maintainers: ["dependabot[bot]", "nilo19", "anndono"]
openGraphImageUrl: "https://opengraph.githubassets.com/24ae5eea007785fc38b9cce95b654f2bfcddf57fd8c9c5fae7a8fd0d6c6c5799/kubernetes-sigs/cloud-provider-azure"
---

# Cloud provider for Azure

## Introduction

This repository provides the Azure implementation of the Kubernetes cloud provider [interface](https://github.com/kubernetes/cloud-provider).

This is the "external" or "out-of-tree" cloud provider for Azure. The "in-tree" cloud provider has been deprecated since v1.20 and only bug fixes are allowed in its [Kubernetes repository directory](https://github.com/kubernetes/kubernetes/tree/master/staging/src/k8s.io/legacy-cloud-providers/azure).

## Current status

`cloud-provider-azure` has been **GA** since v1.0.0. Releases are available from the Microsoft Container Registry (MCR).

The latest release of azure-cloud-controller-manager and azure-cloud-node-manager can be found at

* `mcr.microsoft.com/oss/v2/kubernetes/azure-cloud-controller-manager:v1.34.3`
* `mcr.microsoft.com/oss/v2/kubernetes/azure-cloud-node-manager:v1.34.3`

### Version matrix

(Minor release versions match Kubernetes minor release versions.)

| Kubernetes version | cloud-provider version | cloud-provider branch |
|--------------------|------------------------|-----------------------|
| master             | N/A                    | master                |
| v1.y.x…
