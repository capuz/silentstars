---
repo: "rokokol/huix"
name: "huix"
description: "Big ass NixOS config"
readmeQualityOk: true
url: "https://github.com/rokokol/huix"
homepage: "http://huix.rokokol.art/"
language: "Nix"
languages: ["Nix"]
languagePcts: [53]
topics: ["nix", "nixos-configuration", "ddlc", "dotfiles", "home-manager", "hyprland", "nix-flake", "nixos", "ricing", "wayland"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-21T10:55:11Z"
lastCommitAt: "2026-11-12T11:33:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 58
maintainers: ["rokokol"]
openGraphImageUrl: "https://opengraph.githubassets.com/1064141e44d5b064c92c637849fc976e361291f16cd7fa7609e764c03312f907/rokokol/huix"
---

# huix

**My NixOS flake: a desktop with NVIDIA and CUDA, a laptop on Hyprland and a home server without a screen** （´ω｀♡%）

In short, this is my NixOS for a work PC, a laptop and a home server: Hyprland, nixvim and a pile of everyday applications. Some programs I keep outside the configuration, and for everything else I try to build a comfortable environment of my own

## Commands

```sh
sudo nixos-rebuild switch --flake .#nixos-pc   # or .#nixos-laptop
rebuild                                        # the same alias for the current host
rebuilds                                       # the same, but packages from the Yandex mirror, when the network misbehaves
```

The station keeps no checkout of its own: the PC builds it and ships it over Tailscale SSH

```sh
nixos-rebuild switch --flake .#nixos-station --target-host rokokol@nixos-station --sudo --ask-sudo-password
nix build .#station-boot-test -L      # the station in virtual machines beside a router and the PC, only on request
nix build .#station-install-test -L   # its installer image in virtual machines: the refusals, then a full install
```

The station installs from a flash drive. The [installation…
