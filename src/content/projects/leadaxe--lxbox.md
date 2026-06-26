---
repo: "Leadaxe/LxBox"
name: "LxBox"
description: "L×VPN — sing-box client for Android"
url: "https://github.com/Leadaxe/LxBox"
language: "Dart"
languages: ["Dart"]
languagePcts: [88]
stars: 89
forks: 3
openIssues: 8
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-11T19:58:53Z"
lastCommitAt: "2026-06-26T23:40:21Z"
lastReleaseAt: "2026-05-06T23:17:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 33
maintainers: ["Leadaxe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0951788b3a9c5d12dd7ee5dcc7236cb4f0d42beef005eb4d2201e7a96e9a0ef4/Leadaxe/LxBox"
---

# L×Box

Android VPN client powered by [sing-box-lx](https://github.com/Leadaxe/sing-box-lx) — a [sing-box](https://sing-box.sagernet.org/) fork with AmneziaWG 2.0 and native XHTTP. Multi-subscription, smart routing, built-in speed test.

**[Download latest release](https://github.com/Leadaxe/LxBox/releases/latest)** | **[Документация на русском](README_RU.md)**

---

## Screenshots

</p>
</p>
</p>
</p>

---

## Features

<details>
<summary><strong>Servers & Subscriptions</strong> — manage proxy sources in one place</summary>

Add servers by subscription URL, direct proxy link, WireGuard URI/INI, Amnezia `vpn://` link, or raw sing-box JSON outbound. Smart-paste dialog auto-detects format and previews the content. Enable/disable subscriptions without deleting. Offline rehydrate — nodes restored from body cache after app restart. Per-subscription settings for detour servers.

- **10 protocols**: VLESS, VMess, Trojan, Shadowsocks, Hysteria2, **TUIC v5**, **NaïveProxy**, SSH, SOCKS, WireGuard (incl. **AmneziaWG / AWG 2.0** — `awg://` URI, AmneziaWG `.conf`, **Amnezia `vpn://` links** (v2.0.3), JSON)
- Formats: Base64, Xray JSON Array (chained proxy), plain text, raw sing-box JSON
-…
