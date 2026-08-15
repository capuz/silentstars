---
repo: "garuda-linux/garuda-nix-subsystem"
name: "garuda-nix-subsystem"
description: "Garuda Nix Subsystem - a flake enabling dual-boot, same-partition Garuda/NixOS installations ❄️🦅 (mirrored from GitLab)"
readmeQualityOk: true
url: "https://github.com/garuda-linux/garuda-nix-subsystem"
homepage: "https://nix.garudalinux.org"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
topics: ["garuda-linux", "nixos-flake", "subsystem"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2023-07-06T04:31:55Z"
lastCommitAt: "2026-08-15T04:04:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 55
maintainers: ["dr460nf1r3", "JustTNE", "Vo1dSh4d0w"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6dcc0154cbd8bb3a7e33ef0a3efba386bf24390dc78db75d1123021b044c738/garuda-linux/garuda-nix-subsystem"
fundingLinks: ["LIBERAPAY:https://liberapay.com/garudalinux", "OPEN_COLLECTIVE:https://opencollective.com/garudalinux"]
---

# Garuda Nix Subsystem

## General information

The Garuda Nix Subsystem is a Nix flake, which allows easy dual boot with Garuda Linux. But it also provides a framework for pure NixOS, which provides opinionated defaults and a system which can be fully set up by toggling a few module options.

## Quick links

- [Using as subsystem to Garuda](https://nix.garudalinux.org/subsystem/quick-start)
- [Using as module for NixOS](https://nix.garudalinux.org/nixos-module/quick-start)
- ... coming soon™️

## Devshell and how to enter it

This NixOS flake provides a [devshell](https://github.com/numtide/devshell) which contains all deployment tools as well as handy aliases for common tasks.
The only requirement for using it is having the Nix package manager available. It can be installed on various distributions via the package manager or the following script ([click me for more information](https://zero-to-nix.com/start/install)):

```sh
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix -o nix-install.sh # Check its content afterwards
sh ./nix-install.sh install --diagnostic-endpoint=""
```

This installs the Nix packages with flakes already pre-enabled. After…
