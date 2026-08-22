---
repo: "relayhop/sn-monetization-runtime"
name: "sn-monetization-runtime"
description: "Cron runtime for SN Monetization sub-project"
readmeQualityOk: true
url: "https://github.com/relayhop/sn-monetization-runtime"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 32
openIssues: 387
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T13:50:39Z"
lastCommitAt: "2026-08-22T04:07:07Z"
status: "thriving"
tags: ["solo_builder", "under_pressure", "fork_magnet"]
healthScore: 60
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1604dd58ecb0c7550ca0fa0c78337f9b67188fb3243727dc23369b4b5abf828b/relayhop/sn-monetization-runtime"
---

# sn-monetization-runtime

Cloud cron runtime for the SN Monetization sub-project (sister to `ClaudeEarnSelf-runtime`).

## Workflows
- `sn_radar.yml` — every 15 min, scrapes Stacker News GraphQL for opportunities
  (writes to `data/sn_opportunities/sn_latest.tsv`)

## Public repo = unlimited GitHub Actions minutes.

PAT: `ClaudeEarnSelf-gh-pat` (Keychain, `relayhop` user) — repo scope.
