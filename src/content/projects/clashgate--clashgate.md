---
repo: "ClashGate/ClashGate"
name: "ClashGate"
description: "ClashGate — a simple, safe proxy server on the Mihomo core"
originalDescription: "ClashGate — a simple, safe proxy server on the Mihomo core"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ClashGate/ClashGate"
language: "Python"
languages: ["Python"]
languagePcts: [46]
topics: ["clash", "letsencrypt", "linux", "mihomo", "proxy", "systemd", "vpn", "vps"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-27T17:38:18Z"
lastCommitAt: "2026-11-19T12:01:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 52
maintainers: ["tryinggit", "ClashGate"]
openGraphImageUrl: "https://opengraph.githubassets.com/89fbda5e07172ede132de1a7a9eab80cab9f0224734433fcb12294e3f27fe17d/ClashGate/ClashGate"
---

## What it does

- **Install the server with one command**: deploy the Mihomo server on common Linux VPS with one click. After installation, it outputs a configuration that clients can use directly.
- **Two installation modes**:
  - No-certificate mode: only one server is needed. It automatically generates a VLESS Reality node, the fastest way to get started;
  - Automatic-certificate mode: also prepare a domain name. It automatically applies for and renews a Let's Encrypt certificate, and additionally provides an HTTPS management panel and a subscription link.
- **Three certificate methods**: port mode (verification via port 80), Cloudflare DNS (no need to open port 80), and manual upload of your own certificate. All can be switched at any time in the panel.
- **Multiple protocols**: VLESS Reality, Shadowsocks, Hysteria2, Snell v6, AnyTLS, TUIC, TrustTunnel, ShadowQUIC, Mieru, and Sudoku. Add them in the panel with a few clicks.
- **Subscription links**: Mihomo / Clash-family clients can import them directly. When nodes change, the client just updates the subscription; no manual configuration assembly is needed.
