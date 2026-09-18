---
repo: "GeiserX/VPN-Bypass"
name: "VPN-Bypass"
description: "macOS menu-bar app for fine-grained VPN routing: bypass the VPN for chosen domains/services, force others through it, or (Custom mode) route each domain/subnet out a specific egress — direct, a specific VPN, an HTTP/SOCKS5 proxy, or a Tailscale peer. Includes a vpnb CLI."
readmeQualityOk: true
url: "https://github.com/GeiserX/VPN-Bypass"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["macos", "menu-bar-app", "networking", "split-tunneling", "swift", "vpn", "cisco", "corporate-vpn", "dns", "globalprotect"]
stars: 120
forks: 11
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-01-14T17:37:03Z"
lastCommitAt: "2026-09-18T08:26:57Z"
lastReleaseAt: "2026-01-19T11:15:43Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 36
maintainers: ["GeiserX", "ZLA964", "SebTardif"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1134420390/e3216c61-574b-46a1-bf44-1d648b15502f"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

</p>

<h1 align="center">VPN Bypass</h1>

  A macOS menu bar app for fine-grained control over what goes through your VPN. Route specific domains
  and services <em>around</em> the VPN, force only some things <em>through</em> it, or — in Custom mode —
  send each domain, service, or subnet out a route of your choice: direct, a specific VPN, an HTTP/SOCKS5
  proxy, or a Tailscale peer.
</p>

</p>

## Why?

Corporate VPNs often route all traffic through the tunnel, which can cause issues:

- **Performance**: Streaming and messaging apps become slow or buffer constantly
- **Broken features**: Chromecast, AirPlay, and location-based features fail
- **Unnecessary load**: Non-business traffic clogs the VPN tunnel
- **Privacy**: Personal services don't need to go through corporate infrastructure

VPN Bypass intelligently routes selected services directly to the internet while keeping business traffic secure through VPN.

## Features

- 🎯 **Menu bar app** — quick access to status, mode, and controls
- 🧭 **Three routing modes** — **Bypass** *(default)*: everything uses the VPN **except** the domains you list. **VPN Only**: the inverse — everything goes **direct** except the domains you…
