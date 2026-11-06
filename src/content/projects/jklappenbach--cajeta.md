---
repo: "jklappenbach/cajeta"
name: "cajeta"
description: "A language based on a hybrid of Java and C++ that compiles to LLVM, with a borrow-checker based memory management strategy based on Rust."
readmeQualityOk: true
url: "https://github.com/jklappenbach/cajeta"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 5
forks: 2
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-19T04:16:33Z"
lastCommitAt: "2026-11-06T02:43:43Z"
lastReleaseAt: "2026-07-20T03:14:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 69
maintainers: ["jklappenbach", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd1793b11c24acc4c9fbe49ba6033d3c472fa2051824a0b222e95442225c0a4/jklappenbach/cajeta"
---

# Cajeta

Cajeta is a hybrid systems and application language. It pairs C++-style true templates (monomorphized, not erased), multiple inheritance, and operator overloading with Java-style class semantics and annotations, and Rust-inspired single-owner memory management — expressed through one explicit allocation idiom that lets the caller choose stack or heap at initialization and an `#` operator that transfers ownership. Developers coming from C++, Java, C#, Kotlin, TypeScript, or Rust find the grammar familiar on day one.

Its defining attributes:

- **One ownership model, no reference counting.** A single-owner heap with static move checking, scope-based drops, and path-level borrow tracking — a memory model that stays out of your way.
- **True zero-copy `view`s and wire formats.** Read structured bytes in place, no deserialization pass.
- **Templates with C++ semantics.** Monomorphized specialization, wildcards, and operator overloading — not type erasure.
- **A fast, allocation-light runtime.** A lightning-fast networking stack and predictable, GC-free performance.
- **Agent-native from the ground up** (see below).

The compiler is LLVM-backed (LLVM 23) and produces either…
