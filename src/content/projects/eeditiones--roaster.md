---
repo: "eeditiones/roaster"
name: "roaster"
description: "Open API Router for eXist"
readmeQualityOk: true
url: "https://github.com/eeditiones/roaster"
language: "JavaScript"
languages: ["JavaScript", "XQuery"]
languagePcts: [51, 46]
topics: ["exist-db", "library", "router"]
stars: 23
forks: 12
openIssues: 27
closedIssues: 30
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2020-08-23T17:43:56Z"
lastCommitAt: "2026-10-30T10:22:29Z"
lastReleaseAt: "2021-10-27T15:39:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 79
undervaluedScore: 58
maintainers: ["line-o", "dependabot[bot]", "DrRataplan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a06ff5c3494f331f5cbf55155ff7052fd1cfa39b4d3939e0df3cc32f4847d20/eeditiones/roaster"
fundingLinks: ["GITHUB:https://github.com/eeditiones", "CUSTOM:https://www.paypal.com/paypalme/eeditiones"]
---

# Roaster

> **Define** your API, **then** implement it.

 [](https://github.com/semantic-release/semantic-release)

## OpenAPI Router for eXist

Roaster is a generic router to be used in any exist-db application. It reads an [OpenAPI 3.0](https://spec.openapis.org/oas/v3.0.0) specification from a JSON file and routes requests to handler functions written in XQuery.

From any valid API specification you can generate an interactive documentation as the one above.
This is also very helpful for exploratory testing of your implementation (see [demo app](#demo-app)).

Roaster is the routing library powering [TEI Publisher](https://teipublisher.com). So, make sure to also check there for additional [documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?odd=docbook.odd&id=api) and examples.

## Installation

This library XAR can be either downloaded from the [releases](https://github.com/eeditiones/roaster/releases) and is also available
on [eXist-db's public package repository](https://exist-db.org/exist/apps/public-repo/packages/roaster).

## How it works

eXist applications usually have a controller as main entry point. The…
