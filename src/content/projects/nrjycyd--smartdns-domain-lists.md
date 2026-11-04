---
repo: "nrjycyd/smartdns-domain-lists"
name: "smartdns-domain-lists"
description: "Automatically update SmartDNS-format domain lists"
originalDescription: "自动更新 SmartDNS 格式域名列表"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nrjycyd/smartdns-domain-lists"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2025-05-07T13:18:18Z"
lastCommitAt: "2026-11-04T02:57:52Z"
lastReleaseAt: "2026-11-04T02:58:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 82
maintainers: ["actions-user", "nrjycyd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee81f3ce0011063ea2dbbc3136f25b692ce2a722ba8f57ec891bb1c8fd573c2a/nrjycyd/smartdns-domain-lists"
---

## Project Introduction

This is a project that automatically updates domain lists. It periodically fetches the latest domain category lists from the Loyalsoldier [v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat) repository and processes them into a format SmartDNS can use directly.

🔔 Last updated: 2026-11-04 10:57:52

| Rule Type | Count | Change Since Last Update |
|:---------|------:|:----------|
| DIRECT | 109545 |  |
| PROXY | 27353 |  |
| REJECT | 197249 |  |
| APPLE_CN | 165 |  |
| GOOGLE_CN | 112 |  |
| PCDN | 35 |  |
| HTTPDNS | 101 |  |

## Main Features

1. **Automatic scheduled updates**: Runs automatically every day at 7:00 Beijing time.

2. **Syncing upstream domain lists**:

   - Direct list (direct-list): includes domestic [direct domains](https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/direct-list.txt), [Apple China domains](https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/apple-cn.txt), and [Google China domains](https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/google-cn.txt)
   - Proxy list (proxy-list): includes the [proxy domain…
