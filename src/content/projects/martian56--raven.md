---
repo: "martian56/raven"
name: "raven"
description: "Raven is a new systems and application programming language designed to combine the performance and control of C++, the safety and modern features of Rust, the readability of Python, the structure of Java, and the simplicity of Go."
readmeQualityOk: true
url: "https://github.com/martian56/raven"
homepage: "https://raven.ufazien.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["new-programming-language", "programming-language", "compiler"]
stars: 110
forks: 26
openIssues: 6
closedIssues: 417
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-04-12T08:49:07Z"
lastCommitAt: "2026-11-22T01:27:11Z"
lastReleaseAt: "2026-03-31T16:33:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 50
maintainers: ["martian56"]
openGraphImageUrl: "https://opengraph.githubassets.com/be5ae96130c7fef3c27092f3a70cd57ab2ca0001aaa66a2cc3574ee4073cc9be/martian56/raven"
discussionCount: 2
postedAt: "2026-06-25T06:46:44.859Z"
---

A modern programming language built with Rust.<br/>
  Fast, safe, expressive, and easy to read.

  &middot;
  &middot;
  &middot;

## Why Raven

- Reads like Python with braces: classes, tuples, comprehensions, `x in xs`, f-string formatting, `len`/`sorted`/`enumerate` and the other builtins, named and default arguments, `x => x * 2` lambdas, inferred types.
- Runs at native speed: compiled through Cranelift into a single static binary. On the benchmarks below it is ahead of or level with Go on seven of eight, faster than C on dictionaries and strings, within 10% of C on recursion, mandelbrot, and the sieve, and ahead of C, Go, and Rust on allocation-heavy code.
- Compiles fast: a small program builds in about 0.25 seconds, and a 10,000-line program in about 0.75 seconds, roughly four times faster than `go build` on the same program.
- Static typing with generics, traits, and sum types checked by an exhaustive `match`.
- A tracing garbage collector and `Result`/`Option` instead of `null`.
- Goroutines and channels that run in parallel across CPU cores (an M:N scheduler over a multi-threaded collector), with mutexes, wait groups, and `select`, and a C FFI for native libraries.
