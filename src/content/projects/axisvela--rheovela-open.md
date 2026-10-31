---
repo: "axisvela/rheovela-open"
name: "rheovela-open"
description: "RHEOVELA: Dynamic Process & Durable Workflow Platform (event-sourced, deterministic, idempotent, auditable). rheovela-open (Apache-2.0): versioned contracts, 5-language worker SDKs, HTTP Worker API, OpenAPI & examples."
readmeQualityOk: true
url: "https://github.com/axisvela/rheovela-open"
language: "Go"
languages: ["Go"]
languagePcts: [34]
topics: ["agent", "durable-execution", "event-sourcing", "go", "java", "open-source", "process-engine", "python", "rust", "sdk"]
stars: 12
forks: 12
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 7
createdAt: "2026-07-21T02:42:20Z"
lastCommitAt: "2026-10-31T07:45:09Z"
lastReleaseAt: "2026-10-28T15:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 62
maintainers: ["hanhuiwen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4c6ecdc29205f59a9fed007bc44203a3099262c129b0c67fba0f85136499539/axisvela/rheovela-open"
---

> English · [中文](https://github.com/axisvela/rheovela-open/blob/HEAD/README.zh.md)

# RHEOVELA — Dynamic Process & Durable Workflow Platform

## What is RHEOVELA

RHEOVELA is a **Dynamic Process & Durable Workflow Platform** that materializes
governed Capability Plans into **persistent, recoverable, approvable, migratable
and auditable Process Instances**.

**The problem it solves**: More and more long-running work in an enterprise is
carried forward by agents, humans and robots together, spanning minutes, hours,
days or months. Yet agent sessions and individual workers are ephemeral — a model
process exiting, a network outage, a worker crash, a shift change or a system
upgrade can all lose, duplicate or render unexplainable the work "in progress".
Traditional BPM modeling is too static to absorb dynamic agent plans, while a bare
agent loop has no notion of long-lived responsibility, recovery or audit.

**The answer**: RHEOVELA owns "how long-running work reliably flows" — not
open-ended planning, and not a single agent's inference loop.

### Key features

- **Event sourcing + deterministic kernel**: consistent state is recovered from
  the event stream after any crash; the same…
