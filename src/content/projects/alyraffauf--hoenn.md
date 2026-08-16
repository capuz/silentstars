---
repo: "alyraffauf/hoenn"
name: "hoenn"
description: "Multi-host NixOS, Darwin, and home-manager configurations with Nix."
readmeQualityOk: true
url: "https://github.com/alyraffauf/hoenn"
language: "Nix"
languages: ["Nix"]
languagePcts: [91]
topics: ["nix", "nix-flake", "nixos", "nixos-configuration", "home-manager", "hyprland", "gnome", "kde", "nix-darwin", "cosmic"]
stars: 227
forks: 3
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-29T22:06:45Z"
lastCommitAt: "2026-08-16T04:09:40Z"
lastReleaseAt: "2024-08-04T18:11:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 40
maintainers: ["alyraffauf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5657de151ff8d9a0844209082f2f63fce23885acd23bb1aac05c36719c331ca/alyraffauf/hoenn"
---

# ❄️ hoenn

Personal Nix configuration for NixOS, nix-darwin, and system-manager.

The flake is organized as small, composable modules, both inspired and
uninspired by the dendritic pattern and other trends.. Shared behavior
lives under `modules/nixos`, `modules/darwin`, and `modules/system-manager`;
each host composes the pieces it needs under `modules/hosts`.

It currently defines NixOS configurations for Fallarbor, Rustboro, and
Sootopolis; a nix-darwin configuration for Fortree; and a system-manager
configuration for Sootopolis (which doesn't always run NixOS!). Hardware
discovery is captured with nixos-facter, disk layouts are declared with
Disko, and SOPS manages encrypted secrets.
