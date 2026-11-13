---
repo: "3inker/v2ray-subscription"
name: "v2ray-subscription"
description: "Automatic collector and checker of free VLESS • VMess • Trojan • Shadowsocks • Hysteria2"
originalDescription: "Автоматический сборщик и проверщик бесплатных VLESS • VMess • Trojan • Shadowsocks • Hysteria2"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/3inker/v2ray-subscription"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hysteria2", "proxy", "proxy-list", "shadowsocks", "trojan", "v2ray", "v2ray-list", "v2ray-subscribe", "vless", "vmess"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-07T18:35:18Z"
lastCommitAt: "2026-11-13T05:40:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]", "3inker"]
openGraphImageUrl: "https://opengraph.githubassets.com/0548826c2b930d939f05ee9fe38f92e4b0641fcfeca5daa28ca81559122420fd/3inker/v2ray-subscription"
---

# 🚀 Free V2Ray Subscription

**Automatic collector and checker of free configs**

Supported protocols: **VLESS • VMess • Trojan • Shadowsocks • Hysteria2**

---

## 📊 Current statistics

| Subscription | Count | Link |
| --- | --- | --- |
| **All RU** | `60` | [all_ru.txt](https://raw.githubusercontent.com/3inker/v2ray-subscription/main/subs/all_ru.txt) |
| **All not RU** | `484` | [all_not_ru.txt](https://raw.githubusercontent.com/3inker/v2ray-subscription/main/subs/all_not_ru.txt) |
| **Total working** | `544` | — |

---

## ✨ How it works

1. **Collection** — the script downloads configs from the sources listed in `sources.txt`. Both plain-text lists of links and **base64 subscriptions** (decoded automatically) are supported.
2. **Deduplication** — profiles with the same server (`uuid + host + port`) are removed, even if they have different names. This is the same as the "Remove duplicates" button in VPN clients.
3. **Checking** — each unique server is checked with a TCP connection. Non-working ones are discarded.
4. **Sorting** — working configs are split into two files by region:
   - 🇷🇺 **all_ru.txt** — servers with Russia in the name
   - 🌍 **all_not_ru.txt** — all…
