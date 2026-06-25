---
repo: "bbigras/nix-config"
name: "nix-config"
description: "My personal nix config"
url: "https://github.com/bbigras/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [97]
topics: ["nixos", "nixos-configuration", "nix"]
stars: 274
forks: 6
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-07-19T23:54:18Z"
lastCommitAt: "2026-06-25T01:39:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 36
maintainers: ["bbigras", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d65bb863f0e2b27e195d32a657c9a74ffe66368441a263c63839d974a7d0a42/bbigras/nix-config"
---

# nix-config [![built with nix](https://builtwithnix.org/badge.svg)](https://builtwithnix.org) [![ci](https://github.com/bbigras/nix-config/actions/workflows/ci.yaml/badge.svg)](https://github.com/bbigras/nix-config/actions/workflows/ci.yaml)

WIP

# Features
- flakes
- deploy with deploy-rs
- use the zen Linux kernel
- use [nixos-hardware](https://github.com/NixOS/nixos-hardware)
- use [srvos](https://github.com/nix-community/srvos)
- Full disk encryption on laptop
- [emacs-init module](https://gitlab.com/rycee/nur-expressions/blob/master/hm-modules/emacs-init.nix) for home-manager. See `users/bbigras/dev/emacs.nix`
- overlays
  - emacs-overlay
  - nur
- split-dns with systemd-resolved (might be set in my privates files)
- tailscale

This is heavily based on https://github.com/lovesegfault/nix-config. Many files were copied directly from that repo.

Note that the license should include lovesegfault's copyright on many files. Not sure how to sort that yet.

## Build one host

```sh
nix build .#hosts.desktop --impure
```

## Deploy one host

```sh
deploy -s .#pixel6 -- --impure
```

## nix-on-droid (first time)

On the phone:

```sh
nix-shell -p openssh -p which

# get user and…
