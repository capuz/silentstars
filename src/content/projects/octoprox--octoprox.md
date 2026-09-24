---
repo: "octoprox/octoprox"
name: "octoprox"
description: "A dynamic and flexible proxy manager."
readmeQualityOk: true
url: "https://github.com/octoprox/octoprox"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 22]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-10T23:08:02Z"
lastCommitAt: "2026-09-24T08:42:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["nikolovivan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9149118738065d7bd5afb4e9faacf19b1f8c5ca90ff44c7c2af4d1d350ae62da/octoprox/octoprox"
discussionCount: 0
---

# Octoprox

A dynamic and flexible proxy manager that acts as an intelligent proxy aggregator, accepting client requests and routing them through managed proxy pools.

## Features

- **Cloud Integrations**: Dynamically provision proxy instances on AWS, GCP, and Azure
- **Proxy Providers & SDK**: Oxylabs, Bright Data, Decodo, Webshare, IPRoyal and NetNut ship as declarative descriptors; admins add any other vendor from the UI without code or a redeploy (see [docs/providers.md](https://github.com/octoprox/octoprox/blob/HEAD/docs/providers.md))
- **Static Proxy Support**: Manage manually configured proxy servers
- **Routing Strategies**: Round-robin, least-used, random, sticky session, and health-based routing
- **Per-request Targeting**: Pick a sticky session (`-sessid-`) or an exit country (`-cc-`) from the proxy username, so one project can serve many locations
- **IP Attribution**: Resolve exit locations from your own MaxMind, DB-IP, IPinfo or IP2Location databases, verify vendor claims, track each provider's accuracy, and optionally reject sessions that exit in the wrong country (see [docs/ip-attribution.md](https://github.com/octoprox/octoprox/blob/HEAD/docs/ip-attribution.md))…
