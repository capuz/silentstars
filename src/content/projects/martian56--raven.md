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
stars: 111
forks: 26
openIssues: 5
closedIssues: 417
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-04-12T08:49:07Z"
lastCommitAt: "2026-11-21T08:50:10Z"
lastReleaseAt: "2026-03-31T16:33:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 50
maintainers: ["martian56", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c1a7d4e2b6459c9c93a32e31102b15ec75615bd4e22acf82d330631eeba28ae/martian56/raven"
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
- Runs at native speed: compiled through Cranelift into a single static binary, ahead of Go on four of five benchmarks below and within reach of C and Rust.
- Compiles a 10,000-line program in about 0.7 seconds.
- Static typing with generics, traits, and sum types checked by an exhaustive `match`.
- A tracing garbage collector and `Result`/`Option` instead of `null`.
- Goroutines and channels that run in parallel across CPU cores (an M:N scheduler over a multi-threaded collector), with mutexes, wait groups, and `select`, and a C FFI for native libraries.
- A package manager (`rvpm`), one canonical formatter, and a VS Code extension.
