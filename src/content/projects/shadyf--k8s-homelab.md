---
repo: "ShadyF/k8s-homelab"
name: "k8s-homelab"
description: "My Kubernetes (k3s) homelab. Synced using Flux v2, automatically updated using Renovate."
readmeQualityOk: true
url: "https://github.com/ShadyF/k8s-homelab"
homepage: "https://homelab.shadyf.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["kubernetes", "k3s", "homelab", "helm", "gitops", "flux", "renovate", "selfhosted", "k8s-at-home"]
stars: 23
forks: 0
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-05-13T17:22:03Z"
lastCommitAt: "2026-10-01T10:23:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 58
maintainers: ["ShadyF", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f64ea7a9a0e00a3f3a91b3862628a013a66009b226229d9f8dfe2c674371c69b/ShadyF/k8s-homelab"
---

<br/>

### My K8s Homelab :computer:

#### Synced Using Flux <img src="https://avatars.githubusercontent.com/u/52158677?s=200&v=4" width="18px"> Updated using Renovate <img src="https://docs.renovatebot.com/assets/images/logo.png" width="18px">

</div>

## :book: Overview

This repository contains the kubernetes manifests of my homelab, synced using [Flux](https://github.com/fluxcd/flux2).

[Renovate](https://docs.renovatebot.com/) also scans this repo and create PRs whenever it finds a dependency update.

## :floppy_disk: Software

My homelab uses [k3s](https://k3s.io/) on top of bare-metal hardware running Ubuntu Server 21.04. Hardware specs can be
found below.

### Folder Structure

K8s manifests that are actually synced with the homelab can be found under the `cluster` directory. Documentation and
website files are found in the `docs` directory

Inside the cluster directory, here's how everything is structured:

- **base**: Flux's entrypoint. Mainly stuff created by bootstrapping flux + some additional functionalities
- **crds**: Contains any CRDs that need to exist before anything else gets applied.
- **apps**: Contains both essential cluster components and common…
