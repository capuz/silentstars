---
repo: "passeway/sing-box"
name: "sing-box"
description: "sing-box is a versatile multi-protocol proxy service framework designed for lightweight and flexible network proxy and data transfer."
originalDescription: "sing-box 是一个多协议代理服务框架的瑞士军刀，设计用于轻量、灵活的网络代理与数据传输任务。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/passeway/sing-box"
homepage: "https://sing-box-sigma.vercel.app"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [72, 28]
stars: 72
forks: 16
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-11T10:14:03Z"
lastCommitAt: "2026-10-05T10:47:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 23
maintainers: ["passeway"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57b64c2898fe262d19a05449901400d396a88136b07cb118334e1a5ff796010/passeway/sing-box"
---

# sing-box Multi-Protocol Management Script

Supports Debian, Ubuntu (systemd) and Alpine (OpenRC), supports AMD64, ARM64. Currently uses official sing-box **1.14.2**, Snell inbound requires version 1.14 or newer.

## One-Click Installation

```bash
bash <(curl -fsSL sing-box-sigma.vercel.app)
```

Alpine first run:

```sh
apk add --no-cache bash curl ca-certificates
bash -c 'bash <(curl -fsSL sing-box-sigma.vercel.app)'
```

## Protocols

| Protocol | Server Configuration | Client Output |
| --- | --- | --- |
| Hysteria2 | Random UDP port, self-signed TLS | Clash/Mihomo, Surge, share link |
| VLESS Reality | Random TCP port, Vision | Clash/Mihomo, share link |
| AnyTLS | Random TCP port; reuse Reality public key as password per project convention | Clash/Mihomo, Surge, share link |
| Shadowsocks | Independent outbound inbound, 2022-blake3-aes-128-gcm | Clash/Mihomo, Surge, share link |
| Snell | v6, mode=default, independent random PSK | Surge |

ShadowTLS has been removed. The Clash/Mihomo section in export files uses JSON format (also valid YAML), copied separately from Surge rows and share links. Node names include protocol/inbound labels to avoid conflicts. TLS uses…
