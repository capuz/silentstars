---
repo: "mchestr/home-cluster"
name: "home-cluster"
description: "Cat-approved, 100% renewable, GMO-Free HomeLab k8s cluster managed via Flux2 & Renovate"
readmeQualityOk: true
url: "https://github.com/mchestr/home-cluster"
homepage: "http://docs.chestr.dev/"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [57, 26]
topics: ["kubernetes", "terraform", "renovate", "kubesearch", "gitops", "mise", "selfhosted", "talos", "taskfile"]
stars: 178
forks: 3
openIssues: 2
closedIssues: 23
watchers: 1
contributors: 34
recentReleases: 0
createdAt: "2022-05-24T06:05:39Z"
lastCommitAt: "2026-11-14T21:02:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 43
maintainers: ["mchesterbot[bot]", "claude", "mchestr"]
openGraphImageUrl: "https://opengraph.githubassets.com/f74a7202d98150040f1dd270d967b9ca654610e9faf61593295c975d2be6c03b/mchestr/home-cluster"
---

## My Home Kubernetes Cluster <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/512.gif" alt="☄" width="32" height="32">

... managed with Flux and Renovate <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif" alt="🤖" width="16" height="16">

&nbsp;&nbsp;

## Overview

This repository is my home Kubernetes cluster in a declarative state. [Flux](https://github.com/fluxcd/flux2) watches the [kubernetes](https://github.com/mchestr/home-cluster/blob/HEAD/kubernetes/) folder and will make the changes to the cluster based on the YAML manifests.

### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="16" height="16"> Core Components

Core components that form the foundation of the cluster:

- [authelia/authelia](https://github.com/authelia/authelia): SSO and two-factor authentication in front of internal apps, with [lldap/lldap](https://github.com/lldap/lldap) as the user directory.
- [backube/volsync](https://github.com/backube/volsync): Backup and recovery of persistent volume claims.
- [cilium/cilium](https://github.com/cilium/cilium): Kubernetes CNI.
-…
