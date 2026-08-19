---
repo: "hoang-rio/vpngate-connector"
name: "vpngate-connector"
description: "A VPN Gate client for Android base on OpenVPN client library, MS-SSTP Client, SoftEther VPN Client and VPN Gate public api"
readmeQualityOk: true
url: "https://github.com/hoang-rio/vpngate-connector"
homepage: "https://vpngate-connector.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["vpngate", "vpngate-client", "vpngate-android", "vpngate-connector", "openvpn", "openvpn-client", "softether", "softether-vpn-client"]
stars: 35
forks: 6
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-05-02T09:12:30Z"
lastCommitAt: "2026-08-19T03:59:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 62
maintainers: ["hoang-rio"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa3f36ea3970b0d14d43e0c1a0d86447e25f0aaec2feb168110f7ce8e504aa10/hoang-rio/vpngate-connector"
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
| SoftEther VPN | UDP | ✅ | ✅ |
| OpenVPN | TCP | ✅ | ✅ |
| OpenVPN | UDP | ✅ | ✅ |
| MS-SSTP | TCP | ✅ | ✅ |
| L2TP/IPsec | — | ✅ ⚠️ | ✅ ⚠️ |

### SoftEther VPN
Native SoftEther VPN protocol implementation via the [SoftEther-Android-Module](https://github.com/hoang-rio/SoftEther-Android-Module) submodule (no third-party VPN client required).

Supports TCP and UDP (RUDP V1 + V2) transports. V2 uses ChaCha20-Poly1305 AEAD with automatic fallback to V1 on servers that don't support it.

**Authentication methods:**

| Method | Free Server | Paid Server |…
