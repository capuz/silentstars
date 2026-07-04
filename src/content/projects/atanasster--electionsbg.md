---
repo: "atanasster/electionsbg"
name: "electionsbg"
description: "Data statistics for Bulgaria"
url: "https://github.com/atanasster/electionsbg"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [78, 20]
stars: 11
forks: 0
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-11-06T02:55:15Z"
lastCommitAt: "2026-07-03T21:07:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 67
maintainers: ["atanasster"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3abdfa56e3560c9b36b35c4356cd046add6be9744b648cee2621e019b1946c1/atanasster/electionsbg"
---

# electionsbg.com

An open-source platform for visualizing and analyzing how Bulgaria is governed — starting with every parliamentary election since 2005 (down to the ~13,000 polling sections), and extending to the parliament and its MPs, their business interests and declared assets, the state budget, public procurement, EU funds, local councils and taxes, polling accuracy, campaign financing, and the everyday cost of living. Live at [electionsbg.com](https://electionsbg.com).

## What's in here

The app started as election results visualization and has grown to cover the broader political picture. The current feature surface:

- **Elections** — results and turnout from settlement up to national level for every parliamentary election since 2005, plus drill-down to the ~13,000 polling sections and side-by-side comparison across cycles.
- **Local elections** (общински избори) — a parallel dashboard tree for the regular local cycles (mi2023, mi2019, minr2015, mipvr2011): `/local/:cycle` (national mayors-control choropleth + council vote share + top regions), `/local/:cycle/region/:oblast` (per-oblast municipalities map + mayors-won/council-seats rankings + município directory),…
