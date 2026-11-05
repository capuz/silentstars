---
repo: "nebius/soperator"
name: "soperator"
description: "Run Slurm in Kubernetes"
readmeQualityOk: true
url: "https://github.com/nebius/soperator"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["hpc", "kubernetes", "ml", "model-training", "slurm", "high-performance-computing", "k8s", "k8s-operator", "machine-learning"]
stars: 456
forks: 65
openIssues: 17
closedIssues: 423
watchers: 9
contributors: 48
recentReleases: 0
createdAt: "2024-06-04T13:43:58Z"
lastCommitAt: "2026-11-05T08:04:45Z"
lastReleaseAt: "2024-10-29T13:27:42Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 36
maintainers: ["asteny", "itechdima", "Uburro"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/810333340/617a4d2d-b947-41c4-afe4-d2fcb916fe2d"
discussionCount: 0
---

# Soperator

### Run Slurm on Kubernetes. Anywhere.

Soperator is an open-source Kubernetes operator for running Slurm clusters for AI training and high-performance computing (HPC).

**Simple cluster management · High reliability · Efficient GPU use**

[📚 Docs on GitHub](https://github.com/nebius/soperator/blob/HEAD/docs/) · [📚 Docs on Nebius](https://docs.nebius.com/slurm-soperator/) · [🗒️ Releases](https://github.com/nebius/soperator/releases) · [🐞 Issues](https://github.com/nebius/soperator/issues)

---

## 📋 Table of contents

- [What is Soperator](#-what-is-soperator)
- [Why Soperator](#-why-soperator)
- [Key features](#-key-features)
- [How it works](#-how-it-works)
- [Roadmap](#-roadmap)
- [Deployment options](#-deployment-options)
- [Requirements & supported versions](#-requirements--supported-versions)
- [Documentation](#-documentation)
- [Community & contributing](#-community--contributing)
- [License](#-license)

---

## ❓ What is Soperator

Slurm is a common scheduler for AI training and HPC workloads. Soperator is a Kubernetes operator that turns a `SlurmCluster` custom resource into a working Slurm cluster, including drivers, the CUDA/NCCL stack, shared storage,…
