---
repo: "ClashGate/ClashGate"
name: "ClashGate"
description: "ClashGate — a simple, safe proxy server on the Mihomo core"
originalDescription: "ClashGate — a simple, safe proxy server on the Mihomo core"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ClashGate/ClashGate"
language: "Python"
languages: ["Python", "Smarty", "Vue"]
languagePcts: [38, 24, 21]
topics: ["clash", "letsencrypt", "linux", "mihomo", "proxy", "systemd", "vpn", "vps"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-27T17:38:18Z"
lastCommitAt: "2026-11-11T19:25:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ad4f399f719432c0cb276bed07cf4ffd9a3eea153a822f6796d5e2007cdbf535/ClashGate/ClashGate"
---

## Design philosophy

Simple, safe, bridging the last mile of the Mihomo ecosystem.

## What it can do

- **One-click proxy server deployment**: a single command deploys the Mihomo server on common Linux VPSes, ready to use out of the box.
- **Built-in client subscription**: automatically provides configuration that can be imported directly into Mihomo / Clash-family clients, with no manual assembly.
- **Multiple protocols supported**: add VLESS Reality, Shadowsocks, Hysteria2, Snell v6, AnyTLS, TUIC, TrustTunnel, ShadowQUIC, Mieru, and Sudoku with one click.
- **Server-side traffic routing**: for custom outbound routing, replace it with your own Mihomo server configuration.
- **Multilingual interface**: the management panel can switch between 中文, English, Русский, and فارسی; installation and the command line support 中文 and English.

## One-click install

Supports common Linux distributions with systemd (Ubuntu / Debian / Rocky / Alma / Fedora / CentOS; requires root):

```bash
curl -fsSL https://raw.githubusercontent.com/ClashGate/ClashGate/main/install.sh | bash
```

## Common commands

Run `clashgate` directly to open the menu, or:

```text
clashgate [status | info | sub |…
