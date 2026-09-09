---
repo: "bjeanes/dotfiles"
name: "dotfiles"
description: "🏠"
readmeQualityOk: true
url: "https://github.com/bjeanes/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [97]
topics: ["dotfiles", "vim", "neovim", "nvim", "zsh", "nix", "nix-darwin", "nix-dotfiles", "nix-flake", "nixos-configuration"]
stars: 80
forks: 27
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2008-08-08T06:59:17Z"
lastCommitAt: "2026-09-09T08:19:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 47
maintainers: ["bjeanes"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e1520291abedde18aa5db64811e34e42eabc6344962d6394271727f9e7ba356/bjeanes/dotfiles"
---

# Bo's Dot Files

## Install

- Install Nix, using determinate systems' installer:

  ```sh-session
  curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
  ```

- First time run:

  ```sh-session
  sudo nixos-rebuild switch --flake github:bjeanes/dotfiles#<hostname>

  # or (if hostname already matches one defined)

  nix run --extra-experimental-features "nix-command flakes"
  ```
