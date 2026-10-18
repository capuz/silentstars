---
repo: "polaris-arch/Polaris"
name: "Polaris"
description: "A modern network proxy tool based on the sing-box core and the Tauri framework, focused on simplifying proxy control and connection management."
originalDescription: "基于 sing-box 内核以及Tauri框架的现代网络代理工具，专注于简化代理控制与连接管理。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/polaris-arch/Polaris"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 29]
topics: ["cross-platform", "desktop-app", "hysteria2", "network", "openconnect", "proxy", "proxy-client", "react", "rust", "sing-box"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-08-26T07:13:10Z"
lastCommitAt: "2026-10-18T08:08:07Z"
lastReleaseAt: "2026-10-01T07:20:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 42
maintainers: ["polaris-arch"]
openGraphImageUrl: "https://opengraph.githubassets.com/75369f60e05acb6077244135869429de8fd1e3350e9829182a05787642a37475/polaris-arch/Polaris"
---

# Polaris

**Simplified Chinese** · [English](https://github.com/polaris-arch/Polaris/blob/HEAD/README.en.md) · [Traditional Chinese](https://github.com/polaris-arch/Polaris/blob/HEAD/README.zh-TW.md) · [Русский](https://github.com/polaris-arch/Polaris/blob/HEAD/README.ru.md) · [فارسی](https://github.com/polaris-arch/Polaris/blob/HEAD/README.fa.md)

**Polaris** — a cross-platform network proxy client based on [sing-box-polaris](https://github.com/polaris-arch/sing-box-polaris). Tauri 2 (Rust + React).

## Features

| Area | Capability |
|---|---|
| Takeover method | TUN · system proxy / local port (desktop) |
| Routing | Smart / Global / Direct · custom rules · app routing · region routing (smart mode, including China-region access) |
| Common proxies | VLESS · VMess · Trojan · Hysteria 2 / 1 · TUIC · Shadowsocks · AnyTLS · Naive · Snell · SOCKS · HTTP · SSH · Tor[1](#tor-note) |
| Mesh access[2](#mesh-note) | WireGuard · Tailscale · WARP (WireGuard) · OpenConnect · OpenVPN · MASQUE[3](#masque-note) |
| DNS | FakeIP · DoH / DoT · node domain resolution racing |
| Network control | IPv6 toggle · browser DoH interception · WebRTC policy (TUN only) |
| Diagnostics | Connection…
