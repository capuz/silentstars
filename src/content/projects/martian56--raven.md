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
stars: 36
forks: 21
openIssues: 4
closedIssues: 413
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-12T08:49:07Z"
lastCommitAt: "2026-07-14T15:38:57Z"
lastReleaseAt: "2026-03-31T16:33:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 67
maintainers: ["martian56"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dfac9bbfe7ea97b7036f471fda871be63d6d4d42c9bac9cda0aaaea67fc8d39/martian56/raven"
discussionCount: 1
postedAt: "2026-06-25T06:46:44.859Z"
---

</p>

  A modern programming language built with Rust.<br/>
  Fast, safe, expressive, and easy to read.
</p>

</p>

  &middot;
  &middot;
  &middot;
</p>

## Why Raven

- Compiled to native machine code through Cranelift, into a single static binary.
- Static typing with generics, traits, and sum types checked by an exhaustive `match`.
- A tracing garbage collector and `Result`/`Option` instead of `null`.
- Goroutines and channels that run in parallel across CPU cores (an M:N scheduler over a multi-threaded collector), with mutexes, wait groups, and `select`, and a C FFI for native libraries.
- A package manager (`rvpm`), one canonical formatter, and a VS Code extension.

## Quick Example

```rust
struct User {
    name: String,
    age: Int,
}

fun greet(user: User) -> String {
    return "Hello ${user.name}, you are ${user.age}"
}

fun main() {
    let u = User { name: "Raven", age: 2 }
    print(greet(u))
}
```

## Install

Download the installer or archive for your platform from the [releases page](https://github.com/martian56/raven/releases):

- Linux: `.deb`, `.rpm`, or `.tar.gz`
- Windows: `.msi` or `.zip`

This installs the `raven` compiler and the `rvpm` package manager…
