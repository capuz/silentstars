---
repo: "chrispaig3/Axiom"
name: "Axiom"
description: "The Functional Systems Language"
readmeQualityOk: true
url: "https://github.com/chrispaig3/Axiom"
homepage: "https://axiomlang.software"
language: "LLVM"
languages: ["LLVM"]
languagePcts: [95]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-25T12:31:41Z"
lastCommitAt: "2026-10-15T08:32:34Z"
lastReleaseAt: "2026-08-30T19:41:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["chrispaig3"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca72935ac291c23fa9cfc080d09b3ecdf6981dcaccb866aea005bc65a5edc48e/chrispaig3/Axiom"
---

# Axiom

**The functional systems language.** 

> ***High-level thinking, native-level control.***

Axiom lets you model your ideas with algebraic data types and
exhaustive pattern matching, check side effects at compile time, and
ship a native executable with no VM, no garbage collector and no calls
into the C library.

- **Ship the binary. That's it.** Programs compile through LLVM to a
  native executable that carries its own allocator and talks to the
  kernel directly.
- **Make side effects explicit.** The compiler infers effects, requires
  functions that perform I/O to say so, and checks promises like
  `restrict(no-io)`.
- **Find the problem. Keep moving.** Every error has a precise
  location, a stable code, often a fix your editor can apply, and a
  full explanation behind `axiom explain`.
- **Built for you and your agents.** The syntax is uniform
  S-expressions, and the compiler can describe errors and symbols in a
  compact machine-readable form, so tools see the same facts you do.
- **Read the compiler, in Axiom.** The compiler is written in Axiom:
  over 126,000 lines of it. A clean checkout rebuilds it from committed LLVM
  IR, and the build stops unless two…
