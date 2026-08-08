---
repo: "cujarrett/homelab"
name: "homelab"
description: "My homelab journey"
readmeQualityOk: true
url: "https://github.com/cujarrett/homelab"
homepage: "https://blog.mattjarrett.dev/homelab"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
stars: 7
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-28T18:28:05Z"
lastCommitAt: "2026-08-08T04:34:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["cujarrett", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b60e3fa3f8f9cba1d671e57ad5473fae9df4f2286d94ddaf7b74172dbb4e5ea/cujarrett/homelab"
---

# Homelab

A 4-node Raspberry Pi 5 cluster running k3s, built around platform engineering and GitOps. The goal is to use Kubernetes as a control plane for infrastructure — not just a place to run containers.

[How I built it (and you can too)](https://blog.mattjarrett.dev/homelab/) - [What runs on it](https://github.com/cujarrett/homelab-workspaces) - [Blog about it](https://blog.mattjarrett.dev) - [Nothing here is Novel](https://github.com/cujarrett/homelab/blob/HEAD/docs/nothing-novel.md)

## Platform Stack

| Layer | Technology |
|---|---|
| **Cluster** | k3s on 4× Raspberry Pi 5 (1 controller, 3 workers) |
| **Storage** | Longhorn — distributed block storage with 3× NVMe replication |
| **GitOps** | Argo CD — cluster state driven from this repo |
| **Observability** | Prometheus + Grafana + Alertmanager + Loki |
| **Ingress + TLS** | Traefik + cert-manager (local CA for `*.local.lab`, Let's Encrypt for public) |
| **DNS** | AdGuard Home — wildcard `*.local.lab → 192.168.10.100` for all network devices |
| **CNI** | Cilium — eBPF pod networking, WireGuard node encryption, kube-proxy replacement, Hubble observability |
| **Service Mesh** | Istio — sidecar mesh for workload mTLS…
