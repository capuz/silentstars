---
repo: "vbu00/klick"
name: "klick"
description: "kl!ck — VPN client for Windows on the mihomo core: Remnawave/Marzban/3x-ui subscriptions, VLESS/Reality, Hysteria2, TUN, routing by sites and programs, Kill Switch"
originalDescription: "kl!ck — VPN-клиент для Windows на ядре mihomo: подписки Remnawave/Marzban/3x-ui, VLESS/Reality, Hysteria2, TUN, маршрутизация по сайтам и программам, Kill Switch"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/vbu00/klick"
homepage: "https://github.com/vbu00/klick/releases/latest"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 25]
topics: ["clash-meta", "hysteria2", "mihomo", "proxy-client", "reality", "remnawave", "tauri", "vless", "vpn", "windows"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-23T12:21:57Z"
lastCommitAt: "2026-11-06T13:16:54Z"
lastReleaseAt: "2026-10-25T17:20:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 68
maintainers: ["vbu00", "claude", "limeflash"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c6b434288b8cce3bbcd5d527533a45c3f98c5171d3ba7865383876306f41f86/vbu00/klick"
---

**VPN client for Windows, macOS, iPhone and iPad based on the [mihomo](https://github.com/MetaCubeX/mihomo) core**

Remnawave subscriptions · Marzban · 3x-ui · VLESS/Reality · Hysteria2 · TUIC · Trojan · Shadowsocks · WireGuard

[Download](https://github.com/vbu00/klick/releases/latest) · [Features](#что-умеет) · [Installation](#установка) · [macOS](#macos) · [iPhone and iPad](#iphone-и-ipad) · [Build](#сборка) · [Authors](#авторы) · [License](#лицензия)

---

kl!ck is a small window with one big button. Paste a subscription link — you get a list of servers, remaining traffic and expiry date; press the button — the computer goes through the VPN. You can route everything through the VPN, or only selected traffic: sites blocked in Russia, your own programs and sites.

The VPN is run by a Windows service, not the window: the window works without administrator rights, and it can be closed — the VPN and Kill Switch will keep working. Under the hood is **[mihomo](https://github.com/MetaCubeX/mihomo)** from MetaCubeX, the official release without changes.

## Screenshots

## Features

**Connections**
- **Subscriptions** over `https://` — Remnawave, Marzban, 3x-ui and compatible; response…
