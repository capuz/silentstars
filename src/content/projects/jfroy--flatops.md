---
repo: "jfroy/flatops"
name: "flatops"
description: "My homelab Kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/jfroy/flatops"
language: "YAML"
languages: ["YAML", "JSON"]
languagePcts: [59, 40]
topics: ["k8s-at-home", "kubesearch", "flux", "gitops", "kubernetes", "renovate", "talos"]
stars: 42
forks: 1
openIssues: 67
closedIssues: 134
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2024-02-29T03:28:06Z"
lastCommitAt: "2026-08-09T04:47:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["daddy-ro[bot]", "jfroy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1466aef3cdfbe3359797cb894f6a87c9b3724309b29bf8489ad9efaa0202091d/jfroy/flatops"
---

# ⛵ flatops

A GitOps-managed Kubernetes homelab cluster running on [Talos Linux](https://www.talos.dev/).

## 📋 Overview

This repository contains the declarative configuration for **kantai**, a bare-metal Kubernetes cluster. The cluster is designed for home infrastructure workloads with a focus on:

- **GitOps-driven operations** via FluxCD
- **Advanced networking** with Cilium, Envoy Gateway, external-dns, Cloudflare, and cert-manager
- **Distributed storage** using Rook-Ceph
- **GPU workloads** with NVIDIA GPU Operator
- **Comprehensive observability** using VictoriaMetrics and Grafana
- **Continuous integration** via Renovate

## 🏗️ Cluster Architecture

### Nodes

| Node | Role | Hardware |
|------|------|----------|
| kantai1 | Hyper-converged control plane and workloads | <ul><li>AMD EPYC 7443P, 256 GiB</li><li>NVIDIA RTX 4000 Ada Generation, 24 GB</li><li>Micron 9300 PRO, 4 TB, x7</li><li>Seagate Exos X20, 18 TB, x15</li><li>NVIDIA ConnectX-5</li><li>LSI 9500-8e</li><li>45Drives HL-15</li></ul> |
| kantai2 | Virtual arm64 control plane and workloads | <ul><li>Apple M2 Mac Mini, 16 GB (mem), 500 GB (block)</li><li>UTM + QEMU hypervisor</li></ul> |
| kantai3 |…
