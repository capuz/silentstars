---
repo: "intel/intel-xpu-smartune"
name: "intel-xpu-smartune"
description: "Resource governance and system tuning toolkit for AI NAS platforms — PSI-based pressure monitoring, cgroup-based app limiting, diagnostics, and OpenVINO benchmarking."
readmeQualityOk: true
url: "https://github.com/intel/intel-xpu-smartune"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 32]
topics: ["application-control", "balancer", "benchmark", "cgroups-v2", "ebpf", "intel", "linux-performance", "openvino", "pressure", "psi"]
stars: 13
forks: 9
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2026-03-25T18:25:27Z"
lastCommitAt: "2026-10-23T09:33:06Z"
lastReleaseAt: "2026-10-19T09:19:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 48
maintainers: ["liang1wang", "xiaojingrich", "yangjianfeng1208"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e4e46a7717d672dd5e011a54124661c35fceecf0381f6b6d6a1157c6cb50f2/intel/intel-xpu-smartune"
---

# Intel XPU SmarTune

## Demo

_A short walkthrough of the dashboard: live monitoring, resource control, and diagnostics._

📖 [User guide](https://github.com/intel/intel-xpu-smartune/blob/HEAD/docs/user-guide/getting-started.md)

## Overview

Intel XPU SmarTune is a collection of platform tools and services designed to
optimize and enhance the system operational efficiency of AI NAS. It brings
live monitoring, resource control, benchmarking, diagnostics, and history
together in a single browser dashboard.

An AI NAS often runs AI inference alongside media transcoding, backups, and
file sharing on the same hardware. When these workloads compete for CPU,
memory, or disk I/O, a heavy background job can slow down the apps users
actually care about. SmarTune measures that pressure, throttles the
lower-priority apps while it lasts, and gives the resources back as it eases —
without modifying or restarting the apps.

## Key Features

**Monitor**
- Live CPU, memory, disk, network, Intel GPU, and NPU usage in one dashboard
- A Pressure Overview panel with system, disk I/O, and network pressure, each rated low / medium / high / critical and naming the busy disks or NICs.
- Per-app and…
