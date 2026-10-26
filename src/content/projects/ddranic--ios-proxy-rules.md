---
repo: "ddranic/ios-proxy-rules"
name: "ios-proxy-rules"
description: "Auto-generated iOS proxy rules for Shadowrocket, Surge, Loon, Stash, sing-box and Clash."
readmeQualityOk: true
url: "https://github.com/ddranic/ios-proxy-rules"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["clash", "ios", "loon", "shadowrocket", "stash", "surge", "sing-box", "v2fly"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T18:30:18Z"
lastCommitAt: "2026-10-26T18:06:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5770a6293eae879f1eac4b8e23241e06667c222b5aa6c20f8af3053cb6eee19c/ddranic/ios-proxy-rules"
---

# ios-proxy-rules

Auto rule generator that converts `v2fly` source lists into iOS rule formats.

## Platforms

- Shadowrocket (`.list`)
- Loon (`.list`)
- Surge (`.list`)
- Clash / Stash (`.yaml`)
- sing-box (`.srs`)

## How to Use

> [!IMPORTANT]  
> You don't need to run the generator yourself. Use these auto-updated direct links for your proxy platform.

Example for Shadowrocket:

*   **YouTube GEOSITE** `https://raw.githubusercontent.com/ddranic/ios-proxy-rules/main/geosite/shadowrocket/youtube.list`
*   **China GEOIP:** `https://raw.githubusercontent.com/ddranic/ios-proxy-rules/main/geoip/shadowrocket/cn.list`

> [!TIP]
> Browse all rules: [/geosite](https://github.com/ddranic/ios-proxy-rules/blob/HEAD/geosite) (domains) · [/geoip](https://github.com/ddranic/ios-proxy-rules/blob/HEAD/geoip) (IP ranges)

## Run

```bash
go run ./cmd/rulegen -geosite dlc.dat -geoip geoip.dat
```
