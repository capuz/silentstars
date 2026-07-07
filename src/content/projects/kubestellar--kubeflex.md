---
repo: "kubestellar/kubeflex"
name: "kubeflex"
description: "A flexible and scalable platform for running Kubernetes control plane APIs."
readmeQualityOk: true
url: "https://github.com/kubestellar/kubeflex"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["hacktoberfest", "kubernetes"]
stars: 180
forks: 58
openIssues: 29
closedIssues: 177
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2023-06-09T01:23:28Z"
lastCommitAt: "2026-07-07T06:37:37Z"
lastReleaseAt: "2023-11-17T20:15:08Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 40
maintainers: ["clubanderson", "kubestellar-prow[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b5e6f685d3a86d7695d6d57b2625d12a44fbb55f2acc455a516330e300f57e9/kubestellar/kubeflex"
discussionCount: 0
---

</a>

# <img alt="Logo" width="90px" src="./docs/images/kubeflex-logo.png" style="vertical-align: middle;" /> KubeFlex

A flexible and scalable platform for running Kubernetes control plane APIs with multi-tenancy support.

## Overview

KubeFlex is a CNCF sandbox project under the KubeStellar umbrella that enables "control-plane-as-a-service" multi-tenancy for Kubernetes. It provides a new approach to multi-tenancy by offering each tenant their own dedicated Kubernetes control plane and data-plane nodes in a cost-effective manner.

## Architecture

KubeFlex implements a sophisticated multi-tenant architecture that separates control plane management from workload execution:

### Core Components

1. **KubeFlex Controller**: Orchestrates the lifecycle of tenant control planes through the ControlPlane CRD
2. **Tenant Control Planes**: Isolated API server and controller manager instances per tenant
3. **Flexible Data Plane**: Choose between shared host nodes, vCluster virtual nodes, or dedicated KubeVirt VMs
4. **Unified CLI (kflex)**: Single binary for initializing, managing, and switching between control planes
5. **Storage Abstraction**: Configurable backends from shared Postgres to…
