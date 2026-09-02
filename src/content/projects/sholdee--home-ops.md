---
repo: "sholdee/home-ops"
name: "home-ops"
description: "K3s home operations"
readmeQualityOk: true
url: "https://github.com/sholdee/home-ops"
language: "Shell"
languages: ["Shell", "YAML"]
languagePcts: [59, 35]
topics: ["argocd", "k3s", "k8s-at-home", "kubesearch"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-15T05:56:14Z"
lastCommitAt: "2026-09-02T08:04:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["pull-bunyan[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35725087757eff8fe9a7b4f7f5df407643116a371d01625228e22b306db94968/sholdee/home-ops"
---

# K3s Home Operations

...managed with<br />
🤖 ArgoCD, Ansible, Renovate, and GitHub Actions 🤖

</div>

</div>

</div>

</div>

</div>

<details>
<summary>📈 7-day trends</summary>
<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://kromgo.sholdee.net:8443/graphs/cpu_trend?last=7d&amp;theme=catppuccin-mocha">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://kromgo.sholdee.net:8443/graphs/pods_trend?last=7d&amp;theme=catppuccin-mocha">
</picture>

</details>

</div>

## Overview 📔

This repository defines my Raspberry Pi K3s self-hosting platform, including
bootable node images, Ansible host convergence, and ArgoCD-managed Kubernetes
applications.

My applications are managed in GitOps fashion with ArgoCD, Renovate, and GitHub webhooks. Repository push events trigger a webhook to ArgoCD, causing it to immediately sync the cluster state with this repository.

Renovate continuously scans the repository and submits pull requests for dependency updates, including K3s version upgrades delivered by [system-upgrade-controller](https://github.com/rancher/system-upgrade-controller). A scheduled OS update workflow also opens…
