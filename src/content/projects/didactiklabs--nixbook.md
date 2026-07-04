---
repo: "didactiklabs/nixbook"
name: "nixbook"
description: "Laptop NixOS Configuration"
url: "https://github.com/didactiklabs/nixbook"
language: "Nix"
languages: ["Nix", "QML"]
languagePcts: [70, 24]
stars: 13
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-06-11T20:02:49Z"
lastCommitAt: "2026-07-04T19:23:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 71
maintainers: ["Banh-Canh"]
openGraphImageUrl: "https://opengraph.githubassets.com/72f72b547b6b7255eca83bd9afb17434a5038d6ecf8a0d87bf0a222532b90ebb/didactiklabs/nixbook"
---

# Nixbook

## 🔍 Description

### Project Goals

The primary goal of Nixbook is to provide a personal, highly customizable, and reproducible NixOS environment. It aims to offer a robust base configuration that can be easily extended and adapted to different machines and use cases, promoting the "everything as code" philosophy through Nix. This allows for consistent deployments and easy management of system configurations.

### Wayland with UEFI Boot

Currently supports Wayland display servers with UEFI boot only.

## 🚀 Main Features

**Reproducibility**

Everything is configured as code with Nix, ensuring consistent and reproducible deployments across systems.

**Modern Zsh Shell**

Pre-configured with various plugins and GNU CLI replacements for an enhanced shell experience.

**Machine Profiles**

Customize your setup per machine using profile configurations. Add custom Nix code for features like git configuration and opt-in/opt-out functionality.

**Keybindings**

All keyboard shortcuts (Niri, Sway, Hyprland, Kitty, and Neovim) are documented in [KEYBINDS.md](./KEYBINDS.md).

**Easy Installation and Updates**

After installing the base NixOS ISO, customize your system using…
