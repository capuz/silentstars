---
repo: "alexpevzner/sane-airscan"
name: "sane-airscan"
description: "Scanner Access Now Easy - universal driver for eSCL (Apple AirScan) and WSD"
readmeQualityOk: true
url: "https://github.com/alexpevzner/sane-airscan"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 369
forks: 63
openIssues: 28
closedIssues: 250
watchers: 12
contributors: 47
recentReleases: 0
createdAt: "2019-10-08T11:20:35Z"
lastCommitAt: "2026-09-07T08:35:10Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 85
undervaluedScore: 32
maintainers: ["alexpevzner", "ktheticdev", "yegord"]
openGraphImageUrl: "https://opengraph.githubassets.com/01175e497fa1c0fbb6a3262f4b70997288a82043970d3cf3517ee689e4d32d4c/alexpevzner/sane-airscan"
discussionCount: 39
---

# sane-airscan -- SANE backend for AirScan (eSCL) and WSD document scanners

Similar to how most modern network printers support "driverless" printing,
using the universal vendor-neutral printing protocol, many modern network
scanners and MFPs support "driverless" scanning.

Driverless scanning comes in two flavors:
* Apple **AirScan** or **AirPrint scanning** (official protocol name is eSCL)
* Microsoft **WSD**, or **WS-Scan** (term WSD means "Web Services for Devices)

This backend implements both protocols, choosing automatically between them.
It was successfully tested with many devices from **Brother**, **Canon**,
**Dell**, **Kyocera**, **Lexmark**, **Epson**, **HP**, **OKI**, **Panasonic**,
**Pantum**, **Ricoh**, **Samsung** and **Xerox** both in WSD and eSCL modes.

For eSCL devices, Apple maintains [a comprehensive list](https://support.apple.com/en-us/HT201311)
of compatible devices, but please note, this list contains not only scanners and MFP,
but pure printers as well.

This backend doesn't require to install and doesn't conflict with
vendor-provided proprietary software like ScanGear from Canon, HPLIP from HP
and so on.

### Features

1. One backend for two different…
