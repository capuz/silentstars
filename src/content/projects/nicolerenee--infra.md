---
repo: "nicolerenee/infra"
name: "infra"
description: "Kubernetes gitops for my homelab"
url: "https://github.com/nicolerenee/infra"
homepage: "http://infra-docs.nicole.dev/"
language: "HCL"
languages: ["HCL", "Python"]
languagePcts: [44, 40]
topics: ["k8s-at-home", "flux", "gitops", "home-operations", "homelab", "kubernetes", "talos"]
stars: 111
forks: 7
openIssues: 1
closedIssues: 7
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2018-07-29T23:56:56Z"
lastCommitAt: "2026-06-25T01:38:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 47
maintainers: ["bot-nicole[bot]", "nicolerenee"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a784a710d0a626b468d22503500eaf3d87ccdcaafab4f4b8047eff468ac0aaa/nicolerenee/infra"
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
