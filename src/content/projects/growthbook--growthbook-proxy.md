---
repo: "growthbook/growthbook-proxy"
name: "growthbook-proxy"
description: ":zap: GrowthBook Proxy Server - Caching, Streaming, Security, and Scalability"
readmeQualityOk: true
url: "https://github.com/growthbook/growthbook-proxy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["feature-flags", "feature-toggles", "proxy-server"]
stars: 38
forks: 28
openIssues: 6
closedIssues: 29
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2022-12-21T21:45:27Z"
lastCommitAt: "2026-11-04T11:27:18Z"
lastReleaseAt: "2024-10-21T20:53:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 56
maintainers: ["Kevin-Chant", "tzjames", "andywhite37"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ffdec6f7fc073974da04a5c08948f30f72246745531f0a38da76cd9fe6318/growthbook/growthbook-proxy"
---

# GrowthBook Proxy

[GrowthBook](https://www.growthbook.io) is a modular Feature Flagging and Experimentation platform.

The GrowthBook Proxy server sits between your application and GrowthBook. It turbocharges your GrowthBook implementation by providing **speed**, **scalability**, **security**, and **real-time** feature rollouts.

### Features

- :zap: **Caching** - Significantly faster feature lookups!
  - In-memory cache plus an optional distributed layer (Redis or MongoDB)
  - Automatic cache invalidation when features change in GrowthBook (using webhooks)
- :satellite: **Streaming** - Updates your application in real-time as features are changed or toggled
- :lock: **Remote Evaluation** - Hide your features' business logic in insecure environments
- :key: **Secure** - Private-key authentication between GrowthBook and GrowthBook Proxy
- :left_right_arrow: **Horizontally Scalable** - Support millions of concurrent users

## About this Repository

The GrowthBook Proxy repository is a mono-repo containing the following packages:

| Package                       | link                                                | description…
