---
repo: "MehmetAkgul/currency-api-tr"
name: "currency-api-tr"
description: "Free TR currency & gold API — TCMB + truncgil, bid/ask spread, updated every 5min via GitHub Actions"
readmeQualityOk: true
url: "https://github.com/MehmetAkgul/currency-api-tr"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T08:13:38Z"
lastCommitAt: "2026-08-16T04:07:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/abb020643ddb9fefb758476233efcef82dff8dfab6212737665587a7a3c2f3b2/MehmetAkgul/currency-api-tr"
---

# currency-api-tr

**Free, open-source Turkish currency, gold & fuel data API — auto-updated via GitHub Actions, served over a CDN.**

No API key. No rate limits. No server to run. Static JSON served via **jsDelivr CDN** with `Access-Control-Allow-Origin: *`, so you can `fetch()` it straight from the browser.

> Built as a transparent alternative to opaque currency APIs. Every data source is public, official where possible, and documented below.

---

## Contents

- [Why this exists](#why-this-exists)
- [Architecture](#architecture)
- [Endpoints](#endpoints)
- [Response format](#response-format)
- [Supported currencies](#supported-currencies)
- [Data sources & fallback](#data-sources--fallback)
- [Usage](#usage)
- [Freshness](#freshness)
- [Development](#development)

---

## Why this exists

Most currency APIs for Turkey either require an API key with strict rate limits, omit **bid/ask spreads**, skip **Turkish gold coins** (çeyrek, yarım, tam, Cumhuriyet), or rely on undisclosed sources. This project aggregates **TCMB's official rates** (legally mandated transparency under Law No. 1211) with **live Istanbul gold-market prices** — plus EU/TR fuel and Diyanet Hajj pricing — and…
