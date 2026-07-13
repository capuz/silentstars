---
repo: "karalang/kara"
name: "kara"
description: "The Kāra programming language — compiled via  LLVM, with automatic parallelization and   WebAssembly support."
readmeQualityOk: true
url: "https://github.com/karalang/kara"
homepage: "https://karac.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["compiler", "language", "llvm", "programming-language"]
stars: 38
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-04T11:31:34Z"
lastCommitAt: "2026-07-13T06:35:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 36
maintainers: ["gowthamswe", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bcf26d16a6a939839d6c5c6ec54969465b1f0434a80dc14c466f93d5d7dc82b/karalang/kara"
---

# Kāra

Kāra is a systems programming language for the age of AI-written code. Declare intent; the compiler handles what LLMs get wrong — memory layout, ownership, concurrency — and emits every decision as structured output agents can consume.

Questions, ideas, or design feedback? [Start a GitHub Discussion](https://github.com/karalang/kara/discussions/new/choose) — all input welcome.

---

## Hello, Kāra

```kara
fn main() {
    println("Hello, world!");
}
```

```bash
karac run hello.kara        # Hello, world!
```

Three things Kāra does that other languages make you do by hand:

- **Effects → automatic concurrency.** Functions declare what they touch; the compiler runs independent work in parallel for you — no `async`/`await`, no colored functions, no thread plumbing.
- **Ownership without lifetime annotations.** Memory safety with no `'a` syntax — parameter modes are declared at the signature; the rest is inferred.
- **Every compiler decision as JSON.** Effects, ownership, concurrency, and fixes are all queryable, so agents (and you) read exactly what the compiler decided.

### The whole idea in one program

Reads from two data sources and combines them — written as plain…
