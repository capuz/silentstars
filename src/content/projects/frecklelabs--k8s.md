---
repo: "frecklelabs/k8s"
name: "k8s"
description: "Kubernetes gitops for my homelab"
readmeQualityOk: true
url: "https://github.com/frecklelabs/k8s"
homepage: "http://infra-docs.nicole.dev/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [65, 28]
topics: ["k8s-at-home", "flux", "gitops", "home-operations", "homelab", "kubernetes", "talos"]
stars: 112
forks: 7
openIssues: 1
closedIssues: 9
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2018-07-29T23:56:56Z"
lastCommitAt: "2026-11-09T03:30:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 47
maintainers: ["freckle-infra-agent[bot]", "nicolerenee", "freckle-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abac11056e1c64e43227c316643c72ce5c583bf752f90c4b4c900a0ab4873d79/frecklelabs/k8s"
---

# Home Kubernetes Infrastructure

A GitOps-managed Kubernetes infrastructure running on bare metal with Talos
Linux, featuring automated deployments via Flux v2 and comprehensive
application hosting for home lab services.

## 🏗️ Infrastructure Overview

This repository manages two Kubernetes clusters using a GitOps approach:

- **atlantis-k8s01**: 5-node cluster (3 control plane, 2 workers) with
  high-availability networking running in a Colo
- **fairy-k8s01**: 3-node cluster (all control plane) running at home

### Core Technologies

- **OS**: [Talos Linux](https://www.talos.dev/) - Immutable, secure Kubernetes
  OS
- **GitOps**: [Flux v2](https://fluxcd.io/) - Automated deployment and
  reconciliation
- **CNI**: [Cilium](https://cilium.io/) - eBPF-based networking with Gateway API
  support
- **Storage**: [Rook Ceph](https://rook.io/) - Distributed storage cluster
- **Secrets**: [External Secrets Operator](https://external-secrets.io/) with
  1Password integration
- **Monitoring**: [VictoriaMetrics](https://victoriametrics.com/) stack with
  Grafana
- **Load Balancing**: [MetalLB](https://metallb.universe.tf/) in BGP mode

## 📁 Repository Structure

```text
kubernetes/
├──…
