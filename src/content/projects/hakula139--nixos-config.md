---
repo: "hakula139/nixos-config"
name: "nixos-config"
description: "My Nix environment, including the agent harness with autonomous agents."
readmeQualityOk: true
url: "https://github.com/hakula139/nixos-config"
language: "Nix"
languages: ["Nix", "Nushell"]
languagePcts: [67, 28]
topics: ["nixos", "nixos-configuration", "harness-engineering", "home-manager", "nix", "nix-darwin"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-29T14:55:42Z"
lastCommitAt: "2026-11-18T12:02:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 73
maintainers: ["hakula139", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15031c07dcc9ac37bae4a8b1bc8832f2bb4b8e938e5d0ac530f3a93af3b67bd2/hakula139/nixos-config"
---

# Nix Configuration

Personal Nix configuration for NixOS servers, WSL workstations, macOS, and development containers. A shared flake manages system configuration, Home Manager, custom packages, and agenix-encrypted secrets.

## Applying a configuration

After initial setup, run `nixsw` from the repository root in the managed Zsh environment to apply the local configuration. `nixdp` aliases `colmena apply` and accepts its flags: `nixdp` deploys every server, and `nixdp --on us-4` or `nixdp --on @cloudcone` selects hosts.

The servers build on target and substitute what GitHub CI pushes to Cachix, so wait for the CI run on the synced commit to finish before running `nixdp`.

Every proxy node in `data/servers.nix` is a deploy target. Switch the workstation's proxy client to another node before deploying a node, because activation can restart its nginx or Xray and cut off a session routed through it. When proxy credentials rotate, deploy the subscription host `us-4` first through an undeployed node, then refresh the client's subscription before deploying the rest.
