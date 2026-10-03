---
repo: "Consiliency/treesitter-chunker"
name: "treesitter-chunker"
description: "Treesitter based code chunker"
readmeQualityOk: true
url: "https://github.com/Consiliency/treesitter-chunker"
homepage: "https://consiliency.github.io/treesitter-chunker/"
language: "Python"
languages: ["Python", "HTML", "C"]
languagePcts: [53, 25, 21]
stars: 10
forks: 1
openIssues: 43
closedIssues: 47
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-07-11T21:32:55Z"
lastCommitAt: "2026-10-03T09:23:22Z"
lastReleaseAt: "2026-03-08T16:57:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 71
maintainers: ["ViperJuice"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d76f5d972a75e0d2a3d46795fb2d0db9e022cc02fe476c1f7ca262a69bb9bde/Consiliency/treesitter-chunker"
---

# Tree-sitter Chunker

**Splits big codebases into clean, meaningful pieces — whole functions and classes instead of arbitrary fragments — so AI tools and code search can actually work with them.**

Before an AI assistant or a search engine can work with a large codebase, the code has to be broken into smaller pieces it can handle one at a time. The naive way is to cut every N lines — but that slices functions in half and scrambles the meaning. Tree-sitter Chunker cuts along the *natural seams* of the code instead: each piece is a complete function, class, or method that still makes sense on its own.

## What it does, in one picture

- **Naive splitting:** `chop every 50 lines` → half a function here, the tail of a class there. The AI sees nonsense.
- **Tree-sitter Chunker:** `chop along real code structure` → one clean function per piece, one class per piece. The AI sees meaning.

It knows the real structure because it uses [Tree-sitter](https://tree-sitter.github.io/) — a widely-used engine that reads source code the way a compiler does, understanding where each function and class actually begins and ends, across **36+ programming languages**.

## Who it's for

Developers and…
