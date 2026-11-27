---
repo: "go-quickjs/go-quickjs"
name: "go-quickjs"
description: "A fast, embeddable JavaScript engine in pure Go: a register-based interpreter with native handlers and an optional JIT, no cgo or C toolchain."
readmeQualityOk: true
url: "https://github.com/go-quickjs/go-quickjs"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["javascript", "quickjs", "intl", "temporal", "cgo-free", "chrome-devtools-protocol", "ecmascript", "embedded-scripting", "go", "golang"]
stars: 36
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-18T12:23:53Z"
lastCommitAt: "2026-11-27T15:51:29Z"
lastReleaseAt: "2026-09-28T14:34:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["zeeker999"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e393d8752e7c3cccba59ae89bcd6566951cb55406113342e90fb9f7c4946bea/go-quickjs/go-quickjs"
discussionCount: 3
---

# go-quickjs

A JavaScript engine for Go, written in pure Go, with an interpreter of its
own design and an optional, experimental JIT that compiles hot functions to
native code, as V8's optimizing compilers do.

It began as a reimplementation of [QuickJS-NG], and keeps its name, its
`qjs` command and its small embedding model. How it runs code is its own:
functions compile to register code, run by an interpreter whose handlers
are native code generated for each architecture, as V8's Ignition runs
bytecode -- not QuickJS's stack bytecode.

No cgo, no C toolchain, and no C engine compiled to WebAssembly, the JIT
included. It cross-compiles anywhere Go does; the JIT runs on `linux/amd64`,
`windows/amd64`, `darwin/arm64` and `linux/arm64`, and elsewhere the engine
runs without it.

```go
rt := quickjs.New()
defer rt.Close()

v, err := rt.Eval(`[1, 2, 3].map(x => x * 2).join("-")`)
fmt.Println(v) // 2-4-6
```

Four things live here:
