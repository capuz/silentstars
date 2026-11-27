---
repo: "kubokot-tech/razvilka"
name: "razvilka"
description: "Keenetic / Netcraze + Entware: foreign traffic via VPN, Russian traffic direct, kill switch and web UI"
originalDescription: "Keenetic / Netcraze + Entware: иностранный трафик через VPN, российский напрямую, kill switch и веб-морда"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/kubokot-tech/razvilka"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T11:20:20Z"
lastCommitAt: "2026-11-27T12:52:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 21
maintainers: ["kubokot-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1a0d13055d810a91d54376635f85f836df576af5dc09512dec65265e2983d81/kubokot-tech/razvilka"
---

**Traffic router for Keenetic and Netcraze routers:** Russian traffic goes direct, foreign traffic goes through VPN.

Razvilka works through Entware and uses the VPN already configured on the router. For a specific site or device, you can choose a different route.

The router selects the route by the destination IPv4 address, taking into account the rule for the device. A Russian site's video may load from a foreign server — in that case the page and the video will travel different paths. In the panel you can check each address and add an exception.

## What you need in advance

- Keenetic or Netcraze with Entware and shell access as root. For installation from a computer, SSH is needed (usually port `222`).
- A VPN client with a Linux network interface. Suitable options include WireGuard and AmneziaWG (`wg*`, `nwg*`, `opkgtun*`), OpenVPN, or sing-box in TUN mode. For AmneziaWG in Entware you can use [awg-manager](https://github.com/hoaxisr/awg-manager).
- The interface must exist during installation. If it does not respond yet, you can finish the installation. Razvilka will start directing traffic to it once the connection is restored.
