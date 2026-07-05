---
repo: "krypt0nn/dotfiles"
name: "dotfiles"
description: "My NixOS configuration files"
readmeQualityOk: true
url: "https://github.com/krypt0nn/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
topics: ["nixos-config", "nixos-configuration", "nixos-dotfiles"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-17T19:32:59Z"
lastCommitAt: "2026-07-05T20:17:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 67
maintainers: ["krypt0nn"]
openGraphImageUrl: "https://opengraph.githubassets.com/49262523e67cfdc036eb45daed35823b7b06350654427350f3b2e89c1c4590f4/krypt0nn/dotfiles"
---

# NixOS system configuration

My own NixOS system configuration files.

## Installation

We will be cooking impermanent BTRFS NixOS setup here. The core idea is to make
four subvolumes on the disk itself - `root` for `/`, and `nix`, `persistent`
and `snapshots` for `/nix`, `/persistent` and `/snapshots` accordingly. Later
on we will be mounting those subvolumes to the directories inside of the `root`
subvolume using our nixos mounts config.

Value of the `root` subvolume will be overwritten each reboot, while all the
other subvolumes, being outside of `root`, will keep their state. In particular,
we're really interested in `persistent`, which will keep our documents and other
important data saved on the disk between reboots, and `snapshots` which will be
used to store `root` subvolume snapshots to keep track of previously written
files. This is needed to being able to restore some sensitive data if it was
forgotten to be persisted.

### 1. Create base partitions

Lookup main storage drive name with the `lsblk`. Then:

```bash
sudo -i

parted /dev/sda -- mklabel gpt
parted /dev/sda -- mkpart ESP fat32 1MB 512MB
parted /dev/sda -- set 1 esp on
parted /dev/sda -- mkpart primary 512MB…
