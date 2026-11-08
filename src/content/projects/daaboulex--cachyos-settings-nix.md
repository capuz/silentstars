---
repo: "Daaboulex/cachyos-settings-nix"
name: "cachyos-settings-nix"
description: "CachyOS-Settings packaged for NixOS - hand-ported module for sysctl, udev, systemd, ZRAM, THP, and I/O tuning"
readmeQualityOk: true
url: "https://github.com/Daaboulex/cachyos-settings-nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [86]
topics: ["cachyos", "flake", "nix", "nixos", "nixos-module", "performance", "kernel-tuning", "sysctl", "zram", "cachyos-settings"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 64
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T19:37:46Z"
lastCommitAt: "2026-11-08T14:14:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Daaboulex", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f590ba98e9c9df604a10bb4662f77822bb29421ee55342d9b7c904851ff0f3fc/Daaboulex/cachyos-settings-nix"
---

# cachyos-settings-nix

[CachyOS-Settings](https://github.com/CachyOS/CachyOS-Settings) ported as a standalone NixOS module.

## Upstream

| | |
|---|---|
| **Project** | [CachyOS/CachyOS-Settings](https://github.com/CachyOS/CachyOS-Settings) |
| **License** | GPL-3.0 |
| **Tracked** | Git commits (master) |

## What Is This?

A module-only Nix flake providing CachyOS-Settings as a standalone NixOS module:

- **Module-only repo** — no packages output; imports as `nixosModules.default`
- **Daily upstream tracking** — a GitHub Action checks `CachyOS-Settings` master daily and files a `remirror-needed` issue when upstream moves (this module is a hand-port; it never auto-edits)
- **Opt-in areas** — every area (`sysctl`, `zram`, `ioSchedulers`, `audio`, `storage`, `thp`, `ntsync`, `coredump`, `serviceManager`, `journal`, `oomd`, `watchdogBlacklist`, `nvidia`) is off until set; `enable` alone changes nothing
- **Module-instantiation check** — CI instantiates the module (enabled) via `nix flake check`, so activation-time errors surface, not just evaluation

Provides sysctl tuning, udev rules, systemd tweaks, ZRAM, THP, I/O schedulers, audio optimizations, and more — matching upstream…
