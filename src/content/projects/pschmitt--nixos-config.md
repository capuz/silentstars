---
repo: "pschmitt/nixos-config"
name: "nixos-config"
description: "pschmitt's nixos configuration"
readmeQualityOk: true
url: "https://github.com/pschmitt/nixos-config"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [49, 29]
topics: ["nixos", "nixos-config", "nixos-configuration"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-08-02T06:20:47Z"
lastCommitAt: "2026-11-26T23:34:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 67
maintainers: ["pschmitt", "renovate[bot]", "pschmitt-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7d35ca4f1ebae6c92f94f12de8d2c980c9bca07fcf3d74aab3463c6a242b35d/pschmitt/nixos-config"
fundingLinks: ["GITHUB:https://github.com/pschmitt", "CUSTOM:https://www.paypal.com/paypalme/pppschmitt"]
---

One flake for all my machines: laptops, servers, Raspberry Pis and install
  media, with NixOS, Home Manager and the services they run.

This is a personal configuration, published to read and borrow from. It is not
a framework. Secrets and private infrastructure live in a separate private
repository, so the hosts only evaluate with access to that flake input.

## Features

- **Fleet in one flake**: x86_64, aarch64 and armv6l hosts, declared in
  [`flake.nix`](https://github.com/pschmitt/nixos-config/blob/HEAD/flake.nix) and composed from shared profiles. See
  [Architecture](https://github.com/pschmitt/nixos-config/blob/HEAD/docs/architecture.md).
- **Public and private split**: this repository holds no secrets. SOPS files,
  OpenTofu and private modules come from the `nixos-config-private` input.
- **Home Manager as a NixOS module**: one home config tree, fed with host facts
  through a bridge. See [home-manager/README.md](https://github.com/pschmitt/nixos-config/blob/HEAD/home-manager/README.md).
- **Desktop profiles** for Hyprland and GNOME under
  [`profiles/features/desktop`](https://github.com/pschmitt/nixos-config/blob/HEAD/profiles/features/desktop).
