---
repo: "jessfraz/global-nix"
name: "global-nix"
description: "Global nix configuration for my desktop and laptops."
readmeQualityOk: true
url: "https://github.com/jessfraz/global-nix"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [64, 25]
stars: 66
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-07T18:01:45Z"
lastCommitAt: "2026-10-29T05:48:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 45
maintainers: ["jessfraz", "jessfraz-global-nix-updater[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c63e7c0eae05bedf0e919ca3584fc724cc5fb5b9951fc0bb22cfb3520285280/jessfraz/global-nix"
---

# global-nix

NixOS, nix-darwin and Home Manager configuration for `macinator`, `macmini`
(Apple Silicon) and `system76` (x86_64 Linux).

Usernames, paths and services are hard-coded for these machines. Adapt them before
using this configuration elsewhere. For a first Nix setup, start with a small
package flake before managing a whole host.

## Setup

Install Nix with the [Determinate installer](https://github.com/DeterminateSystems/nix-installer).
Run these commands from this checkout on the matching host.

On macOS, build and activate once to bootstrap `darwin-rebuild`:

```sh
nix build .#darwinConfigurations.macinator.system
sudo ./result/sw/bin/darwin-rebuild switch --flake .#macinator
```

For later rebuilds, use `sudo darwin-rebuild switch --flake .#macinator`.
Replace `macinator` with `macmini` for the mini.

On NixOS:

```sh
sudo nixos-rebuild switch --flake .#system76
```

`nix store gc` removes unused store paths.

Linux starts Tailscale automatically and applies the Tailscale SSH setting at
startup. A new machine still needs its initial `tailscale up` login and tailnet
policy permission for SSH.

Linux installs Ghostty and runs Rex and the agent worker as systemd user…
