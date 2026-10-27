---
repo: "RyanGibb/nixos"
name: "nixos"
description: "btw i use nix"
readmeQualityOk: true
url: "https://github.com/RyanGibb/nixos"
language: "Nix"
languages: ["Nix", "Emacs Lisp"]
languagePcts: [66, 21]
stars: 13
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-02-22T16:19:51Z"
lastCommitAt: "2026-10-27T09:17:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 70
maintainers: ["RyanGibb"]
openGraphImageUrl: "https://opengraph.githubassets.com/660489c5f3e133fe77eec802b1935b8affc8b7b15b445299dd64bf86b5fca9eb/RyanGibb/nixos"
---

# NixOS Configuration

My personal Nix and NixOS configuration for reproducible, declarative systems and environments across multiple hosts.
This is a personal configuration with limited applicability to others, though some patterns may be useful for reference.
Common self-hosting services have been extracted to a separate project, [Eilean](https://github.com/RyanGibb/eilean-nix).

## Usage

### NixOS

See the [NixOS manual](https://nixos.org/manual/nixos/stable/#ch-installation) for how to install NixOS.

1. Clone this repository to `/etc/nixos/` on a NixOS system.
2. Set up the host configuration in `/etc/nixos/hosts/<hostname>/`.
3. Deploy the host with `nixos-rebuild switch`.

### Remote Deployment

[`deploy-rs`](https://github.com/serokell/deploy-rs) can be used to update remote hosts via SSH with `deploy .#hostname`.

### Home Manager

For non-NixOS systems, you can use Home Manager standalone:

1. Install [Nix](https://nixos.org/download/) and [enable flakes](https://nixos.wiki/wiki/flakes#Other_Distros.2C_without_Home-Manager).
2. Clone this repository and follow the [Home Manager manual](https://nix-community.github.io/home-manager/index.xhtml#sec-install-standalone).
3.…
