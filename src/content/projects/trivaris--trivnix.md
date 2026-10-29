---
repo: "Trivaris/Trivnix"
name: "Trivnix"
description: "NixOS Configuration"
readmeQualityOk: true
url: "https://github.com/Trivaris/Trivnix"
language: "Nix"
languages: ["Nix", "QML"]
languagePcts: [71, 27]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T11:45:21Z"
lastCommitAt: "2026-10-29T10:20:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 67
maintainers: ["Trivaris"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9da30d6ee8ed4b167c055b0cd4afe4e9462429559e10926ada6611d13ee3c07/Trivaris/Trivnix"
---

## Trivnix

Opinionated, reusable NixOS and Home Manager modules for the Trivnix configuration stack.

This flake provides:

- `nixosModules.default` - host and service modules from `host/`
- `nixosModules.dependencies` - upstream NixOS modules used by those modules
- `homeModules.default` - Home Manager modules from `home/`
- `homeModules.dependencies` - upstream Home Manager modules used by those modules
- `overlays.hyprqt6engine` - the Hyprland Qt6 engine overlay

The companion `trivnixconfig` flake composes these modules into concrete hosts and users. It also supplies the private library, secrets, metadata, and local overlay choices that this public module flake should not contain.

### Documentation

- [Architecture](https://github.com/Trivaris/Trivnix/blob/HEAD/docs/architecture.md) - flake boundaries and exported interfaces
- [Getting started](https://github.com/Trivaris/Trivnix/blob/HEAD/docs/getting-started.md) - consume the modules from another flake
- [Module catalog](https://github.com/Trivaris/Trivnix/blob/HEAD/docs/modules.md) - features grouped by host and home use
- [Private integration](https://github.com/Trivaris/Trivnix/blob/HEAD/docs/private-integration.md) -…
