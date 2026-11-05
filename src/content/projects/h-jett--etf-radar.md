---
repo: "H-Jett/etf-radar"
name: "etf-radar"
description: "Industry National Team ETF Radar · tracks ETFs and their shares held by Central Huijin, Huijin Asset Management, the National Council for Social Security Fund, and China Securities Finance Corporation (CSF), aggregated by industry (GitHub Pages static site, daily collection via GitHub Actions)"
originalDescription: "行业国家队 ETF 雷达 · 按行业追踪中央汇金/汇金资管/社保/证金持有的ETF与份额（GitHub Pages 静态站，Actions 每日自动采集）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/H-Jett/etf-radar"
homepage: "https://h-jett.github.io/etf-radar/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-23T03:10:07Z"
lastCommitAt: "2026-11-05T08:05:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a210de8962c6527117ca32bfa53a77750bb80239df8fd062f46ebe36c836ce9c/H-Jett/etf-radar"
---

# Industry National Team ETF Radar (GitHub Pages Edition)

Tracks China's "national team" (Central Huijin, Huijin Asset Management, the National Council for Social Security Fund, and China Securities Finance Corporation (中国证券金融)) by **industry / theme**, including the ETFs they hold, their shares, and changes in holding weight. **Purely static site, no server, no database**: GitHub Actions scrapes data on a daily schedule → generates JSON and commits it back to the repository → GitHub Pages hosts the frontend.

🔗 Online: **https://h-jett.github.io/etf-radar/**

> Inspired by [kitaki-Ciallo/etf-national-tracker](https://github.com/kitaki-Ciallo/etf-national-tracker) (Flask + PostgreSQL version). This project is refactored into **static hosting + industry-level aggregation + point-accurate history**.

## ✨ Features (4 pages)

- **Industry Overview** `index.html`: ranking of national team holding market value by industry, average weight, change from the previous period, and institutional distribution (table + bar chart + pie chart). At the top is a **today's collection status** module (✅/⚠️/❌ + latest heartbeat; expandable to view metrics and warnings).
- **Industry Trends**…
