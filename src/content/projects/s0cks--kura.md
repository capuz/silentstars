---
repo: "s0cks/kura"
name: "kura"
description: "A functional programming language for game engine UIs inspired by Elm, Typst, Haskell and Flutter"
readmeQualityOk: true
url: "https://github.com/s0cks/kura"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["compiler", "functional-programming", "llvm", "llvm-clang", "llvm-ir", "mvu", "ui"]
stars: 6
forks: 0
openIssues: 40
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T04:15:51Z"
lastCommitAt: "2026-11-11T19:43:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 69
undervaluedScore: 37
maintainers: ["s0cks", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1243120107/c6a2f123-b1ef-4c02-ab92-1321d8eb9b8c"
discussionCount: 1
---

# Kura

> A declarative, functional DSL for real-time game engine UIs
> 
> ***Warning***: Under active development. Expect breaking changes and evolving ABIs

Kura combines pure functional composition and layout primitives with a compiler-driven UI architecture and
a deterministic rendering pipeline.

By treating the UI as a compile-time data structure, Kura bypasses the overhead of traditional virtual DOM architectures.

Kura transforms your view declarations directly into a reactive, dependency-sorted render graph built to execute inside
game engine loops at native speeds.

---

## Influenced By

- ***Functional Languages:*** Elm, Haskell and Jsonnet
- ***Layout & Typesetting:*** Typst
- ***UI Frameworks:*** Flutter, React, Dear ImGui

## Why Kura?

Traditional UI frameworks for renderers typically fall into 2 categories: Immediate Mode & DOM-based.

Immediate mode frameworks are typically fast to render, but become a nightmare of spaghetti code and state management.
DOM-based frameworks on the other hand have great ergonomics, but become bloated by their runtime.

---

Kura is engineered to solve these friction points by providing:

- Good developer ergonomics with declarative…
