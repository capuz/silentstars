---
repo: "dengmeiluan/ticket-monitoring"
name: "ticket-monitoring"
description: "✈️ Self-hosted multi-channel airfare price monitoring: detailed fare collection from five platforms → DingTalk image-text push → four-layer strong alerts when targets are met. Domestic and international routes (five-continent destinations) share the same collect-evaluate-push pipeline; data stays on your machine, all configuration is in the web UI, open source and free."
originalDescription: "✈️ 自托管的多渠道机票价格监控：五平台明细采集 → 钉钉图文推送 → 达标四层强提醒。国内航线与国际航线（五洲目的地）同一套采集-判定-推送链路；数据留在本机，配置全在网页，开源免费。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dengmeiluan/ticket-monitoring"
homepage: "https://dengmeiluan.github.io/ticket-monitoring/site/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["crawler", "dingtalk", "flight", "playwright", "price-monitoring", "python", "self-hosted", "ticket"]
stars: 349
forks: 45
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-09-15T08:41:43Z"
lastCommitAt: "2026-10-30T10:22:54Z"
lastReleaseAt: "2026-10-23T05:15:34Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 26
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/42ac1181982f83a18c6e1219a5ffe3e2e0ba1b2aa113e811e3910b37987f5fb8/dengmeiluan/ticket-monitoring"
---

# ✈️ ticket-monitoring 机票监控

> Self-hosted multi-channel airfare price monitoring: detailed fare collection from five platforms → DingTalk image-text push → four-layer strong alerts when targets are met.
> Domestic and international routes (five-continent destinations) share the same collect-evaluate-push pipeline.
> Data stays on your machine, all configuration is in the web UI, open source and free.

**[🎪 Online demo, open and play](https://dengmeiluan.github.io/ticket-monitoring/site/)** · [English README](https://github.com/dengmeiluan/ticket-monitoring/blob/HEAD/README_EN.md) · [Download release packages (Windows / Linux / macOS)](https://github.com/dengmeiluan/ticket-monitoring/releases)

> Narrow-screen note: the push sample below is a monospace code block; on phones, swipe left and right inside the block to see full lines.

```
❌ All below target｜Recent Shanghai→Urumqi 09/25 nonstop gap ￥120
├─ #### ✈️ Shanghai→Urumqi 11/05
│    > ⏱ 16:12 🎯Real hit 🟩Broke line 🟨Borderline Above line
│    Nonstop **￥2470**　Line ￥1900　Gap ￥570（30%）
│    China Eastern MU5678 12:30→17:05
│    > Via Xi'an, 2:15 layover ｜ Economy
│    🟦🟦🟦⬜⬜
│    > 💡 Nonstop 30% above line, keep watching…
