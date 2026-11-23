---
repo: "DeterminateSystems/nix"
name: "nix"
description: "You probably want https://github.com/DeterminateSystems/determinate!"
readmeQualityOk: true
url: "https://github.com/DeterminateSystems/nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-12-05T21:04:17Z"
lastCommitAt: "2026-11-23T10:19:23Z"
lastReleaseAt: "2024-04-18T16:34:08Z"
status: "thriving"
tags: []
healthScore: 71
undervaluedScore: 33
maintainers: ["github-actions[bot]", "edolstra", "lucperkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/538cc9f5f5df57d18e6f5243847d641fcba3ae3523e95998e594cc08d878bc36/DeterminateSystems/nix"
---

# ‼️🚨 You probably want [DeterminateSystems/determinate][determinate]!

This repository used to provide NixOS, nix-darwin, and Home Manager modules for installing "[Determinate Nix][det-nix]."
However, it has always actually shipped Nix from upstream.
Instead of making it silently switch users over to a different Nix, we've replaced the modules with assertions to help people move.

## Migrating

### Migrating for nix-darwin users

Determinate Nix is fully compatible with nix-darwin.

To fix this issue:

1. Install Determinate Nix with the macOS package from https://docs.determinate.systems/
2. Set `nix.enable = false` in your nix-darwin configuration
3. Delete the `DeterminateSystems/nix` reference from your flake inputs,
4. Delete `nix.darwinModules.default` from your nix-darwin modules list
5. Rebuild your nix-darwin configuration

### Migrating for NixOS users

Determinate Nix is fully compatible with NixOS.

To fix this issue, please:

1. Replace the `DeterminateSystems/nix` flake input with:

  ```nix
  inputs.determinate.url = "https://flakehub.com/f/DeterminateSystems/determinate/*";
  ```

2. Replace the `nix.nixosModules.default` module in your NixOS modules list with:
