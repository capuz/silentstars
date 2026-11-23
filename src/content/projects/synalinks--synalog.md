---
repo: "SynaLinks/synalog"
name: "synalog"
description: "Logic programming for AI agents: Datalog-family language compiling to optimized SQL"
readmeQualityOk: true
url: "https://github.com/SynaLinks/synalog"
homepage: "https://synalinks.github.io/synalog/"
language: "PLpgSQL"
languages: ["PLpgSQL", "Common Lisp"]
languagePcts: [50, 30]
topics: ["agents", "context-engineering", "datalog", "llms", "logic-programming", "logica", "semantic-layer"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-12T18:17:17Z"
lastCommitAt: "2026-11-23T13:29:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["YoanSallami", "lucaswiman"]
openGraphImageUrl: "https://opengraph.githubassets.com/94faa1c7f85bda54bf772e6b5cb1de3825e200ccf19bd2546e4384c2555211b1/SynaLinks/synalog"
---

# Synalog
## Logic programming for AI agents: Datalog-family language compiling to optimized SQL

Synalog is a logic programming language from the [Datalog](https://en.wikipedia.org/wiki/Datalog) family, a fork of [Logica](https://logica.dev/) with the entire engine (parser, compiler and verifier) **rewritten in Rust**. It compiles to optimized **SQL** and ships as a Python package built on [PyO3](https://pyo3.rs/): parsing is **~52x faster** and compilation **~51x faster** than the original Python implementation, so validating and compiling a program is effectively instant.

Synalog was built for the AI agents era. The main idea is to give an agent a **dynamic semantic layer** over its data: a layer of named concepts and rules that the agent both reads from *and writes to* at inference time. Unlike a traditional BI semantic layer, which is modeled once by humans and frozen, Synalog's layer is authored on the fly: the agent extracts entities and relationships into **knowledge graphs**, derives meaning with composable **logical rules**, and reasons over time with **temporal reasoning**: accumulating all of it as structured, reusable memory.
