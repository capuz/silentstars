---
repo: "shayne/nixos-config"
name: "nixos-config"
description: "Nix-managed nix-darwin and Home Manager configs for my macOS systems."
readmeQualityOk: true
url: "https://github.com/shayne/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [63]
stars: 25
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-12-31T18:56:17Z"
lastCommitAt: "2026-10-31T19:01:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 48
maintainers: ["shayne"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51832133df42992d2230aca2d88b4a9fb81f5b262688d6ec3f2da2d3f24b33e/shayne/nixos-config"
---

# nix-darwin Configurations

This repository houses my macOS (nix-darwin) configurations and related Nix tooling. The system loader lives in
`lib/loadSystems.nix` and `lib/mkSystem.nix`, with per-host configs under `systems/` and user config under
`home-manager/`.

## Structure

- `systems/base/`: shared Darwin defaults
- `systems/<hostname>/`: per-host overrides (current host: `m5air`)
- `home-manager/<user>/`: shared user config and per-host overlays
- `modules/`: reusable Nix modules
- `overlays/` + `pkgs/`: custom overlays/packages
- `flake.nix`/`flake.lock`: source pinning and flake outputs
- `nixpkgs.nix`: compatibility helper for importing the flake-pinned nixpkgs

## Common Commands

- `make bootstrap`: first build and switch on a host where Nix is installed but this config has not installed system tools yet
- `make`: run the default `mise` task after `mise` is installed
- `mise run lint`: run `deadnix`, `nixpkgs-fmt`, and `statix` (same as pre-commit)
- `mise run check`: run lint + `nix flake check --all-systems`, then build the current host
- `mise run` (or `mise run default`): build and switch the current host (Darwin uses `darwin-rebuild switch`)

Homebrew apps are…
