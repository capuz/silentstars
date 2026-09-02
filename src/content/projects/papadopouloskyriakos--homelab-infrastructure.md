---
repo: "papadopouloskyriakos/homelab-infrastructure"
name: "homelab-infrastructure"
description: "Multi-site Kubernetes homelab with BGP anycast (AS214304), Cilium CNI, and GitOps. 14 nodes across 4 countries."
readmeQualityOk: true
url: "https://github.com/papadopouloskyriakos/homelab-infrastructure"
homepage: "https://kyriakos.papadopoulos.tech/"
language: "HCL"
languages: ["HCL"]
languagePcts: [80]
topics: ["ansible", "argocd", "bgp", "cilium", "ebpf", "gitops", "grafana", "homelab", "infrastructure-as-code", "kubernetes"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-18T12:14:44Z"
lastCommitAt: "2026-09-02T08:03:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["papadopouloskyriakos"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1882b652307bbf78c2954597cd50d8750c628740b5f962e679144baf6c7e00a/papadopouloskyriakos/homelab-infrastructure"
---

# Nuclear Lighters Infrastructure

**Hybrid GitOps Infrastructure as Code for the Nuclear Lighters homelab.**

Single source of truth for the entire Nuclear Lighters infrastructure across 4 countries (NL, GR, CH, NO) — managing Kubernetes clusters, Cisco network devices, Proxmox VMs/containers, 80+ Docker services, and two HA clusters (Nextcloud 9-layer, Home Assistant Pacemaker) through GitLab CI/CD pipelines.

---

## Overview

| Component | Technology | Management | Count |
|-----------|------------|------------|-------|
| Kubernetes | K8s v1.34.2, Cilium v1.18.4 (eBPF) | Atlantis + Argo CD | 2 clusters, 14 nodes |
| Multi-Site | Cilium ClusterMesh + IPsec mesh | OpenTofu | NL primary + GR DR |
| Network | Cisco IOS/IOS-XE/ASA + FRR BGP | GitLab CI/CD (Netmiko) | 11 devices, AS214304 |
| Virtualization | Proxmox VE | GitLab CI/CD | 5 nodes, 116 LXC, 22 QEMU |
| Docker Services | Docker Compose | GitLab CI/CD (rsync) | 51 hosts, 80+ services |
| HA Clusters | Nextcloud (DRBD+OCFS2+NFS), Home Assistant (Pacemaker) | Native configs | 21 + 3 hosts |
| Monitoring | REDACTED_d8074874 + Thanos + LibreNMS | Helm + LXC | 163 alert rules, 137 monitored devices |
| Secrets | OpenBao (HA,…
