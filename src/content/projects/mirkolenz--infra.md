---
repo: "mirkolenz/infra"
name: "infra"
description: "Nix-based configuration for my machines"
readmeQualityOk: true
url: "https://github.com/mirkolenz/infra"
homepage: "https://www.mirkolenz.com"
language: "Nix"
languages: ["Nix"]
languagePcts: [92]
topics: ["dotfiles", "flake", "linux", "macos", "nix", "nixos", "nixos-configuration", "home-manager", "neovim", "nix-darwin"]
stars: 24
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-07T13:44:16Z"
lastCommitAt: "2026-09-23T08:47:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 52
maintainers: ["mirkolenz", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/144c6d2f7ea092ed8cc31c503afc5d14eb43864acbafd37e0eaf20e75b612b95/mirkolenz/infra"
---

# Nix Setup

This repo contains a custom wrapper to build NixOS/nix-darwin/home-manager:

```shell
nix run github:mirkolenz/infra -- --wrapper-help
```

## Repository Structure

This flake follows the **dendritic pattern**: every `.nix` file under `modules/` is auto-loaded by `import-tree` (see `flake.nix`) and contributes to a `flake.modules.<class>.<bucket>` declaration, so the directory a file lives in is purely organizational.
Feature modules are grouped by the **config-path namespace** they write, mirroring the option tree (and the `options/` layout), so anything is found where it sits in the configuration.
A module is one cohesive feature filed under one directory, the namespace of its primary subject, while keeping all of its config inline, so a feature like `ssh` or `nix` is configured end-to-end across home-manager and nixos/darwin in a single file.

## NixOS Computers

### Manual Terminal Setup

- <https://www.adaltas.com/en/2022/02/08/nixos-installation/>
- <https://wiki.nixos.org/wiki/NixOS_Installation_Guide>
- <https://gist.github.com/Vincibean/baf1b76ca5147449a1a479b5fcc9a222>

#### Partitioning

```shell
parted -l # find device name
wipefs -a /dev/sda
parted…
