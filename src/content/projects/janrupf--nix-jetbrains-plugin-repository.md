---
repo: "Janrupf/nix-jetbrains-plugin-repository"
name: "nix-jetbrains-plugin-repository"
description: "A Nix flake that provides access to JetBrains IDE plugins with automatic compatibility checking and version selection."
readmeQualityOk: true
url: "https://github.com/Janrupf/nix-jetbrains-plugin-repository"
language: "Rust"
languages: ["Rust", "Nix"]
languagePcts: [79, 21]
topics: ["intellij", "jetbrains", "jetbrains-plugin-repository", "jetbrains-plugins", "nix", "nixos"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-13T04:52:13Z"
lastCommitAt: "2026-07-18T05:46:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 68
maintainers: ["actions-user", "Janrupf"]
openGraphImageUrl: "https://opengraph.githubassets.com/5046350c0477a2bc40628f46e02054371d46f9fea5603cc0a1bb1f602b62c375/Janrupf/nix-jetbrains-plugin-repository"
---

# JetBrains Plugin Repository for Nix

A Nix flake that provides access to JetBrains IDE plugins with automatic compatibility checking and version selection.

## Features

- Access to all plugins from the official JetBrains marketplace
- Automatic compatibility checking between plugins and IDEs
- Support for different plugin channels (stable, nightly, etc.)
- Daily updates via GitHub Actions
- Easy integration with NixOS and Home Manager

## Quick Start

### Add the flake to your inputs

```nix
# In your flake.nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    
    nix-jetbrains-plugins = {
      url = "github:Janrupf/nix-jetbrains-plugin-repository";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
}
```

### Apply the overlay

```nix
# In your NixOS configuration
{
  nixpkgs.overlays = [
    inputs.nix-jetbrains-plugins.overlays.default
  ];
}
```

### Install JetBrains IDEs with plugins

```nix
# In your packages list
environment.systemPackages = [
  (pkgs.jetbrains-plugins.lib.buildIdeWithPlugins pkgs.jetbrains.idea-community (with pkgs.jetbrains-plugins; [
    # Latest compatible version of Github Copilot from stable channel…
