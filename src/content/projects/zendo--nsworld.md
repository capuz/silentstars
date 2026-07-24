---
repo: "zendo/nsworld"
name: "nsworld"
description: "Welcome to NixOS world ❄️"
readmeQualityOk: true
url: "https://github.com/zendo/nsworld"
language: "Nix"
languages: ["Nix"]
languagePcts: [81]
topics: ["nixos", "emacs", "nix", "flake-parts", "dendritic"]
stars: 34
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-12-19T13:48:28Z"
lastCommitAt: "2026-07-24T06:07:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 52
maintainers: ["zendo"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b4bf4bf8046107a68166b51f21579bc405ed1e1b2786357f986a2870e844a97/zendo/nsworld"
---

# Installation

```shell
mkfs.fat -F32 /dev/nvme0n1p3
mkswap /dev/nvme0n1p4
swapon /dev/nvme0n1p4
bcachefs format /dev/nvme0n1p5
mount /dev/nvme0n1p5 /mnt
mkdir /mnt/efi
mount /dev/nvme0n1p1 /mnt/efi
nixos-generate-config --flake --root /mnt

disko -m disko hosts/rmt/disko-bcachefs.nix
nixos-generate-config --no-filesystems --flake --root /mnt

nmtui / cfdisk
sudo -i / passwd
nixos-anywhere \
  # --disko-mode mount \
  # --generate-hardware-config nixos-generate-config ./hardware-configuration.nix \
  --no-substitute-on-destination \
  --flake .#rmt \
  root@192.168.122.25

nixos-install \
  --no-root-passwd \
  --option substituters "https://mirror.sjtu.edu.cn/nix-channels/store" \
  --flake .#host
```

[SrvOS](https://github.com/nix-community/srvos)

[Mic92](https://github.com/Mic92/dotfiles)

# Nix Commands

```shell
# Developer Environments
nix develop --no-write-lock-file github:nix-community/nix-environments#openwrt
nix flake init -t github:MordragT/nix-templates#tauri
```

# Nix Lang

[Nix one pager](https://github.com/tazjin/nix-1p)
