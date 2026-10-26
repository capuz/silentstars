---
repo: "chairemobilite/transition"
name: "transition"
description: "Transition is a modern new approach to transit planning. It's a web application to model, simulate and plan public transit and alternative transportation."
readmeQualityOk: true
url: "https://github.com/chairemobilite/transition"
homepage: "http://transition.city"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["transit", "transportation", "transportation-planning"]
stars: 53
forks: 21
openIssues: 823
closedIssues: 420
watchers: 7
contributors: 40
recentReleases: 0
createdAt: "2022-09-15T17:22:29Z"
lastCommitAt: "2026-10-26T18:07:18Z"
lastReleaseAt: "2024-10-02T18:08:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 51
maintainers: ["tahini", "ioioioio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1083dca094df442579537b4d0d4137f57345b34616927475904316fd73f17d92/chairemobilite/transition"
---

# Transition

Transition is a modern new approach to transit planning. This repo is a Node/React web application to model, simulate and plan public transit and alternative transportation.

See http://transition.city/

[Definitions and symbols used in the code and in the interface](https://www.overleaf.com/read/dtxfhttxgjrx)

For Ubuntu users: [complete step-by-step development environment setup procedure](https://github.com/chairemobilite/transition/blob/HEAD/docs/setupDevEnvironmentUbuntu.md)

## Stand alone Desktop installation

For users only interested in running Transition, without manually installing all the dependencies, follow these [step-by-step instructions to set up Transition using Docker Desktop](https://github.com/chairemobilite/transition/blob/HEAD/docs/runWithDocker.md).

## Non-Node Dependencies

* [PostgreSQL](https://www.postgresql.org/) 10+ with [PostGIS](https://postgis.net/)
* [OSRM](https://github.com/Project-OSRM/osrm-backend/): It is the routing engine used by Transition, to calculate the routes for various modes: for example walking, cycling, driving, bus in urban setting, suburban bus, etc.
* [trRouting](https://github.com/chairemobilite/trRouting/): An…
