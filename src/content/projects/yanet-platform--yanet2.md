---
repo: "yanet-platform/yanet2"
name: "yanet2"
description: "Some experiment about yanet2 design"
readmeQualityOk: true
url: "https://github.com/yanet-platform/yanet2"
language: "Go"
languages: ["Go", "C"]
languagePcts: [43, 25]
stars: 25
forks: 8
openIssues: 204
closedIssues: 474
watchers: 6
contributors: 16
recentReleases: 8
createdAt: "2024-10-08T20:00:55Z"
lastCommitAt: "2026-11-03T12:48:03Z"
lastReleaseAt: "2026-11-03T06:01:43Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 65
maintainers: ["3Hren", "moonug", "sakateka"]
openGraphImageUrl: "https://opengraph.githubassets.com/6eba939089bfb76e7c46c01ba7de77d4df66a7bfa557fa2c152984af7f347020/yanet-platform/yanet2"
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
