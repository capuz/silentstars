---
repo: "kubernetes-sigs/multi-network"
name: "multi-network"
description: "Controller implementation and conformance test suite for Kubernetes Multi-Network (SIG Network)."
readmeQualityOk: true
url: "https://github.com/kubernetes-sigs/multi-network"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["conformance-tests", "dra", "kubernetes", "kubernetes-controller", "multi-network", "networking", "sig-network"]
stars: 7
forks: 6
openIssues: 0
closedIssues: 11
watchers: 9
contributors: 445
recentReleases: 0
createdAt: "2024-07-24T13:54:08Z"
lastCommitAt: "2026-11-24T14:08:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["LionelJouin", "kubernetes-prow[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4243c5712d8c4c984c9ac69d221b3985e552ca40c0263b569423dffb1a1846ea/kubernetes-sigs/multi-network"
---

# Multi-Network

This `multi-network` repository contains the controller implementation and testing framework for the **Kubernetes Multi-Network** sub-project under [SIG Network](https://github.com/kubernetes/community/tree/master/sig-network).

This repository provides:
- **`multi-network-controller`:** Reconciles `PodNetworkKind` resources, verifies that underlying implementation resource types and RBAC permissions are available, manages readiness status conditions, and enforces deletion protection.
- **Conformance Tests:** Tests to validate that pod network implementations correctly integrate with Kubernetes Dynamic Resource Allocation (DRA) and adhere to the Multi-Network specification.

For the API definitions and specifications, see [kubernetes-sigs/multi-network-api](https://github.com/kubernetes-sigs/multi-network-api).

For more details, see:
- [Requirements and Use Cases](https://github.com/kubernetes-sigs/multi-network-api/blob/main/docs/requirements.md)
- [PodNetworkKind Design Specification](https://github.com/kubernetes-sigs/multi-network-api/blob/main/docs/pod-network-kind.md)
