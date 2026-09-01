---
repo: "DanielLavrushin/asuswrt-merlin-xrayui"
name: "asuswrt-merlin-xrayui"
description: "X-RAY Core UI interface for your ASUS Router"
readmeQualityOk: true
url: "https://github.com/DanielLavrushin/asuswrt-merlin-xrayui"
homepage: "https://daniellavrushin.github.io/asuswrt-merlin-xrayui/"
language: "Vue"
languages: ["Vue", "TypeScript", "Shell"]
languagePcts: [48, 27, 23]
topics: ["censorship-resistance", "merlin-firmware", "proxy", "reality", "vless", "vpn", "xray", "xray-core", "asus", "asus-routers"]
stars: 237
forks: 17
openIssues: 7
closedIssues: 74
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2024-10-20T00:38:07Z"
lastCommitAt: "2026-09-01T08:45:39Z"
lastReleaseAt: "2025-01-10T08:36:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 40
maintainers: ["DanielLavrushin", "xxhhlk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c38fb8498a1d059d89f3620eff9ea4f7efa3f4a128d51cd62da2540fd5cb505/DanielLavrushin/asuswrt-merlin-xrayui"
discussionCount: 3
---

# ASUSWRT Merlin XrayUI

This repository provides a lightweight and efficient UI to manage your [X-RAY Core](https://github.com/XTLS/Xray-core) services on routers running ASUSWRT-Merlin firmware.

[[english]](https://daniellavrushin.github.io/asuswrt-merlin-xrayui/en/install) [[русский]](https://daniellavrushin.github.io/asuswrt-merlin-xrayui/ru/install)

<details>
    <summary>Supported devices</summary>
    In general, all devices that can run Merlin-WRT firmware (`384.15` or later, `3006.102.1` or later) are supported. Below is the list of models where xrayui has been proven to work:

- RT-AC66U
- RT-AC68U
- RT-AC86U
- RT-AX56U
- RT-AX58U
- TUF-AX5400
- RT-AX92U
- RT-AX86U
- RT-AX88U
- GT-AX11000
- GT-AXE11000
- GT-AX6000
- RT-AX86U Pro
- RT-AX88U Pro
- GT-AX11000 Pro
- RT-BE88U

</details>

## Requirements

### SSH Access

Access your router via SSH to execute installation commands.

### Prerequisites

- [Merlin firmware](https://www.asuswrt-merlin.net/download) (`384.15` or later, `3006.102.1` or later)
- [Entware](https://github.com/Entware/Entware/wiki/Install-on-Asus-stock-firmware) installed
  - you can use built-in [amtm](https://diversion.ch/amtm.html) tool to install…
