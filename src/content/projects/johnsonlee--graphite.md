---
repo: "johnsonlee/graphite"
name: "graphite"
description: "Structured codebase context for LLMs"
readmeQualityOk: true
url: "https://github.com/johnsonlee/graphite"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T07:28:51Z"
lastCommitAt: "2026-08-30T09:24:47Z"
lastReleaseAt: "2026-04-12T03:56:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["johnsonlee", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5fc36716446b7d2e6190ec7887a29b2308017998b3f44e1bc4ebc630f1dcd69/johnsonlee/graphite"
---

# Graphite

**Structured codebase context for LLMs.** Graphite turns JVM bytecode into a queryable program graph — so AI agents can understand your codebase without reading every file.

## The Problem

LLMs working with code face a fundamental constraint: **context windows are finite, but codebases are not.**

Dumping source files into a prompt is wasteful. Most tokens describe boilerplate, imports, and formatting — not the relationships that matter. An LLM trying to understand "what calls this method?" or "what constants flow into this API?" must read hundreds of files to answer questions that a graph can answer in milliseconds.

## The Solution

Graphite builds a **program graph** from compiled bytecode — nodes are program elements (methods, fields, constants, call sites), edges are relationships (dataflow, calls, type hierarchy). LLMs query the graph instead of reading source code.

**Before Graphite:** Feed 500 source files (~2M tokens) to find AB test IDs.
**With Graphite:** Query `graph.callSites(pattern)` → get 23 constants in 12 tokens.

### What the Graph Captures

| Relationship | Example | LLM Use Case |
|-------------|---------|---------------|
| **Dataflow** | `x =…
