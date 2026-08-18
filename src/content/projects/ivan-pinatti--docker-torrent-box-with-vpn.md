---
repo: "ivan-pinatti/docker-torrent-box-with-vpn"
name: "docker-torrent-box-with-vpn"
description: "Torrent / Usenet / NZB container stack with VPN (ProtonVPN) to be run by Docker Compose"
readmeQualityOk: true
url: "https://github.com/ivan-pinatti/docker-torrent-box-with-vpn"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["docker", "radarr", "jackett", "lazylibrarian", "lidarr", "mylar", "nzb", "nzbget", "nzbhydra2", "protonvpn"]
stars: 110
forks: 18
openIssues: 0
closedIssues: 14
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-04-25T01:48:07Z"
lastCommitAt: "2026-08-18T04:08:27Z"
lastReleaseAt: "2023-04-30T20:59:28Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["ivan-pinatti", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e611847cf3cb107ec08a76dea5c7051b9727bd9d1fa987106c1fdcbadfa342b5/ivan-pinatti/docker-torrent-box-with-vpn"
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
[Growth Controls](https://github.com/ivan-pinatti/docker-torrent-box-with-vpn/blob/HEAD/docs/GROWTH_CONTROLS.md).

## Support the Project

I am partnered with Proton VPN. If you are planning to sign up for Proton VPN
and want to support this project, please consider using my partner link or…
