---
repo: "carldanley/homelab"
name: "homelab"
description: "My playground for my homelab Kubernetes clusters deployed with Talos Linux & fully automated via Flux, Renovate & GitHub Actions."
readmeQualityOk: true
url: "https://github.com/carldanley/homelab"
language: "YAML"
languages: ["YAML"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-03T05:23:27Z"
lastCommitAt: "2026-09-25T09:02:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 77
maintainers: ["batcave-alfred[bot]", "carldanley"]
openGraphImageUrl: "https://opengraph.githubassets.com/efcae92f70d529dfa6e37c571c6f7c132e6a55ba0a179c0a5b3fb55a6d1deb5a/carldanley/homelab"
---

</div>

---

## <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="20" height="20"> Overview

This repository is for my homelab infrastructure & Kubernetes clusters. I do the best I can to adhere to IaC (Infrastructure as Code) and GitOps best practices using tools like [Kubernetes](https://github.com/kubernetes/kubernetes), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

---

## <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif" alt="🌱" width="20" height="20"> Kubernetes

This semi hyper-converged cluster operates on [Talos Linux](https://github.com/siderolabs/talos), an immutable and ephemeral Linux distribution tailored for [Kubernetes](https://github.com/kubernetes/kubernetes), and is deployed on bare-metal [MS-A2](https://store.minisforum.com/products/minisforum-ms-a2) workstations. [Rook](https://github.com/rook/rook) supplies my workloads with persistent block, object, and file storage, while a separate server handles media file storage & long term object storage backups. The cluster is designed to enable a full…
