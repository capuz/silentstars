---
repo: "FelixSchausberger/nixos"
name: "nixos"
description: "NixOS system config & Home-Manager user config "
readmeQualityOk: true
url: "https://github.com/FelixSchausberger/nixos"
language: "Nix"
languages: ["Nix"]
languagePcts: [87]
topics: ["configuration", "dotfiles", "home-manager", "linux", "nix", "nixos"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-13T09:23:23Z"
lastCommitAt: "2026-09-14T09:13:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["FelixSchausberger", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f09f7f68d0d57bcc64ef65917baaeb293318f121173ae492fa326794bd0ca428/FelixSchausberger/nixos"
---

# FelixSchausberger/nixos

## About

NixOS and Home Manager configuration using flakes and flake-parts architecture.
Supports multiple hosts with modular system and home configurations, ZFS with
opt-in state, and sops-nix secret management.

## Architecture

### Directory Structure

```text
.
├── flake.nix              # Main flake configuration with inputs and outputs
├── hosts/                 # System-level configurations per machine
│   ├── desktop/           # deployed
│   ├── hp-probook-wsl/    # deployed
│   ├── m920q/             # deployed
│   ├── portable/          # portable recovery ISO (.#installer-iso-portable)
│   └── surface/           # shelf config (flake.legacyConfigurations)
├── home/profiles/         # User-specific configurations per machine
├── modules/               # Reusable system and home manager modules
│   ├── system/            # System-level modules
│   └── home/              # Home manager modules
├── pkgs/                  # Custom package definitions
├── tools/                 # Utility scripts, templates, and builders
├── system/                # Core system configurations (users, hardware, persistence)
├── lib/                   # Custom…
