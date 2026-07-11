---
repo: "rabinage/entsoe-api-node"
name: "entsoe-api-node"
description: "Unofficial API wrapper for the ENTSO-E Transparency Platform https://transparency.entsoe.eu/"
readmeQualityOk: true
url: "https://github.com/rabinage/entsoe-api-node"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 15
forks: 5
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-10-15T19:01:31Z"
lastCommitAt: "2026-07-11T05:56:08Z"
lastReleaseAt: "2024-08-21T07:19:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e4099a2d7c7edec3d643e9fcfcec51299200576dad602bdcdb3b06e4ad4b2d4/rabinage/entsoe-api-node"
---

# entsoe-api-node [](https://github.com/rabinage/entsoe-api-node/actions/workflows/ci.yaml)

> Unofficial API wrapper for the [ENTSO-E Transparency Platform](https://transparency.entsoe.eu) RESTful API.

### Why this wrapper

The API responses from the [ENTSO-E Transparency Platform](https://transparency.entsoe.eu) are formatted in XML, which may not be easily consumable in JavaScript applications. This wrapper transforms the response into the more compatible JSON format.

- [ENTSO-E Transparency Platform](https://transparency.entsoe.eu/dashboard/show)
- [Transparency Platform API spec.](https://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html)

### Table of Contents

- [Installation](#installation)
- [Getting started](#getting-started)
  - [Initialize](#initialize)
  - [Code examples](#code-examples)
- [Public REST Endpoints](#public-rest-endpoints)
  - [dayAheadPrices](#day-ahead-prices)
- [Miscellaneous](#miscellaneous)
  - [Bidding zones](#bidding-zones)

### Installation

    npm i entsoe-api-node

### Getting started

To use this wrapper, you must first register with the Transparency Platform and request access to the RESTful API by sending…
