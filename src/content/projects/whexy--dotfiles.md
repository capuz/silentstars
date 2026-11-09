---
repo: "whexy/dotfiles"
name: "dotfiles"
description: "My personal Nix configuration for all my machines: NixOS, Macs, WSL. [maintainer=@whexy]"
readmeQualityOk: true
url: "https://github.com/whexy/dotfiles"
homepage: "https://dotfiles.whexy.com"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [47, 33]
topics: ["dotfiles", "homeops-nix", "neovim", "niri", "nixos", "nixos-config", "nvim", "waybar", "zellij"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T20:32:02Z"
lastCommitAt: "2026-11-09T00:53:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 75
maintainers: ["whexy", "whexy-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a357df845da90c4a675af0ddb5968b668aca5daa96e5e44c37f324f0baf9ac6/whexy/dotfiles"
discussionCount: 8
---

src="https://raw.githubusercontent.com/NixOS/nixos-artwork/refs/heads/master/logo/nix-snowflake-colours.svg"
    width="80"> </picture>

# Dotfiles

Manager](https://img.shields.io/badge/Home%20Manager-5277C3?style=for-the-badge&logo=nixos&logoColor=white)](https://github.com/nix-community/home-manager)

    src="docs/dotfiles_nixOS.png"
    width="700"> </picture>

    src="docs/dotfiles_macOS.png"
    width="700"> </picture>

My personal Nix configuration for all my machines: NixOS, Macs, WSL.

### Layout

The flake is built on [blueprint](https://github.com/numtide/blueprint), so
hosts and users are discovered from the directory layout. Custom host helpers
wire in caps, host metadata, platform packages, and Home Manager for each
integrated user.

### Capabilities and Features

Caps are preset modules that assign feature options. A host picks its caps and
then overrides individual options where needed.

Feature modules are semantic groups: `default.nix` declares the options,
`nixos.nix` / `darwin.nix` hold the platform-specific config.

### Secrets and Remote access

Secrets are age-encrypted with agenix and only decrypted on the hosts that need
them.

Tailscale on everything,…
