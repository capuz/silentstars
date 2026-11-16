---
repo: "WebFuzzing/Commons"
name: "Commons"
description: "Web Fuzzing Commons (WFC). A set of standards and library support for facilitating fuzzing Web APIs "
readmeQualityOk: true
url: "https://github.com/WebFuzzing/Commons"
language: "Java"
languages: ["Java", "TypeScript", "JavaScript"]
languagePcts: [49, 30, 20]
stars: 14
forks: 1
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-04-11T12:14:39Z"
lastCommitAt: "2026-11-16T11:52:39Z"
lastReleaseAt: "2026-04-24T07:33:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 62
maintainers: ["arcuri82", "omursahin", "ThomasTNO"]
openGraphImageUrl: "https://opengraph.githubassets.com/f39af31f781223876e5239a5a0681b5da92ac909901362400dd326d19ae87058/WebFuzzing/Commons"
discussionCount: 2
---

# Commons
Web Fuzzing Commons (WFC): A set of standards and library support for facilitating fuzzing Web APIs.

## Overview

WFC is aimed at developers of Web API fuzzers, by providing utilities and library support for tasks that are common for all fuzzers. 
Currently, we focus on REST APIs. 
But future versions of WFC will likely be extended to support GraphQL and RPC as well. 

There are 4 main contributions in WFC:

1) _WFC Authentication_ (0.8.0): a JSON Schema definition to represent authentication information for fuzzers. Currently under [src/main/resources/wfc/schemas/auth.yaml](https://github.com/WebFuzzing/Commons/blob/HEAD/src/main/resources/wfc/schemas/auth.yaml). Documentation on how to use it [can be found here](https://github.com/WebFuzzing/Commons/blob/HEAD/auth.md). Examples of configurations files can be found in the [Web Fuzzing Dataset (WFD) repository](https://github.com/WebFuzzing/Dataset).   

2) _WFC Faults_ (0.10.0): classification of existing automated oracles proposed in the literature of fuzzing web APIs. Currently under…
