---
repo: "aalpar/wile"
name: "wile"
description: "Pure Go R7RS Scheme — embeddable interpreter with hygienic macros, first-class continuations, and sandboxing"
url: "https://github.com/aalpar/wile"
homepage: "https://pkg.go.dev/github.com/aalpar/wile"
language: "Go"
languages: ["Go"]
languagePcts: [74]
topics: ["go", "golang", "hygienic-macros", "interpreter", "lisp", "r7rs", "scheme", "virtual-machine", "continuations", "embeddable"]
stars: 56
forks: 3
openIssues: 15
closedIssues: 42
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-10T02:42:15Z"
lastCommitAt: "2026-06-23T23:30:22Z"
lastReleaseAt: "2026-03-13T02:40:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 37
maintainers: ["aalpar"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b42c6d72fced429707f9f9a752afad8f7fd92f862d100afa4dd2a7fde96e645/aalpar/wile"
discussionCount: 1
---

# Wile

Wile is an R7RS-small Scheme interpreter written in pure Go. It is built to be
embedded: `go get` adds it to a Go project, and there is no CGo, no C
toolchain, and no cross-compilation friction. Scheme values are ordinary Go
heap objects collected by the Go garbage collector.

Wile targets a specific use case — adding a Lisp scripting layer to a Go
application where the workload benefits from Lisp semantics. That includes
configuration DSLs, policy evaluation, symbolic computation, and any
application where hygienic macros, exact arithmetic, or first-class
continuations are the right tool. It is not a replacement for Lua or
JavaScript on performance-bound scripting workloads.

The interpreter implements the R7RS-small language: hygienic macros via
Flatt's sets-of-scopes model, proper tail calls, first-class continuations,
the full numeric tower (exact integers, rationals, IEEE floats, arbitrary
precision, complex), and SRFI-18 threads. It can also be used as a standalone
interpreter via the `wile` command.

## Installation

Wile requires Go 1.24 or later.

### As a library

```bash
go get github.com/aalpar/wile@latest
```

Then import and use the public API; see…
