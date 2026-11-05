---
repo: "interuss/monitoring"
name: "monitoring"
description: "InterUSS Platform USS monitoring tools for federated UTM, including automated testing."
readmeQualityOk: true
url: "https://github.com/interuss/monitoring"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 31
forks: 33
openIssues: 53
closedIssues: 230
watchers: 9
contributors: 27
recentReleases: 0
createdAt: "2022-12-28T20:38:48Z"
lastCommitAt: "2026-11-05T08:05:31Z"
lastReleaseAt: "2024-09-24T10:13:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["dependabot[bot]", "BenjaminPelletier", "the-glu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3d53e216d0c46579fd07c3c8aee8fbe6a0dd37d550a809dd17c1ce931308560/interuss/monitoring"
discussionCount: 0
---

# Monitoring Tools

This repository contains a monitoring framework to test UAS Service Suppliers (USS). See the [InterUSS website](https://interuss.org) for background information.

## Standards and Regulations

The monitoring tools target compliance with the following standards and regulations:

- [ASTM F3411-19](https://www.astm.org/f3411-19.html) and [ASTM F3411-22](https://www.astm.org/f3411-22.html): Remote ID.
    - [F3411-19 OpenAPI interface](https://github.com/interuss/monitoring/blob/HEAD/interfaces/rid/v1/remoteid)
    - [F3411-22 OpenAPI interface](https://github.com/interuss/monitoring/blob/HEAD/interfaces/rid/v2/remoteid)
    - See [documentation](https://github.com/interuss/monitoring/blob/HEAD/interfaces/rid/README.md) before mixing versions in a single ecosystem.
- [ASTM F3548-21](https://www.astm.org/f3548-21.html): UAS Traffic Management (UTM) UAS
Service Supplier (USS) Interoperability Specification.
    - [F3548-22 OpenAPI interface](https://github.com/interuss/monitoring/blob/HEAD/interfaces/astm-utm)
    - Useful resources for understanding this standard include these Drone Talk videos:
        - [Interoperability…
