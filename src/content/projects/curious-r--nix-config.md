---
repo: "Curious-r/nix-config"
name: "nix-config"
description: "治下设备的Nix化配置"
readmeQualityOk: true
url: "https://github.com/Curious-r/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-17T01:21:36Z"
lastCommitAt: "2026-08-09T04:45:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 69
maintainers: ["Curious-r", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18dcd1242675baa323cb948e771a1a49f66b4da4b227e85d5e74f5bab9ecb642/Curious-r/nix-config"
---

# ❄️ Curious's Nix Config

My personal NixOS and Home Manager configurations, managed with Flakes.

## 🛠️ Tech Stack

- [Lix](https://git.lix.systems/lix-project/lix) - A delicious Nix fork
- [flake-parts](https://github.com/hercules-ci/flake-parts) - Simplify flake setup
- [vaultix](https://github.com/milieuim/vaultix) - Secret management
- [preservation](https://github.com/nix-community/preservation) - Opt-in state preservation
- [disko](https://github.com/nix-community/disko) - Declarative disk partitioning
- [treefmt-nix](https://github.com/numtide/treefmt-nix) - All-in-one formatter
- [devenv](https://github.com/cachix/devenv) - Developer environments
- [RS-Key](https://github.com/TheMaxMur/RS-Key) - Security key. FIDO/OpenPGP firmware for RP2350

## 🏗️ Project Structure

- `nixos/`: NixOS system configurations
- `home-manager/`: Standalone Home Manager configurations
- `nix-on-droid/`: Nix-on-Droid configurations for Android
- `modules/`: Reusable Nix modules (NixOS, Home Manager, Flake Parts)
- `pkgs/`: Custom packages
- `overlays/`: Nixpkgs overlays
- `secrets/`: Encrypted secrets (managed by vaultix)

## 🖥️ Hosts

### NixOS

- `Laptop-Legion-R7000`: Main laptop
-…
