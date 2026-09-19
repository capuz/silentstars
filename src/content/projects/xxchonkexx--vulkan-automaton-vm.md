---
repo: "XxChonkExX/Vulkan-Automaton-VM"
name: "Vulkan-Automaton-VM"
description: "Vulkan-based GPU memory and tensor transport for multi-GPU and networked workloads. Experimental, cross-vendor, and very much still under construction."
readmeQualityOk: true
url: "https://github.com/XxChonkExX/Vulkan-Automaton-VM"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-08-04T19:00:11Z"
lastCommitAt: "2026-09-19T01:36:40Z"
lastReleaseAt: "2026-09-18T21:32:04Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["XxChonkExX"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2e6f9f186ac1f4feaad60b61987d036a5c832ad22e71b2e2003155a59acadbf/XxChonkExX/Vulkan-Automaton-VM"
discussionCount: 3
---

# VulkanVM — Cross-Vendor GPU Memory & Transport Infrastructure

**VulkanVM** unifies GPU memory management and data movement behind Vulkan
external-memory primitives, then lets the frameworks you already use consume
that memory directly. One pool, one allocator family, every vendor —
AMD, Intel, NVIDIA, Android. (Tenstorrent has paths as well with a bespoke ICD, untested).

**Version**: 0.4.0-dev

> **Status**: THis is experimental systems software. The Core allocator + local GPU paths
> are hardware-verified (see `docs/HARDWARE_SUPPORT.md`); the **network
> transport is NOT hardened for untrusted peers** — deploy only on trusted
> networks or behind access control (`SECURITY.md`, `docs/THREAT_MODEL.md`).
> Please take care and caution when streaming.

> **New here?** Start with [explainfordummyuser.md](https://github.com/XxChonkExX/Vulkan-Automaton-VM/blob/HEAD/explainfordummyuser.md) —
> *"the relay race tour"*: what problem this solves and how it all fits
> together, written for humans first. Then come back for the details below.

---

## Architecture

```
VulkanVM
│
├── Core  (VulkanVM::Core)              # include <vulkan_vm/vulkan_vm.hpp>
│   ├──…
