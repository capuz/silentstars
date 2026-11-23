---
repo: "leierx/homelab"
name: "homelab"
description: "NixOS + k3s homelab managed as an Argo CD GitOps fleet, running workload clusters as KubeVirt VMs."
readmeQualityOk: true
url: "https://github.com/leierx/homelab"
language: "Nix"
languages: ["Nix", "HCL"]
languagePcts: [42, 35]
stars: 10
forks: 0
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-14T14:57:56Z"
lastCommitAt: "2026-11-23T10:18:56Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 72
maintainers: ["leierx-renovate[bot]", "leierx"]
openGraphImageUrl: "https://opengraph.githubassets.com/191f66b6cb050166a560e097047aac43683aa65b15440c104ec5b3c7774020a1/leierx/homelab"
---

# homelab

One server running NixOS and a single-node k3s cluster,
`loft01`. Git is the only source of truth: the host auto-upgrades from `main`,
and Argo CD renders and deploys everything in `fleet/` straight from git, with
no helper scripts or CI in the rendering path. Design principles are in
[DESIGN_PRINCIPLES.md](https://github.com/leierx/homelab/blob/HEAD/DESIGN_PRINCIPLES.md).

## Hardware

- 2 × Intel Xeon E5-2690 v3 (48 threads), 503 GiB RAM.
- 1 TB NVMe for the OS (ESP + ext4 root), eight 900 GB SAS disks in four
  2-way mirrors (one ZFS pool, `tank`).
- iLO watchdog, SMART tests, ZFS scrubs and trim; see `nixos/hardware.nix`
  and `nixos/disko.nix`.
