---
repo: "alisonjenkins/nix-config"
name: "nix-config"
description: "My Nix Configs + Dotfiles"
readmeQualityOk: true
url: "https://github.com/alisonjenkins/nix-config"
language: "Nix"
languages: ["Nix", "Rust"]
languagePcts: [47, 21]
stars: 6
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-26T17:55:48Z"
lastCommitAt: "2026-10-24T08:07:28Z"
lastReleaseAt: "2026-05-04T16:37:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 74
maintainers: ["alisonjenkins", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0088607b1f9b00cc09fa82e285a8954b706ccb4578f8a24c8fca31dcb3f4c85f/alisonjenkins/nix-config"
---

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
* [Declarative Beat Saber…
