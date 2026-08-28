---
repo: "victor-smirnov/logos"
name: "logos"
description: "A systems language built for the models that write it. Ownership and borrowing, Writ as a first-class data substrate, Deem as integrated Datalog reasoner with batteries, compile-time metaprogramming as ordinary Logos code, targeting a heterogeneous compute model (LCM)"
readmeQualityOk: true
url: "https://github.com/victor-smirnov/logos"
homepage: "https://logos-lang.dev"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [59, 33]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T00:41:34Z"
lastCommitAt: "2026-08-28T14:22:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["victor-smirnov"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a6d94525d9f5c5e4342e1db6bb9c80275edca98e9a5e99d9d6c066622c43e09/victor-smirnov/logos"
---

# Logos

Logos is a compiled, statically-typed systems programming language with its own compiler (`logosc`), standard library, and runtime. It descends from ideas explored in the [Memoria Framework](https://github.com/victor-smirnov/memoria), but is a standalone language platform — not a C++ framework layer.

## What Logos Is

- A compiled language (`.logos`) with ownership/borrowing, traits, generics, monomorphization, and pattern matching.
- A native compiler pipeline (`logosc`) covering parse, sema, borrow checking, monomorphization, MLIR generation, and LLVM lowering.
- A standard library (`stdlib/`) including a first-class **Writ** integration — a relocatable, schema-aware, tagged data substrate.
- A large executable test suite (~800 passing tests, ~165 diagnostic tests) that gates merges.

## Relationship to Rust

The Rust-like surface was effectively chosen by the model. The original plan was a much simpler, IR-adjacent syntax with no expressions — explicit, verbose, optimised for small and mid-sized models. In practice the language also has to be pleasant for humans to read and write, and Rust turned out to sit in a sweet spot: expressive, low-level, a good DSL host, and…
