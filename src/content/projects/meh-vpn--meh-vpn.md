---
repo: "MEH-VPN/MEH-VPN"
name: "MEH-VPN"
description: "Just connect with one click."
originalDescription: "به سادگی یک کلیک وصل بشید"
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/MEH-VPN/MEH-VPN"
homepage: "https://t.me/MEH_VPN_channel"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 72
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-30T14:00:46Z"
lastCommitAt: "2026-11-10T11:38:44Z"
lastReleaseAt: "2026-11-02T15:24:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["rzashakeri", "omid-io", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/40de3c22e12f67778efaf5939ae0a4313cf37e0558826b8ae65ee17b77963d90/MEH-VPN/MEH-VPN"
---

# MEH VPN

**Minimal V2Ray client for Android; one button, no settings.**

[Download latest version](https://github.com/MEH-VPN/MEH-VPN/releases/latest) · [English summary](#english-summary)

## What is MEH?

MEH is an Android app for connecting to V2Ray that fetches configs itself from several public lists: first its own list ([rzashakeri/v2ray-configs](https://github.com/rzashakeri/v2ray-configs)), then mhcfp and other public lists. It tests the servers and connects to the best options. The user just presses one button.

The connection core is written inside the app itself and does not depend on the Xray or sing-box binary. The only native part of the project is the `tun2socks` engine (a Go library).

## Features

- **One-button connection.** Fetching the server list, testing, and connecting are done automatically.
- **Two-stage test before connecting.** First a quick HTTP probe, then a real HTTPS test on port 443 inside the tunnel (Google, Instagram, X/Twitter, and the Telegram data center). Only healthy servers are selected.
- **Fallback server pool.** Up to 5 diverse servers (by subnet and SNI) are selected. If opening a connection to the active server fails, the app moves on…
