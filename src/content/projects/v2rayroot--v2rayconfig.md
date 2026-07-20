---
repo: "V2RayRoot/V2RayConfig"
name: "V2RayConfig"
description: "Automatically fetch free V2Ray configs from Telegram channels."
readmeQualityOk: true
url: "https://github.com/V2RayRoot/V2RayConfig"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["collector", "v2ray", "v2ray-vpn", "free-config", "proxy", "shadowsocks", "torjan", "vless", "vmess", "internet"]
stars: 163
forks: 18
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-04-26T07:12:14Z"
lastCommitAt: "2026-07-20T06:34:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/b799b2d8ae7bce23024be072caa3d077a75c27991999322502dfe946debbc868/V2RayRoot/V2RayConfig"
discussionCount: 1
---

# V2RayConfig

This project automatically fetches V2Ray configurations from Telegram channels every 30 minutes using GitHub Actions and posts the best config to @V2RayRootFree.

**[نسخه فارسی (Persian)](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/README.fa.md)**

## Configuration Files

| Protocol      | Link                           |
|---------------|--------------------------------|
| VLESS         | [`Config/vless.txt`](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/Config/vless.txt)         |
| VMess         | [`Config/vmess.txt`](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/Config/vmess.txt)         |
| Shadowsocks   | [`Config/shadowsocks.txt`](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/Config/shadowsocks.txt) |

## Telegram Channels

The list of Telegram channels is dynamically updated and stored in [`telegram_channels.json`](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/telegram_channels.json). Channels that become invalid are automatically removed from this list.

## Channel Statistics

The file [`Logs/channel_stats.json`](https://github.com/V2RayRoot/V2RayConfig/blob/HEAD/Logs/channel_stats.json) contains statistics for each channel,…
