---
repo: "scottgigawatt/plundarr"
name: "plundarr"
description: "Plunder your favorite shows and movies 🎬🏴‍☠️ — PIA + WireGuard + PF, and Gluetun VPN to keep the Royal Navy off yer tail! 🚢🔒"
readmeQualityOk: true
url: "https://github.com/scottgigawatt/plundarr"
homepage: "https://scottgigawatt.github.io/plundarr/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [45, 38]
topics: ["docker", "docker-compose", "private-internet-access", "radarr", "sonarr", "vpn", "wireguard", "flaresolverr", "gluetun", "qbittorrent"]
stars: 29
forks: 0
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2024-06-01T22:09:09Z"
lastCommitAt: "2026-10-07T10:30:32Z"
lastReleaseAt: "2026-10-04T21:02:14Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 67
maintainers: ["renovate[bot]", "scottgigawatt"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/809164051/c15b6b96-237a-4762-8b6e-0d57af7c3541"
discussionCount: 2
---

# Plundarr 🏴‍☠️

Plundarr is a generated, ready-to-run Docker Compose media stack built from the services you select. Maraudarr—the Docker Compose project generator included in this repository—turns that selection into one complete deployment under `dist/<preset>/`, with a commented `docker-compose.yml`, an editable `.env`, and the selected service configuration directories.

Each generated Compose project works with Docker Compose and Synology Container Manager. Routine configuration stays in the deployment's `.env`; you do not need to assemble Compose fragments by hand.

## Understand Plundarr and Maraudarr

The repository has two deliberately separate parts:

- **Maraudarr is the Docker Compose project generator.** It resolves the selected preset, services, and dependencies; writes and validates the complete Compose project under `dist/<preset>/`; preserves existing environment values and application state; and exits.
- **Plundarr is the generated Docker Compose deployment.** It remains on your host and runs the selected services from `dist/<preset>/` after Maraudarr has finished.

VPN-enabled presets use [Privateerr](https://github.com/scottgigawatt/privateerr) to generate…
