---
repo: "horacehoff/keel"
name: "keel"
description: "Fast, statically-typed interpreted language that blends Rust-like syntax with Python's ease of use. 2-10x faster than Python, with type inference, monomorphization, and constant folding."
readmeQualityOk: true
url: "https://github.com/horacehoff/keel"
homepage: "https://keel-lang.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["fast", "compiler", "interpreters", "keel", "monomorphization", "performance", "repl", "statically-typed", "type-inference", "programming-language"]
stars: 106
forks: 3
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-03-30T10:53:30Z"
lastCommitAt: "2026-11-08T10:41:29Z"
lastReleaseAt: "2026-07-30T21:27:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 43
maintainers: ["horacehoff"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/779627606/49e4462c-a5a3-4e87-9ac0-789214287457"
discussionCount: 0
---

> [!WARNING]
> Keel is under active development

**Keel** is a fast, statically-typed interpreted language that aims to combine Rust-like syntax with Python's ease-of-use.

Its goal is to provide a faster alternative to Python that sits closer to low-level languages while remaining accessible to a wide audience.

**[Contributions and issues](https://github.com/horacehoff/keel/blob/HEAD/CONTRIBUTING.md) are very welcome!**

[Website](https://keel-lang.com)
[Documentation](https://docs.keel-lang.com)
[Install Keel](#installation)
[Try Keel in your browser](https://keel-lang.com/playground)

## Why Keel?

- **Fast**: ~2-15x faster than Python ([benchmarks](https://github.com/horacehoff/keel/blob/HEAD/BENCHMARKS.md)), with aggressive compile-time optimizations
- **Familiar syntax**: Rust-like, with Python's ease-of-use
- **Statically typed, optional annotations**: full type inference, static type checking, polymorphism
- **FFI support**: easily call C/dynamic libraries directly from Keel. FFI call overhead is ~3.5x lower than LuaJIT (-joff).
- **Built-in REPL**

Keel also has a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=horacehoff.keel) that provides…
