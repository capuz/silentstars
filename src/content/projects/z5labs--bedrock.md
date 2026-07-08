---
repo: "z5labs/bedrock"
name: "bedrock"
description: "A framework for building other frameworks"
readmeQualityOk: true
url: "https://github.com/z5labs/bedrock"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "golang", "framework"]
stars: 17
forks: 1
openIssues: 1
closedIssues: 106
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-07-25T03:56:36Z"
lastCommitAt: "2026-07-08T05:41:22Z"
lastReleaseAt: "2024-02-16T21:41:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["renovate[bot]", "Zaba505"]
openGraphImageUrl: "https://opengraph.githubassets.com/7864735388490ae4bfe8569a6bb1be48fc36d1eb3eae429120b91baeac7d59c7/z5labs/bedrock"
discussionCount: 1
---

# bedrock

**bedrock provides a minimal, modular and composable foundation for
quickly developing more use case specific frameworks in Go.**

# Building custom frameworks with bedrock

One of the guiding principals for [bedrock](https://pkg.go.dev/github.com/z5labs/bedrock) is to be composable.
This principal comes from the experience gained from working with custom, tailor made frameworks which
over their lifetime within an organization are unable to adapt to changing
development and deployment patterns. Eventually, these frameworks are abandoned
for new ones or completely rewritten to reflect the current state of the organization.

[bedrock](https://pkg.go.dev/github.com/z5labs/bedrock) defines a small set of types and carefully
chooses its opinions to balance composability and functionality, as much as it can. The result is, in fact, a framework
that isn't necessarily designed for building services directly, but instead meant for building
more custom, use case specific frameworks.

For example, [bedrock](https://pkg.go.dev/github.com/z5labs/bedrock) could be used by your organizations
platform engineering or framework team(s) to quickly develop internal frameworks which…
