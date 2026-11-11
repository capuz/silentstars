---
repo: "vidithq/vidit"
name: "vidit"
description: "OSINT/GEOINT geolocation archive for armed-conflict events — open source under AGPL-3.0"
readmeQualityOk: true
url: "https://github.com/vidithq/vidit"
homepage: "https://vidit.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 47]
topics: ["agpl-3-0", "armed-conflict", "conflict-monitoring", "fastapi", "geoint", "geolocation", "maplibre", "nextjs", "open-source", "osint"]
stars: 7
forks: 1
openIssues: 112
closedIssues: 159
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T00:37:54Z"
lastCommitAt: "2026-11-11T11:24:35Z"
lastReleaseAt: "2026-07-31T07:58:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 52
maintainers: ["vidit-admin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b0ec459d5830783b2d7a9c0afc16c7c9f050c5de6984e1c540811c714f30c5/vidithq/vidit"
discussionCount: 0
---

# Vidit

A web platform for OSINT/GEOINT analysts to archive, reference, and visualize geolocations of armed-conflict events. Interactive map, structured submission flow (coords + source + media + rich-text proof + tags), community requests, and analyst profiles.

Live at **[vidit.app](https://vidit.app)** (beta).

Work reaches the map through one of four doors. Three of them read an analyst's own X posts and produce machine detections; the fourth is the submit form. Nothing is published until a person vouches for it.

```mermaid
flowchart LR
  classDef spec fill:#eef1fb,stroke:#4a5fa5,color:#33417a
  classDef shared fill:#e3f2f1,stroke:#0f7b7a,color:#0b5c5b
  classDef core fill:#0f7b7a,stroke:#083f3e,stroke-width:3px,color:#ffffff
  classDef store fill:#0b5c5b,stroke:#083f3e,color:#ffffff

  subgraph legend [Legend]
    direction LR
    l1["`what an analyst does`"]:::spec
    l2["`what the machine does`"]:::shared
    l3["`the moment a person vouches`"]:::core
    l4[("`the catalog`")]:::store
    l1 ~~~ l2 ~~~ l3 ~~~ l4
  end

  subgraph doors [Four ways work comes in]
    direction TB
    hand["`**/submit**
    one form: coordinates, source, media, tags, and a rich-text…
