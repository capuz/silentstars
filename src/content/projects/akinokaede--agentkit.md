---
repo: "AkinoKaede/AgentKit"
name: "AgentKit"
description: "A tool-calling agent runtime for Swift apps. "
readmeQualityOk: true
url: "https://github.com/AkinoKaede/AgentKit"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-02T05:37:15Z"
lastCommitAt: "2026-09-12T08:03:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 11
maintainers: ["AkinoKaede"]
openGraphImageUrl: "https://opengraph.githubassets.com/85f1c9aa083aa841d4ac89fe47fcbe2b1b1e8222a4c228ed73318bea1babc5d1/AkinoKaede/AgentKit"
---

# AgentKit

A tool-calling agent runtime for Swift apps. No UI.

The loop, the approval gate, the provider adapters, and a set of built-in tools you choose from.
Everything with an opinion about what your app actually does — where it connects, what it can
reach, how it draws a tool card — is yours to supply.

```swift
.package(url: "https://github.com/AkinoKaede/AgentKit.git", from: "0.5.0")
```

macOS 15+, iOS 18+, Swift 6.

## What it is for

An agent that only talks is easy. One that *acts* — writes things, changes things, spends money,
and does it somewhere the consequences are real — is where the hard parts are, and they are all in
the same place: between the model asking and the thing happening. This is a runtime for that gap.

**Safety is proven locally, never asserted.** Every call is classified before it runs, and the
classification comes from evidence this process established — a resolved path, a parsed URL, a
command a classifier could read. Nothing a model claims about its own call, and nothing a remote
MCP server annotates onto its tool, can make a call read-only. Remote metadata can only ever
tighten: a server's "destructive" hint makes a tool serial, a server's…
