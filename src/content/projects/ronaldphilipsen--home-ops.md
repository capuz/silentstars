---
repo: "RonaldPhilipsen/home-ops"
name: "home-ops"
description: "Wife-Tolerated Home-ops"
readmeQualityOk: true
url: "https://github.com/RonaldPhilipsen/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [94]
topics: ["gitops", "helm", "homelab", "k8s", "k8s-at-home", "kubernetes", "mediaserver", "selfhosted", "talos", "kubesearch"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2024-10-09T17:36:38Z"
lastCommitAt: "2026-10-26T09:18:29Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 75
maintainers: ["docrphil-renovate[bot]", "RonaldPhilipsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/bca0997fe291f8405d522d295437ce915996b91539570c4869327c84c7a0d341/RonaldPhilipsen/home-ops"
---

#### home-ops - a mono-repo for my homelab

_... automated via [Flux](https://fluxcd.io), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions)_ 🐟

---

## Overview

This is a monorepository for my home Kubernetes cluster.
I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like, [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

The purpose here is to learn Kubernetes, while practicing GitOps. I have two longer-term goals:

1. ~~migrate many of the services that I currently run on different raspberry pi's or servers around the house into a single, congruous k8s environment~~
2. ~~Learn more about managing K8s clusters in prod~~
3. ~~Get some decent NVME SSD's to use as boot drives~~
4. ~~Set up ceph instead of using NFS for PVC s~~
5. Set up OIDC for more appliations.

---

## ⛵ Kubernetes

There is a template over at [onedr0p/flux-cluster-template](https://github.com/onedr0p/flux-cluster-template) if you want to try and follow along with some of the…
