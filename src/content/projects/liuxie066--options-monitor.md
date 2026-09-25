---
repo: "liuxie066/options-monitor"
name: "options-monitor"
description: "cash secured put & covered call"
originalDescription: "cash secured put & covered call"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liuxie066/options-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 28
forks: 10
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-22T14:57:02Z"
lastCommitAt: "2026-09-25T09:01:49Z"
lastReleaseAt: "2026-04-28T04:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["liuxie066"]
openGraphImageUrl: "https://opengraph.githubassets.com/7defc6cdc53492b1d81ffd5d673efcf1f333b3bb635b14b5ed5322d736513822/liuxie066/options-monitor"
---

# options-monitor

`options-monitor` is a locally-run, human-decision-first options monitoring system. It chains together market data, cash, equity positions, options ledger, strategy rules, reports, and notifications into an auditable workflow to help users accomplish:

- Candidate screening for `Cash-Secured Put (CSP)` and `Covered Call (CC)`;
- Evaluation of `Combo Yield` combination candidates;
- Continue managing purchased stocks and seeking income and exit opportunities after `CSP` assignment;
- `Close Advice` for opened options lots;
- Queries of options profit, cash flows, positions, and expiration lifecycle;
- Daily Decision Brief, candidate change alerts, and offline strategy reviews.

It is not an automated trading system and will not place orders on behalf of users. Candidates, close advice, and research conclusions are advisory-only; actual trading, configuration writes, notification sends, service changes, and production status modifications must go through their respective explicit confirmation boundaries.

## Core Boundaries

The system has only one main execution flow:

```text
config.yaml
├─ om config build --market us|hk
│  └─ config.us.json / config.hk.json
│…
