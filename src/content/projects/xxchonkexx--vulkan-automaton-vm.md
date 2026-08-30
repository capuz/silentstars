---
repo: "XxChonkExX/Vulkan-Automaton-VM"
name: "Vulkan-Automaton-VM"
description: "Vulkan-based GPU memory and tensor transport for multi-GPU and networked workloads. Experimental, cross-vendor, and very much still under construction."
readmeQualityOk: true
url: "https://github.com/XxChonkExX/Vulkan-Automaton-VM"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-08-04T19:00:11Z"
lastCommitAt: "2026-08-30T09:24:59Z"
lastReleaseAt: "2026-08-18T05:14:39Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["XxChonkExX"]
openGraphImageUrl: "https://opengraph.githubassets.com/209faf4eb13d26664e11c6fbb24a7c30c20bd8a22ac46b00f1cf04afb85a4a40/XxChonkExX/Vulkan-Automaton-VM"
discussionCount: 2
---

# VulkanVM — Cross-Vendor GPU Memory & Transport Infrastructure

**VulkanVM** unifies GPU memory management and data movement behind Vulkan
external-memory primitives, then lets the frameworks you already use consume
that memory directly. One pool, one allocator family, every vendor —
AMD, Intel, (NVIDIA path designed), Tenstorrent-ICD, Android.

**Version**: 0.3.0-dev

> **New here?** Start with [explainfordummyuser.md](https://github.com/XxChonkExX/Vulkan-Automaton-VM/blob/HEAD/explainfordummyuser.md) —
> *"the relay race tour"*: what problem this solves and how it all fits
> together, written for humans first. Then come back for the details below.

---

## Architecture

```
VulkanVM
│
├── Core  (VulkanVM::Core)              # include <vulkan_vm/vulkan_vm.hpp>
│   ├── Chonk Buffer — unified GPU memory pool (buddy allocator, exact-fit)
│   ├── External memory — DMA-BUF / Win32 / OpaqueFd / AHardwareBuffer
│   ├── Multi-GPU allocation & cross-vendor sharing
│   ├── Host staging & DMA offload/reload
│   ├── Sparse virtual memory
│   └── Shard placement planning (pure logic)
│
├── Transport  (VulkanVM::Transport)    # include <vulkan_vm/transport.hpp>
│…
