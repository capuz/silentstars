---
repo: "vrozaksen/home-ops"
name: "home-ops"
description: "Another Kubernetes repo — because one more won’t hurt."
readmeQualityOk: true
url: "https://github.com/vrozaksen/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [79]
topics: ["flux", "gitops", "home-operations", "kubernetes", "kubesearch", "mise", "renovate", "rook-ceph", "self-hosted", "selfhosted"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-21T20:25:43Z"
lastCommitAt: "2026-10-30T11:02:23Z"
lastReleaseAt: "2025-03-01T00:38:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["repo-killer[bot]", "vrozaksen", "vzkn-agents[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4afdc457ee3a23e1f257a3f59836a4ede13fd96c4505767eebf5a4bb493b8cb5/vrozaksen/home-ops"
fundingLinks: ["GITHUB:https://github.com/vrozaksen", "CUSTOM:https://www.paypal.me/vrozaksen"]
---

### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="16" height="16"> My Home Operations Repository <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.gif" alt="🚧" width="16" height="16">

_... managed with Flux, Renovate, and GitHub Actions_ <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif" alt="🤖" width="16" height="16">

---

## 📖 Overview

This is a monorepository is for my home kubernetes clusters.
I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Terraform](https://www.terraform.io/),
[Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate),
and [GitHub Actions](https://github.com/features/actions).

The purpose here is to learn k8s, while practicing Gitops.

---

## ⛵ Kubernetes

My Kubernetes cluster is deployed with [Talos](https://www.talos.dev) - a semi-hyper-converged setup where workloads and block storage share resources on the nodes, with a separate NAS providing NFS/SMB shares and backups.

### Core Components

-…
