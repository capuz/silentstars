---
repo: "chvp/nixos-config"
name: "nixos-config"
description: "Configuration of my machines (main development happens at https://git.chvp.be/chvp/nixos-config these days)"
readmeQualityOk: true
url: "https://github.com/chvp/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [92]
stars: 87
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-02-08T14:32:11Z"
lastCommitAt: "2026-08-09T04:47:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 43
maintainers: ["chvp"]
openGraphImageUrl: "https://opengraph.githubassets.com/08e898ecbe826d29de3a48ebf3b08057b2b3698a2e44d1f2654cb69ca50bbd9d/chvp/nixos-config"
---

# NixOS config

## Secrets

Secrets should never be world-readable, even to users who are
logged in to one of the hosts managed by this configuration. These are
generally managed by agenix, allowing them to still be put in the nix
store.

## Setting up a new dev environment

* Add a shell to the devShells output in `flake.nix`.

* Execute `use_flake /path/to/repo#name-of-shell > .envrc` to initialize the `.envrc` file.

* Execute `direnv allow` to load the `.envrc` file which in turn loads your environment.

## Setting up ZFS

1. Create three partitions:
   * Boot
   * Swap
   * ZFS

   For example:
   ```shell
   sgdisk -n 0:0:+512MiB -t 0:EF00 -c 0:boot $DISK
   sgdisk -n 0:0:+32GiB -t 0:8200 -c 0:swap $DISK
   sgdisk -n 0:0:0 -t 0:BF01 -c 0:ZFS $DISK
   ```

2. Configure swap and boot as usual.

3. Create ZPool:
   ```shell
   zpool create -O mountpoint=none -O encryption=aes-256-gcm -O keyformat=passphrase rpool $ZFS_PART
   ```
   Leave out `-O encryption=aes-256-gcm -O keyformat=passphrase` if you don't want to fully encrypt the ZFS partition.

4. Create datasets:
   ```shell
   zfs create -o mountpoint=legacy rpool/local/root
   zfs snapshot rpool/local/root@blank
   zfs…
