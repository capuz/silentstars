---
repo: "nixos-cuda/infra"
name: "infra"
description: "Nixpkgs CUDA infra [ownership contested]"
readmeQualityOk: true
url: "https://github.com/nixos-cuda/infra"
homepage: "https://nixos-cuda.org"
language: "Nix"
languages: ["Nix", "Rust"]
languagePcts: [67, 33]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2025-09-24T09:43:37Z"
lastCommitAt: "2026-11-01T10:43:56Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 66
maintainers: ["GaetanLepage", "YorikSar", "ConnorBaker"]
openGraphImageUrl: "https://opengraph.githubassets.com/097eb88a85e6aa039822192393de62d441f049cb2c093d0412a23a2c1f6968d7/nixos-cuda/infra"
---

# NixOS-CUDA CI/CD

[NixOS-CUDA](https://hydra.nixos-cuda.org) CI/CD Infrastructure, including NixOS configurations for Hydra and the builders.
This is not an official NixOS project.

## Scope

The purpose of this system is to advance maintainability of hardware-accelerated (specifically CUDA) software in Nixpkgs.
Sustainable maintenance and development of Nixpkgs CUDA requires both a comprehensive test suite run on-schedule, for retroactive detection,
and a lighter on-push test-suite for early notification of contributors and the prevention of regressions from being merged.

We aim to detect and distinguish between:
- build failures;
- breakages of basic functionality, like the loading of shared libraries by downstream applications in their GPU branches;
- architecture-specific errors;
- errors in collective communication libraries;
- regressions in performance and closure sizes.

## Hosts

Accounts of currently available hardware and access.

| Hostname  | Purpose                                                               | IP                                        | system        | GPU                   | GPU architecture  |…
