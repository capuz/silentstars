---
repo: "LeXwDeX/GraphAgent"
name: "GraphAgent"
description: "🚧 WIP | GraphAgent v2 — Core engine and runtime architecture rewrite in progress."
originalDescription: "🚧 WIP | GraphAgent v2 — Core engine and runtime architecture rewrite in progress."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LeXwDeX/GraphAgent"
homepage: "https://github.com/LeXwDeX/GraphAgent/wiki"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["opencode", "graph-agent", "agent", "dynamical-systems"]
stars: 114
forks: 1
openIssues: 17
closedIssues: 549
watchers: 0
contributors: 964
recentReleases: 0
createdAt: "2026-04-12T04:49:00Z"
lastCommitAt: "2026-11-19T05:04:45Z"
lastReleaseAt: "2026-08-13T23:02:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 36
maintainers: ["LeXwDeX"]
openGraphImageUrl: "https://opengraph.githubassets.com/05eb9f022f1e89ef8a77725f9dcfe0fba415f5f3db56473d2e350cf0f51efee6/LeXwDeX/GraphAgent"
discussionCount: 1
---

# GraphAgent

> A terminal coding agent that runs dynamic workflows: the main agent designs the dependency graph itself, sub-agents execute in parallel waves, state is persisted, and it can recover after a crash.

GraphAgent is a standalone terminal coding agent focused on dynamic DAG workflows. It originated from an early version of opencode and has been maintained independently since v2.0.

A single agent loop handles one-shot tasks without problems. Once a task has ordering dependencies, parts that can run in parallel, or needs a review midway, it struggles: work that should run in parallel runs serially, and intermediate conclusions go unreviewed. If the process crashes, you have to start over from scratch. GraphAgent lets the main agent first draw the task as a dependency graph, then execute according to that graph. The graph is not predefined; it is designed on the fly for the task, so DAG workflows are essentially dynamic workflows.
