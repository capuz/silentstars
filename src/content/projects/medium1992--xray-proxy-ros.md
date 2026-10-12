---
repo: "Medium1992/xray-proxy-ros"
name: "xray-proxy-ros"
description: "Simple XRAY container that accepts links for RouterOS"
readmeQualityOk: true
url: "https://github.com/Medium1992/xray-proxy-ros"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-01-03T13:40:22Z"
lastCommitAt: "2026-10-12T11:14:58Z"
lastReleaseAt: "2026-10-12T04:57:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 57
maintainers: ["Medium1992", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf2ecdb3c589b197f252b3c208c1f68fd5f5b166265d0b973811e8404857763f/Medium1992/xray-proxy-ros"
discussionCount: 1
---

[English](https://github.com/Medium1992/xray-proxy-ros/blob/HEAD/README.md) | [Russian](https://github.com/Medium1992/xray-proxy-ros/blob/HEAD/README_RU.md) | [Telegram](https://t.me/+96HVPF3Ww6o3YTNi)

# xray-proxy-ros

> Multi-arch Docker container for **MikroTik RouterOS** based on [Xray-core](https://github.com/XTLS/Xray-core). It accepts a proxy link through ENV, generates modular Xray JSON config, and can work as a Fake-IP DNS server for RouterOS routing scenarios.

## ✨ Features

- **Multi-arch image**: `amd64`, `arm64`, `arm/v7`, `arm/v5`.
- **Self-built core on a current Go**: Xray-core is compiled from source with the newest stable Go toolchain rather than downloaded as an official release archive. `latest` follows the most recent Xray-core release, prereleases included; `alpha` follows upstream `main` and is rebuilt every 12 hours.
- **Proxy link parser** via `LINK`: `vless://`, `vmess://`, `trojan://`, `ss://`, `hy2://` / `hysteria2://`, `wireguard://` / `wg://`.
- **Modern Xray transports** including TCP, WS, HTTPUpgrade, gRPC, XHTTP, HTTP/2, KCP, QUIC and HTTP/3 where supported by the link.
- **Fake-IP DNS mode** by default: for every DNS request the container…
