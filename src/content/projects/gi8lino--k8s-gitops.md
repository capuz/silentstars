---
repo: "gi8lino/k8s-gitops"
name: "k8s-gitops"
description: "My Kubernetes cluster built with K3s and managed by Flux v2"
readmeQualityOk: true
url: "https://github.com/gi8lino/k8s-gitops"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [55, 32]
topics: ["kubernetes", "infrastructure", "flux2", "k8s", "fluxcd", "k3s"]
stars: 22
forks: 3
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-08-12T19:55:57Z"
lastCommitAt: "2026-10-19T09:14:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["renovate[bot]", "gi8lino"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ade86cfdbd68bae00428ecef57de99aec92b5ee1b4d0848539683a2b2fdcc1d/gi8lino/k8s-gitops"
---

# k8s-gitops

## :loudspeaker:&nbsp; About

This repository contains my entire Kubernetes cluster setup built on K3s and managed by Flux v2.\
Secrets are encrypted and managed with [SOPS](https://github.com/mozilla/sops).

See these manuals for an initial deployment:

- [Install pre-commit Hooks](https://github.com/gi8lino/k8s-gitops/blob/HEAD/.github/docs/precommit.md)
- [Setting up GnuPG keys](https://github.com/gi8lino/k8s-gitops/blob/HEAD/.github/docs/gpg.md)
- [Initial flux deployment](https://github.com/gi8lino/k8s-gitops/blob/HEAD/.github/docs/flux.md)

## 🧰 Prerequisites

- `flux` command-line tools for bootstrap and reconciliation.
- `kubectl` configured against the target K3s cluster.
- `age`/GnuPG plus the SOPS configuration used for secrets.

---

## GitOps

[Flux](https://github.com/fluxcd/flux2) watches my cluster folder (see `Repository Structure` below) and makes the changes to my cluster based on the YAML manifests.

[Renovate](https://github.com/renovatebot/renovate) is a very useful tool that when configured will start to create PRs in your GitHub repository when Docker images, Helm charts or anything else that can be tracked has a newer version. The…
