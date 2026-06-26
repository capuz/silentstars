---
repo: "davralin/cluster-ops"
name: "cluster-ops"
description: "Repo for managing kubernetes-clusters"
url: "https://github.com/davralin/cluster-ops"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [85]
topics: ["k8s-at-home"]
stars: 18
forks: 2
openIssues: 6
closedIssues: 107
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-04-03T09:11:43Z"
lastCommitAt: "2026-06-26T23:43:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["renovate[bot]", "davralin"]
openGraphImageUrl: "https://opengraph.githubassets.com/267fcee239a276e8c07be6bca8b5ac02fa1257c7faee4a8f9c5c813ea9e2f4a6/davralin/cluster-ops"
---

# cluster-ops

GitOps-managed Kubernetes cluster running on bare metal, powered by [Flux](https://fluxcd.io/) and [Talos Linux](https://www.talos.dev/).

## 🏗️ Architecture

| Component | Details |
|-----------|---------|
| **Hardware** | 5× Dell Optiplex 3090 Micro |
| **OS** | [Talos Linux](https://www.talos.dev/) |
| **Kubernetes** | Talos-managed, 3 control plane + 2 workers |
| **Boot disk** | 128GB 2230 NVMe via M.2 WiFi key adapter |
| **GitOps** | [Flux](https://fluxcd.io/) with SOPS encryption |
| **Networking** | [Cilium](https://cilium.io/) CNI with full network policy enforcement |
| **Ingress** | [HAProxy](https://www.haproxy.org/) Kubernetes Ingress Controller |
| **Storage** | [Rook-Ceph](https://rook.io/) (NVMe + SATA SSD, block + filesystem) |
| **Certificates** | [cert-manager](https://cert-manager.io/) |
| **Secrets** | [SOPS](https://github.com/getsops/sops) with Age encryption |
| **Databases** | [CloudNative-PG](https://cloudnative-pg.io/) for PostgreSQL workloads |
| **Monitoring** | Prometheus + Grafana via [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts) |
| **Backups** | [VolSync](https://volsync.readthedocs.io/) for PVC…
