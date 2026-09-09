---
repo: "beefyfinance/beefy-api"
name: "beefy-api"
description: "Simple API for BeefyFinance"
readmeQualityOk: true
url: "https://github.com/beefyfinance/beefy-api"
homepage: "https://api.beefy.finance"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["beefyfinance", "binance-smart-chain", "yield-farming", "defi", "apy", "api", "koa2"]
stars: 129
forks: 203
openIssues: 0
closedIssues: 32
watchers: 8
contributors: 67
recentReleases: 0
createdAt: "2020-10-04T16:43:36Z"
lastCommitAt: "2026-09-09T08:18:43Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 55
maintainers: ["roman-monk", "iamjackgale", "frondoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/327d2d784eaa8708fdb41a21475885b02671111ed92a3db57bce824f54d918cb/beefyfinance/beefy-api"
---

# Beefy API

The backend that powers [Beefy](https://app.beefy.com). It reads prices, APYs, TVL and vault
metadata from the chains Beefy is deployed on, caches them in memory, and serves them as JSON.

The frontend lives in [beefy-v2](https://github.com/beefyfinance/beefy-v2). The endpoint reference
is published at [docs.beefy.finance](https://docs.beefy.finance/developer-documentation/beefy-api).

## Requirements

- Node — version in [`.nvmrc`](https://github.com/beefyfinance/beefy-api/blob/HEAD/.nvmrc)
- pnpm — version pinned by the `packageManager` field in [`package.json`](https://github.com/beefyfinance/beefy-api/blob/HEAD/package.json)

## Running

```sh
pnpm install
pnpm start
```

The API listens on port 3000 (`PORT` to override). It fetches everything on boot, so expect a
minute or two before data is available; endpoints return 503 until their data is ready.

Configuration is optional — the repo ships default public RPCs and sane fallbacks. To override
anything, copy [`.env.example`](https://github.com/beefyfinance/beefy-api/blob/HEAD/.env.example) to `.env`; `pnpm start` loads it automatically.
Public RPCs are heavily rate-limited, so supplying your own is worthwhile if…
