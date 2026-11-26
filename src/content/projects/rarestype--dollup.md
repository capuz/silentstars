---
repo: "rarestype/dollup"
name: "dollup"
description: "barbie and taylor’s (not so) famous code formatter 🎀"
readmeQualityOk: true
url: "https://github.com/rarestype/dollup"
homepage: "https://github.com/ordo-one/dollup"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["formatter", "swift", "autosync"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 10
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-08-30T19:14:42Z"
lastCommitAt: "2026-11-26T23:34:02Z"
lastReleaseAt: "2026-02-21T23:21:17Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 77
maintainers: ["rarestzinnia", "rarestbarbie", "rarestbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7d58805de273a51cd9d4e50d974df6d13ffe06f086977c8eb2b80a3ba01a980/rarestype/dollup"
fundingLinks: ["GITHUB:https://github.com/tayloraswift"]
---

🎀 &nbsp; **dollup** &nbsp; 🎀

a formally sound, risk-aware swift code formatter

## Introduction

Dollup is a Swift formatter that emphasizes soundness of transformations and transparent risk management. It was created out of a recognition that many existing Swift formatters may subtly alter the semantics of reformatted Swift code, and often mix safe and unsafe transformations within the same formatting commands, which undermines developer confidence when formatting large tracts of code at scale.

Dollup takes a different approach. It makes an effort to segregate formatting passes by risk of semantic corruption, distinguishing between operations that can safely run continuously and automatically, moderate complexity rewrites that can be automated but need to be performed carefully in isolation and applied through pull requests, and higher level refactors that require manual review. This enables developers to make informed decisions about the level of human oversight needed when enforcing formatting styles at the organizational level.
