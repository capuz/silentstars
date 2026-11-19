---
repo: "nirholas/pumpfun-creator-rewards"
name: "pumpfun-creator-rewards"
description: "Look up Pump.fun creator-reward earnings per coin by mint, wallet or username, via a JSON API and web app."
readmeQualityOk: true
url: "https://github.com/nirholas/pumpfun-creator-rewards"
homepage: "https://nirholas.github.io/pumpfun-creator-rewards/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["analytics", "crypto", "pumpfun", "solana", "web3", "javascript", "claude-code-plugin", "creator-rewards"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-10T05:43:26Z"
lastCommitAt: "2026-11-19T04:35:49Z"
lastReleaseAt: "2026-11-10T22:26:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 41
maintainers: ["nirholas", "dependabot[bot]", "ni3a"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11c4aa1f0e7f8f5efb5ab194ab87a38c8e6b2f0c45e60709511058ca15898ee/nirholas/pumpfun-creator-rewards"
fundingLinks: ["CUSTOM:https://three.ws"]
discussionCount: 0
---

# pumpfun-creator-fees

Look up Pump.fun creator-reward earnings by **coin mint**, **wallet address**, or **username**.

Single-page web app with a JSON API. Live data, no mocks. Ships as one container on Google Cloud Run.

**Live:** <https://pumpfun-creator-rewards-lp642k3kpa-uc.a.run.app>

Try it directly:

```bash
curl "https://pumpfun-creator-rewards-lp642k3kpa-uc.a.run.app/api/fees?q=<mint|wallet|username>"
```

## What it shows

Given any of the three inputs:

- **Lifetime totals** for the resolved wallet: total earned, claimed, and unclaimed (SOL + USD)
- **Per-coin earnings** — exactly how much *each individual coin* has paid this wallet, with the payout count, when it last paid, and what share of the creator's total income it represents
- **Breakdown stats** — how many coins have ever actually paid out, how concentrated the income is (e.g. "2 coins make up 90% of earnings"), and the last 30 days of earnings
- **Distribution timeline** for a coin: every fee-sharing config change and every payout, with transaction links
