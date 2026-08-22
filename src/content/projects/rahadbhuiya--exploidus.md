---
repo: "rahadbhuiya/Exploidus"
name: "Exploidus"
description: "Exploidus Kernel"
readmeQualityOk: true
url: "https://github.com/rahadbhuiya/Exploidus"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["kernel", "os", "server", "exploidus"]
stars: 66
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T11:42:28Z"
lastCommitAt: "2026-08-22T04:05:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 23
maintainers: ["rahadbhuiya"]
openGraphImageUrl: "https://opengraph.githubassets.com/20358861c5d353b0784fa5cf91ee9bf59bc0e5cc69eeac98a896e558d8b7062f/rahadbhuiya/Exploidus"
discussionCount: 1
---

# Exploidus — Reactive Capability Kernel

A custom x86-64 operating system kernel built from scratch.

## About

Exploidus is a personal operating system project developed in Bangladesh for operating system research and education.
The project is built from scratch and continues to evolve with new kernel subsystems, userspace applications, networking, and graphics support.
To the best of the author's knowledge, Exploidus is among the earliest publicly documented from-scratch operating system projects developed in Bangladesh. If you are aware of an earlier publicly documented project, please open an issue with supporting evidence.

## Demo

**Features:**
- Multiboot2 boot via GRUB2
- 4-level x86-64 paging with NX enforcement
- Colored zone physical memory manager (GREEN / YELLOW / RED)
- BLAKE3 capability token system with RDRAND seeding
- Intent-based preemptive scheduler (5 priority classes)
- Blocking waitpid (no busy-spin)
- Crash isolation — a fault in a userspace process kills only that
  process; the kernel keeps running (kernel-mode faults still halt)
- Kernel synchronization primitives: IRQ-safe spinlocks, blocking
  mutexes/semaphores (kernel/sync/)
- Additive driver…
