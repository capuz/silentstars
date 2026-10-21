---
repo: "Randozart/briev-lang"
name: "briev-lang"
description: "Briev: a contract-enforced programming language and compiler. Verified state transitions, LLVM backend, reactive execution, multi-target codegen (native/embedded/GPU/hardware/web)."
readmeQualityOk: true
url: "https://github.com/Randozart/briev-lang"
language: "Rust"
languages: ["Rust"]
languagePcts: [70]
topics: ["compiler", "concurrency", "ffi", "formal-verification", "language-design", "llvm", "programming-language", "rust", "static-analysis", "systems-programming"]
stars: 39
forks: 4
openIssues: 9
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-04-04T09:37:46Z"
lastCommitAt: "2026-10-21T21:15:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["Randozart"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d6dc58da3fc6db1febe35666fd62f1d114baf911b90a8f0b81b4ed8109abf4/Randozart/briev-lang"
discussionCount: 0
---

# Briev: A Programming Language
### TL;DR

Briev is a programming language with the following features:

- Contract driven partial correctness verification (without needing to write essays of formal proof)
- Partially declarative, partially imperative, functional invariant based programming
- Invariant based runtime optimization (with execution speed at parity, or even better than C in several cases)
- Backend independence through state-management based syntax and backend handling of intrinsics
- Backend targeting by extension (`.bv`, `.ebv`, `.rbv`, `.abv`, `.sbv`), plus the auxiliary assembly dialect (`.bad`) and the `.beast` AST format
- A lightweight systems language that handles complexity at compile time
- Core syntax that is equally applicable to the other backends, not just systems programming (auxiliary dialects deliberately drop to lower tiers)
- Inferred command flow through reactive top level `node` declarations
- Memory management by proof through AST graphing
- Syntax which encourages and optimizes for flat programming
- Exhaustive `match` with enum construction — patterns are checked, missing arms are errors
- First-class function values — pass any named function…
