---
repo: "hakula139/nixos-config"
name: "nixos-config"
description: "My NixOS configuration"
url: "https://github.com/hakula139/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [86]
topics: ["nixos", "nixos-configuration"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-29T14:55:42Z"
lastCommitAt: "2026-06-25T02:06:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 53
maintainers: ["hakula139"]
openGraphImageUrl: "https://opengraph.githubassets.com/f11480d07170a1fafb197600190937010f8d96167eb350d558e85411f7911e61/hakula139/nixos-config"
---

# Nix Configuration

Flake-based Nix configuration for Hakula's servers, workstations, and development containers.

## Overview

This repository manages NixOS, nix-darwin, System Manager, Home Manager, custom packages, encrypted secrets, and deployable development images from one flake.

| Output                               | Platform         | Role                                                |
| ------------------------------------ | ---------------- | --------------------------------------------------- |
| `nixosConfigurations.us-1`           | `x86_64-linux`   | NixOS server, CloudCone SC2                         |
| `nixosConfigurations.us-2`           | `x86_64-linux`   | NixOS server, CloudCone VPS                         |
| `nixosConfigurations.us-3`           | `x86_64-linux`   | NixOS server, CloudCone SC2                         |
| `nixosConfigurations.us-4`           | `x86_64-linux`   | NixOS server, DMIT                                  |
| `nixosConfigurations.sg-1`           | `x86_64-linux`   | NixOS server, Tencent Lighthouse                    |
| `nixosConfigurations.wsl`            | `x86_64-linux`   | NixOS-WSL workstation…
