---
repo: "alisonjenkins/nix-config"
name: "nix-config"
description: "My Nix Configs + Dotfiles"
readmeQualityOk: true
url: "https://github.com/alisonjenkins/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [74]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-26T17:55:48Z"
lastCommitAt: "2026-09-01T08:50:28Z"
lastReleaseAt: "2026-05-04T16:37:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 72
maintainers: ["alisonjenkins", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c48073a839e97c9ce0c1465dba7a8ec20c1270987b3024fd9021b1a1615a201/alisonjenkins/nix-config"
---

<h2 align="center">Alison Jenkins NixOS Dotfiles</h2>

### Apps:

|                          |             NixOS 24.05                               |
|--------------------------|:-----------------------------------------------------:|
| **Desktop Environment**  |   [KDE Plasma 6](https://kde.org/announcements/megarelease/6/)                    |
| **Terminal Emulator**    |   [Alacritty](https://github.com/alacritty/alacritty) |
| **Display Server**       |   [Wayland](https://wayland.freedesktop.org)          |
| **Application Launcher** |   [Rofi](https://github.com/davatorium/rofi)          |
| **Shell**                |   [Zsh](https://zsh.sourceforge.io)                   |
| **Text Editor**          |   [Neovim](https://neovim.io)                         |

### Installation

0. Download the project:
```bash
 $ git clone https://github.com/alisonjenkins/nix-config.git && cd nix-config
```

1. Install the project:

```bash
$ cd nix-config
$ sudo nixos-rebuild switch --flake .#host
```

# Docs
* [Fix broken Nix store on ali-desktop](https://github.com/alisonjenkins/nix-config/blob/HEAD/docs/ali-desktop-fix-broken-nix-store.md)
