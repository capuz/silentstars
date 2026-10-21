---
repo: "calcit-lang/calcit"
name: "calcit"
description: "Indentation-based ClojureScript dialect in Rust and compiling to JavaScript ES Modules"
readmeQualityOk: true
url: "https://github.com/calcit-lang/calcit"
homepage: "https://calcit-lang.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["lisp", "clojurescript", "indentation", "cirru", "immutable-data-structures", "clojure", "language"]
stars: 148
forks: 3
openIssues: 36
closedIssues: 817
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2021-04-15T13:43:15Z"
lastCommitAt: "2026-10-21T17:31:41Z"
lastReleaseAt: "2021-04-27T17:42:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 99
undervaluedScore: 45
maintainers: ["tiye", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/358273748/33e0039f-2e64-444b-bc81-5bfc505fc70f"
discussionCount: 38
---

### Calcit Programming Language

> A typed functional language for interactive and real-time applications. Built with Rust and compiling to JavaScript ES Modules.

- Home https://calcit-lang.org/
- API Doc https://apis.calcit-lang.org/
- Guidebook https://guide.calcit-lang.org/

[Browse examples](https://github.com/calcit-lang/calcit/tree/main/calcit) or also [try WASM version online](https://github.com/calcit-lang/calcit-wasm-play).

Core design:

- Interpreter runs on Rust, extensible with Rust FFI
- Persistent Data Structure
- Indentation-based Cirru syntax, friendly to plain text editing
- Code-as-data macros and functional style
- Nominal structs/enums, traits, methods, Option/Result, and static analysis
- Compiles to JavaScript in ES Modules, JavaScript Interop
- Hot code swapping friendly

Current direction:

- 编译后端的新增投入集中在 WebAssembly，并以共享 Calcit 语义用例逐步扩大可编译范围
- `calcit.cirru` is the canonical source snapshot; retired `compact.cirru` inputs receive migration guidance
- CLI-first development with the `calcit` runtime and the independently released `caps` package manager, designed to work well with AI agents in terminal workflows
- Better CLI editing and validation for CI,…
