---
repo: "bwees/homelab"
name: "homelab"
description: "Configuration files for my homelab"
readmeQualityOk: true
url: "https://github.com/bwees/homelab"
language: "Nix"
languages: ["Nix", "HCL"]
languagePcts: [70, 30]
topics: ["ansible", "homelab", "self-hosted"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-12-12T21:33:49Z"
lastCommitAt: "2026-10-29T10:37:14Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 75
maintainers: ["renovate[bot]", "bwees"]
openGraphImageUrl: "https://opengraph.githubassets.com/83dbad271318ff362116557bede147394879d6edfec8e6abcf054aff5559e592/bwees/homelab"
---

# Homelab

This repository houses the infrastructure configuration for my homelab. The entire stack is managed with GitOps, and the repository is the single source of truth for all configuration. The tools to accomplish this are:

- **NixOS** provisions and configures every machine. Updates are manually applied.
- **Kubernetes** (k3s) runs the applications, managed with Flux via GitOps.
- **OpenTofu** manages the external services used by the homelab (Cloudflare, Tailscale, and 1Password).

## NixOS

Every node runs NixOS, defined in [nixos/](https://github.com/bwees/homelab/blob/HEAD/nixos/). Each host has its own directory under [nixos/hosts/](https://github.com/bwees/homelab/blob/HEAD/nixos/hosts/), and shared functionality lives in reusable modules under [nixos/lib/](https://github.com/bwees/homelab/blob/HEAD/nixos/lib/) (k3s, Tailscale, Docker, Longhorn prerequisites, backups, garbage collection, and so on). The [flake](https://github.com/bwees/homelab/blob/HEAD/nixos/flake.nix) wires each host configuration into a `nixosConfiguration`.

Nodes are partitioned with Disko and can be provisioned from scratch using nixos-anywhere. Once a machine is up, configuration changes are…
