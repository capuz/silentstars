---
repo: "cornerstone-data/bedrock"
name: "bedrock"
description: "Core data pipeline for Cornerstone artifacts"
readmeQualityOk: true
url: "https://github.com/cornerstone-data/bedrock"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 89
closedIssues: 343
watchers: 0
contributors: 14
recentReleases: 4
createdAt: "2025-11-06T20:16:49Z"
lastCommitAt: "2026-11-02T17:56:28Z"
lastReleaseAt: "2026-10-27T18:02:09Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 77
maintainers: ["WesIngwersen", "bl-young", "jvendries"]
openGraphImageUrl: "https://opengraph.githubassets.com/266e4b7bddd487faf102f05b7fffb8f34464d0e0159a20d10fe9042904c4847b/cornerstone-data/bedrock"
discussionCount: 3
---

# bedrock

`bedrock` is a pipeline for building environmentally-extended input-output (EEIO) models and related data artifacts, like emission factors.

`bedrock` merges USEEIO and CEDA-US to build the Cornerstone U.S. model, a waypoint toward the Cornerstone global Multi-Regional EEIO model targeted for release in October 2026.
USEEIO is [a US specific legacy EEIO model](https://github.com/USEPA/USEEIO) originally developed by the US EPA.
CEDA-US is the US portion of the [CEDA Multi-Regional EEIO model](https://openceda.org/solutions/ceda), developed by Watershed.
`bedrock` brings in methodological contributions and improvements from both models and establishes a config-driven system that will be carried forward to the development of Cornerstone's global MRIO model outside of `bedrock`.

**Companion documents:**
- **[Methodology for Cornerstone U.S. Model](https://github.com/cornerstone-data/papers/blob/f2372a0d72def7a9961279ab22982adac07e5f67/us-methods/us-methods.md)** covers the equations, data sources, and methodology choices adopted from USEEIO vs CEDA.
- **[Cornerstone Technical Architecture…
