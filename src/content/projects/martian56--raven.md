---
repo: "martian56/raven"
name: "raven"
description: "Raven is a new systems and application programming language designed to combine the performance and control of C++, the safety and modern features of Rust, the readability of Python, the structure of Java, and the simplicity of Go."
url: "https://github.com/martian56/raven"
homepage: "https://raven.ufazien.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["new-programming-language", "programming-language"]
stars: 30
forks: 15
openIssues: 36
closedIssues: 341
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-04-12T08:49:07Z"
lastCommitAt: "2026-06-25T06:42:32Z"
lastReleaseAt: "2026-03-31T16:33:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 71
maintainers: ["martian56"]
openGraphImageUrl: "https://opengraph.githubassets.com/3773966bb8bb7cf4f5400a3e6f76cf30fffa4ff0100b700bfe96f33efac981e8/martian56/raven"
discussionCount: 1
---

</p>

  A modern programming language built with Rust.<br/>
  Fast, safe, expressive, and easy to read.
</p>

</p>

  ·
  ·
  ·
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

This installs the `raven` compiler and the `rvpm` package manager and adds them to your…
