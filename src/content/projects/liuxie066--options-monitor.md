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
openIssues: 6
closedIssues: 49
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-22T14:57:02Z"
lastCommitAt: "2026-10-15T08:31:43Z"
lastReleaseAt: "2026-04-28T04:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["liuxie066"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9aef42a888f7c4a12cdf8f031b0ea8578e89a5046d1e0784d029c8327aaf506/liuxie066/options-monitor"
---

`options-monitor` is a locally run options monitoring system that prioritizes human decisions. It links market data, cash, underlying stock positions, the options ledger, strategy rules, reports, and notifications into an auditable chain, helping users complete:

- `Cash-Secured Put (CSP)` and `Covered Call (CC)` candidate screening;
- `Combo Yield` combination candidate evaluation;
- When Wheel is enabled, external CSP / CC assignments that meet identity and delivery evidence requirements enter the corresponding rotation branch;
- `Close Advice` for opened option lots;
- Queries for option profit, cash activity, positions, and expiration lifecycle;
- Daily Decision Brief, candidate change alerts, and offline strategy review.

It is not an automated trading system and does not place orders on the user's behalf. Candidates, close advice, and research conclusions are all advisory-only. Real trades, config writes, notification sending, service changes, and production state modifications must each go through their own explicit confirmation boundary.

## Core boundaries

The system has only one main runtime chain:

```text
config.yaml
├─ om config build --market us|hk
│  └─…
