---
repo: "logoapi/logo-api"
name: "logo-api"
description: "Stock ticker, ETF, crypto and company logos by URL: logoapi.sh/ticker/AAPL.svg, /crypto/BTC.svg, /stripe.com.svg. SVG or PNG, no API key, no signup. npm: logoapi, stock-ticker-logos, crypto-logos. Free Clearbit Logo API alternative."
readmeQualityOk: true
url: "https://github.com/logoapi/logo-api"
homepage: "https://logoapi.sh"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["brand-logos", "clearbit-alternative", "company-logos", "favicon", "logo-api", "logos", "svg", "free-api", "no-api-key", "brandfetch-alternative"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-25T10:35:24Z"
lastCommitAt: "2026-11-09T11:58:56Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["AlonHarpaz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1433080493/ccb0403c-b40f-4400-8325-a90a8398ce15"
---

2M requests a month per site. Free. Commercial use included.<br>
  Covers 6,562 stock and ETF tickers (about 1,500 with a vector logo, favicon fallback for the rest), 17 coins and 5,089 brands.

```
https://logoapi.sh/ticker/AAPL.svg               stock or ETF ticker (square icon)
https://logoapi.sh/ticker/JPM.svg?shape=square   always square, for lists (wide wordmarks too)
https://logoapi.sh/crypto/BTC.svg                crypto symbol
https://logoapi.sh/stripe.com.svg                company domain
```

```bash
npm install logoapi        # or ticker-logos, stock-ticker-logos, crypto-logos
```

```js
import { getLogos } from 'logoapi';
getLogos(['AAPL', 'VOO', 'BTC']).map((r) => r.dataUri || r.url); // SVG data URI or hosted URL
```

  This repo holds part of the catalog. The <a href="https://logoapi.sh?utm_source=github&utm_medium=readme&utm_campaign=logo-api">logoapi.sh</a> CDN serves logos for all 5,089 brands. We add more here when the licence allows.

  An ETF shows its issuer's logo on purpose (VOO is Vanguard, SPY is State Street): that is the intended answer, not a miss.<br>
  Served from Cloudflare's edge. <a href="https://stats.uptimerobot.com/i1AcYCwDhS">Live status</a>.…
