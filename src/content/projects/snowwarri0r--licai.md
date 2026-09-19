---
repo: "SnowWarri0r/licai"
name: "licai"
description: "Localized Personal Finance Assistant — A-share / Fund / Financial Product / Cash / Digital Asset / Robo Dashboard + Market AI Q&A + Individual Stock K-line / Order Book Details + Sector Comparison + Pre-market Information Brief + News AI Interpretation. Objective information only, no buy/sell recommendations."
originalDescription: "本地化个人理财助手 — A股/基金/理财/现金/数字资产/机器人全资产看板 + 市场AI问答 + 个股K线盘口详情 + 板块对比 + 早盘信息简报 + 资讯AI解读。只给客观信息，不荐买卖。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SnowWarri0r/licai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [69, 31]
topics: ["a-shares", "ai-agent", "akshare", "china-stocks", "claude", "fastapi", "investment-dashboard", "llm", "personal-finance", "portfolio-tracker"]
stars: 54
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-04-29T11:59:32Z"
lastCommitAt: "2026-09-19T02:47:08Z"
lastReleaseAt: "2026-08-19T12:30:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["SnowWarri0r", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ebc35b5725535ed8b58fd5cac52f12b2051e1c8ef898996c0d6783928dd009d/SnowWarri0r/licai"
---

# Finance Assistant · licai

**Put A-shares / Funds / Bank Financial Products / Cash / Digital Assets / Quantitative Robots into one dashboard**

Plus market AI Q&A · Individual stock details (K-line/Order Book/Intraday) · Market Rankings · Sector Radar · Global Indices · Pre-market Brief · Portfolio Attribution Analysis

**No cloud** · **No account** · **All data runs on your own machine**

SQLite single-file storage, you can copy, delete, or back up at any time

**Objective information only, no buy/sell advice.**

> Demo data, run `python scripts/seed_demo.py --use` to reproduce with one click.

<h2 id="功能地图">Feature Map</h2>

| | Module | Summary |
|---|---|---|
| 🔍 | [Ask the Market](#ask) | Q&A agent with 39 data tools, decide which tools to call for objective interpretation (add [Knowledge Planet](#zsxq)+3, [Expand Data Sources](#provider)+4) |
| 💼 | [Unified Asset Dashboard](#1-全资产看板unifiedportfolio) | Six asset classes on one screen, with comprehensive fee costs, automatic share split accounting, concentration and common risk exposure |
| 📡 | [Sector Radar](#2-板块雷达) | Each stock vs. real-time α from Tonghuashun industry, plus sentiment cycle timeline + sector trading…
