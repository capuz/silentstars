---
repo: "loss-and-quick/Kasumi-Proxy"
name: "Kasumi-Proxy"
description: "System-level transparent proxy for rooted Android (Magisk/KernelSU/APatch module) and Linux/Windows desktop (Tauri 2) — Xray-core and sing-box driven by one shared Rust backend and a React UI."
readmeQualityOk: true
url: "https://github.com/loss-and-quick/Kasumi-Proxy"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [49, 47]
topics: ["android-root", "kernelsu", "magisk", "magisk-module", "proxy", "react", "rust", "sing-box", "tauri", "transparent-proxy"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-06T15:21:57Z"
lastCommitAt: "2026-10-13T10:57:35Z"
lastReleaseAt: "2026-07-13T06:26:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["loss-and-quick", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1baba22300d4f6743f5b663a0155231ce4a7fb25223f2ee426607fb9773b1b1/loss-and-quick/Kasumi-Proxy"
discussionCount: 0
---

System-wide transparent proxy on Xray-core / sing-box for <b>rooted Android</b>, <b>Linux</b> and <b>Windows</b>.

- **Android:** a Magisk / KernelSU / APatch module. It runs the core as a root daemon and routes
  traffic with `iptables` / `ip rule`, not through `VpnService`.
- **Desktop:** a Tauri 2 app that brings up a real TUN. Proxy-only, system-proxy and PAC modes
  are also available.

Both run the same Rust backend and the same React UI.

> [!NOTE]
> This is a fork of [vincentng295/Magic_V2Ray](https://github.com/vincentng295/Magic_V2Ray). Most
> of the code was written by AI, so review it before you trust it.

## Features

- **Two cores.** Xray-core and sing-box, picked per profile. Supported protocols are VLESS, VMess,
  Trojan, Shadowsocks, SOCKS, HTTP, WireGuard, Hysteria2, TUIC, AnyTLS, Naive and ShadowTLS.
- **Import.** Subscription URLs, share links, mixed text and QR codes.
- **Subscriptions.** Groups of servers that can be updated in one tap, or in the background
  with no UI open.
- **Happ-compatible subscriptions.** The provider's title, traffic and expiry, announcements and
  update interval are read from subscription headers and `#key:` directives, decoded by…
