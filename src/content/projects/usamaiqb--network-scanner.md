---
repo: "usamaiqb/network-scanner"
name: "network-scanner"
description: "Fast, privacy-focused network scanner to discover devices on your local network"
readmeQualityOk: true
url: "https://github.com/usamaiqb/network-scanner"
homepage: "https://usamaiqb.github.io/network-scanner/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["android", "ip-scanner", "jetpack-compose", "network-discovery", "network-scanner", "port-scanner", "privacy", "fdroid", "wifi", "shizuku"]
stars: 278
forks: 32
openIssues: 4
closedIssues: 27
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2026-01-30T14:17:17Z"
lastCommitAt: "2026-11-26T13:01:33Z"
lastReleaseAt: "2026-07-14T20:00:52Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 35
maintainers: ["usamaiqb", "dependabot[bot]", "lanlan3292"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146020261/cefd82a4-685a-4fff-b5d0-98a965be34d1"
---

# Network Scanner

A fast, privacy-focused network scanner for Android

Find every device on your local network, with its IP address, hostname, open ports, and device type. No ads, no tracking, no root required, and it works fully offline.

Download the latest APK from the [Releases](https://github.com/usamaiqb/network-scanner/releases) page.

## Screenshots

## Features

### Discovery

- **Ping sweep** - Parallel ICMP sweep with TCP fallback for devices that block ICMP
- **ARP cache** - Picks up devices without sending any traffic
- **mDNS / Bonjour** - Finds AirPlay, Chromecast, printers, SSH, SMB, HomeKit, and more
- **SSDP / UPnP** - Fetches friendly name, manufacturer, and model number
- **NetBIOS** - Resolves hostnames and workgroups for Windows and Samba devices
- **Port heuristics** - Identifies Cast-enabled TVs and similar devices when other methods come up empty
- **Shizuku / root** - Optionally reads the ARP table with shell or root privileges, so MAC addresses also show on Android 10+
