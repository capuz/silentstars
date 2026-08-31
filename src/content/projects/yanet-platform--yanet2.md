---
repo: "yanet-platform/yanet2"
name: "yanet2"
description: "Some experiment about yanet2 design"
readmeQualityOk: true
url: "https://github.com/yanet-platform/yanet2"
language: "Go"
languages: ["Go", "C"]
languagePcts: [42, 27]
stars: 18
forks: 8
openIssues: 144
closedIssues: 315
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2024-10-08T20:00:55Z"
lastCommitAt: "2026-08-31T09:59:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 64
maintainers: ["3Hren", "GeorgyKirichenko", "OrIX219"]
openGraphImageUrl: "https://opengraph.githubassets.com/d91715b1f9db29676c09206a64f7d585badd78484d1ea7cbbeba2e8662023d92/yanet-platform/yanet2"
---

# YANET

> **Note:** This project is currently in active development.

YANET is a high-performance modular software router built on DPDK (Data Plane Development Kit) that provides exceptional packet processing capabilities. It's designed to be a versatile network solution that functions as a router, decapsulator, firewall, L3 load balancer, and NAT device, all in one platform.

## 🌐 Key Features

### 🚀 High Performance

- DPDK-accelerated packet processing bypasses the kernel networking stack for maximum throughput.
- Achieves near-hardware performance with the flexibility of software.
- NUMA-aware resource management for optimal multi-socket performance.
- Optimized memory management with huge pages support.

### 🧩 Modular Architecture

- Module system allows enabling only required networking functions.
- Clean separation between control plane and data plane components.
- Flexible pipeline configuration for customized packet processing flows.
- Add or remove functionality without affecting the entire system.

### 🛡️ Safe Initialization Process

- Controlled system initialization with failsafe mechanisms.
- BGP route announcement control based on system health.

## 🏗️…
