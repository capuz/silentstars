---
repo: "emela-lang/emela"
name: "emela"
description: "Experimental \"first-class effect\" supported functional programming language that compiles to WebAssembly / JavaScript / C"
readmeQualityOk: true
url: "https://github.com/emela-lang/emela"
homepage: "https://docs.emela.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["effect", "functional-programming", "language", "emela", "programming-language"]
stars: 25
forks: 5
openIssues: 17
closedIssues: 46
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-26T16:17:11Z"
lastCommitAt: "2026-10-24T07:54:23Z"
lastReleaseAt: "2026-07-05T08:52:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 44
maintainers: ["Allianaab2m", "isoshigi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef03a8821a6a94510cb5df73d7d1525d0e8161f932d7a956a912419ffd91d42c/emela-lang/emela"
discussionCount: 0
---

# Emela

Emela is a functional language with typed errors and typed effects, compiling to
JavaScript and WebAssembly.

## Status

This branch is the 0.20 rebuild. The current release is **0.20.0**:
the pure subset, typed errors and effects, suspending effects, handlers with
state, fibers, files and an HTTP client compile to JavaScript and run on
Node.js. The 0.11 compiler lives on the [`legacy`](https://github.com/emela-lang/emela/tree/legacy)
branch.

| Release        | Adds                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 0.20.0-alpha.1 | Functions, records, enums, `opaque` types, pattern matching, tail calls, pipes, `List` / `Option`, modules, `@test`, `dbg` |
| 0.20.0-alpha.2 | Typed errors and effects: `error`, `fail`, `escape`, `effect`, `handler`, `use`, `with`, `@external`, `Console`            |
| 0.20.0-alpha.3 | `suspend fn`, `Async`, `Immediate`, `Clock`, `Random`, `Env`, `Instant` / `Duration`                                       |
| 0.20.0-alpha.4 |…
