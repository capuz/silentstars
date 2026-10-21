---
repo: "Tanguille/cluster"
name: "cluster"
description: "My home kubernetes GitOps repository."
readmeQualityOk: true
url: "https://github.com/Tanguille/cluster"
language: "YAML"
languages: ["YAML"]
languagePcts: [70]
topics: ["kubesearch", "flux", "gitops", "kubernetes", "mise", "renovate", "talos", "k8s-at-home"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 52
recentReleases: 0
createdAt: "2024-10-06T09:54:42Z"
lastCommitAt: "2026-10-21T17:32:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["tanguille-cluster[bot]", "Tanguille"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ebab1f7bc4e17c755630f7657741f552c3b2e7ffa4b1439e6d42217dc71e6/Tanguille/cluster"
---

# Cluster

**GitOps** with Flux · **Self-hosted by design**

---

## 📖 Overview

This is my live configuration for a 3-node Talos Linux cluster. Every change lands in Git first;
Flux reconciles the cluster from there, and Renovate keeps images and charts current via PRs.

The repo is GitOps-strict: applications are declared as `HelmRelease`
resources, all secrets live in SOPS-encrypted manifests.

The cluster is operated by me; agents are tools in that loop. I make
use of agentic workflows: agent-authored PRs, automated review and
skill-driven operations, nothing goes live without me deciding it should.

---

## 🗺️ Architecture

```mermaid
flowchart LR
    Tanguille[👤 Operator] -->|git push| Repo[(📦 GitHub)]
    Renovate[🤖 Renovate] -.->|automated PRs| Repo
    Repo -->|reconciles| Flux[⚙️ Flux]
    Flux -->|deploys| Cluster[☸️ Kubernetes on Talos<br/>3 nodes]

    Cluster --> Ceph[(🪨 Rook Ceph<br/>block + filesystem · default durable)]
    Cluster --> OEP[(🐂 OpenEBS Hostpath<br/>best-effort low latency tier)]

    Cluster --> KB[(💾 kopiur / Kopia<br/>per-app PV snapshots)]
```

Storage classes are picked per workload by durability requirement: Ceph for
anything that must…
