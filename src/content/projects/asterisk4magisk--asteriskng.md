---
repo: "Asterisk4Magisk/AsteriskNG"
name: "AsteriskNG"
description: "Android Xray GUI client."
readmeQualityOk: true
url: "https://github.com/Asterisk4Magisk/AsteriskNG"
homepage: "https://asterisk4magisk.github.io/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 282
forks: 14
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-05-17T01:15:44Z"
lastCommitAt: "2026-10-21T20:00:33Z"
lastReleaseAt: "2026-05-31T16:22:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 28
maintainers: ["whalechoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e5fba15279643513ce6b5a8a3ab4da08ad53f1c58ceb5b4fa43daa260f76cca/Asterisk4Magisk/AsteriskNG"
discussionCount: 1
---

English | [简体中文](https://github.com/Asterisk4Magisk/AsteriskNG/blob/HEAD/README_zh_CN.md) | [Русский](https://github.com/Asterisk4Magisk/AsteriskNG/blob/HEAD/README_ru.md) | [Tiếng Việt](https://github.com/Asterisk4Magisk/AsteriskNG/blob/HEAD/README_vi.md)

# AsteriskNG

Android Xray GUI client.

## Telegram Channel

[Asterisk4Magisk](https://t.me/Asterisk4Magisk)

## Run Modes

### VPN Service

- Works without root permission.
- Uses Android `VpnService`.

### TPROXY(ROOT)

- Runs the local Xray executable directly with libsu.
- Uses iptables and policy routing for transparent proxy traffic.

### TUN2SOCKS(ROOT)

- Runs the local Xray executable directly with libsu.
- Uses `hev-socks5-tunnel` to create a TUN device and send traffic to the Xray SOCKS5 inbound.

### BPF2SOCKS(ROOT)

- Runs the local Xray executable directly with libsu.
- Uses `bpf2socks` to capture traffic and send it to the Xray SOCKS5 inbound.
- Availability depends on eBPF support in the device kernel.

### asteriskd

- Watches local IPv4/IPv6 addresses and tethering interfaces, then refreshes the relevant iptables rules or BPF maps.
- Cleans up networking rules owned by the active ROOT mode when the service…
