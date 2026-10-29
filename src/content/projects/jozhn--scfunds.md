---
repo: "jozhn/scfunds"
name: "scfunds"
description: "Analysis of Standard Chartered Bank China's entrusted wealth management and distributed funds"
originalDescription: "渣打银行中国代客理财与代销基金分析"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jozhn/scfunds"
homepage: "https://scfunds.jozhn.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["funds", "sc", "chatered"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-30T04:16:58Z"
lastCommitAt: "2026-10-29T14:06:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["github-actions[bot]", "jozhn"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4058b78479301072f8f9d23bd2d7cdbc076393b8547fe304a48696da3842993/jozhn/scfunds"
---

# SC Funds

Dashboard for screening funds purchasable through Standard Chartered China, with holdings look-through, period returns, and portfolio backtesting.

Online: [https://john.js.org/scfunds/](https://john.js.org/scfunds/)

China mainland access: [https://scfunds.jozhn.com/](https://scfunds.jozhn.com/)

## Running locally

```bash
npm ci
npm run update-data
npm run dev
```

The dev server reads `public/data/funds.json` by default.

Data is split by purpose, and the page load order is designed around this:

- `public/data/funds.json`: fund list, period metrics, holdings, fees, and the most recent few days of NAV. Only this file is parsed on the first screen.
- `public/data/history/<fund>.json`: daily historical NAV for each fund (about 70KB). Loaded on demand when opening a fund's details or running a portfolio backtest; the frontend caches it per session.

After the first screen, data is cached persistently in the browser by `public/sw.js` (Service Worker): data files return cached content first and update silently in the background, while hashed static assets are cached permanently. The data directory can point to your own CDN via `VITE_DATA_BASE`.

## Common commands…
