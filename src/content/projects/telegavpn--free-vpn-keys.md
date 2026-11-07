---
repo: "TelegaVPN/free-vpn-keys"
name: "free-vpn-keys"
description: "Open Xray-core & sing-box telemetry dataset, split-tunneling rulesets, CLI security auditor, and auto-verified VLESS Reality / Hysteria2 / Clash Meta feeds."
readmeQualityOk: true
url: "https://github.com/TelegaVPN/free-vpn-keys"
homepage: "https://freevpnkeys.com"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["clash-meta", "dpi-bypass", "hysteria2", "mihomo", "mtproto-proxy", "network-telemetry", "shadowsocks", "sing-box", "split-tunneling", "v2ray"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-13T22:46:56Z"
lastCommitAt: "2026-11-07T09:30:39Z"
lastReleaseAt: "2026-11-02T20:06:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 15
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b6714d42c6031519b2f6e0ec7b30a4d3b1086de874c15e4e02800ebaf843a010/TelegaVPN/free-vpn-keys"
---

# 🌐 Open Proxy Telemetry, Anti-DPI Rulesets & Verified Xray/Sing-Box Feeds

> **Last Automated Probe Snapshot:** `2026-11-07 09:30 UTC`
> **Documentation & Web Diagnostics:** [vpnkeys.me](https://vpnkeys.me) (RU / CIS Telemetry) • [freevpnkeys.com](https://freevpnkeys.com) (Global EN / FA / ZH)

An open-access dataset of continuously audited proxy configurations (`VLESS Reality`, `Hysteria2`, `Trojan`, `VMess`, `Shadowsocks`), split-tunneling routing rules, and CLI verification scripts. Every node in the pool is tested every 15–30 minutes via real `Xray-core` / `sing-box` handshakes from two independent vantage points (a domestic Russian ISP probe in Kemerovo for TSPU/whitelist resilience and a global probe for AI/streaming reachability).

---

## 🛠️ Repository Structure & Included Open-Source Utilities

| Path | Description |
| :--- | :--- |
| [`sub/happ/`](https://github.com/TelegaVPN/free-vpn-keys/blob/HEAD/sub/happ/) | Native JSON subscriptions with embedded Xray `leastPing` auto-balancers for **Happ** & **Incy** |
| [`sub/singbox/`](https://github.com/TelegaVPN/free-vpn-keys/blob/HEAD/sub/singbox/) | Structured `sing-box` (`SFA` / `SFI` / Linux daemon) outbounds with…
