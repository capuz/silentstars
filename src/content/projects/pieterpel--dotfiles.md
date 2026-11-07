---
repo: "PieterPel/dotfiles"
name: "dotfiles"
description: "Repository where I keep my dotfiles"
readmeQualityOk: true
url: "https://github.com/PieterPel/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
stars: 7
forks: 0
openIssues: 6
closedIssues: 22
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-11T19:16:13Z"
lastCommitAt: "2026-11-07T13:44:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["PieterPel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f54a6a04ef49d461a3390e5b244c3c9cd181eb1800cb39a453fea08af97217ce/PieterPel/dotfiles"
---

# My NixOS Dotfiles

This repository contains my personal NixOS, nix-darwin and Home-Manager configurations, managed as a [Nix flake](https://nixos.wiki/wiki/Flakes).
It provides a declarative and reproducible way to manage my system configurations across different machines.
Easy to add hosts that run NixOS, nix-darwin or a standalone Home-Homemanager instance on (non-)NixOS.
Uses `flake-parts` to seperate the flake outputs to different host modules.

## Screenshot

## Structure

The repository is structured as follows:

-   `flake.nix`: The entry point for the flake, defining inputs and outputs.
-   `hosts/`: Contains machine-specific configurations. Each host has a `default.nix` that defines the NixOS configuration for that machine, and a `users` directory for user-specific configurations.
    -   `ideapad/`: Configuration for my Ideapad laptop.
    -   `nixberry/`: Configuration for my Raspberry Pi.
    -   `surface/`: Configuration for my Surface device, which uses home-manager standalone.
-   `modules/`: Contains reusable modules for configuring different aspects of the system.
    -   `core/`: Core modules shared between NixOS and nix-darwin.
    -   `darwin/`: Modules…
