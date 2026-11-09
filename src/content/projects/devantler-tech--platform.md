---
repo: "devantler-tech/platform"
name: "platform"
description: "DevantlerTech Platform - including deployment artifacts for running the platform in CI/CD and in Talos Omni."
readmeQualityOk: true
url: "https://github.com/devantler-tech/platform"
homepage: "http://platform.devantler.tech/"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [50, 49]
topics: ["infrastructure"]
stars: 35
forks: 4
openIssues: 218
closedIssues: 1306
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-05-20T20:32:47Z"
lastCommitAt: "2026-11-09T03:04:31Z"
lastReleaseAt: "2026-05-26T10:39:45Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 59
maintainers: ["devantler", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83e924053441be642cee4e249272d39b684c82dd38b9ca611763464df22efcc1/devantler-tech/platform"
---

# Devantler Tech Platform ☸️⛴️

A self-hosted Kubernetes platform for Devantler Tech's business services and
personal applications. This repository contains the configuration for that live
platform, shared as a reference—not a ready-to-use distribution.

The goal is affordable production infrastructure: redundant cluster nodes,
replicated storage, backups, monitoring, and reviewed deployments without a
managed Kubernetes control-plane fee. You still own its operation and recovery.

Want to build a similar platform for yourself? Start with
[platform-template](https://github.com/devantler-tech/platform-template), the
reusable template for creating your own instance.

Changes are reviewed in Git. [Flux](https://fluxcd.io) applies the published
configuration to the cluster automatically.
[KSail](https://github.com/devantler-tech/ksail) manages the Talos clusters and
the workload lifecycle.

## What's included

- **Compute:** Talos Linux on Hetzner Cloud, with a smaller Docker-based local
  test environment.
- **Networking:** Cilium, Gateway API, Cloudflare DNS, and certificate
  management.
- **Access and secrets:** Dex single sign-on, OpenBao, External Secrets, and
  SOPS-encrypted…
