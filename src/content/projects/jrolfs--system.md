---
repo: "jrolfs/system"
name: "system"
description: "❄️ Flake configuration for everything computer"
readmeQualityOk: true
url: "https://github.com/jrolfs/system"
language: "QML"
languages: ["QML", "Nix"]
languagePcts: [41, 30]
topics: ["dotfiles", "macos", "configuration", "home-manager", "nix", "nixos"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2016-09-13T16:43:25Z"
lastCommitAt: "2026-11-04T11:27:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 72
maintainers: ["jrolfs"]
openGraphImageUrl: "https://opengraph.githubassets.com/2694cb88ffff81ab7c08044c3d4ca61df79e2db414f0e0638005c47b50bd493f/jrolfs/system"
---

One Nix flake that configures every machine I own, macOS and Linux alike:
[nix-darwin](https://github.com/nix-darwin/nix-darwin) for the Macs,
[NixOS](https://nixos.org) for Linux, and
[home-manager](https://github.com/nix-community/home-manager) for the dotfiles
they share. It lives at `~/.config/system` on each machine.

## Getting started

A new machine is set up by [bootstrap](https://github.com/jrolfs/bootstrap),
which installs what the flake needs, clones this repository, signs in to
1Password for secrets, and runs the first switch. Every step is resumable, so
running it again picks up wherever it stopped.

### macOS

```sh
bash -c "$(curl -fsSL https://raw.githubusercontent.com/jrolfs/bootstrap/main/bootstrap.sh)"
```

It installs the Command Line Tools and [Lix](https://lix.systems), then Homebrew
for the apps that only ship as casks.

### NixOS

Boot the [NixOS installer](https://nixos.org/download/#nixos-iso) (`bootstrap
media write <iso>` makes the USB stick), set a password with `passwd` so you can
SSH in, then run:

```sh
nix --extra-experimental-features 'nix-command flakes' run github:jrolfs/bootstrap
```

On installer media it partitions the disk with…
