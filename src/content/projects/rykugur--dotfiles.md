---
repo: "rykugur/dotfiles"
name: "dotfiles"
description: "Various linux dotfiles."
readmeQualityOk: true
url: "https://github.com/rykugur/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [70]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2014-02-20T04:05:31Z"
lastCommitAt: "2026-07-19T06:12:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 71
maintainers: ["rykugur"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc620ec1d8df34c436b4b01b8f4bfd54a5210bef21b0dbe06f8dd91269c50a8e/rykugur/dotfiles"
---

# Swoleflake

> [!WARNING]
> THIS IS A(LWAYS A) WORK IN PROGRESS!

A Nix flake managing NixOS and nix-darwin configurations for multiple machines,
using home-manager as a module and sops-nix for secrets. Built on
[flake-parts](https://github.com/hercules-ci/flake-parts). Tracks nixpkgs
unstable.

## Hosts

| Host      | Platform               | Description                                  |
| --------- | ---------------------- | -------------------------------------------- |
| `jezrien` | NixOS (x86_64-linux)   | Primary desktop — Hyprland/niri, gaming, dev |
| `taln`    | macOS (aarch64-darwin) | MacBook — Aerospace WM, dev                  |

## Build

```bash
# NixOS
sudo nixos-rebuild switch --flake .#jezrien

# macOS
darwin-rebuild switch --flake .#taln

# Dev shell
nix develop
```

## Architecture

Modules are auto-discovered via
[import-tree](https://github.com/vic/import-tree) — drop a `.nix` file in
`modules/` and it's loaded automatically.

```
modules/
  ai/           Claude Code, Codex, opencode, shared agent definitions, RTK
  audio/        PipeWire, EasyEffects
  base/         Fonts, Nix defaults, Stylix, meta-options
  browser/      Firefox, Zen Browser
  desktop/…
