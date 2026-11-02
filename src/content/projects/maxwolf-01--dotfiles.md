---
repo: "MaxWolf-01/dotfiles"
name: "dotfiles"
description: "My dotfiles for linux"
readmeQualityOk: true
url: "https://github.com/MaxWolf-01/dotfiles"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [58, 21]
topics: ["dotfiles", "dotfiles-linux", "dotbot", "dotfiles-ubuntu", "proxmox", "termux", "zsh-configuration", "obsidian-sync"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-01-25T00:06:26Z"
lastCommitAt: "2026-11-02T15:17:23Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 73
maintainers: ["MaxWolf-01", "MaxWolf-01-clanker"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9356a65ad0a81d0d1bafefdc929e39975d55c98a2f0ea818e2de57e18890b44/MaxWolf-01/dotfiles"
---

# Dotfiles

Dotfiles for Ubuntu desktop (GNOME), NixOS, servers/containers, and Android (Termux).

Managed via [Nix Home Manager](https://github.com/nix-community/home-manager) — standalone on Ubuntu, as a NixOS module on NixOS.

**Setup:** [Ubuntu](#setup-ubuntu) | [NixOS](#setup-nixos) | [Server/Container](#setup-servercontainer) | [Android/Termux](#setup-android--termux)

`./setup host` to list available host configs.

```
dotfiles
├── backup        # restic/rsync backup scripts (run logs; email alert on failure)
├── bin           # custom scripts
├── desktop       # icons, discord theme
├── docs          # dns, monitoring, sftpgo, new NixOS machines, cheatsheets
├── nix
│   ├── home
│   │   ├── common.nix     # CLI tools, git, zsh plugins (all hosts)
│   │   ├── desktop.nix    # GUI apps (workstations)
│   │   ├── firefox.nix    # Firefox config, policies, search engines
│   │   ├── gnome.nix      # GNOME keybindings, extensions, dconf
│   │   ├── tmux.nix       # tmux config + resurrect
│   │   ├── timers.nix     # systemd timers (zephyrus)
│   │   ├── pc-timers.nix  # backup/sync timers (pc)
│   │   ├── wayland.nix
│   │   └── hosts/         # per-machine: imports +…
