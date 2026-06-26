---
repo: "spiceratops/k8s-gitops"
name: "k8s-gitops"
description: "\"But why?\" - Because special interests go brrr"
url: "https://github.com/spiceratops/k8s-gitops"
language: "YAML"
languages: ["YAML"]
languagePcts: [96]
topics: ["home-operations", "k8s-at-home", "kubernetes"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 100
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-18T10:19:51Z"
lastCommitAt: "2026-06-26T06:47:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 79
maintainers: ["spicerabot[bot]", "spiceratops"]
openGraphImageUrl: "https://opengraph.githubassets.com/461a2844f36dd126679367f7fd41d4a66d6c4c914d6f201f84e05fa98c379498/spiceratops/k8s-gitops"
---

### Yet another over-the-top homelab k8s cluster ☸

_... automated via [Flux](https://fluxcd.io), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions)_ 🤖

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. It is deployed and managed using tools like [Talos](https://talos.dev/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Terraform](https://www.terraform.io/), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

There is a template over at [onedr0p/flux-cluster-template](https://github.com/onedr0p/flux-cluster-template) if you wanted to try and follow along with some of the practices I use here.

### Installation

This semi hyper-converged cluster runs [Talos Linux](https://talos.dev), an immutable and ephemeral Linux distribution built for [Kubernetes](https://k8s.io), deployed on [Proxmox](https://www.proxmox.com/). [Rook](https://rook.io) then provides my workloads with persistent block, object, and file storage; while a seperate server running TrueNAS…
