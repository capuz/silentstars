---
repo: "SnowWarri0r/licai"
name: "licai"
description: "Localized personal finance assistant — A-stock / fund / wealth management / cash / digital assets / robot full-asset dashboard + market AI Q&A + individual stock K-line order book details + sector comparison + morning briefing + news AI interpretation. Only provides objective information, no buy/sell recommendations."
originalDescription: "本地化个人理财助手 — A股/基金/理财/现金/数字资产/机器人全资产看板 + 市场AI问答 + 个股K线盘口详情 + 板块对比 + 早盘信息简报 + 资讯AI解读。只给客观信息，不荐买卖。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SnowWarri0r/licai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 31]
topics: ["a-shares", "ai-agent", "akshare", "china-stocks", "claude", "fastapi", "investment-dashboard", "llm", "personal-finance", "portfolio-tracker"]
stars: 54
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-04-29T11:59:32Z"
lastCommitAt: "2026-09-23T08:35:17Z"
lastReleaseAt: "2026-08-19T12:30:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["SnowWarri0r", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1c5231a0088c8d8c9ea24588faaf43431a003c861467fa81da8ab1300db12fe/SnowWarri0r/licai"
---

# Finance Assistant · licai

**Put A-stocks / funds / bank wealth management / cash / digital assets / quantitative robots into one dashboard**

Plus market AI Q&A · individual stock details (K-line/order book/intraday) · full-market rankings · sector radar · global indices · morning briefing · post-session analysis

**No cloud · no account · all data runs on your own machine**

SQLite single-file storage, you can copy, delete, or back up anytime

**Only provides objective information, not buy/sell advice.**

> Demo data, run `python scripts/seed_demo.py --use` to reproduce with one click.

<h2 id="feature-map">Feature Map</h2>

| | Module | One-liner |
|---|---|---|
| 🔍 | [Ask the Market](#ask) | Q&A agent with 39 data tools, decide which tools to call for data and objective interpretation (compatible with [ZhixingXingqiu](#zsxq)+3, [Extended data sources](#provider)+4) |
| 💼 | [Full Asset Dashboard](#1-全资产看板unifiedportfolio) | Six categories on one screen, including comprehensive fee costs, share split auto-entry, concentration and same-source risk |
| 📡 | [Sector Radar](#2-板块雷达) | Each stock vs Tonghuashun industry real-time α, plus emotion cycle timeline + sector…
