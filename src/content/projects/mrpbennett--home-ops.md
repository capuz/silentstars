---
repo: "mrpbennett/home-ops"
name: "home-ops"
description: "Wife approved HomeOps driven by Kubernetes and GitOps using ArgoCD"
readmeQualityOk: true
url: "https://github.com/mrpbennett/home-ops"
homepage: "https://home-ops.mrpbennett.dev"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [59, 36]
topics: ["anisble", "argocd", "homelab", "homelab-setup", "kubernetes", "kubernetes-at-home", "talos", "terraform", "renovate", "data-engineering"]
stars: 15
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-01T10:37:04Z"
lastCommitAt: "2026-10-03T09:22:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 70
maintainers: ["mrpbennett"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f99725a197ca34bd7bf3c0f73b600f6e04fed1b8eaeefb5533d24d87165f469/mrpbennett/home-ops"
---

<p>Wife approved HomeOps driven by Kubernetes and GitOps using ArgoCD</p>

</p>

</p>

### My Home Operations Repository :octocat:

_... managed with ArgoCD, Renovate and GitHub Actions_ 🤖

</div>

---

## <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="20" height="20"> Overview

This is a mono repository for my home infrastructure and Kubernetes nodes. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Kubernetes](https://kubernetes.io/), [ArgoCD](https://argoproj.github.io/cd/), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

I have a HA setup running 3 RPi's (8gb) that consist of K3s control planes that accept workloads.

## The purpose here is to learn Kubernetes, while practising GitOps

## <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif" alt="🌱" width="20" height="20"> Kubernetes

### Installation

My Kubernetes enviroment is deployed with [K3s](https://k3s.io). With [MetalLB](https://metallb.universe.tf/) providing `LoadBalancer` support.

### GitOps

[ArgoCD](https://argoproj.github.io/cd/) watches the cluster…
