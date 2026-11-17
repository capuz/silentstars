---
repo: "bensema/gotdx"
name: "gotdx"
description: "Tongdaxin market data API protocol parsing"
originalDescription: "通达信行情API协议解析"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bensema/gotdx"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["tdx", "quant", "stock", "go"]
stars: 337
forks: 131
openIssues: 12
closedIssues: 12
watchers: 9
contributors: 5
recentReleases: 0
createdAt: "2022-08-02T14:14:35Z"
lastCommitAt: "2026-11-17T14:35:48Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 36
maintainers: ["abulo", "bensema", "363045841"]
openGraphImageUrl: "https://opengraph.githubassets.com/058f56b7cc4c05b04828b39275c51354a3b7f8a7c7d17bf4b58f1152747d38f4/bensema/gotdx"
---

# gotdx

`gotdx` wraps the commonly used query capabilities of the Tongdaxin protocol in a more Go-idiomatic calling style. You can query snapshots, K-lines, intraday data, and tick-by-tick trades for the main market and extended markets directly, or go further into F10, financial data, block (sector) files, extended tables, and the MAC block protocol. If you just want to see what an interface returns, the repository also includes a web viewer you can open directly.

## Why gotdx

- One `Client` manages both the main site and extended markets, which suits unified monitoring and cross-market data collection.
- Two entry points: high-level unified interfaces `Stock* / Ex* / MAC* / Goods*`, and low-level `Get* / ExGet*` interfaces for protocol details.
- Address pools, timeouts, and retries are all configurable, which suits connecting to unstable real-world market data servers.
- Built-in host/IP lists for main, extended, MAC, and broker servers (main 51 / broker 23 / extended 16 / MAC 3 / MAC extended 18 / ICFQS 12, 107 unique IPs in total), with TCP latency testing to select the fastest node. The main-site and broker pools were merged from official public lists and the local…
