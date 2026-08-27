---
repo: "jdx/mise-versions"
name: "mise-versions"
description: "stores version numbers of common mise plugins"
readmeQualityOk: true
url: "https://github.com/jdx/mise-versions"
homepage: "http://mise-versions.jdx.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 22]
stars: 22
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2023-12-07T22:46:21Z"
lastCommitAt: "2026-08-27T14:30:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 64
maintainers: ["mise-en-versions", "jdx"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae5dd76386f7b05dfe75632121517bee99b08f7833a6da542736c2b750a79236/jdx/mise-versions"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://en.dev"]
---

# mise-versions

stores version numbers of common mise plugins

## Tool Update Analysis

This repository tracks tool updates through git history analysis. The chart below shows the daily number of tool updates over the last 30 days.

### Daily Tool Updates (Last 30 Days)

_Timeline showing the number of tools updated each day over the last 30 days_

## Token pool observability

The scheduled Worker records GitHub core-rate-limit snapshots every 15 minutes,
and the authenticated `/admin` dashboard displays them. It shows aggregate
quota headroom, quota burn per hour, token checkout rate, estimated time until
the 1,000-request-per-token reserve, and the latest headroom for each pool token.

Each run checks at most 45 tokens to stay within the Workers Free-plan external
subrequest limit while leaving room for alerts. Larger pools rotate through
batches and are shown as incomplete rather than being classified as critical.

The monitor warns when only one token is available, a token cannot be checked,
a token falls below reserve, less than 35% of aggregate quota remains, or the
pool is within six hours of reserve. It becomes critical at zero available
tokens, 15% aggregate quota, or…
