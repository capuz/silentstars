---
repo: "hydroakri/dotfiles"
name: "dotfiles"
description: "Multi-host NixOS configuration with modular security/performance/privacy hardening, portable home-manager toolkit, and upstream settings tracker."
readmeQualityOk: true
url: "https://github.com/hydroakri/dotfiles"
language: "Nix"
languages: ["Nix", "Lua"]
languagePcts: [71, 24]
topics: ["bazzite", "cachyos", "flake", "grapheneos", "kicksecure", "lix", "nix", "nix-mineral", "nixos", "openbsd"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-04-30T15:52:52Z"
lastCommitAt: "2026-09-18T14:03:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 71
maintainers: ["hydroakri"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eca9cb8547711745b1b6efc64a9347aefbaf5e91b84e6fdde108608c1eb9ad2/hydroakri/dotfiles"
---

# hydroakri's NixOS & Dotfiles

> Multi-host NixOS flake + a portable home-manager flake + chezmoi dotfiles.

*[中文](https://github.com/hydroakri/dotfiles/blob/HEAD/README_ZH.md)*

## Contents

- [⚠️ This is my personal configuration](#personal-config)
- [Defaults Worth Knowing About](#defaults-worth-knowing-about)
- [How do I...](#how-do-i)
  - [...reuse a single module in my own flake?](#reuse-a-single-module-in-my-own-flake)
  - [...add or switch a host?](#add-or-switch-a-host)
  - [...edit or rotate secrets?](#edit-or-rotate-secrets)
  - [...enable a module that's off by default?](#enable-a-module-thats-off-by-default)
  - [...bootstrap CLI tooling with home-manager?](#bootstrap-cli-tooling-with-home-manager)
  - [...apply or update my dotfiles?](#apply-or-update-my-dotfiles)
  - [...fix the known dotfiles gotchas?](#fix-the-known-dotfiles-gotchas)
- [Reference](#reference)
  - [Repository Structure](#repository-structure)
  - [Hosts](#hosts)
  - [Available `nixosModules`](#available-nixosmodules)
  - [Key Options](#key-options)
  - [Common Commands](#common-commands)
  - [CI / Build Pipeline](#ci-build-pipeline)
  - [Home Manager](#home-manager)
  - [Desktop…
