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
topics: ["new-programming-language", "programming-language", "compiler", "compiled-language", "concurrency", "cranelift", "garbage-collection", "goroutines", "native-code", "package-manager"]
stars: 111
forks: 31
openIssues: 7
closedIssues: 420
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-04-12T08:49:07Z"
lastCommitAt: "2026-11-24T00:09:06Z"
lastReleaseAt: "2026-03-31T16:33:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 50
maintainers: ["martian56"]
openGraphImageUrl: "https://opengraph.githubassets.com/a22f48576fde3825ca80823e5a987c48c38ef05346eaa55e02965b177d0c758d/martian56/raven"
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
- Runs at native speed: compiled through Cranelift into a single static binary. On the benchmarks below it is ahead of Go on seven of nine and within 9% on the other two, faster than C on dictionaries and strings, within 7% of C on recursion, mandelbrot, and the sieve, and ahead of C, Go, and Rust on allocation-heavy code.
- Compiles fast: a small program builds in about 0.25 seconds, and a 10,000-line program in about 0.75 seconds, roughly four times faster than `go build` on the same program.
- Static typing with generics, traits, and sum types checked by an exhaustive `match`.
- A tracing garbage collector and `Result`/`Option` instead of `null`.
