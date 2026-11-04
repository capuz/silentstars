---
repo: "yys9253462-gif/hysteria2-installer"
name: "hysteria2-installer"
description: "Hysteria 2 (Hy2) full-featured production-grade one-click automated deployment and management script, supporting port hopping, Salamander obfuscation, and multi-client node export"
originalDescription: "Hysteria 2 (Hy2) 全功能生产级一键自动化部署与管理脚本，支持端口跳跃、Salamander混淆与多客户端节点导出"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yys9253462-gif/hysteria2-installer"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 40
forks: 22
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-18T03:04:49Z"
lastCommitAt: "2026-11-04T02:57:56Z"
lastReleaseAt: "2026-09-27T22:11:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 41
maintainers: ["yys9253462-gif"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfc7d379848724a105ac6b6a4ec0132973a4aafc6f0e6a7bda05fe0479662d82/yys9253462-gif/hysteria2-installer"
---

# Hysteria 2 One-Click Deployment and Management Script

**Hysteria 2** one-click deployment script for the official server, with a built-in Web console, multi-user management, and cluster integration, optimized for high packet loss and UDP QoS environments.

## ✨ Features

- **Hysteria 2 main protocol**: official binaries (amd64 / arm64 / armv7), port hopping enabled by default (UDP 20000-40000) and Salamander obfuscation; certificates support self-signed, existing certificates, or automatic Let's Encrypt issuance for a domain.
- **Backup channels (optional, one-click start/stop via web)**:
  - **VLESS-Reality** (TCP): borrows certificates from major vendors for the handshake, no domain required;
  - **VMess-WS-TLS**, **VLESS Encryption** (post-quantum key exchange), **AnyTLS**: require a domain and a trusted certificate;
  - **TUIC v5** (QUIC / UDP, carried by sing-box): requires a domain and a trusted certificate; the port is automatically selected from 41000-49999 (avoiding the port hopping range); cloud security groups must allow this UDP port.
  - Delivered in subscriptions alongside Hy2; Clash / sing-box use url-test to automatically pick the best option; when UDP is…
