---
repo: "asosnovsky/nixos-setup"
name: "nixos-setup"
description: "My Nix setups for my Servers & Framework Laptop"
readmeQualityOk: true
url: "https://github.com/asosnovsky/nixos-setup"
language: "Nix"
languages: ["Nix"]
languagePcts: [58]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-11T21:36:24Z"
lastCommitAt: "2026-09-19T01:17:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 69
maintainers: ["asosnovsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8d1e5a9b3922695ffb2dc916662c74c4fef03d8fd27e9e7970d35c59d4d7174/asosnovsky/nixos-setup"
---

# NixOS System Configurations

My comprehensive Nix configurations for managing multiple hosts, including local machines and remote servers.

## Repository Layout

```
nixos-setup/
├── bin/
│   └── skyg              # Main CLI tool for managing NixOS configurations
├── configs/              # Application-specific configurations
├── pkgs/                 # Custom packages (niri-touchscreen-gestures, grok-cli, ds4)
├── hosts/                # Host-specific NixOS configurations
│   ├── *.nix             # Host configuration files (fwbook, hl-bigbox1, hl-minipc*, etc.)
│   ├── *.hardware-configuration.nix  # Hardware-specific configurations
│   └── scripts/          # Host-specific scripts
├── modules/              # Reusable NixOS and Home Manager modules
│   ├── core/             # Core system modules
│   ├── home/             # Home Manager modules
│   ├── nixos/            # NixOS-specific modules
│   └── *.nix             # Utility modules (lib, skyg-utils, network-drives, etc.)
├── apps/                 # Standalone applications
├── flake.nix             # Nix flake definition
├── flake.lock            # Locked dependency versions
└── README.md             # This file
```

##…
