---
repo: "tscibilia/home-ops"
name: "home-ops"
description: "Wife-tolerated HomeOps driven by Kubernetes and Gitops via Flux c/o onedr0p's template."
readmeQualityOk: true
url: "https://github.com/tscibilia/home-ops"
homepage: "https://tscibilia.github.io/home-ops/"
language: "YAML"
languages: ["YAML"]
languagePcts: [77]
topics: ["cilium", "flux", "gitops", "kubernetes", "mise", "renovate", "sops", "spiegel", "talos", "k8s-at-home"]
stars: 10
forks: 0
openIssues: 6
closedIssues: 130
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-24T14:46:35Z"
lastCommitAt: "2026-10-26T18:06:50Z"
lastReleaseAt: "2026-01-01T02:30:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["kube-skywalker[bot]", "tscibilia"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f1021f1c60836ed93ebddf3403613d63ac03bf15f443657f31637cd3f1eeb12/tscibilia/home-ops"
---

## Home-Ops Kubernetes Repository

_... managed by Flux, Renovate and GitHub Actions_ :robot:

👋 Welcome to my Home Operations repository. This is a mono repository for my home infrastructure and Kubernetes cluster. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Ansible](https://www.ansible.com/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

---

## 🔎 Support

If you like this project, please consider supporting the work of [onedr0p](https://github.com/sponsors/onedr0p?frequency=one-time) and [bjw-s](https://github.com/sponsors/bjw-s?frequency=one-time).

---

## <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/kubernetes.svg" alt="☸️" width="20" height="20"> Kubernetes

My Kubernetes cluster is a hyper-converged cluster deployed with [Talos](https://www.talos.dev) on three bare-metal nodes. Workloads and block storage share the same available resources backed by [Rook Ceph](https://rook.io/) on Samsung SSDs, while I have a separate server with NFS shares for media libraries and backups.…
