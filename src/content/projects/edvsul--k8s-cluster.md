---
repo: "edvsul/k8s-cluster"
name: "k8s-cluster"
description: "The kubernetes homelab"
readmeQualityOk: true
url: "https://github.com/edvsul/k8s-cluster"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-07T11:20:23Z"
lastCommitAt: "2026-08-13T05:17:41Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 59
maintainers: ["esulzickis", "edvinas31", "renovate-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/be279adb451e27d7dbc9cacae98399e1ea68de9096cfb2ac685d3c0852d02bf3/edvsul/k8s-cluster"
---

# k8s-cluster
The kubernetes homelab

## Cluster Topology

All four nodes sit on a single flat LAN segment (`10.0.0.0/24`) behind the home
router. The three workers contribute local disk to Longhorn, which replicates
volumes between them and ships backups off-site to AWS S3.

## Infrastructure Specifications

**Prerequisites:**
- flux-cli https://fluxcd.io/flux/installation/#install-the-flux-cli
- kubectl https://kubernetes.io/docs/tasks/tools/#kubectl
- git https://git-scm.com/downloads
- cloudflared https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/
- sops https://fluxcd.io/flux/guides/mozilla-sops/

**Hardware:** 4 nodes — 1 control plane + 3 workers

| Role | IP | Model | CPU | RAM | OS |
|------|-----|-------|-----|-----|-----|
| Control plane | 10.0.0.78 | Dell OptiPlex 9020 | i3-4150, 4 cores | 8 GB | Ubuntu Server 24.04 LTS |
| Worker | 10.0.0.77 | Dell OptiPlex 7010 | i3-3240, 4 cores | 8 GB | Ubuntu Server 24.04 LTS |
| Worker | 10.0.0.76 | HP EliteDesk 800 G1 TWR | i5-4570, 4 cores | 16 GB | Ubuntu Server 26.04 LTS |
| Worker | 10.0.0.75 | HP EliteDesk 800 G1 TWR | i5-4570, 4 cores | 16 GB | Ubuntu Server 26.04 LTS |…
