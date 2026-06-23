---
repo: "jcz2020/par"
name: "par"
description: "PAR: Programmable Agent Runtime — OCaml 5 agent framework with multi-provider LLM"
url: "https://github.com/jcz2020/par"
homepage: "https://jcz2020.github.io/par/"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [90]
stars: 102
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-05-28T02:49:36Z"
lastCommitAt: "2026-06-23T23:18:35Z"
lastReleaseAt: "2026-06-20T21:21:14Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 34
maintainers: ["jcz2020"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2eb1a504c71877ec2447c11c021d00894ba75d45039ec73190a984efbb8d352/jcz2020/par"
---

# PAR — Programmable Agent Runtime

**English** · [简体中文](docs/zh/README.md)

A modular, type-safe agent runtime. LangChain + LangGraph for OCaml — but you can use it from Python or the CLI without writing a single line of OCaml.

> **Status**: v0.5.1-beta. RAG foundation (embeddings, vector store, chunking, invoke_with_rag) + Python streaming output. API may change before v1.0.

---

## What is PAR?

PAR is an agent runtime that handles the plumbing — ReAct loop, tool dispatch, multi-provider LLM calls, persistence, event bus, middleware — so you can focus on your agent's logic, not on infrastructure. Think of it as the server framework for LLM-powered applications, written in OCaml for type safety and structured concurrency, accessible from three surfaces: OCaml SDK, Python binding, and CLI.

## Who is this for?

- **Python backend engineers** who want type-safe agent infrastructure without rewriting their stack in OCaml — `pip install par-runtime` and call the same runtime from Python.
- **OCaml developers** building production LLM applications — the SDK is first-class, every public API has a typed interface.
- **Anyone who wants a CLI** to drive an agent without writing code —…
