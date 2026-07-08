---
repo: "martinbjeldbak/home-ops"
name: "home-ops"
description: "My home infrastructure written as code, using GitOps practices  "
readmeQualityOk: true
url: "https://github.com/martinbjeldbak/home-ops"
language: "Just"
languages: ["Just", "Shell"]
languagePcts: [66, 33]
topics: ["flux", "kubernetes", "self-hosted", "gitops", "proxmox", "talos", "kubesearch", "k8s-at-home"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 42
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-01T11:51:28Z"
lastCommitAt: "2026-07-08T05:45:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["martinbjeldbak-home-ops[bot]", "martinbjeldbak", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/419653450b0e00efb4df6dcae68cc0e7044f158436dcf9c9dec34dd37597d880/martinbjeldbak/home-ops"
---

### My Homelab :anchor:

</div>

</div>

</div>

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster.
I run [Talos Linux](https://github.com/siderolabs/talos) on bare-metal and
follow Infrastructure as Code (IaC) principles using
[Flux](https://github.com/fluxcd/flux2),
[Renovate](https://github.com/renovatebot/renovate), [GitHub
Actions](https://github.com/features/actions), among other tools in my cluster.

This README outlines the software and hardware that runs inside my cluster.
I will try and keep ti updated as I make changes, but it might be outdated. As
my cluster is managed via GitOps, the files in this repo are source of truth :)

If you have any questions or comments, you can find me on the [Home
Operations](https://discord.gg/home-operations) Discord community and my email
in my GitHub profile.

## 🚢 Technology Stack

|                                                                                                                                               | Name                                                                                             | Description…
