---
repo: "chaichuk/UA-power-outages-monitor"
name: "UA-power-outages-monitor"
description: "Monitor of power outages accros multiple regions in Ukraine"
originalDescription: "Monitor of power outages accros multiple regions in Ukraine"
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/chaichuk/UA-power-outages-monitor"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-27T11:24:06Z"
lastCommitAt: "2026-11-17T14:40:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 66
maintainers: ["chaichuk", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1337383205de1d492907d09c3ff1568e43b2c1834b633770695e2c88b23be7/chaichuk/UA-power-outages-monitor"
---

# 🇺🇦 Power Outages Monitor (Data Aggregator)

This project is an aggregator of data on electricity outage schedules in Ukraine. It collects data from various sources (DTEK websites, the YASNO API, and official JSON files from regional electricity distribution companies, or oblenergo) and normalizes them into a single format for further use (for example, for the Home Assistant integration [svitlo_live](https://github.com/chaichuk/svitlo_live) and Cloudflare Workers).

## 🌍 Supported Regions and Sources

The script collects data for **15 oblasts** and **2 cities**:

### 🏢 DTEK (Official website)
- Kyiv Oblast
- Odesa Oblast
- Dnipropetrovsk Oblast

### 💡 YASNO (API)
- Kyiv (city)
- Dnipro (city) (ДнЕМ)
- Dnipro (city) (ЦЕК)

### 📂 GitHub / Oblenergo (JSON)
- Lviv Oblast
- Poltava Oblast
- Cherkasy Oblast
- Chernihiv Oblast
- Kharkiv Oblast
- Khmelnytskyi Oblast
- Ivano-Frankivsk Oblast
- Rivne Oblast
- Ternopil Oblast
- Zakarpattia Oblast
- Zaporizhzhia Oblast
- Zhytomyr Oblast
- Chernivtsi Oblast (Telegram web)

## 🛡️ Fault Tolerance (Hybrid Failover Architecture)

1. **Primary parser**: Runs on a local home server (NUC / Home Assistant Addon) every 5 minutes. Uses a home…
