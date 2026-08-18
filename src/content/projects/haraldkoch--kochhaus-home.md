---
repo: "haraldkoch/kochhaus-home"
name: "kochhaus-home"
description: "Experimental homelab configuration for running things on kubernetes"
readmeQualityOk: true
url: "https://github.com/haraldkoch/kochhaus-home"
language: "YAML"
languages: ["YAML", "JSON"]
languagePcts: [78, 20]
topics: ["kubernetes", "gitops", "helm", "k8s-at-home", "renovate"]
stars: 178
forks: 14
openIssues: 1
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-06-03T19:06:41Z"
lastCommitAt: "2026-08-18T04:08:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["doug-piranha-bot[bot]", "haraldkoch"]
openGraphImageUrl: "https://opengraph.githubassets.com/062959bd1f90faa273fdde6f8e5bae073fb20b9bb4c019bf978e8a0ebcd8bbc5/haraldkoch/kochhaus-home"
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
