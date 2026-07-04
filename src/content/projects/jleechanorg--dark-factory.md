---
repo: "jleechanorg/dark-factory"
name: "dark-factory"
description: "Dark Factory - Attractor-pattern DOT pipeline runner (Python). Holdouts live in dark-factory-holdouts."
url: "https://github.com/jleechanorg/dark-factory"
language: "Python"
languages: ["Python"]
languagePcts: [68]
stars: 7
forks: 2
openIssues: 16
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-21T08:22:10Z"
lastCommitAt: "2026-07-04T19:20:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 47
maintainers: ["jleechan2015"]
openGraphImageUrl: "https://opengraph.githubassets.com/10c2cedcff3138fc0d89615aa3cd73b08938ec926129d74e7f61d98555b355bb/jleechanorg/dark-factory"
---

# 🏭 Dark Factory — Attractor-Pattern DOT Pipeline Runner

> **📖 A prettier, diagram-rich HTML version of this README is available at
> [`README.html`](README.html).** The diagrams follow the shared color
> semantics documented in
> [`docs/diagram-color-semantics.md`](docs/diagram-color-semantics.md) — every
> color carries meaning (engine teal, agent blue, LLM purple, gate amber,
> holdout red, human slate).

A state-of-the-art Python implementation of the **Attractor pattern**: a robust, DOT-based pipeline engine designed to orchestrate complex multi-agent software engineering workflows using directed graphs. By shifting the unit of durability from ephemeral agent logs to version-controlled process graphs (`.dot`), Dark Factory enables fully autonomous, lights-out development pipelines.

---

## 📋 Executive Summary

**Dark Factory turns a natural-language spec into reviewed, tested code — with no human
reading the diff.** It is an implementation of the [Attractor pattern](#-sources--references)
where the durable artifact is a version-controlled process graph (`.dot`), not an agent
transcript. Work flows through **two phases**:

```mermaid
flowchart LR
  subgraph P1["Phase 1 ·…
