---
repo: "ivan-pinatti-labs/docker-torrent-box-with-vpn"
name: "docker-torrent-box-with-vpn"
description: "Torrent / Usenet / NZB container stack with VPN (ProtonVPN) to be run by Docker Compose"
readmeQualityOk: true
url: "https://github.com/ivan-pinatti-labs/docker-torrent-box-with-vpn"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [59, 26]
topics: ["docker", "radarr", "jackett", "lazylibrarian", "lidarr", "mylar", "nzb", "nzbget", "nzbhydra2", "protonvpn"]
stars: 113
forks: 18
openIssues: 25
closedIssues: 52
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-04-25T01:48:07Z"
lastCommitAt: "2026-11-03T10:29:24Z"
lastReleaseAt: "2023-04-30T20:59:28Z"
status: "thriving"
tags: ["needs_contributors", "funded", "under_pressure"]
healthScore: 93
undervaluedScore: 44
maintainers: ["renovate[bot]", "ivan-pinatti"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8a4976990efeeef78d12fcee782fb3da8c9fd740931f93f78832d5edeb81fb5/ivan-pinatti-labs/docker-torrent-box-with-vpn"
fundingLinks: ["GITHUB:https://github.com/ivan-pinatti", "PATREON:https://patreon.com/ivan_pinatti", "CUSTOM:https://www.paypal.me/ipinatti", "CUSTOM:https://www.buymeacoffee.com/ivan.pinatti"]
---

# Torrent, Usenet, NZB, VPN box by Docker Compose containers

The code on this repository is intended to be used to share media content with
various networks such as Torrent and Usenet while protecting your privacy
through a VPN. The main idea is to provide access where Internet censors and
content restriction apply. I totally discourage using this code for any piracy
reasons.

The stack can be run in any Linux box.\
Besides Jellyfin transcoding, all other apps and functions are super light and a
basic Raspberry Pi is able to handle the load.

All the apps are pre-configured and integrated by running `make bootstrap`.
From there you can start adding Indexers to the configurations and tinkering
to your liking.

Disk growth is managed with retention settings, bounded caches, and manual
pruning rather than host filesystem quotas, plus Grafana alerts if you enable
the optional monitoring stack. See
[Growth Controls](https://github.com/ivan-pinatti-labs/docker-torrent-box-with-vpn/blob/HEAD/docs/GROWTH_CONTROLS.md).

## Table of Contents

- [Requisites](#requisites)
- [Apps Included](#apps-included)
- [Legacy Apps](#legacy-apps)
- [Folders](#folders)
- [Usage](#usage)
  - [1. Get your…
