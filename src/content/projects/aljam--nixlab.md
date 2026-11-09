---
repo: "aljam/nixlab"
name: "nixlab"
description: "Nixlab is a declarative, reproducible, GitOps-driven multi-machine homelab infrastructure managed entirely via a unified Nix flake."
readmeQualityOk: true
url: "https://github.com/aljam/nixlab"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
topics: ["flakes", "nix", "nixos", "linux", "nix-flake", "nix-flakes"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-28T10:52:56Z"
lastCommitAt: "2026-11-09T03:31:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["aljam", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d24f1cad9f0e878161bffa244e7961dfebf183bb45699806f9285ddc37f3e9b/aljam/nixlab"
---

# nixlab

Declarative NixOS infrastructure for a multi-server homelab.

- Nix flakes for reproducible hosts
- sops-nix and age for service-scoped secrets
- NixOS tests and GitHub Actions CI
- HAProxy on pfSense as the public reverse-proxy gateway
- Prometheus, Grafana, and node_exporter for observability

## Quick Start

```bash
git clone https://github.com/aljam/nixlab.git
cd nixlab

# Build a host (replace <hostname> with navi, oryx, r730, r730xd, or r820)
sudo nixos-rebuild switch --flake .#<hostname>

# Run all evaluations and tests
nix flake check
```

## Hosts

| Host | Role | Primary services |
|---|---|---|
| `navi` | Desktop / daily driver | Hyprland, gaming, emulation |
| `oryx` | Laptop / development | Development, portable workstation |
| `r730` | Storage / AI | ZFS, PostgreSQL, remote builds |
| `r730xd` | Media / applications | Jellyfin, servarr, Vaultwarden, Matrix, PeerTube, monitoring |
| `r820` | Edge / data | Reverse-proxy backends, Grafana, PostgreSQL, distributed builds |

## Service catalogue

| Area | Services |
|---|---|
| Media | Jellyfin, Seerr, Audiobookshelf, PeerTube |
| Downloads | Sonarr, Radarr, Prowlarr, Bazarr, Lidarr, qBittorrent, Autobrr,…
