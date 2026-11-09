---
repo: "karalang/kara"
name: "kara"
description: "The Kāra programming language — compiled via  LLVM, with automatic parallelization and   WebAssembly support."
readmeQualityOk: true
url: "https://github.com/karalang/kara"
homepage: "https://karac.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["compiler", "language", "llvm", "programming-language"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-04T11:31:34Z"
lastCommitAt: "2026-11-09T11:58:42Z"
lastReleaseAt: "2026-11-08T17:04:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 39
maintainers: ["gowthamswe"]
openGraphImageUrl: "https://opengraph.githubassets.com/139acc3cfefc41910f285735780f204be903258848c5cff5deda7f7c2a151e31/karalang/kara"
---

# Kāra

Kāra is a systems programming language for the age of AI-written code. You declare intent; the compiler handles what language models get wrong (ownership, effects, concurrency) and reports every decision as structured output that an agent can read.

Questions, ideas or design feedback? [Start a GitHub Discussion](https://github.com/karalang/kara/discussions/new/choose). Want to send a patch? [CONTRIBUTING.md](https://github.com/karalang/kara/blob/HEAD/CONTRIBUTING.md) covers the build, the gates and the invariants worth knowing first.

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

Three things Kāra does that other languages leave to you:

- **Effects drive concurrency.** Functions say what they touch. The compiler checks `par` blocks against those effects, and runs independent work in parallel by itself where it can prove it safe and the work is big enough to pay for a task. There is no `async`/`await` and no function colouring.
- **Ownership without lifetime annotations.** Parameters borrow by default, `own T` takes ownership, and `mut ref T` writes. A returned view's source is…
