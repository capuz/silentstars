---
repo: "aleks-sidorenko/nix-config"
name: "nix-config"
description: "Dendritic NixOS config built on den:  multihost, multiuser, with nixos and darwin hosts"
readmeQualityOk: true
url: "https://github.com/aleks-sidorenko/nix-config"
homepage: "https://www.sidorenko.me/"
language: "Nix"
languages: ["Nix"]
languagePcts: [84]
topics: ["disko", "gpg", "impermanence", "linux", "nix", "nixos", "pass", "flake", "gaming", "media-server"]
stars: 7
forks: 0
openIssues: 10
closedIssues: 27
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-17T17:17:53Z"
lastCommitAt: "2026-11-26T12:57:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 75
maintainers: ["aleks-sidorenko", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08f3b9d6d90d1568188249833d90ebc8e004e119b0e87316187bc1784f60e3f9/aleks-sidorenko/nix-config"
---

# nix-config

Personal NixOS configuration built on [den](https://den.denful.dev), the
aspect-oriented framework for the [dendritic pattern](https://github.com/mightyiam/dendritic).
It runs a home server, the VMs that test it in CI, and a Mac workstation.

## Highlights

- **Aspects, not hosts.** Every file under `modules/` is a flake-parts module
  that [import-tree](https://github.com/denful/import-tree) loads; each feature
  is an aspect that hosts and roles include.
- **Generated `flake.nix`.** Each module declares its own inputs through
  [flake-file](https://github.com/denful/flake-file); CI fails if the flake is stale.
- **Impermanent root.** The btrfs root is wiped on every boot, and each service
  declares the state it keeps.
- **Homelab.** A media stack behind an nginx ingress on the tailnet, a
  Minecraft server, and offsite backups with restic.
- **Secrets.** SOPS with age keys derived from each host's SSH host key.
- **Tested end to end.** Eval tests, parity checks against the previous tree,
  and a full install test for every VM host, all in CI.
