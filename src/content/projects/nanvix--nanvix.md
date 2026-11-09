---
repo: "nanvix/nanvix"
name: "nanvix"
description: "Lightweight Sandbox Powered by a Purpose-Built VM and OS"
readmeQualityOk: true
url: "https://github.com/nanvix/nanvix"
homepage: "https://github.com/nanvix"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["operating-system", "rust", "microkernel", "multikernel", "virtual-machine", "virtualization", "vm", "vmm"]
stars: 318
forks: 115
openIssues: 161
closedIssues: 875
watchers: 6
contributors: 27
recentReleases: 0
createdAt: "2013-07-04T17:27:49Z"
lastCommitAt: "2026-11-09T04:35:36Z"
lastReleaseAt: "2025-09-28T17:05:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 41
maintainers: ["github-actions[bot]", "ppenna", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a21a7b694d86263a33bdc28619e6e9aa2b39e6dcd29e97bd9f5f6971d0a7202c/nanvix/nanvix"
---

# Nanvix

Nanvix is a sandboxing technology for running untrusted applications in a hardware-isolated
environment with minimal overhead.

> **Note**: This repository contains the implementation of the sandbox. If you are looking to use
> Nanvix, refer to [nanvix-python](https://github.com/nanvix/nanvix-python), a Python distribution
> of Nanvix.

## Overview

Nanvix features a **unique co-designed architecture** that combines two key innovations:

- A **purpose-built Micro-VM** that provides hardware-enforced isolation with minimal overhead. This
  Micro-VM is designed to be as lightweight as possible, exposing only a virtual processor and
  memory to the guest and stripping away all device emulation and other features that add latency.

- A **multikernel OS** that enables flexible system component placement and sharing. This design
  splits the OS across two kernels: a guest-side Microkernel that runs inside the Micro-VM and
  provides essential OS features; and a host-side Macro-Kernel that runs on the host platform and
  provides network and storage software switches. System components run as special processes on top
  of either kernel, depending on the deployment…
