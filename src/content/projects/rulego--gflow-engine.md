---
repo: "rulego/gflow-engine"
name: "gflow-engine"
description: "Embeddable approval workflow engine for Go, built on RuleGo — JSON DSL, full approval semantics, multi-tenant."
originalDescription: "Embeddable approval workflow engine for Go, built on RuleGo — JSON DSL, full approval semantics, multi-tenant."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/rulego/gflow-engine"
homepage: "https://gflow.rulego.cc/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["approval-workflow", "bpm", "bpmn", "business-process", "go", "golang", "rulego", "workflow", "workflow-engine"]
stars: 24
forks: 2
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-09-01T03:10:53Z"
lastCommitAt: "2026-09-20T08:45:47Z"
lastReleaseAt: "2026-09-14T02:46:39Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 41
maintainers: ["whki", "fnoopv"]
openGraphImageUrl: "https://opengraph.githubassets.com/502cf4b57769a5786b1756e8aa0d9a60dde523e426e5dda1701c8910d0397a3f/rulego/gflow-engine"
---

# GFlow Engine

[English](https://github.com/rulego/gflow-engine/blob/HEAD/README_EN.md) | Simplified Chinese

> **GFlow** —— AI pre-review · then human signing · auto-process after signing

`GFlow Engine` is a lightweight, embeddable approval workflow engine based on [RuleGo](https://github.com/rulego/rulego). Process definitions reuse the `RuleGo` rule chain DSL (JSON). Approval tasks, process instances, history archives and other statuses are persisted to a relational database by the engine, eliminating the need to deploy independent process middleware. Approval nodes and automation nodes (rule chains, HTTP, AI agents, sub-processes) are freely mixed in the same process DSL — subsequent actions are automatically executed after approval; OR-sign, AND-sign, dynamic add/remove signers, rejection and other Chinese-style approval semantics are available out-of-the-box.

> Note: DSL is a JSON-format BPMN-like approval flow; it does not parse BPMN 2.0 XML.

## Features

* **Chinese-style approval semantics, out-of-the-box**: OR-sign, AND-sign, voting sign (majority/percentage/specified number of votes), sequential approval, dynamic add/remove signers, reassign, delegate, sign/claim,…
