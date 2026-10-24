---
repo: "s4wave/goscript"
name: "goscript"
description: "Go to TypeScript transpiler"
readmeQualityOk: true
url: "https://github.com/s4wave/goscript"
homepage: "https://goscript.spacewave.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["compiler", "go", "typescript"]
stars: 230
forks: 10
openIssues: 3
closedIssues: 25
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2017-03-29T00:10:35Z"
lastCommitAt: "2026-10-24T08:07:50Z"
lastReleaseAt: "2026-04-15T14:36:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 41
maintainers: ["rcoreilly", "paralin", "spacewave-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac6cca151a0ad7da45e00f37596e657f90916d1e430b331bf41a9a572be54436/s4wave/goscript"
---

Your Go code runs anywhere TypeScript runs: Node, Bun, and the browser.

GoScript compiles Go packages into readable TypeScript modules. Write your
program in Go, with its standard library, its package ecosystem, and its
concurrency, and run it in any web browser, in Node, or in Bun.
Goroutines, channels, `select`, `defer`, pointers, and struct copies behave as
they do in Go, and the output is ordinary TypeScript you can import, bundle,
and step through in a debugger.

```bash
go install github.com/s4wave/goscript/cmd/goscript@latest
goscript compile --package . --output ./output
```

## Why GoScript

Go gives you a strong standard library, a large ecosystem of packages, simple
modules, and concurrency built into the language. GoScript brings all of it to
the browser without a WebAssembly runtime. The compiled program is plain
TypeScript, a fraction of the size of the same program built for WebAssembly:

| Program                              | GoScript | Go WebAssembly | Smaller by |
| ------------------------------------ | -------: | -------------: | ---------: |
| Hello world with `fmt`               |    47 KB |         543 KB |        12x |
| `encoding/json`, `sort`,…
