---
repo: "fzakaria/nix-home"
name: "nix-home"
description: "A nix home development environment"
readmeQualityOk: true
url: "https://github.com/fzakaria/nix-home"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [64, 36]
topics: ["nix", "home-manager", "dotfiles", "development-environment"]
stars: 35
forks: 5
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2020-06-03T16:18:00Z"
lastCommitAt: "2026-08-11T04:46:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 58
maintainers: ["fzakaria", "markrwilliams", "adeci"]
openGraphImageUrl: "https://opengraph.githubassets.com/153db19e533b07b66f7e769b9d1644f31fdbf0bed3f41345f89cb254458bc23c/fzakaria/nix-home"
---

# Nix Home

Welcome to a our declarative machine setup using Nix.

## NixOS Machines

[nyx](https://github.com/fzakaria/nix-home/blob/HEAD/machines/nyx/configuration.nix): Framework Laptop 13 AMD whose primary driver is [fzakaria](https://github.com/fzakaria).

[nixie](https://github.com/fzakaria/nix-home/blob/HEAD/machines/nixie/configuration.nix): Framework Laptop 13 AMD whose primary driver is [markrwilliams](https://github.com/markrwilliams).

[altaria](https://github.com/fzakaria/nix-home/blob/HEAD/machines/altaria/configuration.nix): AWS EC2 server running a few things, namely quassel.

## HomeManager

Additionally, we keep a few HomeManager only setups.
You can find them in [flake.nix](https://github.com/fzakaria/nix-home/blob/HEAD/flake.nix).

## Why Nix/NixOS?

Nix is a totally different way of managing packages & dependencies on your machine from all other package managers: homebrew, apt, yum etc..

If you want the official explanation on what Nix does better please read [why you should give it a try](https://nixos.org/nixos/nix-pills/why-you-should-give-it-a-try.html).
