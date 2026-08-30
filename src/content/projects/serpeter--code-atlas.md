---
repo: "SerPeter/code-atlas"
name: "code-atlas"
description: "Code intelligence graph for AI coding agents. Combines graph traversal, semantic search, and BM25 keyword search in a single Memgraph-powered system. Indexes code structure, documentation, and dependencies with AST-level incremental updates. Monorepo-native. Self-hosted. MCP server included."
readmeQualityOk: true
url: "https://github.com/SerPeter/code-atlas"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-02-07T13:11:31Z"
lastCommitAt: "2026-08-30T00:01:03Z"
lastReleaseAt: "2026-08-04T06:41:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 62
maintainers: ["SerPeter", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6784e1e34b79dbf98eaf853ab96e13e866fc593197383869c7315ee23b2c99f1/SerPeter/code-atlas"
fundingLinks: ["GITHUB:https://github.com/SerPeter"]
---

# Code Atlas

**A code intelligence graph that gives AI coding agents deep, token-efficient understanding of your codebase — structure, docs, and dependencies in one searchable graph.**

> Map your codebase. Search it three ways. Feed it to agents.

---

## The Problem

Every time an AI agent touches your codebase, it burns tokens just figuring out where things are. Grep for a function name. Read five files to understand the call chain. Search docs for context. Repeat — across every task, every session. On a large project, agents can spend **30–50% of their context window** on orientation before they write a single line of code.

Many tools solve one piece of this: semantic search, or graph traversal, or keyword lookup. But a developer doesn't understand a codebase through one lens — they build a **mental model** that connects structure, meaning, and names simultaneously. Agents need the same thing.

Code Atlas is that mental model, externalized as a graph.

## What Is This?

Code Atlas builds a **graph database** of your entire codebase — code structure, documentation, and dependencies — and exposes it via **MCP tools** that AI coding agents can use to understand, navigate, and…
