---
repo: "syswonder/hvisor"
name: "hvisor"
description: "Lightweight type-1 Rust Hypervisor for edge devices"
readmeQualityOk: true
url: "https://github.com/syswonder/hvisor"
homepage: "https://hvisor.syswonder.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["baremetal", "hypervisor", "rust", "loongarch"]
stars: 211
forks: 62
openIssues: 22
closedIssues: 87
watchers: 4
contributors: 28
recentReleases: 1
createdAt: "2023-06-15T07:05:20Z"
lastCommitAt: "2026-10-25T08:40:03Z"
lastReleaseAt: "2026-08-25T07:51:26Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 93
undervaluedScore: 45
maintainers: ["li041", "agicy", "ZhongkaiXu"]
openGraphImageUrl: "https://opengraph.githubassets.com/de247c58783f0c5da103fa1f8d9ead98e2dd80d7124a8384a7c8401e5b67070f/syswonder/hvisor"
discussionCount: 0
---

README: [中文](https://github.com/syswonder/hvisor/blob/HEAD/README-zh.md) | [English](https://github.com/syswonder/hvisor/blob/HEAD/README.md)

hvisor is a Type-1 bare-metal virtual machine monitor implemented in Rust, featuring a separation kernel design to provide efficient hardware resource virtualization and isolation. This virtual machine monitor allows strict system environment separation, ensuring performance and security of the virtualized environments through distinct regions.

## Features

- **Separation Kernel Design**: The virtual machine is divided into three regions: zone0 (management zone), zoneU (user zone), and zoneR (real-time zone), with strict isolation between them.
- **Simple and Lightweight**: Implemented in Rust with a minimal design.
  - CPU Virtualization: Static partitioning of physical CPUs (pCPUs), without dynamic scheduling.
  - Memory Virtualization: Pre-allocated virtual machine memory space via configuration files.
  - I/O Virtualization: Supports device passthrough and virtio paravirtualization.
- **Multi-platform Support**: Supports various architectures, including `aarch64`, `riscv64`, `loongarch64` and `x86_64`.
- **Virtual Machine Management**:…
