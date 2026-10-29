---
repo: "aliAljaffer/homelab"
name: "homelab"
description: "Kubernetes YAML manifests for my self-hosted cluster (Talos) and the apps and deployments running on it, synced with ArgoCD"
readmeQualityOk: true
url: "https://github.com/aliAljaffer/homelab"
homepage: "https://alialjaffer.com/case-study/homelab/"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
topics: ["homelab", "kubernetes", "pihole", "talos-linux"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-17T07:26:39Z"
lastCommitAt: "2026-10-29T12:25:46Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 64
maintainers: ["aliAljaffer"]
openGraphImageUrl: "https://opengraph.githubassets.com/66b80fa0fad4099ca30553a1efba71d2caa68e042eef59b8deaff5cda469e38c/aliAljaffer/homelab"
---

# homelab

My Kubernetes homelab, running on Talos Linux and managed entirely through ArgoCD. Everything is in this repo - if it's not here, it doesn't exist on the cluster.

**Talos:** v1.13.8 (control plane) / v1.13.7 (workers)
**Kubernetes:** v1.36.2

---

## Nodes

### Control plane

MacBook Pro Mid-2012 (13"). Yes, really.

It runs `cp0` at `192.168.8.99` with a custom-built Talos kernel because Apple's EFI firmware rejects the LLD-compiled kernel that ships in v1.13.0+. Intel Core i5 (Ivy Bridge), 16GB DDR3, 256GB SATA SSD. The whole kernel build story is in [docs/talos-intel-mac.md](https://github.com/aliAljaffer/homelab/blob/HEAD/docs/talos-intel-mac.md).

### Workers

Four Lenovo M920q Tiny nodes. Fanless-ish, low power, surprisingly capable.

| Node | IP            | Status |
| ---- | ------------- | ------ |
| wrk0 | 192.168.8.101 | Ready  |
| wrk1 | 192.168.8.102 | Ready  |
| wrk2 | 192.168.8.103 | Ready  |
| wrk3 | 192.168.8.100 | Ready  |

All on Intel Core i5/i7 (8th/9th gen), 16-32GB DDR4, NVMe storage. The iGPU (Intel UHD 630) is exposed via the `i915` Talos extension for Quick Sync/VAAPI transcoding, scheduled cluster-wide as `gpu.intel.com/i915` via Node Feature…
