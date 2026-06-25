---
repo: "rPlakama/Elisheva"
name: "Elisheva"
description: "My NixOS configuration"
url: "https://github.com/rPlakama/Elisheva"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-17T16:04:03Z"
lastCommitAt: "2026-06-25T02:06:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 53
maintainers: ["rPlakama", "TheMatheusDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/2836747b2bc15e0524d657930481b743886552af292c6a1a7816634f157fcd4c/rPlakama/Elisheva"
---

### Hosts
- **Centuria (Desktop)**: Ryzen 7 5700X | 32GB RAM DDR4 | 512GB NVME - XFS | (Desktop) Discrete GPU, RTX 3060 12GB GDDR6
- **Moontier (Server)**: i3 6100 | 8GB DDR4 | 6TB HDD + 1TB HDD - XFS
- **Arthoplerau** (Laptop) Ryzen AI 350 | 2*8 DDR5 | 512GB + 1TB NVME | TMPFS BTRFS | Lenovo Ideapad 5 Slim

### Features?
--> This configuration follows the feature style of configuration, which:

Flake <-- Creates hosts receving their ```hardwares/defaults.nix``` from ```/Hosts/``` \

Features <-- Contains a default.nix which create imports from dir inside of it; The feature follow this structure:

```Feature/Feature/default.nix``` Which default.nix is a entry point for whatever the feature needs.

What happens after is it create an option which can be enabled by a Host, per example:

```
  options.features.neovim.enable = lib.mkOption {
    type = lib.types.bool;
    description = "Neovim Configuration";
    default = true;
  };

```

### Disko Installation

For hosts with `features.disko.enable = true`:

```bash
# From NixOS live ISO, clone the flake:

mkdir nixos;

git clone https://github.com/rPlakama/Elisheva.git ./nixos

# Partition the disk according to the host's disko…
