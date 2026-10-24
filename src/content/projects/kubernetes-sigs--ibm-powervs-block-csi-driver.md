---
repo: "kubernetes-sigs/ibm-powervs-block-csi-driver"
name: "ibm-powervs-block-csi-driver"
description: "CSI Driver for IBM® Power Systems™ Virtual Server"
readmeQualityOk: true
url: "https://github.com/kubernetes-sigs/ibm-powervs-block-csi-driver"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 8
forks: 30
openIssues: 3
closedIssues: 108
watchers: 2
contributors: 439
recentReleases: 0
createdAt: "2020-11-17T09:47:24Z"
lastCommitAt: "2026-10-24T08:20:06Z"
lastReleaseAt: "2023-08-25T01:26:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 88
maintainers: ["kubernetes-prow[bot]", "dependabot[bot]", "kishen-v"]
openGraphImageUrl: "https://opengraph.githubassets.com/f29215f4f57dae59964af2ce0b0fa75188e05c67724cdd511d9abba29173b3db/kubernetes-sigs/ibm-powervs-block-csi-driver"
---

# IBM PowerVS Block CSI Driver
CSI Driver for IBM® Power Virtual Server. This driver supports both Public (off-prem) and Private (on-prem) Power Virtual Server environments.

# Overview
The IBM Power Virtual Systems Container Storage Interface (CSI) Driver provides a CSI interface used by Container Orchestrators to manage the lifecycle of Power Virtual System volumes.

# CSI Specification Compatibility Matrix
| PowerVS CSI Driver | Kubernetes | CSI | Golang |
| ----------------------------- | ----------- | -------- | -------- |
| main | 1.36.4 | 1.13.0 | 1.26.0 |
| 0.13.1 | 1.36.3 | 1.13.0 | 1.26.0 |
| 0.12.0 | 1.35.2 | 1.12.0 | 1.25.0 |
| 0.11.0 | 1.34.3 | 1.12.0 | 1.24.6 |
| 0.10.0 | 1.33.3 | 1.11.0 | 1.24.6 |
| 0.9.0 | 1.32 | 1.11.0 | 1.23 |
| 0.8.0 | 1.31 | 1.10.0 | 1.23 |
| 0.7.0 | 1.30 | 1.9.0 | 1.22 |
| 0.6.0 | 1.29 | 1.9.0 | 1.21 |
| 0.5.0 | 1.28 | 1.8.0 | 1.20 |
| 0.4.0 | 1.26 | 1.7.0 | 1.19 |
| 0.3.0 | 1.25 | 1.6.0 | 1.19 |
| 0.2.0 | 1.24 | 1.5.0 | 1.18 |
| 0.1.0 | 1.23 | 1.5.0 | 1.17 |

# Features
The following CSI gRPC calls are implemented:

- **Controller Service:** CreateVolume, DeleteVolume, ControllerPublishVolume,ControllerUnpublishVolume,…
