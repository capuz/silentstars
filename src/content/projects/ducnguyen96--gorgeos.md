---
repo: "ducnguyen96/gorgeos"
name: "gorgeos"
description: "modular nixos, home-manager, nix-on-droid configurations"
url: "https://github.com/ducnguyen96/gorgeos"
language: "Nix"
languages: ["Nix"]
languagePcts: [87]
topics: ["home-manager", "hyprland", "neovim", "nix", "nixos", "lazyvim"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-10T10:31:46Z"
lastCommitAt: "2026-06-30T06:51:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 59
maintainers: ["ducnguyen96"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8bfbe97460896d65f3c7399cf72f210430dc7e8a87659ec13c9f70236f40de1/ducnguyen96/gorgeos"
---

</a>
</div>

## Demo

## :package: Repository Contents

- **[Flake](./flake):** configurations for code formatting, and pre-commit hooks.
- **[Home](./home):** [Home-Manager](https://github.com/nix-community/home-manager) configurations.
- **[Hosts](./hosts):** Configurations specific to individual hosts.
- **[Lib](./lib):** Personal library and utilities.
- **[pkgs](./pkgs):** Customized and additional packages.

## Rescure Grub

After booting using boot usb:

- Mount your `root` and `boot` partition to `/mnt` and `/mnt/boot`
- `nixos-enter --root /mnt`
- `NIXOS_INSTALL_BOOTLOADER=1 /nix/var/nix/profiles/system/bin/switch-to-configuration boot`
