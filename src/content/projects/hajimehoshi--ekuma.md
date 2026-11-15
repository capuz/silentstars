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
lastCommitAt: "2026-11-15T08:17:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["hajimehoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dcc0b7061a06a30ed798ae968818eacf4b1d89f923d21ebb5ba3a2cf711204f/hajimehoshi/ekuma"
---

# Ekuma

Ekuma is a JavaScript engine written in pure Go: no cgo and no `unsafe`.
It is an interpreter without a JIT, designed to be fast for one.
Its only dependency is [`golang.org/x/text`](https://pkg.go.dev/golang.org/x/text),
for Unicode normalization.

The project is at an early stage. The API is unstable and a large part of the language's
standard library is missing. See [Status](#status).

```go
var vm ekuma.VM
v, err := vm.RunScript(ctx, "hello.js", `"Hello, " + ["wor", "ld"].join("")`)
if err != nil {
	// A *ekuma.SyntaxError, or a *ekuma.Error when the script throws.
}
fmt.Println(v.String()) // Hello, world
```

The zero value of `ekuma.VM` is ready to use. A `VM` must not be copied after first use.

The API follows [`syscall/js`](https://pkg.go.dev/syscall/js) where it can:
`Value.Get`, `Value.Set`, `Value.Call`, `Value.Invoke`, `Value.New`, `VM.ValueOf`, `VM.FuncOf`,
`CopyBytesToGo`, `CopyBytesToJS`.
Unlike `syscall/js`, a JavaScript exception is returned as an error, and the methods that run
a script or call a function take a `context.Context` that stops them.

### Modules

A module is parsed with `VM.ParseModule`, `VM.ParseJSONModule` or `VM.NewSyntheticModule`,…
