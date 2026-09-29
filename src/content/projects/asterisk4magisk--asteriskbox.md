---
repo: "Asterisk4Magisk/AsteriskBOX"
name: "AsteriskBOX"
description: "A sing-box GUI client for Android, support VPN Service, TPROXY(ROOT), TUN(ROOT), eBPF(ROOT), TUN2SOCKS(ROOT) and BPF2SOCKS(ROOT)"
readmeQualityOk: true
url: "https://github.com/Asterisk4Magisk/AsteriskBOX"
homepage: "https://asterisk4magisk.github.io/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 149
forks: 10
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-27T23:32:03Z"
lastCommitAt: "2026-09-29T08:09:57Z"
lastReleaseAt: "2026-08-09T17:43:30Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 35
maintainers: ["whalechoi", "grill-glitch"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcb032281e4995dcd47b3f493a9abcad98cae1e629159aa368f08185a9987f35/Asterisk4Magisk/AsteriskBOX"
discussionCount: 2
---

English | [简体中文](https://github.com/Asterisk4Magisk/AsteriskBOX/blob/HEAD/README_zh_CN.md)

# AsteriskBOX

An Android sing-box GUI client.

## Telegram Channel

[Asterisk4Magisk](https://t.me/Asterisk4Magisk)

## Run Modes

### VPN Service

- Works without root permission.
- Uses Android `VpnService`.

### TPROXY(ROOT)

- Runs the local sing-box executable directly with libsu.
- Uses iptables and policy routing for transparent proxy traffic.

### TUN(ROOT)

- Runs the local sing-box executable directly with libsu.
- Uses `auto_route` and `auto_redirect` in the sing-box TUN inbound to manage routing.

### eBPF(ROOT)

- Runs the local sing-box executable directly with libsu.
- Uses the sing-box eBPF inbound to capture traffic.
- Availability depends on eBPF support in the device kernel.

### TUN2SOCKS(ROOT)

- Runs the local sing-box executable directly with libsu.
- Uses `hev-socks5-tunnel` to create a TUN device and send traffic to the sing-box SOCKS5 inbound.

### BPF2SOCKS(ROOT)

- Runs the local sing-box executable directly with libsu.
- Uses `bpf2socks` to capture traffic and send it to the sing-box SOCKS5 inbound.
- Availability depends on eBPF support in the device kernel.…
