---
repo: "antoniocosta/unifi-openwrt"
name: "unifi-openwrt"
description: "OpenWrt access points as UniFi access points"
readmeQualityOk: true
url: "https://github.com/antoniocosta/unifi-openwrt"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["openwrt", "openwrt-package", "ubiquiti", "unifi", "protocol"]
stars: 156
forks: 14
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-11-13T02:59:57Z"
lastCommitAt: "2026-11-27T12:57:56Z"
lastReleaseAt: "2026-11-21T01:53:26Z"
status: "newborn"
tags: []
healthScore: 89
undervaluedScore: 30
maintainers: ["antoniocosta", "dohun0310", "rbferreira"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e5299b12dad8df0fc4c318ed786d968d1af82486cfaf20d02b2b2edaf9fd9a5/antoniocosta/unifi-openwrt"
---

# unifi-openwrt: OpenWrt access points as UniFi access points

Keep your old **OpenWrt** access point useful in a **UniFi** network, long after its maker stopped
supporting it. A small daemon on the AP speaks the UniFi inform protocol, so a UniFi controller adopts
the AP as a UniFi model of your choice (default: UAP-AC-Pro, `U7PG2`), pushes its settings to it, and
shows its clients, radios and stats like those of its own APs: One network, one place to manage it.

If you like this or find it useful, support the project by buying me a coffee.

## Why this repo exists

I own a Google OnHub (TP-Link TGR1900). It is still a capable 3x3 Wi-Fi 5 access point, but Google
ended its support in January 2023: No more updates, no more management through its app, and the
advice to recycle it. OpenWrt brings the software back up to date. My home network, though, is
UniFi, and a UniFi controller only manages Ubiquiti's own access points, so the OnHub would have
stayed a second network with its own settings, its own clients and no roaming between the two. I
don't accept that working hardware should become e-waste, or a second-class citizen in a network,
because its maker moved on.
