---
repo: "pyca/infra"
name: "infra"
description: "Infrastructure configuration for pyca projects (mostly dockerfiles)"
readmeQualityOk: true
url: "https://github.com/pyca/infra"
language: "Dockerfile"
languages: ["Dockerfile", "Python"]
languagePcts: [51, 23]
topics: ["infrastructure", "containers"]
stars: 18
forks: 32
openIssues: 2
closedIssues: 47
watchers: 4
contributors: 21
recentReleases: 0
createdAt: "2017-04-14T01:08:48Z"
lastCommitAt: "2026-07-05T20:54:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 68
maintainers: ["dependabot[bot]", "reaperhulk", "alex"]
openGraphImageUrl: "https://opengraph.githubassets.com/51b7ba4560d2b292ad740dc6bd9b878fab7c0547c0cc9ff048e0d99bf003ce74/pyca/infra"
---

# Python Cryptographic Authority Infrastructure

The [PyCA](https://github.com/pyca) has a significant amount of automation
to support our robust continuous integration. This repository holds the
configuration for building the various docker containers we use in testing,
as well as OpenSSL binaries we use.

## Docker Containers

Docker containers are built on merge by Github Actions and then uploaded to
Github Container Registry. Each repository corresponds to a directory in
`runners`.
