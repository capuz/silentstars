---
repo: "fenio/tns-csi"
name: "tns-csi"
description: "Kubernetes CSI driver for TrueNAS Scale"
readmeQualityOk: true
url: "https://github.com/fenio/tns-csi"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["csi", "csi-driver", "nfs", "nvme-of", "truenas", "k8s", "kubernetes", "storage", "iscsi", "kubectl-plugin"]
stars: 134
forks: 12
openIssues: 2
closedIssues: 38
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2025-11-03T18:08:54Z"
lastCommitAt: "2026-10-27T09:16:26Z"
lastReleaseAt: "2025-12-21T22:19:38Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 42
maintainers: ["perfectra1n", "fenio", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6f34229d8084402a66b74b20b1d527e02288b085976aedc56e62f328222e493/fenio/tns-csi"
fundingLinks: ["GITHUB:https://github.com/fenio", "KO_FI:https://ko-fi.com/fenio"]
---

# TNS CSI Driver

A Kubernetes CSI (Container Storage Interface) driver for TrueNAS Scale 25.10+.

## Important Disclaimer

**This project is in early development phase and is NOT production-ready**
- Use of this software is entirely at your own risk
- Extensive testing and validation required before production use

## Overview

This CSI driver enables Kubernetes to provision and manage persistent volumes on TrueNAS Scale 25.10+. It currently supports:

- **NFS** - Network File System for file-based storage
- **NVMe-oF** - NVMe over Fabrics for high-performance block storage
- **iSCSI** - Traditional block storage protocol with broad compatibility
- **SMB/CIFS** - Authenticated file sharing with Windows compatibility

## Supporting This Project

If you find this driver useful, please consider helping keep it alive.

Every commit is tested against a **real TrueNAS server** and a **real Kubernetes cluster** across 4 storage protocols. The integration suite (NFS, SMB, NVMe-oF, iSCSI, Shared) runs on GitHub-hosted runners with QEMU/KVM-booted k3s VMs, reaching TrueNAS over Tailscale. The auxiliary workflows that previously ran on a dedicated self-hosted runner (encryption, scale,…
