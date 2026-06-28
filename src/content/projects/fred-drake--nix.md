---
repo: "fred-drake/nix"
name: "nix"
description: "Nix flake for home configuration"
url: "https://github.com/fred-drake/nix"
language: "Nix"
languages: ["Nix", "Nushell"]
languagePcts: [47, 28]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-22T05:29:08Z"
lastCommitAt: "2026-06-28T06:57:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 56
maintainers: ["fred-drake"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f106b4a527e1d1b15df2dbf6542866fe417d427b6f94abb17a2da34a9399dde/fred-drake/nix"
---

# Nix Configuration for Homelab and Workstations

## Overview

This repository contains Nix configurations for managing both personal
workstations and homelab infrastructure. It serves as the single source of
truth for all system configurations, ensuring consistency, reproducibility,
and maintainability across all environments.

## System Architecture

### Dendritic Feature Pattern

The repository uses a **dendritic pattern** powered by flake-parts and
import-tree. Feature modules in `modules/features/` self-register into
deferred module containers (`my.modules.nixos`, `my.modules.darwin`,
`my.modules.home-manager`), which are then applied to the appropriate
systems automatically. Capability flags (`config.my.hasDesktop`,
`config.my.hasNvidia`, etc.) allow features to guard their configuration
with `mkIf`, so a single feature module works across all hosts.

### Workstations

- **macOS Workstations**: Managed via nix-darwin
  - `macbook-pro`
  - `laisas-mac-mini`

### Servers

- **Infrastructure Services** (Managed via Colmena):
  - `headscale`: VPN coordination
  - `ironforge`: Multi-service host (nixarr with jellyfin, jellyseerr,
    sonarr, radarr, prowlarr, sabnzbd, bazarr,…
