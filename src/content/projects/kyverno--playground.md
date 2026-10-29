---
repo: "kyverno/playground"
name: "playground"
description: "Powers the Kyverno playground"
readmeQualityOk: true
url: "https://github.com/kyverno/playground"
homepage: "https://playground.kyverno.io"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [49, 31]
topics: ["kyverno", "playground"]
stars: 35
forks: 24
openIssues: 5
closedIssues: 90
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2023-05-03T14:01:42Z"
lastCommitAt: "2026-10-29T10:21:19Z"
lastReleaseAt: "2023-05-26T11:03:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 66
maintainers: ["dependabot[bot]", "fjogeleit", "ANAMASGARD"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a620fd1d7b5f547fe7c6143373bf280c988d767355e6c87c242063c0da20164/kyverno/playground"
discussionCount: 0
---

# Kyverno Playground

The **public version of the Playground** is available at https://playground.kyverno.io.

## About

The Kyverno Playground is a web service that simulates [Kyverno](https://github.com/kyverno/kyverno) behaviour, you can experiment and play with Kyverno policies directly in your browser

The service receives a configuration, resource and policies definitions, runs the Kyverno engine, and returns the results of evaluating policies against resources.

The playground currently supports:
- Validation rules
- Mutation rules
- Image verification rules
- Generate rules

**NOTES:**
- This tool only works with public image registries
- No data is gathered, stored, or shared

## Features

The playground frontend offers a rich feature set:
- Supports admission information like `username`, `groups`, `roles` and `cluster roles`
- Saving and loading state from the local storage
- Loading policies and resources from the Kyverno catalog
- Sharing state with simple links
- Comes with a tutorial to learn Kyverno easily
- Since v0.10.0 it includes the same functionality as MCP Server

### Context and Variables

It is currently not possible to add variables from external resources…
