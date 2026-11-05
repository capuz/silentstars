---
repo: "arunoruto/flake"
name: "flake"
description: "My nix config"
readmeQualityOk: true
url: "https://github.com/arunoruto/flake"
homepage: "https://arunoruto.github.io/flake/"
language: "Nix"
languages: ["Nix"]
languagePcts: [97]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-05-26T13:26:25Z"
lastCommitAt: "2026-11-05T00:19:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 69
maintainers: ["arunoruto", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/648e9ce04b22ce1880f62ad52dd051911c668ff4fbfe7d64ca2d1391ca2e5cda/arunoruto/flake"
---

# Mirza's Nix Config

NixOS, nix-darwin, and Home Manager configurations managed as a single flake.

## Quick Start

```sh
git clone https://github.com/arunoruto/flake ~/.config/flake
```

### NixOS

```sh
sudo nixos-rebuild switch --accept-flake-config --flake ~/.config/flake#<device-name>
```

### Darwin

```sh
sudo nix run nix-darwin/nix-darwin-<version>#darwin-rebuild -- switch
```

Replace `<version>` with the nix-darwin release (e.g., `25.11`).

### Home Manager

```sh
home-manager switch --flake ~/.config/flake#<username> --accept-flake-config
```

#### Standalone (non-NixOS)

```sh
nix --experimental-features 'nix-command flakes' --accept-flake-config run nixpkgs#home-manager -- switch --flake ~/.config/flake#<username>
```

> Some shells (e.g. zsh) require quoting the flake argument: `--flake './#<username>'`

## Common tasks

Day-to-day commands are wrapped in a `justfile` (run inside `nix develop .#nix`,
which provides `just`):

```sh
just              # list all recipes
just switch       # build + activate this host
just update       # update flake inputs
just check        # nix flake check
just docs         # serve the docs locally
```

## Documentation

Full…
