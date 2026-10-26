---
repo: "ProfMoo/home"
name: "home"
description: "My homelab baremetal-to-k8s media and \"do anything\" server. Codified and GitOpsified"
readmeQualityOk: true
url: "https://github.com/ProfMoo/home"
language: "YAML"
languages: ["YAML"]
languagePcts: [90]
topics: ["music", "containers", "kubernetes", "media", "proxmox", "k8s-at-home", "kubesearch"]
stars: 24
forks: 3
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-08-09T23:02:18Z"
lastCommitAt: "2026-10-26T03:04:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 62
maintainers: ["robottoms-up[bot]", "ProfMoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/343d72523ad9c7db5930bd72f90d1c51dfff995ca4abf111a723297b46579711/ProfMoo/home"
---

# [Moo's Pasture](https://github.com/ProfMoo/home)

A [onedr0p home-ops](https://github.com/onedr0p/home-ops) inspired project, with some [ProfMoo](https://github.com/ProfMoo) sprinkled in.

---

## Overview

A mono-repository for my homelab Kubernetes cluster. I strictly adhere to Infrastructure as Code (IaC) and GitOps practices using OSS tools like Kubernetes, OpenTofu, Talos, Flux, Renovate, and GitHub Actions.

### Infrastructure

I use [Talos](https://github.com/siderolabs/talos), [OpenTofu](https://opentofu.org/), and [Proxmox](https://github.com/proxmox) to spin up Kubernetes in a GitOps fashion in [this directory](https://github.com/ProfMoo/home/blob/HEAD/infrastructure).

Proxmox, a VM-management and hypervisor technology, is used to spin up VMs on the compute bare-metal rack servers. These raw VMs are bootstrapped via OpenTofu with Talos configuration(s) that create a functional Kubernetes cluster with the initial cluster components (such as Flux) already deployed.

### Kubernetes

I configure Kubernetes with GitOps via [Flux](https://github.com/fluxcd/flux2). The Flux controllers scans the [kubernetes](https://github.com/ProfMoo/home/blob/HEAD/kubernetes/) directory…
