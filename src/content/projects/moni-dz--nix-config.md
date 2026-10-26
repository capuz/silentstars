---
repo: "moni-dz/nix-config"
name: "nix-config"
description: "NixOS/NixOS-WSL/nix-darwin configuration using Nix Flakes and flake-parts"
readmeQualityOk: true
url: "https://github.com/moni-dz/nix-config"
language: "Lua"
languages: ["Lua", "Nix"]
languagePcts: [59, 41]
topics: ["nixos", "nix-config", "nixos-configuration", "nix-dotfiles", "nix", "nix-flakes", "agenix", "sway", "wsl", "wsl2"]
stars: 112
forks: 3
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2020-11-20T11:50:41Z"
lastCommitAt: "2026-10-26T20:59:49Z"
lastReleaseAt: "2021-12-25T18:22:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 70
undervaluedScore: 36
maintainers: ["moni-dz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2596dcce56548fdee92e703ece6d16486799f71dd3be791771309c1b485e17f2/moni-dz/nix-config"
fundingLinks: ["GITHUB:https://github.com/moni-dz"]
discussionCount: 0
---

# [NixOS](https://nixos.org) configuration

## Description

NixOS/nix-darwin/hjem configuration that I use daily.

See also:

- [hjem](https://github.com/feel-co/hjem) and [hjem-rum](https://github.com/snugnug/hjem-rum)
- [flakes](https://wiki.nixos.org/wiki/Flakes)
- [flake-parts](https://flake.parts), for the flake outputs, e.g. [my system configurations](https://github.com/moni-dz/nix-config/blob/master/hosts/default.nix)
- [nix-darwin](https://github.com/LnL7/nix-darwin), for `hosts/riscake`

Resources and configurations I used to base on:

- [colemickens/nixos-flake-example](https://github.com/colemickens/nixos-flake-example)
- [NixOS modules on NixOS Wiki](https://wiki.nixos.org/wiki/NixOS_modules)
- [Writing NixOS modules](https://nixos.org/manual/nixos/stable/index.html#sec-writing-modules)
- [Nix Flakes talk by Eelco Dolstra on NixCon](https://www.youtube.com/watch?v=UeBX7Ide5a0)
- [flake.parts module arguments](https://flake.parts/module-arguments.html)

## Directory Map

```text
hosts/       per-machine configs (hands: NixOS, riscake: nix-darwin)
modules/     custom modules (common, nixos, darwin, hjem)
profiles/    reusable config shared between hosts (nix settings,…
