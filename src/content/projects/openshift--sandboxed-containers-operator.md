---
repo: "openshift/sandboxed-containers-operator"
name: "sandboxed-containers-operator"
description: "An operator to enhance an Openshift/Kubernetes cluster to support running sandboxed containers"
readmeQualityOk: true
url: "https://github.com/openshift/sandboxed-containers-operator"
language: "Shell"
languages: ["Shell", "Go", "Python"]
languagePcts: [41, 36, 20]
stars: 50
forks: 73
openIssues: 3
closedIssues: 95
watchers: 14
contributors: 397
recentReleases: 0
createdAt: "2020-08-11T18:26:57Z"
lastCommitAt: "2026-10-13T10:58:06Z"
lastReleaseAt: "2024-02-07T17:00:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 61
maintainers: ["red-hat-konflux[bot]", "littlejawa", "snir911"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f25dfd94d0837cd11a86f74680346ad181a919e36592058e6415db6bfa0179a/openshift/sandboxed-containers-operator"
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
