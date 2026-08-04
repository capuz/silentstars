---
repo: "xddxdd/nixos-config"
name: "nixos-config"
description: "Lan Tian's NixOS Configuration"
readmeQualityOk: true
url: "https://github.com/xddxdd/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [73]
stars: 126
forks: 3
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-11-03T01:41:53Z"
lastCommitAt: "2026-08-04T06:09:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 45
maintainers: ["xddxdd"]
openGraphImageUrl: "https://opengraph.githubassets.com/20c694af5b78580c95676b9fe3f84ffecec9f94ea4b8ebcfed4be508c26c1bee/xddxdd/nixos-config"
---

# Lan Tian's NixOS Configuration

This repository holds the configuration files for all my NixOS systems.

## Features

- [Full system root-on-tmpfs](https://github.com/xddxdd/nixos-config/blob/HEAD/nixos/minimal-components/impermanence.nix), using [impermanence](https://github.com/nix-community/impermanence)
- [Nftables instead of iptables](https://github.com/xddxdd/nixos-config/blob/HEAD/nixos/minimal-components/firewall/nft-rules.nix)
- Secret management with [sops-nix](https://github.com/Mic92/sops-nix)
- [QEMU user mode emulation for most architectures](https://github.com/xddxdd/nur-packages/blob/master/modules/qemu-user-static-binfmt.nix)
- [Nix Flakes with Nixpkgs patching](https://github.com/xddxdd/nixos-config/blob/HEAD/flake.nix)
- Additional kernel modules from [my NUR repo](https://github.com/xddxdd/nur-packages)
  - [NVIDIA driver patching](https://github.com/xddxdd/nixos-config/blob/HEAD/nixos/minimal-components/kernel.nix)
- [Post-Quantum Cryptography](https://github.com/xddxdd/nur-packages/blob/master/modules/openssl-oqs-provider.nix) and [GOST](https://github.com/xddxdd/nur-packages/blob/master/modules/openssl-gost-engine.nix) support for OpenSSL
- [Custom Helper…
