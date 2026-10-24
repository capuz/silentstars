---
repo: "soywod/dotfiles"
name: "dotfiles"
description: "🏠 Personal configuration managed by NixOS"
readmeQualityOk: true
url: "https://github.com/soywod/dotfiles"
language: "Nix"
languages: ["Nix", "Emacs Lisp"]
languagePcts: [68, 23]
topics: ["dotfiles", "nix", "nixos", "nix-configuration", "emacs", "wayland", "sway", "dunst", "bash"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-09-03T18:22:50Z"
lastCommitAt: "2026-10-24T08:20:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 72
undervaluedScore: 65
maintainers: ["soywod"]
openGraphImageUrl: "https://opengraph.githubassets.com/fad54c4c869c7f939f742167b414c3ff9b8c385d4344faa24d39af8dc831e761/soywod/dotfiles"
discussionCount: 0
---

# dotfiles

NixOS configurations, one per host in `hosts/`.

## Prerequisites

The GPG key is the only secret: it signs commits, decrypts the password store and, through its authentication subkey, serves as SSH key. On a machine holding the key:

```sh
gpg --quick-add-key <fingerprint> ed25519 auth
gpg --export-ssh-key <fingerprint>
```

Add the SSH public key to GitHub.

## Install

Boot the NixOS installer, connect to the network, mount the USB stick, then:

```sh
sudo nix --extra-experimental-features 'nix-command flakes' \
  run github:soywod/dotfiles#install -- /path/to/secret-key [--disk DEVICE] [--mount DIR] HOST
```

- `--disk`: the disk to wipe, defaults to the one declared in `hosts/HOST/disko.nix`
- `--mount`: where to mount the new system, defaults to `/mnt`

It partitions the disk (wiping it, after confirmation), asks once for a password used both as LUKS passphrase and user password, installs the system, then runs `bootstrap`. Root has no password: use `sudo`. Reboot when it is done.

For new hardware, first create `hosts/HOST/` with a `hardware-configuration.nix` generated from the installer by:

```sh
nixos-generate-config --no-filesystems --show-hardware-config…
