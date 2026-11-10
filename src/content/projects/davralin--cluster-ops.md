---
repo: "davralin/cluster-ops"
name: "cluster-ops"
description: "Repo for managing kubernetes-clusters"
readmeQualityOk: true
url: "https://github.com/davralin/cluster-ops"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [83]
topics: ["k8s-at-home"]
stars: 22
forks: 1
openIssues: 3
closedIssues: 112
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-04-03T09:11:43Z"
lastCommitAt: "2026-11-10T14:51:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["renovate[bot]", "davralin"]
openGraphImageUrl: "https://opengraph.githubassets.com/acc934a6e63e4339d41c075d31a10316c931632a5eb766468fc2b982b163122f/davralin/cluster-ops"
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
