---
repo: "ecnivslabs/olive"
name: "olive"
description: "The Dream Programming Language"
readmeQualityOk: true
url: "https://github.com/ecnivslabs/olive"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["programming-language", "olive"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-07T17:27:19Z"
lastCommitAt: "2026-07-09T20:44:19Z"
lastReleaseAt: "2026-05-23T04:35:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["vinceswu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d684f43c7713829f2bd0bab7b9c5315dc83eaf366999944f1fc405003d676a29/ecnivslabs/olive"
---

</a>
  </a>
  </a>
</p>

## Overview

**A general-purpose systems language that's easy to read, fast to run, and keeps your memory safe.**

Olive was built for when you want the speed of a low-level language without the headache of complex syntax. It uses a clean, indentation-based structure and a smart ownership model to provide consistent performance without a garbage collector.

## Why Olive?

- **Clean Syntax**: No braces, no semicolons. Indentation defines the structure, keeping your code readable and consistent.
- **Memory Safety, No Annotations**: The compiler infers ownership and frees values deterministically; references are borrow-checked, and a generation-checked allocator turns anything the analysis can't prove into a precise runtime fault instead of corruption. No garbage collector, no lifetime syntax.
- **Blazing Fast**: Optimized to native code via the Cranelift backend. It's designed to run close to the metal with zero-cost abstractions.
- **Modern Concurrency**: True async/await that's easy to use and extremely efficient.
- **C / Rust Interop**: Interface with C or Rust libraries through a C-compatible ABI with built-in FFI support.
- **Python Interop**: Import…
