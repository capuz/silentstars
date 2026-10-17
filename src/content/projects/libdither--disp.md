---
repo: "libdither/disp"
name: "disp"
description: "Aspiring universal programming language. Features: user-definable syntax and types + self-improving optimizer that creates provably correct, hardware-optimal programs from formal specification. Bootstrapped on Barry Jay's reflective tree calculus."
readmeQualityOk: true
url: "https://github.com/libdither/disp"
homepage: "https://disp-lang.net"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [32, 21]
topics: ["decentralization", "dependent-types", "tree-calculus", "types-as-predicates", "programming-language"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-12-17T17:41:36Z"
lastCommitAt: "2026-10-17T07:59:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["zyansheep", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a07f9ffed8e34fa59a5372347c0924b8e91702ee4f325c49fa18b766a54e2708/libdither/disp"
---

# Disp

Disp is a self-verified dependently-typed programming language built on the [tree calculus](https://github.com/barry-jay-personal/tree-calculus), a computation model whose programs can inspect other programs. That reflection is what lets types be ordinary functions: a type takes a value and returns true or false. The long-term goals are to:
 - Create the ultimate programming language, one that other programming languages can be re-created in and transpiled to.
 - Create a "decentralized" programming language, where different programmers can build and adopt new features (syntax, types) independently, with automatic translation between their dialects.
 - Use disp to create a general-purpose program optimizer: a program that takes a specification (a type, a predicate, or more generally a loss function) and returns something that maximally satisfies it.
 - Write the type of such optimizers and have the optimizer create itself, yielding an interpretable (symbolic) recursively self-improving optimizer.
 - Create hardware cost models at varying levels of detail and have the optimizer target to produce behaviorally equivalent code that minimizes cost for those hardware models.

##…
