---
repo: "fhoekstra/home-ops"
name: "home-ops"
description: "My GitOps home lab"
readmeQualityOk: true
url: "https://github.com/fhoekstra/home-ops"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["fluxcd", "gitops", "helm", "k8s-at-home", "kubernetes", "sops", "talhelper", "talos", "cloudnative-pg", "kubesearch"]
stars: 23
forks: 0
openIssues: 6
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-31T12:34:40Z"
lastCommitAt: "2026-09-19T01:37:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["renovate[bot]", "fhoekstra"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a9b75b6bbed711a87ed773de5755ca783a149f1f89e2dd70afb7251ae61e1da/fhoekstra/home-ops"
---

# My Home Ops repo

Self-hosting and managing your setup through GitOps.
That is the journey I've started, using [@onedr0p](https://github.com/onedr0p)'s excellent [cluster template](https://github.com/onedr0p/cluster-template).

This repo uses [Talos Linux](https://www.talos.dev/) and [Flux](https://fluxcd.io/) to fully declaratively manage a Kubernetes cluster at home.

# Hardware

> [!NOTE]
> For an in-depth write-up of my current homelab hardware, check out my [blog at **fhoekstra.eu**](https://fhoekstra.eu/posts/the-kube-the-smallest-enterprise-home-lab/)

<br/>

| Role | Model | CPU | RAM | SSD |
| ------------- | ------------- | -------------- | -------------- |-------|
| K8s controlplane, k8s workloads | `kube` (Rock 5B+) | RK3588 (4x A76 + 4x A55) | 24GB LPDDR5 | 32GB microSD for read-only root and boot, PLP SSDs for [Talos](https://github.com/fhoekstra/home-ops/blob/HEAD/kubernetes/bootstrap/talos/talconfig.yaml) and [Ceph](https://github.com/fhoekstra/home-ops/blob/HEAD/kubernetes/apps/rook-ceph/rook-ceph/cluster/helmrelease.yaml#L97) |
| K8s controlplane, k8s workloads | `kube` (Rock 5B+) | RK3588 (4x A76 + 4x A55) | 24GB LPDDR5 | 32GB microSD for read-only root and…
