---
repo: "mralinp/zlt-x28-openwrt"
name: "zlt-x28-openwrt"
description: "Optimized, modern OpenWrt for the ZLT X28 5G CPE (MT6890) with local SMS/voice for AI projects"
readmeQualityOk: true
url: "https://github.com/mralinp/zlt-x28-openwrt"
language: "C"
languages: ["C"]
languagePcts: [72]
topics: ["firmware", "openwrt", "passwall2", "x28", "mt6890", "5g-cpe", "4g", "5g", "cpe", "tozed"]
stars: 20
forks: 5
openIssues: 39
closedIssues: 184
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-20T00:45:59Z"
lastCommitAt: "2026-11-09T00:55:09Z"
lastReleaseAt: "2026-10-27T16:45:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 52
maintainers: ["mralinp"]
openGraphImageUrl: "https://opengraph.githubassets.com/28b8aa7f1238b4be9941dd62a449bbdc90344560e80a50c1180d3c5a437220c7/mralinp/zlt-x28-openwrt"
---

# X28 OpenWrt

**A native OpenWrt 23.05 for the ZLT X28 5G CPE, with WireGuard, OpenVPN, L2TP, PPTP and Passwall2 built in and a signed `opkg` package feed built for its kernel: recovery-first, built in the open, running on a real unit.**

-orange)

[Status](#status) · [Quick start](#quick-start) · [VPN and Passwall2](#vpn-and-passwall2) · [Package feed](#package-feed-opkg) · [Roadmap](https://github.com/mralinp/zlt-x28-openwrt/blob/HEAD/docs/ROADMAP.md) · [How it works](#how-it-works) · [Changelog](https://github.com/mralinp/zlt-x28-openwrt/blob/HEAD/CHANGELOG.md) · [Tests](https://github.com/mralinp/zlt-x28-openwrt/blob/HEAD/docs/TESTING.md) · [Docs](https://github.com/mralinp/zlt-x28-openwrt/blob/HEAD/docs/README.md) · [Contributing](#contributing)

> [!WARNING]
> **Your device, your risk.** The X28 is usually someone's only internet connection. Installing the native image
> writes its NAND over the MediaTek download agent. It has been done on **two tested units** (one X28, one X28 PRO).
> **Use the [x28-flasher](https://github.com/mralinp/x28-flasher) application for everything:** backup, root access,
> flashing and the change of boot order to slot A. Do not flash, edit `misc`…
