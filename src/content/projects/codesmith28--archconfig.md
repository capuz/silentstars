---
repo: "Codesmith28/archConfig"
name: "archConfig"
description: "These are my arch linux dotfiles "
readmeQualityOk: true
url: "https://github.com/Codesmith28/archConfig"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [67, 30]
stars: 68
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-16T14:25:18Z"
lastCommitAt: "2026-10-04T10:02:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 43
maintainers: ["Codesmith28"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bbcc094baa0e0f8035e02213c4c0c3c25e3ed1f812870596b3b4fa5214ff2fa/Codesmith28/archConfig"
---

# 🚀 archConfig

A unified, modular, cross-distribution dotfiles and bootstrap system. Designed to deliver an identical, high-performance developer workflow across **Fedora**, **Arch Linux**, **Ubuntu**, **macOS**, and **OmArchy** without configuration fragmentation.

---

## 🏗️ Layered Architecture

The repository separates universal developer tooling from desktop environments, distro-specific package installers, and troubleshooting runbooks:

```mermaid
graph TD
    Sync["🚀 sync.sh (Auto-Detector & Linker)"]
    Core["🌐 core/<br/>(Universal Shell, Neovim, Ghostty, Herdr, Starship, Yazi)"]
    Desktop["🖥️ desktop/<br/>(GNOME, KDE Plasma, Hyprland Lua/Classic)"]
    Distros["📦 distros/<br/>(Fedora, Arch, Ubuntu, macOS, OmArchy)"]
    Troubleshoot["🩺 troubleshoot/<br/>(GRUB, Dual-Boot, Toolchain fixes)"]
    
    Sync --> Core
    Sync --> Desktop
    Sync --> Distros
    Sync --> Troubleshoot
```

| Layer | Directory | Purpose |
| :--- | :--- | :--- |
| **Core Configs** | [`core/config/`](https://github.com/Codesmith28/archConfig/blob/HEAD/file:///home/codesmith28/archConfig/core/config) | Universal application configurations (`nvim`, `ghostty`, `herdr`, `leaf`,…
