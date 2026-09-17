---
repo: "looong-cat/luci-app-netbird"
name: "luci-app-netbird"
description: "LuCI app for the NetBird mesh-VPN client on OpenWrt / ImmortalWrt"
readmeQualityOk: true
url: "https://github.com/looong-cat/luci-app-netbird"
homepage: "https://luci-app-netbird.okk.sh"
language: "ucode"
languages: ["ucode", "JavaScript"]
languagePcts: [46, 27]
topics: ["immortalwrt", "luci", "luci-app", "mesh-vpn", "netbird", "openwrt", "vpn", "wireguard"]
stars: 45
forks: 6
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-14T16:49:11Z"
lastCommitAt: "2026-09-17T08:51:33Z"
lastReleaseAt: "2026-07-13T16:46:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 46
maintainers: ["looong-cat", "moallemi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1210682061/6a8ae67d-b3c7-44cd-b15e-32f0c6a6fb18"
---

</p>

# luci-app-netbird

**English** | [简体中文](https://github.com/looong-cat/luci-app-netbird/blob/HEAD/README.zh-cn.md)

> [!NOTE]
> Almost all of the code in this project was written through vibe coding. What is guaranteed is that every release is tested on real devices running different OpenWrt versions before it goes live. I also run this app on more than 10 OpenWrt devices, and it has become part of my own mesh networking infrastructure.

LuCI app for the [NetBird](https://netbird.io) mesh-VPN client on OpenWrt / ImmortalWrt — manage NetBird on OpenWrt from the router, no command line needed.
Compatible with OpenWrt / ImmortalWrt 22.03 / 23.05 / 24.x (`opkg`) and 25.x / current snapshots (`apk`).
OpenWrt 21.02 and older cannot be supported — their package feeds lack `ucode` / `rpcd-mod-ucode`, which the backend runs on.

## Features

Surfaces the NetBird client's capabilities in the LuCI UI:

- Connect / reconnect / disconnect / deregister; self-hosted management
- Automatic reconnect after transient outages — with clear authentication-failure reasons
- Binary version management — official release, package feed, or custom URL
- Firewall automation — NetBird zone and LAN ↔…
