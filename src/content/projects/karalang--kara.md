---
repo: "karalang/kara"
name: "kara"
description: "The Kāra programming language — compiled via  LLVM, with automatic parallelization and   WebAssembly support."
readmeQualityOk: true
url: "https://github.com/karalang/kara"
homepage: "https://karac.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["compiler", "language", "llvm", "programming-language"]
stars: 40
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-04T11:31:34Z"
lastCommitAt: "2026-08-18T04:09:00Z"
lastReleaseAt: "2026-08-04T15:46:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 37
maintainers: ["gowthamswe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7679a4a0a471dc9d3ae8b8444553a2145955378d87a87cfe2fde70e0bc8f25f/karalang/kara"
---

# Kāra

Kāra is a systems programming language for the age of AI-written code. Declare intent; the compiler handles what LLMs get wrong — memory layout, ownership, concurrency — and emits every decision as structured output agents can consume.

Questions, ideas, or design feedback? [Start a GitHub Discussion](https://github.com/karalang/kara/discussions/new/choose) — all input welcome.
Want to send a patch? [CONTRIBUTING.md](https://github.com/karalang/kara/blob/HEAD/CONTRIBUTING.md) covers the build, the gates, and the invariants worth knowing first.

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
- **Every compiler decision as JSON.** Effects, ownership, concurrency, and fixes are all…
