---
repo: "mimame/.dotfiles"
name: ".dotfiles"
description: "@mimame .dotfiles"
readmeQualityOk: true
url: "https://github.com/mimame/.dotfiles"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [46, 31]
topics: ["git", "dotfiles", "ssh", "fzf", "fish-shell", "helix", "niri", "nixos", "tmux"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-06-01T14:37:42Z"
lastCommitAt: "2026-11-03T12:20:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 70
maintainers: ["mimame"]
openGraphImageUrl: "https://opengraph.githubassets.com/36a1d1eeca1401e78b8cebfa791b120bb9750f378effd32b03d35c4b5998bd44/mimame/.dotfiles"
---

# Dotfiles for NixOS: Productive, Modular, and Declarative

## Table of Contents
- [Goals](#goals)
- [Configuration Philosophy](#configuration-philosophy)
- [Setup](#setup)
- [Essential Tools](#essential-tools)
  - [Terminals](#terminals)
  - [Shells](#shells)
  - [Editors](#editors)
  - [Utilities & Automation](#utilities--automation)
  - [Windows Management](#windows-management)
  - [Files Management](#files-management)
- [Themes](#themes)
- [Conclusion](#conclusion)

# Goals

- Deepen my understanding of NixOS and its ecosystem through hands-on, declarative configuration.
- Enhance my productivity by streamlining daily tasks with thoughtfully chosen tools and automation.

## Configuration Philosophy

All configurations are managed declaratively, leveraging NixOS modules and per-tool config files. This ensures:
- **Reproducibility:** The environment can be rebuilt or migrated easily.
- **Modularity:** Each tool's configuration is isolated and easy to update. Host-specific and user-specific logic is decoupled.
- **Consistency:** Theming and formatting are unified across editors, shells, and productivity tools.
- **Automation:** Integrated `pre-commit` hooks (via `prek`) and CI…
