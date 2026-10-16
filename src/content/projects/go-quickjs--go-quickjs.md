---
repo: "go-quickjs/go-quickjs"
name: "go-quickjs"
description: "A fast, embeddable JavaScript engine for Go: QuickJS-NG reimplemented in pure Go, no cgo."
readmeQualityOk: true
url: "https://github.com/go-quickjs/go-quickjs"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["javascript", "quickjs", "intl", "temporal", "cgo-free", "chrome-devtools-protocol", "ecmascript", "embedded-scripting", "go", "golang"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-18T12:23:53Z"
lastCommitAt: "2026-10-16T08:17:49Z"
lastReleaseAt: "2026-09-28T14:34:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["zeeker999"]
openGraphImageUrl: "https://opengraph.githubassets.com/158c91e238b880545974a4589729150aca34c43884214543e4bbf02d6fa15cde/go-quickjs/go-quickjs"
discussionCount: 2
---

# go-quickjs

A JavaScript engine for Go, reimplementing [QuickJS-NG] in pure Go.

No cgo, no WebAssembly, no C toolchain. It cross-compiles anywhere Go does.

```go
rt := quickjs.New()
defer rt.Close()

v, err := rt.Eval(`[1, 2, 3].map(x => x * 2).join("-")`)
fmt.Println(v) // 2-4-6
```

Three things live here:

| | |
|---|---|
| `quickjs` | the engine, to embed in a Go program |
| `qjs` | a command that runs JavaScript, with the capabilities you allow |
| `jsregexp` | ECMAScript regular expressions for Go, which RE2 cannot express |

```
go get github.com/go-quickjs/go-quickjs
go install github.com/go-quickjs/go-quickjs/cmd/qjs@latest
```

## Status

The language is substantially complete: expressions, closures, classes with
inheritance and private members, destructuring, generators, `async`/`await`,
Promises, regular expressions, modules with top-level `await`, Proxy, typed
arrays, explicit resource management and proper tail calls all work, as does
the web-compatibility annex, and all of it is exercised against [test262], the
official ECMAScript conformance suite.

`Intl` is there too, from [go-intl], a pure-Go implementation of ECMA-402 built
to answer as ICU 78.3 does in…
