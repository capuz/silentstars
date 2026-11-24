---
repo: "DivitMittal/infra-nixCfg"
name: "infra-nixCfg"
description: "nix (via nix-darwin, nixos, nix-on-droid, home-manager, etc.) declarative configurations to attain my deterministically reproducible layer"
readmeQualityOk: true
url: "https://github.com/DivitMittal/infra-nixCfg"
homepage: "https://deepwiki.com/DivitMittal/infra-nixCfg"
language: "Nix"
languages: ["Nix"]
languagePcts: [84]
topics: ["flake-parts", "flakes", "home-manager", "nix", "nix-darwin", "nix-on-droid", "nixos", "nixos-wsl", "agenix", "emacs"]
stars: 34
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-16T09:30:38Z"
lastCommitAt: "2026-11-24T14:08:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 60
maintainers: ["DivitMittal", "ImgBotApp"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a007de53b08ce07e215abb147bc28797521f6c3b4f606cf80e4ca59883fb261/DivitMittal/infra-nixCfg"
fundingLinks: ["GITHUB:https://github.com/DivitMittal"]
---

---

---

---

## Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Theme Pipeline](#theme-pipeline)
- [Home Manager Profile Graph](#home-manager-profile-graph)
- [Network Topology](#network-topology)
- [Secrets Management](#secrets-management)
- [Satellite Repositories](#satellite-repositories)

---

## Overview

This repository is a configuration-management platform built on [Nix](https://github.com/nixos/nix), using [Nix Flakes](https://nixos.wiki/wiki/Flakes), [Home Manager](https://github.com/nix-community/home-manager), and system-specific modules ([NixOS](https://nixos.org/), [nix-darwin](https://github.com/LnL7/nix-darwin), [nix-on-droid](https://github.com/nix-community/nix-on-droid)) to deliver a declarative, reproducible, and auditable environment across a heterogeneous fleet of hosts, operating systems, and user profiles:

- **macOS** (via `nix-darwin`)
- **Android** (via `nix-on-droid`)
- **\*nix (NixOS)** (including WSL via `NixOS-WSL`)
- **Windows** (via [`nix-win`](https://github.com/jacobbrugh/nix-win), applying machine-scope state through PowerShell **DSC v3**)
