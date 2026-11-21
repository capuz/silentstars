---
repo: "lfourneen/nixos-lf"
name: "nixos-lf"
description: "⚒️ Personal NixOS workstation configuration with flakes and Home Manager, featuring an nftables firewall, transparent proxying with Mihomo (Clash), encrypted DNS with DNSSEC, and fail-closed egress."
readmeQualityOk: true
url: "https://github.com/lfourneen/nixos-lf"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [60, 32]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-04T05:45:34Z"
lastCommitAt: "2026-11-21T12:54:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["lfourneen"]
openGraphImageUrl: "https://opengraph.githubassets.com/65e7f39ea1f8bcef859b301e839a24d38ce07e06bdc31fabad80bd536fe5b825/lfourneen/nixos-lf"
---

English | [简体中文](https://github.com/lfourneen/nixos-lf/blob/HEAD/README_CN.md)

A personal NixOS system configuration managed with Nix flakes and Home Manager. It includes a Niri desktop, applications, development tools and encrypted storage.
The workstation network integrates an nftables firewall, system-wide transparent proxying with Mihomo (Clash), and encrypted DNS with DNSSEC validation.
The system output is `nixosConfigurations.lfour` for `x86_64-linux`, based on NixOS 26.05 with selected packages from Unstable.

## Network security and architecture

The host's nftables firewall controls IPv4 and IPv6 ingress, egress and guest forwarding. A systemd coordinator applies mode changes atomically. Entering proxy mode passes through C and opens B after listener, route, DNS and TUN health checks pass. A 60-second kernel lease ties B to fresh health checks. When the lease expires, nftables blocks ordinary application traffic, including existing flows. See [modes and enforcement](https://github.com/lfourneen/nixos-lf/blob/HEAD/docs/network.md#modes-and-enforcement).
