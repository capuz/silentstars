---
repo: "karalang/kara"
name: "kara"
description: "The Kāra programming language — compiled via  LLVM, with automatic parallelization and   WebAssembly support."
readmeQualityOk: true
url: "https://github.com/karalang/kara"
homepage: "https://karac.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["compiler", "language", "llvm", "programming-language"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-04T11:31:34Z"
lastCommitAt: "2026-10-24T08:07:22Z"
lastReleaseAt: "2026-08-04T15:46:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 36
maintainers: ["gowthamswe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5c1f39484a1623a1f8f7996e9f4ceb9884fdd0d2aa8595622c431c380148c2e/karalang/kara"
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
