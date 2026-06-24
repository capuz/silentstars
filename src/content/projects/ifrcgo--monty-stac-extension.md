---
repo: "IFRCGo/monty-stac-extension"
name: "monty-stac-extension"
description: "Provide a set of new fields and data type to build a Montandon, Global Crisis Data Bank"
url: "https://github.com/IFRCGo/monty-stac-extension"
homepage: "http://ifrcgo.org/monty-stac-extension/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["disaster", "ifrc", "stac", "montandon"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 5
watchers: 6
contributors: 17
recentReleases: 2
createdAt: "2024-10-21T12:53:07Z"
lastCommitAt: "2026-06-24T06:21:41Z"
lastReleaseAt: "2026-06-11T14:39:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 55
maintainers: ["ranjan-stha", "emmanuelmathot", "subinasr"]
openGraphImageUrl: "https://opengraph.githubassets.com/691b38c61a59143b3deb268bd0d6f523c472c8fe8335f3eb281b27374eb725e4/IFRCGo/monty-stac-extension"
---

# Monty Extension Specification

- **Title:** Monty
- **Identifier:** <https://ifrcgo.org/monty-stac-extension/v1.3.0/schema.json>
- **Field Name Prefix:** monty
- **Scope:** Item, Collection
- **Extension [Maturity Classification](https://github.com/radiantearth/stac-spec/tree/master/extensions/README.md#extension-maturity):** Proposal
- **Owner**: @emmanuelmathot

## About Monty

Monty, an abbreviated name for the Montandon - Global Crisis Data Bank, is a database that brings in hazard and impact data for current,
historical and forecasted disasters around the globe.
By combining lots of different sources of information, Monty aims to fill-in-the-gaps
and provide a more complete picture of disaster risk for the National Societies.
For more information about the Montandon project, please check out [this 5-minute video](https://www.youtube.com/watch?v=BEWxqYfrQek).

This document explains the Montandon Extension to the [SpatioTemporal Asset Catalog](https://github.com/radiantearth/stac-spec) (STAC) specification.
It provides a way to include Montandon data from [Montandon model analysis](https://ifrcgo.org/monty-stac-extension/model/) in a STAC Item or Collection.
The…
