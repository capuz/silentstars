---
repo: "sholdee/home-ops"
name: "home-ops"
description: "K3s home operations"
readmeQualityOk: true
url: "https://github.com/sholdee/home-ops"
language: "Shell"
languages: ["Shell", "YAML"]
languagePcts: [67, 29]
topics: ["argocd", "k3s", "k8s-at-home", "kubesearch"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-15T05:56:14Z"
lastCommitAt: "2026-10-29T14:06:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["pull-bunyan[bot]", "sholdee"]
openGraphImageUrl: "https://opengraph.githubassets.com/c138a190f8a516c42065ef6a3f0cf23e121d9d689827848634a900c9a257d087/sholdee/home-ops"
---

# K3s Home Operations

...managed with<br />
🤖 ArgoCD, Ansible, Renovate, and GitHub Actions 🤖

## Overview 📔

This repository defines my Raspberry Pi K3s self-hosting platform, including
bootable node images, Ansible host convergence, and ArgoCD-managed Kubernetes
applications.

My applications are managed in GitOps fashion with ArgoCD, Renovate, and GitHub webhooks. Repository push events trigger a webhook to ArgoCD, causing it to immediately sync the cluster state with this repository.

Renovate continuously scans the repository and submits pull requests for dependency updates, including K3s version upgrades delivered by [system-upgrade-controller](https://github.com/rancher/system-upgrade-controller). A scheduled OS update workflow also opens opt-in `system-upgrade-controller` plan PRs for node package upgrades.

A unified CI pipeline runs on all pull requests, conditionally triggering the appropriate checks:

- **Drydock GitOps validation** — uses [drydock](https://github.com/sholdee/drydock) to render and test ArgoCD Applications, produce desired-state diffs, and identify newly rendered container images
- **ARM64 image verification** — pulls drydock-detected new images on…
