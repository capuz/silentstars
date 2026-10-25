---
repo: "NVIDIA/k8s-test-infra"
name: "k8s-test-infra"
description: ":coffee:️ Simulate NVIDIA GPU infrastructure on CPU nodes in Kubernetes"
readmeQualityOk: true
url: "https://github.com/NVIDIA/k8s-test-infra"
homepage: "https://nvidia.github.io/k8s-test-infra/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["gpu", "hardware-simulation", "helm", "k8s"]
stars: 98
forks: 49
openIssues: 110
closedIssues: 161
watchers: 8
contributors: 31
recentReleases: 7
createdAt: "2023-12-19T21:07:05Z"
lastCommitAt: "2026-10-25T08:40:09Z"
lastReleaseAt: "2026-10-21T13:42:48Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["giuliocalzo", "ArangoGutierrez", "olegleyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/723258de02786e423a21371298fd46079883851717a34b65ef9bba304c2b85ef/NVIDIA/k8s-test-infra"
discussionCount: 2
---

---

Mokka simulates the software contracts around NVIDIA devices rather than the
devices themselves. The rule of thumb: reach for Mokka when your system **reads**
hardware state and reacts to it, and for real hardware when it **executes** work,
moves data, or measures performance.

That makes it a good fit for:

- Kubernetes discovery and allocation through the device plugin or DRA —
  scheduling, ResourceClaims, CDI visibility, topology attributes.
- Software that consumes NVML, `nvidia-smi`, DCGM or DCGM Exporter.
- Monitoring dashboards, parsers, alerting, and remediation logic that cordons,
  drains, reschedules and recovers.
- Repeatable fault injection — device loss, Xid errors, ECC errors, temperature,
  power, utilisation, clocks, and GPU-side NVLink errors.
- Code that interprets declared PCI, NUMA, NVLink, fabric UUID or clique
  topology.
- IMEX peer readiness and liveness over the pod network.

Use real hardware for CUDA execution, NCCL, GPUDirect and RDMA data paths, any
throughput or thermal measurement, driver and firmware lifecycle, switch
management planes, physically faithful fault timing, MIG partition lifecycle,
and Confidential Computing.

## Quick start…
