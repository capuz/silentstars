---
repo: "heavybullets8/heavy-ops"
name: "heavy-ops"
description: "Home operations repository for a single-node Kubernetes cluster on Talos Linux, managed with Flux, SOPS, and GitHub Actions."
readmeQualityOk: true
url: "https://github.com/heavybullets8/heavy-ops"
language: "Java"
languages: ["Java", "Shell", "JavaScript"]
languagePcts: [38, 34, 25]
topics: ["fluxcd", "helm", "kubesearch", "talos", "gitops", "kubernetes"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-06-06T19:35:46Z"
lastCommitAt: "2026-08-20T04:09:25Z"
lastReleaseAt: "2025-03-01T00:14:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["heavybullets8", "field-repair-bot-74a[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6df6596b30bf5e3036be3534f03ba567373558a3ddf922b990311927727453d/heavybullets8/heavy-ops"
---

# My Home Operations Repository

_... managed with Flux, SOPS, and GitHub Actions_ 🤖

---

## 📖 Overview

This repository contains the configuration for my home infrastructure and
Kubernetes cluster. I follow Infrastructure as Code (IaC) and GitOps practices
using tools like [Talos Linux](https://www.talos.dev/),
[Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2),
[SOPS](https://github.com/mozilla/sops), and
[GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

My Kubernetes cluster is deployed with [Talos Linux](https://www.talos.dev/) on
a single powerful node. For persistent storage, I use
[OpenEBS HostPath](https://github.com/openebs/dynamic-localpv-provisioner) and
[OpenEBS ZFS](https://github.com/openebs/zfs-localpv).

### Core Components

- [cert-manager](https://github.com/cert-manager/cert-manager): Automates the
  creation and management of TLS certificates.
- [cilium](https://github.com/cilium/cilium): Provides networking, security, and
  observability for the cluster.
- [external-secrets](https://github.com/external-secrets/external-secrets):
  Syncs secrets from external APIs into Kubernetes.
-…
