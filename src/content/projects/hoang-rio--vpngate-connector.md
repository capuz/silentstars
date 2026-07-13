---
repo: "hoang-rio/vpngate-connector"
name: "vpngate-connector"
description: "A VPN Gate client for Android base on OpenVPN client library, MS-SSTP Client, SoftEther VPN Client and VPN Gate public api"
readmeQualityOk: true
url: "https://github.com/hoang-rio/vpngate-connector"
homepage: "https://vpngate-connector.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["vpngate", "vpngate-client", "vpngate-android", "vpngate-connector", "openvpn", "openvpn-client", "softether", "softether-vpn-client"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-05-02T09:12:30Z"
lastCommitAt: "2026-07-13T06:37:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 81
undervaluedScore: 36
maintainers: ["hoang-rio"]
openGraphImageUrl: "https://opengraph.githubassets.com/0621f0f2b8657b5afdce923fd9c3ffa082b04c69ab6f321470490ee076db95cd/hoang-rio/vpngate-connector"
fundingLinks: ["GITHUB:https://github.com/hoang-rio"]
---

# VPN Gate Connector

## A VPN Gate Client for android

Supports multiple VPN protocols — **SoftEther VPN** (native implementation, no third-party client required), **OpenVPN**, **MS-SSTP**, and **L2TP/IPsec** (Android 12 and below only) — across both free and paid VPN Gate servers.

**Available in Google Play Store**

Free Version: https://play.google.com/store/apps/details?id=vn.unlimit.vpngate

Pro Version: https://play.google.com/store/apps/details?id=vn.unlimit.vpngatepro

# Protocol Support

| Protocol | Transport | Free Server | Paid Server |
|----------|-----------|:-----------:|:-----------:|
| SoftEther VPN | TCP | ✅ | ✅ |
| SoftEther VPN | UDP | 🚧 Planned | 🚧 Planned |
| OpenVPN | TCP | ✅ | ✅ |
| OpenVPN | UDP | ✅ | ✅ |
| MS-SSTP | TCP | ✅ | ✅ |
| L2TP/IPsec | — | ✅ ⚠️ | ✅ ⚠️ |

### SoftEther VPN
Native SoftEther VPN protocol implementation via the [SoftEther-Android-Module](https://github.com/hoang-rio/SoftEther-Android-Module) submodule (no third-party VPN client required).

**Authentication methods:**

| Method | Free Server | Paid Server |
|--------|:-----------:|:-----------:|
| Anonymous | ✅ | — |
| Hashed Password | ✅ | — |
| Plain Password (RADIUS) | — | ✅ |…
