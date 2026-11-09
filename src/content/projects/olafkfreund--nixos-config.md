---
repo: "olafkfreund/nixos_config"
name: "nixos_config"
description: "My private nixos_config"
readmeQualityOk: true
url: "https://github.com/olafkfreund/nixos_config"
language: "Nix"
languages: ["Nix"]
languagePcts: [74]
stars: 32
forks: 1
openIssues: 1
closedIssues: 760
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-01-05T11:11:32Z"
lastCommitAt: "2026-11-09T11:59:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["olafkfreund"]
openGraphImageUrl: "https://opengraph.githubassets.com/69b59725986d0bf926a71c4e44cdb3216511546073ce31f9429c3afcd700a670/olafkfreund/nixos_config"
---

# NixOS Configuration

Multi-host NixOS configuration using flakes, a single parameterised host
template, Home Manager as a flake module, and Stylix-driven theming.

Last verified: 2026-09-01 against `nixos-unstable` (NixOS 26.11).

## Hosts

| Host  | Class       | Hardware               | Role                                    | Template            |
|-------|-------------|------------------------|-----------------------------------------|---------------------|
| p620  | workstation | AMD RX 7900 (ROCm)     | Primary development, AI workloads       | desktop/workstation |
| p510  | workstation | Intel Xeon + RTX 3070 Ti | Media server (Plex), k3s, CI runner, desktop | desktop/workstation |
| razer | laptop      | Intel + NVIDIA         | Mobile development, Secure Boot         | desktop/laptop      |

All three run the same Wayland session — see [Desktop](#desktop) below.

**p510 is the always-on media server: never build or deploy it without
asking first.** Heavy razer rebuilds should be built on p620
(`just deploy-via-p620 razer`).

DEX5550 is offline; Samsung and HP are decommissioned. References in older
docs are stale.

## Architecture

- Single parameterised host template…
