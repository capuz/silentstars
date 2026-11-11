---
repo: "bjeanes/dotfiles"
name: "dotfiles"
description: "🏠"
readmeQualityOk: true
url: "https://github.com/bjeanes/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [85]
topics: ["dotfiles", "vim", "neovim", "nvim", "zsh", "nix", "nix-darwin", "nix-dotfiles", "nix-flake", "nixos-configuration"]
stars: 80
forks: 27
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2008-08-08T06:59:17Z"
lastCommitAt: "2026-11-11T11:14:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 49
maintainers: ["bjeanes"]
openGraphImageUrl: "https://opengraph.githubassets.com/25464ee18f7cb06ca513238bccf1055d51b427fbe1dbedc036ed0ef2e84f9293/bjeanes/dotfiles"
---

# Bo's Dot Files

## Not using Nix?

If you only want to browse my dotfiles, the [`dotfiles` branch][dotfiles] has
them as a plain home directory, without anything that depends on Nix. CI
updates it from `main` on every push.

[dotfiles]: https://github.com/bjeanes/dotfiles/tree/dotfiles

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

- First time run on macOS:

  The customised `nix.linux-builder` VM is an aarch64-linux system that isn't in
  any binary cache, and a fresh Mac has no Linux builder to build it with. Use
  the `-bootstrap` variant of the host first: it runs the stock builder from
  cache.nixos.org, which then builds the real one on the next switch.

  ```sh-session
  sudo nix run nix-darwin -- switch --flake github:bjeanes/dotfiles#<hostname>-bootstrap
  nix run --extra-experimental-features "nix-command…
