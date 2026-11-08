---
repo: "Iamhelloandyou/iptv-aggregator"
name: "iptv-aggregator"
description: "IPTV source aggregation - automatically collects, verifies, and updates domestic TV channels"
originalDescription: "IPTV源聚合 - 自动收集、验证、更新国内电视频道"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Iamhelloandyou/iptv-aggregator"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [67, 33]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-15T11:19:20Z"
lastCommitAt: "2026-11-08T14:14:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e356e2293e62efa9110f67c659c051aa79f4ba2cbce74290a2882969eddb29d/Iamhelloandyou/iptv-aggregator"
---

# 📺 IPTV Aggregated Sources

Automatically collects, verifies, and updates domestic TV channel sources. Checks for dead sources every hour and replaces them automatically.

## 🔗 M3U Playback URL

Add the following URL to your IPTV player:

```
https://iamhelloandyou.github.io/iptv-aggregator/output/iptv.m3u
```

## 📺 Channel List

- **CCTV**: CCTV1-17 (including CCTV5+)
- **Satellite TV**: Hunan, Zhejiang, Dongfang, Jiangsu, Beijing, Guangdong, Shenzhen, and 32 provincial satellite channels in total
- **Others**: Golden Eagle Cartoon, Kaka Kids, Xuandong Cartoon, Youman Cartoon

## 🛠 Technical Architecture

- Collects channels from 12+ public source repositories
- Automatically verifies stream availability and measures latency
- Selects the best sources to generate the M3U file
- GitHub Actions updates automatically every hour

## 📱 Recommended Players

| Platform | Player |
|------|--------|
| iOS / Apple TV | IPTV Pro / CloudStream |
| Android | TiviMate / OTT Navigator |
| Windows / Mac | VLC / PotPlayer / IINA |
| Smart TV | TiviMate / Dangbei Player |

## 🔄 Manual Update

Go to the [Actions](https://github.com/Iamhelloandyou/iptv-aggregator/actions) page and click "Run…
