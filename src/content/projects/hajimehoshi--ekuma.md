---
repo: "hajimehoshi/ekuma"
name: "ekuma"
description: "A JavaScript engine in pure Go"
readmeQualityOk: true
url: "https://github.com/hajimehoshi/ekuma"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-13T18:03:37Z"
lastCommitAt: "2026-11-16T04:22:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["hajimehoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dcc0b7061a06a30ed798ae968818eacf4b1d89f923d21ebb5ba3a2cf711204f/hajimehoshi/ekuma"
---

# Ekuma

Ekuma is a JavaScript engine written in pure Go, without `unsafe`.
It is an interpreter without a JIT, designed to be fast for one.
Its only dependency is [`golang.org/x/text`](https://pkg.go.dev/golang.org/x/text),
for Unicode normalization.

The project is at an early stage. The API is unstable and a large part of the language's
standard library is missing. See [Status](#status).

```go
var vm ekuma.VM
s, err := vm.ParseScript("hello.js", `"Hello, " + ["wor", "ld"].join("")`)
if err != nil {
	// A *ekuma.SyntaxError.
}
v, err := s.Evaluate(ctx)
if err != nil {
	// A *ekuma.Error when the script throws.
}
fmt.Println(v.String()) // Hello, world
```

The zero value of `ekuma.VM` is ready to use. A `VM` must not be copied after first use.

## Differences from other engines for Go

| | Ekuma | [goja](https://github.com/dop251/goja) | [Sobek](https://github.com/grafana/sobek) | [otto](https://github.com/robertkrimen/otto) | [modernc.org/quickjs](https://pkg.go.dev/modernc.org/quickjs) | [QJS](https://github.com/fastschema/qjs) | [v8go](https://github.com/tommie/v8go) |
|---|---|---|---|---|---|---|---|
| Latest release | None | None | None | v0.5.1 (2024-11-05) | v0.27.0…
