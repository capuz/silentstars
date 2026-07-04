---
repo: "haraldkoch/kochhaus-home"
name: "kochhaus-home"
description: "Experimental homelab configuration for running things on kubernetes"
url: "https://github.com/haraldkoch/kochhaus-home"
language: "YAML"
languages: ["YAML"]
languagePcts: [78]
topics: ["kubernetes", "gitops", "helm", "k8s-at-home", "renovate"]
stars: 177
forks: 14
openIssues: 1
closedIssues: 19
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-06-03T19:06:41Z"
lastCommitAt: "2026-07-04T19:20:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["doug-piranha-bot[bot]", "haraldkoch"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc3d96e90fe46b3c257d6d3040cf716570c5760a7768c425c67e6e860f8f8b54/haraldkoch/kochhaus-home"
---

#### kochhaus-home - a mono-repo for my homelab

_... managed with [Flux](https://fluxcd.io), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions)_ 🐟

</div>
</div>

</div>

</div>

</div>

---

## Overview

This is a monorepository for my home Kubernetes clusters. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Ansible](https://www.ansible.com/), [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

My Kubernetes clusters are deployed with [Talos](https://www.talos.dev). They are hyper-converged clusters, workloads and block storage are sharing the same available resources on my nodes while I have a separate server with ZFS for NFS/SMB shares, bulk file storage and backups.

There is a template over at [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template) if you want to try and follow along with some of the practices I use here.

### Core Components

- **Networking &…
