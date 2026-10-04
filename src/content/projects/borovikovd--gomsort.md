---
repo: "borovikovd/gomsort"
name: "gomsort"
description: "Go msort - linter that sorts methods"
readmeQualityOk: true
url: "https://github.com/borovikovd/gomsort"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-08-04T00:38:50Z"
lastCommitAt: "2026-10-04T10:02:41Z"
lastReleaseAt: "2026-10-04T07:16:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["borovikovd"]
openGraphImageUrl: "https://opengraph.githubassets.com/443f0d4ada5a692c8f401bbe17fc0a126c588895e966c27bb337975c8f827272/borovikovd/gomsort"
---

# gomsort

A Go tool that sorts methods within types the way Go code usually reads: each type's methods together, exported ones first, then the helpers in the order they're used.

## Features

- **Method sorting by call graph**: exported methods first, then the helpers in call order
- **Grouped by type**: each type's methods gather where its first method is, after its constructors; helper functions that sat between them follow the block, and nothing before it moves
- **CLI and analyzer**: a `gofmt`-style command, and a `go/analysis` analyzer for your own driver
- **Safe**: only whole declarations move, their text copied as it is with the comments around them, then gofmt'd; generated files, test files, `testdata` and `vendor` are left alone

## Sorting Algorithm

Within each type:

1. **Exported first**: exported methods, in their current order.
2. **Then call order**: the unexported methods the exported ones use, in the order they first use them, each followed by its own helpers, depth first. Then the other unexported entry points, used from outside the type (by a function or another type's methods in the file) or not at all, in their current order, each followed by its helpers.…
