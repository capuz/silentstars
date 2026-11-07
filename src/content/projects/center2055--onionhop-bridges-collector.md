---
repo: "center2055/OnionHop-Bridges-Collector"
name: "OnionHop-Bridges-Collector"
description: "Hourly-collected, TCP-tested Tor bridges (obfs4/webtunnel/vanilla) for OnionHop"
readmeQualityOk: true
url: "https://github.com/center2055/OnionHop-Bridges-Collector"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-28T19:04:59Z"
lastCommitAt: "2026-11-07T13:55:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d22bca24f24d272af13b6db45f1b81eafb216f7f3add3a2b6d7ab7fcf234106/center2055/OnionHop-Bridges-Collector"
---

# OnionHop Bridges Collector

Automatically collects, validates and archives Tor bridges for the
[OnionHop](https://github.com/center2055/OnionHop) app. A GitHub Action runs
hourly to fetch fresh bridges from the official Tor Project and community
sources, then TCP/TLS-tests them.

_Last updated: 2026-11-07 13:55 UTC_

## Pooled transports

These have large, rotating bridge pools that the Tor Project and community
sources distribute, so they are scraped fresh and connectivity-tested each run.

| Transport | Tested & Active (IPv4) | Fresh 72h (IPv4) | Full Archive (IPv4) | Full Archive (IPv6) |
| :--- | :--- | :--- | :--- | :--- |
| **obfs4** | [obfs4_tested.txt](https://raw.githubusercontent.com/center2055/OnionHop-Bridges-Collector/main/bridge/obfs4_tested.txt) (206) | [obfs4_72h.txt](https://raw.githubusercontent.com/center2055/OnionHop-Bridges-Collector/main/bridge/obfs4_72h.txt) (29) | [obfs4.txt](https://raw.githubusercontent.com/center2055/OnionHop-Bridges-Collector/main/bridge/obfs4.txt) (768) | [obfs4_ipv6.txt](https://raw.githubusercontent.com/center2055/OnionHop-Bridges-Collector/main/bridge/obfs4_ipv6.txt) (371) |
| **webtunnel** |…
