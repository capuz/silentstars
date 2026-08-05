---
repo: "misumisumi/nixos-desktop-config"
name: "nixos-desktop-config"
description: "My nixos and home-manager configrations"
readmeQualityOk: true
url: "https://github.com/misumisumi/nixos-desktop-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [50]
topics: ["chezmoi", "dotfiles", "home-manager", "nix", "nixos"]
stars: 28
forks: 0
openIssues: 4
closedIssues: 30
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-10-31T14:24:04Z"
lastCommitAt: "2026-08-05T06:08:19Z"
lastReleaseAt: "2024-05-14T01:27:27Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 58
maintainers: ["misumisumi", "agent-of-me[bot]", "workflow-executor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b8ef6f6fe13d03c5a5879a0e69f928741150821a7f1e17e4c8ef90d3d01bdc5/misumisumi/nixos-desktop-config"
---

[English](https://github.com/misumisumi/nixos-desktop-config/blob/HEAD/README.md)|[日本語](https://github.com/misumisumi/nixos-desktop-config/blob/HEAD/README-ja.md)

# misumisumi' NixOS System & Home-Manager Configuration by Flake

Welcome to the nix World!  
This is [misumisumi](https://github.com/misumisumi)'s NixOS and home-manager configurations.

## Description

- This repository is maintained by [Nix Flakes](https://nixos.wiki/wiki/Flakes).
- You can try desktop or CLI environment.
  - DE: Qtile or GNOME
- Support standalone [home-manager](https://github.com/nix-community/home-manager)
- Support selecting color-scheme
- Providing my custom modules
- Declarative environment construction in non-nix environments and multi-platforms using [chezmoi](https://github.com/misumisumi/nixos-desktop-config/blob/HEAD/chezmoi)
  - Since `nix` reads the files under `chezmoi`, settings do not overlap (with some exceptions)

```shell
├── apps
│   ├── color-theme  # color themes
│   ├── system       # system wide application configurations (NixOS options)
│   └── user         # user wide application configurations (home-manager options)
│       ├── cli          # settings of cli app
│       ├──…
