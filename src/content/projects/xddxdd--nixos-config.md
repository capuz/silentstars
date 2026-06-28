---
repo: "xddxdd/nixos-config"
name: "nixos-config"
description: "Lan Tian's NixOS Configuration"
url: "https://github.com/xddxdd/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [73]
stars: 120
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-11-03T01:41:53Z"
lastCommitAt: "2026-06-28T01:45:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 45
maintainers: ["xddxdd"]
openGraphImageUrl: "https://opengraph.githubassets.com/f61eef8dd1bb7c05b02113083cd4d68cdd805cf5dceba0155f26f2715f4b5142/xddxdd/nixos-config"
---

# Lan Tian's NixOS Configuration

This repository holds the configuration files for all my NixOS systems.

## Features

- [Full system root-on-tmpfs](nixos/minimal-components/impermanence.nix), using [impermanence](https://github.com/nix-community/impermanence)
- [Nftables instead of iptables](nixos/minimal-components/firewall/nft-rules.nix)
- Secret management with [sops-nix](https://github.com/Mic92/sops-nix)
- [QEMU user mode emulation for most architectures](https://github.com/xddxdd/nur-packages/blob/master/modules/qemu-user-static-binfmt.nix)
- [Nix Flakes with Nixpkgs patching](flake.nix)
- Additional kernel modules from [my NUR repo](https://github.com/xddxdd/nur-packages)
  - [NVIDIA driver patching](nixos/minimal-components/kernel.nix)
- [Post-Quantum Cryptography](https://github.com/xddxdd/nur-packages/blob/master/modules/openssl-oqs-provider.nix) and [GOST](https://github.com/xddxdd/nur-packages/blob/master/modules/openssl-gost-engine.nix) support for OpenSSL
- [Custom Helper Library](helpers/default.nix) (`LT`) that provides a wide range of functions and constants for managing the configuration.
- [DNS Management](dns/) using a custom Nix-to-DNSControl converter.

##…
