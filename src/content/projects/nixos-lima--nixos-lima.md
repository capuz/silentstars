---
repo: "nixos-lima/nixos-lima"
name: "nixos-lima"
description: "NixOS VMs on macOS/Linux via Lima"
readmeQualityOk: true
url: "https://github.com/nixos-lima/nixos-lima"
language: "Nix"
languages: ["Nix"]
languagePcts: [89]
stars: 158
forks: 19
openIssues: 9
closedIssues: 18
watchers: 2
contributors: 8
recentReleases: 1
createdAt: "2025-01-28T01:07:57Z"
lastCommitAt: "2026-11-09T00:21:26Z"
lastReleaseAt: "2026-10-11T15:35:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 79
undervaluedScore: 26
maintainers: ["msgilligan", "dependabot[bot]", "a2not"]
openGraphImageUrl: "https://opengraph.githubassets.com/1962bfe213e9be55004946d05401bd17012f2238de76b49cbd374e629f3af7b7/nixos-lima/nixos-lima"
discussionCount: 3
---

# Run NixOS on a Lima VM

Run **NixOS** guest VMs on a **macOS** or **Linux** host using [Lima](https://lima-vm.io). **nixos-lima** is a **Nix** flake that generates Lima-compatible system images and provides a NixOS module for Lima boot-time and runtime support. The NixOS module runs in a Lima guest VM and configures the machine at boot-time using Lima configuration _userdata_ and runs the `lima-guestagent` daemon as a `systemd` service.

By using the released system image and using the provided NixOS module, you can create your own custom configuration.

## Design Goals

The design goals for **nixos-lima** are:

1. Nix flake that can build a bootable NixOS Lima-compatible image
2. Nix modules for the systemd services that initialize and configure the system
3. User customization of NixOS Lima instance is separate from initial image creation
4. The base image and Nix services module is generic and as reusable by others as possible

If you have comments or suggestions for the design or implementation, please open an [Issue](https://github.com/nixos-lima/nixos-lima/issues).

## Quickstart

To quickly start a **NixOS** guest using **Lima** you don't need **Nix** installed on your…
