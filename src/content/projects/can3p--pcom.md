---
repo: "can3p/pcom"
name: "pcom"
description: "Private social network meant to enforce real human connections"
readmeQualityOk: true
url: "https://github.com/can3p/pcom"
homepage: "https://can3p.github.io/pcom"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["social"]
stars: 7
forks: 0
openIssues: 15
closedIssues: 76
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-22T07:04:48Z"
lastCommitAt: "2026-11-26T23:33:49Z"
lastReleaseAt: "2026-01-31T00:55:48Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 77
maintainers: ["claude", "can3p", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0dae746cf06d14b07a5e71cb7b836cbb08ccf515e1770c150494ffc2766112c/can3p/pcom"
---

# Pcom - private social network

Private as in the content is not public by default and discovery requires a human touch.

User guide and developer docs: https://can3p.github.io/pcom/

Pcom uses [gogo](https://github.com/can3p/gogo) to handle forms and some other things!

If you want to follow the development, there is a [youtube playlist](https://www.youtube.com/playlist?list=PLa5K-kCUS-FozB6Cw7rJLFJaxyZd-MPpi) with demos!

## Official client

Official client is [blg](https://github.com/can3p/blg), command line client that plays well with pcom. See [docs/api.md](https://github.com/can3p/pcom/blob/HEAD/docs/api.md) for the API.

## Quick start

Docker is the only dependency. Cold start, seeded users, ports, everyday commands and troubleshooting are in
[docs/running.md](https://github.com/can3p/pcom/blob/HEAD/docs/running.md):

```
make dev-up && make migrate && make seed
make dev        # app and asset watcher in containers, http://localhost:8080
```
