---
repo: "saibotma/working_router"
name: "working_router"
description: "A Flutter router that (hopefully) works for real life multi-platform applications"
readmeQualityOk: true
url: "https://github.com/saibotma/working_router"
language: "Dart"
languages: ["Dart"]
languagePcts: [95]
topics: ["flutter", "multi-platform-app", "navigator2", "router"]
stars: 6
forks: 0
openIssues: 9
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-10-21T10:33:00Z"
lastCommitAt: "2026-11-23T10:30:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 38
maintainers: ["saibotma"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b159613403c7b3f2a8f2b388b94db95ae082a2e69c0c0d358728fe58f7f701/saibotma/working_router"
---

# working_router

A Flutter router built around a typed route tree and a DSL-style route
definition API.

## Core Ideas

- `Location<Self>` is the main typed semantic route node API.
- `Location<Self>` is override-based: route-node configuration lives in the
  node class' `build(...)` method.
- `Shell` is a directly constructible structural route node that inserts a nested navigator.
- `MultiShell` is the parallel-shell variant for layouts with multiple sibling nested navigators.
- Routes are defined in `build(...)` with ordered builder calls:
  - `pathLiteral(...)`
  - `pathParam(...)`
  - `queryParam(...)`
- The same `build(...)` method also configures location content, optional page
  wrappers, and child `RouteNode`s.
- `@RouteNodes()` generates typed `routeToX(...)` helpers and `XRouteTarget`
  classes, plus start-anchored `childXTarget(...)` helpers, from one canonical
  route-tree file.

## Recommended Setup

The generator works best when you keep one canonical route-tree file and let
everything else import it.
