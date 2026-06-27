---
repo: "Asterisk4Magisk/AsteriskNG"
name: "AsteriskNG"
description: "An Xray GUI client for Android, support VPN Service, TPROXY(ROOT) and TUN2SOCKS(ROOT)"
url: "https://github.com/Asterisk4Magisk/AsteriskNG"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 75
forks: 3
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-17T01:15:44Z"
lastCommitAt: "2026-06-27T06:22:09Z"
lastReleaseAt: "2026-05-31T16:22:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 37
maintainers: ["whalechoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2039c5d8a046ac00e8fddfbdb38b61b39ac812a976bd94c97a9ed1d091494d53/Asterisk4Magisk/AsteriskNG"
---

English | [简体中文](README_zh_CN.md)

# AsteriskNG

An Xray client for Android, powered by [Xray-core](https://github.com/XTLS/Xray-core), [AndroidLibXrayLite](https://github.com/2dust/AndroidLibXrayLite), and [hev-socks5-tunnel](https://github.com/heiher/hev-socks5-tunnel).

## Telegram Channel

[Asterisk4Magisk](https://t.me/Asterisk4Magisk)

## Features

- VPN Service, TPROXY(ROOT), and TUN2SOCKS(ROOT) run modes support
- VMess, VLESS, Trojan, Shadowsocks, Socks, HTTP, Hysteria2, WireGuard, strategy group, and chain proxy support
- v2rayNG, mihomo subscription format support
- Resource file management for `geoip.dat`, `geosite.dat`, `geoip-only-cn-private.dat`, and the Xray executable
- ROOT start-on-boot script generation through Magisk `service.d`
- MIUIX Compose UI

## Screenshots

</p>

## Run Modes

### VPN Service

- Works without root permission.
- Uses Android `VpnService`.
- Suitable for normal Android app-level VPN usage.

### TPROXY(ROOT)

- Requires root permission.
- Runs the local Xray executable directly with libsu.
- Uses iptables and policy routing for transparent proxy traffic.
- Uses the configured transparent proxy port as the Xray inbound.

### TUN2SOCKS(ROOT)…
