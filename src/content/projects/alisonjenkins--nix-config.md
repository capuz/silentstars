---
repo: "alisonjenkins/nix-config"
name: "nix-config"
description: "My Nix Configs + Dotfiles"
url: "https://github.com/alisonjenkins/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [79]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2023-09-26T17:55:48Z"
lastCommitAt: "2026-06-28T03:12:27Z"
lastReleaseAt: "2026-05-04T16:37:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 72
maintainers: ["alisonjenkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/cea6e35e80fce372a515211b2a39334e5337953a9e8b48f2ae5b048f104c5d20/alisonjenkins/nix-config"
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
* [Fix broken Nix store on ali-desktop](./docs/ali-desktop-fix-broken-nix-store.md)
