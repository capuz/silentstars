---
repo: "voidd-sam/lace-hyprland"
name: "lace-hyprland"
description: "A full hyprland setup."
readmeQualityOk: true
url: "https://github.com/voidd-sam/lace-hyprland"
language: "GLSL"
languages: ["GLSL", "Lua"]
languagePcts: [45, 37]
topics: ["arch-linux", "dotfiles", "hyprland-config", "hyprland-rice"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-07T16:40:21Z"
lastCommitAt: "2026-11-16T11:50:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["voidd-sam"]
openGraphImageUrl: "https://opengraph.githubassets.com/778d5a3d1ebc052ecd877dd2cdc0b3008b3bb72bb5054f2e5d2736e7d4d20e95/voidd-sam/lace-hyprland"
---

# lace-hyprland

A glass style Hyprland desktop. Blurred bar and launcher, translucent windows, one color palette for all, color palette generated from the wallpaper using pywal16.

## About

- Configration is split into small modules.
- Colors come from the wallpaper through pywal16. Change the wallpaper in yazi and everything follows.
- File pickers in GUI apps open yazi in a floating terminal instead of a GTK dialog.
- No display manager, notification daemon or logout menu. coz thats bloat to me but you can add in yours thats upto you.
- Log in on tty1 and Hyprland starts from `.zshrc`.

## Preview

|             Desktop             |             Terminal             |
| :-----------------------------: | :------------------------------: |
|  |  |

|           App Launcher           |        System Monitor        |
| :------------------------------: | :--------------------------: |
|  |  |

|             File picker             |             Neovim             |
| :---------------------------------: | :----------------------------: |
|  |  |

## Install

Arch Linux with `sudo`

```bash
git clone https://github.com/voidd-sam/lace-hyprland.git && cd lace-hyprland && bash…
