---
repo: "eunomia-bpf/gpu_ext"
name: "gpu_ext"
description: "eBPF for GPU UVM offloading and scheduling in Linux kernel"
readmeQualityOk: true
url: "https://github.com/eunomia-bpf/gpu_ext"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 67
forks: 7
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-20T06:16:17Z"
lastCommitAt: "2026-09-08T08:15:55Z"
lastReleaseAt: "2026-03-27T02:01:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 39
maintainers: ["Littlefisher619"]
openGraphImageUrl: "https://opengraph.githubassets.com/187041e8fbdf3509b1aba88f9b78317f7d1ee452a1ee36a3a53ca28d362cc50e/eunomia-bpf/gpu_ext"
fundingLinks: ["GITHUB:https://github.com/yunwei37", "GITHUB:https://github.com/Officeyutong"]
---

# gpu_ext: eBPF extension in GPU driver 

Extending Linux GPU drivers with eBPF for programmable memory offloading and scheduling.

## Overview

Modern GPU workloads (LLM inference, vector databases, DNN training) exhibit diverse memory access patterns and scheduling requirements. However, GPU drivers use fixed, one-size-fits-all policies that cannot adapt to workload-specific needs.

**gpu_ext** enables customizable GPU resource management through eBPF struct_ops:

- **Memory Management**: Pluggable eviction and prefetch policies at the driver level
- **Scheduling**: Per-process timeslice and priority control for multi-tenant GPU sharing
- **Observability**: Tracing tools for memory and scheduling events

Inspired by Linux kernel's `sched_ext`, gpu_ext brings the same extensibility to GPU drivers.

Note: the device-side runtime path referenced by gpu_ext is based on [bpftime](https://github.com/eunomia-bpf/bpftime).

## Structure

```
├── extension/          # eBPF policies, userspace loaders, trace tools
├── kernel-module/      # Modified NVIDIA kernel modules with eBPF hooks
│   └── nvidia-module/  #   NVIDIA Open GPU Kernel Modules v575.57.08
├── workloads/          #…
