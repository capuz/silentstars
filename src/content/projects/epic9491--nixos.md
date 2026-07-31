---
repo: "epic9491/nixos"
name: "nixos"
description: "This is a mirror of https://codeberg.org/sensei/nixos"
readmeQualityOk: true
url: "https://github.com/epic9491/nixos"
homepage: "https://codeberg.org/sensei"
language: "Nix"
languages: ["Nix"]
languagePcts: [91]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T01:06:16Z"
lastCommitAt: "2026-07-31T06:28:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d8f84e984f14045667431ed9a3d37ce9feb9db3e31fdb17f8936e546c4916539/epic9491/nixos"
---

# NixOS configurations

Flake-based NixOS configurations for a fleet of servers, LXC containers, and workstations, with CI-gated, signature-verified GitOps deployment. Servers track the stable channel (26.05); workstations track unstable. All hosts build as `.#hostname`.

The primary host is **srv-n1**. Its configuration and the security layers behind it are documented at https://codeberg.org/sensei/nixos/wiki/srv-n1

This configuration is specific to one environment. Hostnames, usernames, disk layouts, mounts, and secrets will not transfer directly. Review every file before reusing any part of it.

## Table of contents

- [Repo structure](#repo-structure)
- [Hosts](#hosts)
- [Modules](#modules)
- [Why Quadlets](#why-quadlets)
- [Deployment pipeline](#deployment-pipeline)
- [Build commands](#build-commands)
- [Showcase](#showcase)
- [Installation](#installation)
- [Sponsor NixOS](#sponsor-nixos)
- [GitHub mirror](#github-mirror)

## Repo structure

- `/.forgejo`: CI workflows. Host builds, deploy gating, and Renovate.
- `/config`: application configuration files (ghostty, niri, waybar, etc.), deployed to `~/.config` through Home Manager.
- `/home`: Home Manager configurations.…
