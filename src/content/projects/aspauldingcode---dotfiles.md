---
repo: "aspauldingcode/.dotfiles"
name: ".dotfiles"
description: "A Universal .dotfiles Configuration with Nix Flakes - over-engineered by Alex Spaulding."
readmeQualityOk: true
url: "https://github.com/aspauldingcode/.dotfiles"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [62, 20]
stars: 9
forks: 0
openIssues: 0
closedIssues: 184
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-05T06:21:04Z"
lastCommitAt: "2026-08-23T04:10:18Z"
lastReleaseAt: "2025-09-20T19:28:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 73
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32722d3f9d5911ed990c63644c917046e3c81432240ca4fd5d0087fb9979e5b5/aspauldingcode/.dotfiles"
---

# Alex Spaulding's Dotfiles (Dendritic Nix)

Personal, declarative system configuration built by **Alex Spaulding (aspauldingcode)** using Nix Flakes.

## Fleet

Host presence via private heartbeats (no public IPs). Badges: online ≤30m · stale ≤24h · else offline. Phone (`oneplus6t`) reports when a controller can reach it over adb. See [docs/fleet-status.md](https://github.com/aspauldingcode/.dotfiles/blob/HEAD/docs/fleet-status.md) and [docs/nix-android.md](https://github.com/aspauldingcode/.dotfiles/blob/HEAD/docs/nix-android.md).

## Clone Location

Following the [dendritic pattern](https://github.com/mightyiam/dendritic), this repository should be cloned to the system configuration directory for your platform. The config is system-wide and shared across all users — editing requires admin privileges.

| Platform               | Path                         |
| ---------------------- | ---------------------------- |
| **NixOS**              | `/etc/nixos/`                |
| **macOS (nix-darwin)** | `/etc/nix-darwin/.dotfiles/` |

```bash
# macOS
sudo git clone git@github.com:aspauldingcode/.dotfiles.git /etc/nix-darwin/.dotfiles

# NixOS
sudo git clone…
