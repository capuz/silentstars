---
repo: "haraldkoch/kochhaus-home"
name: "kochhaus-home"
description: "Experimental homelab configuration for running things on kubernetes"
readmeQualityOk: true
url: "https://github.com/haraldkoch/kochhaus-home"
language: "YAML"
languages: ["YAML", "JSON"]
languagePcts: [76, 22]
topics: ["kubernetes", "gitops", "helm", "k8s-at-home", "renovate"]
stars: 180
forks: 13
openIssues: 1
closedIssues: 22
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-06-03T19:06:41Z"
lastCommitAt: "2026-10-15T08:32:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["doug-piranha-bot[bot]", "haraldkoch"]
openGraphImageUrl: "https://opengraph.githubassets.com/f289d9e2490aa00b65fbe845418835973709f2bf156d00e19fd22a8f3b44e3bd/haraldkoch/kochhaus-home"
---

#### kochhaus-home - a mono-repo for my homelab

_... managed with [Flux](https://fluxcd.io), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions)_ 🐟

---

## Overview

This is a monorepository for my home Kubernetes clusters. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Ansible](https://www.ansible.com/), [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

My Kubernetes clusters are deployed with [Talos](https://www.talos.dev). They are hyper-converged clusters, workloads and block storage are sharing the same available resources on my nodes while I have a separate server with ZFS for NFS/SMB shares, bulk file storage and backups.

There is a template over at [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template) if you want to try and follow along with some of the practices I use here.

### Core Components

- **Networking & Service Mesh**:…
