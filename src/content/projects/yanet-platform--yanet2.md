---
repo: "yanet-platform/yanet2"
name: "yanet2"
description: "Some experiment about yanet2 design"
readmeQualityOk: true
url: "https://github.com/yanet-platform/yanet2"
language: "Go"
languages: ["Go", "C"]
languagePcts: [42, 26]
stars: 23
forks: 8
openIssues: 205
closedIssues: 416
watchers: 6
contributors: 16
recentReleases: 1
createdAt: "2024-10-08T20:00:55Z"
lastCommitAt: "2026-09-29T10:04:18Z"
lastReleaseAt: "2026-09-29T10:05:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 62
maintainers: ["3Hren", "GeorgyKirichenko", "moonug"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d49e086d075f742ee75ef21103e1f119ca3956d9a0523a5ca018cee77c4effd/yanet-platform/yanet2"
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
