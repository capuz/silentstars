---
repo: "divy-03/dotfiles"
name: "dotfiles"
description: "My dotfiles for Fedora + Hyprland Setup"
readmeQualityOk: true
url: "https://github.com/divy-03/dotfiles"
language: "CSS"
languages: ["CSS", "Shell"]
languagePcts: [52, 38]
topics: ["alacritty", "cava", "espanso", "fastfetch", "hyprland", "hyprlock", "kitty", "linux", "nvim", "rofi"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-20T19:46:42Z"
lastCommitAt: "2026-07-29T06:12:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 25
maintainers: ["divy-03"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8c7d89f9c05b46c5545459b3f2268ff08943d318c6c5bba180a327100e359af/divy-03/dotfiles"
---

# 🌙 My Dotfiles

Welcome to my **dotfiles repo** — aka the soul of my Linux setup 💻✨
This is where all the magic happens: Hyprland configs, Waybar themes, Rofi menus, and other tweaks that make my system *feel like home*.

---

## 🚀 Getting Started

Clone the repo (I use SSH, but HTTPS works too):

```bash
git clone git@github.com:divy-03/dotfiles.git
cd dotfiles
```

### 🪄 Linking Configs

I use [GNU Stow](https://www.gnu.org/software/stow/) to manage symlinks easily — it keeps everything modular and clean.

To link a config (example: `waybar`):

```bash
stow waybar
```

To unlink a config (say you’re testing something new):

```bash
stow -D waybar
```

That’s it. Stow handles all the symlinks for you. 🙌

---

## 🖼️ Screenshots
|   #   | Preview                                                                                                                                                       | Description                                                                                  |
| :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |…
