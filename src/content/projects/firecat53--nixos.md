---
repo: "firecat53/nixos"
name: "nixos"
description: "NixOS configs. Flakes, multiple machines, ZFS on root, disko."
readmeQualityOk: true
url: "https://github.com/firecat53/nixos"
homepage: "https://git.firecat53.me/firecat53/nixos"
language: "Nix"
languages: ["Nix"]
languagePcts: [94]
topics: ["nix", "nixos"]
stars: 34
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-25T23:13:02Z"
lastCommitAt: "2026-10-31T15:58:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 62
maintainers: ["firecat53"]
openGraphImageUrl: "https://opengraph.githubassets.com/a527e3cc7017845136520a553abe8fb5f7057e20ca3a50ea5725976ec8eaa599/firecat53/nixos"
---

# NixOS configurations

> NOTE: Code moved to https://git.firecat53.me/firecat53/nixos. Issues and PRs
> still accepted here for now. Github repo maintained as a read-only mirror.

## Machines

* Laptop `laptop`
* Homeserver `homeserver`
* Backup server `backup`
* VPS cloud server `vps`
* Office secondary/spare desktop `office`
* Examples:
    + Flake install w/ home-manager and sops.
        - Encrypted or unencrypted `base-btrfs` or `base-zfs`
    + Bare minimum flake install for testing. `base-minimal`
* Installer/rescue ISO `hosts/installer/iso` - custom auto-build monthly into
  /mnt/downloads/iso for use with the trusty-boot-key project.
* Stage-1 install target `minimal` (`hosts/installer/minimal`) - bootable, no
  sops, no home-manager. Gets a bare-metal rebuild far enough along to run the
  real config. Its `hardware-configuration.nix` is a placeholder, regenerated
  during the install. See
  [Installing locally](#installing-locally-on-a-new-machine-using-the-iso-installer).

### Emergency restore kit

The trusty-boot-key USB carries the ISO plus the `nixos/`, `dotfiles/` and
`shared/` trees, refreshed by `flash_drive_update.sh`.

Any secrets on the drive are all…
