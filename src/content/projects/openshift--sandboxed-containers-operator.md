---
repo: "openshift/sandboxed-containers-operator"
name: "sandboxed-containers-operator"
description: "An operator to enhance an Openshift/Kubernetes cluster to support running sandboxed containers"
readmeQualityOk: true
url: "https://github.com/openshift/sandboxed-containers-operator"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [39, 39]
stars: 50
forks: 74
openIssues: 10
closedIssues: 95
watchers: 14
contributors: 396
recentReleases: 0
createdAt: "2020-08-11T18:26:57Z"
lastCommitAt: "2026-10-20T08:50:37Z"
lastReleaseAt: "2024-02-07T17:00:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 61
maintainers: ["red-hat-konflux[bot]", "littlejawa", "wainersm"]
openGraphImageUrl: "https://opengraph.githubassets.com/206537ec20f63e64abe481be909d376a39f38e99ae03ff740ab5ec070944c4a9/openshift/sandboxed-containers-operator"
---

- [Introduction to sandboxed containers](#introduction-to-sandboxed-containers)
  * [Features & benefits of sandboxed containers](#features-benefits-of-sandboxed-containers)
- [OpenShift sandboxed containers Operator](#openshift-sandboxed-containers-operator)
  * [Operator Architecture](#operator-architecture)
  * [KataConfig Custom Resource Definition](#kataconfig-custom-resource-definition)
  * [Getting Started](#getting-started)
- [Operator Development](#operator-development)
- [Demos](#demos)
- [Further Reading](#further-reading)

## Introduction to sandboxed containers

[OpenShift sandboxed containers](https://www.redhat.com/en/openshift-sandboxed-containers), based on the [Kata Containers](https://katacontainers.io/) open source project, provides an Open Container Initiative (OCI) compliant container runtime using lightweight virtual machines, running your workloads in their own isolated kernel and therefore contributing an additional layer of isolation back to OpenShift’s Defense-in-Depth strategy. 

### Features & benefits of sandboxed containers

- **Isolated Developer Environments & Privileges Scoping** 
As a developer working on debugging an application using…
