---
repo: "vuong-ngo/linux-dotfiles"
name: "linux-dotfiles"
description: "💻 Ultimate Wayland dotfiles for Arch Linux — Niri • Hyprland • Sway — built for speed and keyboard-driven productivity."
readmeQualityOk: true
url: "https://github.com/vuong-ngo/linux-dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-20T03:58:37Z"
lastCommitAt: "2026-10-24T08:21:25Z"
lastReleaseAt: "2026-10-05T14:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 40
maintainers: ["vuong-ngo"]
openGraphImageUrl: "https://opengraph.githubassets.com/63bddc6423494782ec09409bca4c451b62bf24310859dc14a0a82c38097d3ce7/vuong-ngo/linux-dotfiles"
discussionCount: 1
---

# 🌌 Arch Linux x Niri Wayland Dotfiles

A premium, keyboard-driven, high-performance dotfiles configuration built for **Arch Linux**, featuring the **Niri Wayland Scrollable Window Manager**, **Neovim IDE**, **VS Code**, **Foot Terminal**, **Tmux**, **Rofi Rasi Scripts**, and **Catppuccin Mocha / Graphite Minimalist Aesthetics**.

---

## 📐 Repository Structure & Architecture

The repository is modularly structured into core configuration buckets (`dotfiles-global`, `dotfiles-niri`, and `install-arch`) for clean deployment via GNU Stow or symlinking:

```
dotfiles/
├── README.md                          # Main repository documentation & guide
├── dotfiles-global/                   # Portable global CLI/GUI configurations
│   ├── README.md                      # Global tools overview & details
│   ├── .zshrc                         # Zsh profile, aliases & plugin sources
│   └── .config/
│       ├── btop/                      # System resource monitor config
│       ├── Code/                      # VS Code user settings & keybindings
│       ├── fastfetch/                 # System info fetch theme
│       ├── foot/                      # Foot terminal emulator config
│       ├──…
