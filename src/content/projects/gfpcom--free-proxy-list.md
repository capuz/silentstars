---
repo: "gfpcom/free-proxy-list"
name: "free-proxy-list"
description: "🚀 The Best Free HTTP, SOCKS4/SOCKS5, SSL,SS/SSR Proxy List,V2Ray/XRay(Vmess/Vless) Configs, Tuic, Wireguard, Hyeseria, mtproto(Telegram),Trojan-Go/Trojan-GFW Servers  - 🔄 Updated Every 30 Minutes⏰"
readmeQualityOk: true
url: "https://github.com/gfpcom/free-proxy-list"
homepage: "https://getfreeproxy.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["proxy-checker", "proxy-list", "free-proxy-list", "shadowsocks", "v2ray", "vless", "vmess", "http-proxy", "socks-proxy", "socks4-proxy"]
stars: 430
forks: 60
openIssues: 2
closedIssues: 8
watchers: 9
contributors: 8
recentReleases: 0
createdAt: "2025-02-02T09:52:31Z"
lastCommitAt: "2026-10-25T09:00:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 37
maintainers: ["github-actions[bot]", "dependabot[bot]", "rcloak"]
openGraphImageUrl: "https://opengraph.githubassets.com/93e0d7e77920bbfef3f87d29c99f507906e284ea5cb7505d727845662ca7cdac/gfpcom/free-proxy-list"
---

# 🌎 GetFreeProxy (GFP): Free Proxy List

**GetFreeProxy (GFP)** is an open-source project that automatically aggregates and validates free proxies from across the internet. Our goal is to provide a fresh, reliable, and comprehensive list of public proxies for developers, researchers, and anyone in need of proxy services.

The lists are updated hourly, ensuring you always have access to the most current proxies available.

## 🔄 How It Works

This project runs on a simple yet powerful automated workflow:

1.  **Fetch**: A Go application fetches proxy lists from various sources defined in the `sources/` directory. It supports dynamic URL generation (e.g., based on the current date) and can handle different data formats like raw text, Base64, etc.
2.  **Parse & Normalize**: The fetched data is parsed and normalized into a standard proxy format. The system is extensible, allowing new parsers and data transformers to be added easily.
3.  **Deduplicate & Store**: All unique proxies are stored in memory.
4.  **Generate Lists**: The application generates clean, protocol-specific proxy lists (e.g., `http.txt`, `vless.txt`) and saves them in the `list/` directory.
5.  **Update Badges**:…
