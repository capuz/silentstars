---
repo: "kubernetes-sigs/karpenter-provider-ibm-cloud"
name: "karpenter-provider-ibm-cloud"
description: "This repository contains the Karpenter Provider implementation for IBM Cloud, enabling dynamic node provisioning in IBM Cloud Kubernetes clusters using Karpenter."
url: "https://github.com/kubernetes-sigs/karpenter-provider-ibm-cloud"
homepage: "https://karpenter-ibm.sh/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ibm-cloud", "karpenter", "kubernetes", "hacktoberfest"]
stars: 11
forks: 13
openIssues: 8
closedIssues: 105
watchers: 2
contributors: 399
recentReleases: 0
createdAt: "2024-06-26T09:28:29Z"
lastCommitAt: "2026-06-26T23:40:26Z"
lastReleaseAt: "2025-08-13T13:58:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 87
maintainers: ["pfeifferj", "dependabot[bot]", "k8s-ci-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6785af0ab4ec2b1283fa1f6e5a65179017fc82b7c925bbdee21789ff06623b3f/kubernetes-sigs/karpenter-provider-ibm-cloud"
---

# Karpenter Provider for IBM Cloud

This repository contains the Karpenter Provider implementation for IBM Cloud, enabling dynamic node provisioning in IBM Cloud Kubernetes clusters using Karpenter.

**[View Full Documentation](https://karpenter-ibm.sh/)** | **[Getting Started Guide](https://karpenter-ibm.sh/getting-started/)**

## Overview

Karpenter is an open-source node provisioning project for Kubernetes. This provider extends Karpenter's functionality to work with IBM Cloud, allowing for:

- Dynamic node provisioning in IBM Cloud VPC
- Instance type management and selection
- Automated scaling based on workload demands
- Integration with IBM Cloud APIs

## Kubernetes Support

| Kubernetes Version | Status |
|-------------------|--------|
| 1.35 | ✅ Supported |
| 1.36+ | ⚠️ Untested |

*Based on dependency analysis. Generated on 2026-03-12.*
## Container Images

Multi-architecture images (amd64, arm64, s390x) are published to `quay.io/karpenter-provider-ibm-cloud/controller`.

See [Container Images](docs/container-images.md) for details on pulling images, supported architectures, and [Nightly Builds](docs/nightly-builds.md) for testing pre-release versions.

## Getting Help…
