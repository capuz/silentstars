---
repo: "bloomberg/crane"
name: "crane"
description: "A new extraction system from Rocq to functional-style, memory-safe, thread-safe, readable, valid, performant, and modern C++."
readmeQualityOk: true
url: "https://github.com/bloomberg/crane"
homepage: "https://bloomberg.github.io/crane/"
language: "C++"
languages: ["C++", "OCaml"]
languagePcts: [58, 23]
topics: ["coq", "cpp", "rocq-prover", "rocq", "compiler", "dependent-types", "extraction", "functional-programming", "memory-safety", "modern-cpp"]
stars: 174
forks: 12
openIssues: 2
closedIssues: 39
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2025-11-22T00:38:15Z"
lastCommitAt: "2026-11-17T14:09:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 42
maintainers: ["joom"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f775a8a417e474487cb6de1c702024ff9c1678190a68094d161ec4750f280ef/bloomberg/crane"
discussionCount: 0
---

# Crane

## Menu

- [Rationale](#rationale)
- [Project Layout](#project-layout)
- [Installation](#installation)
  - [Building and Testing](#building-and-testing)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributions](#contributions)
- [License](#license)
- [Code of Conduct](#code-of-conduct)

## Rationale

This project provides extraction of [Rocq](https://rocq-prover.org/) (formerly known as Coq) code to C++ code, implemented as a Rocq plugin. It extracts Rocq into valid, performant, and memory-safe, modern C++ code. The generated code does not need a separate runtime system, relying instead on `shared_ptr` for memory management.

The project is a fork of the Rocq-to-OCaml extraction that comes built-in with Rocq.

> [!WARNING]
> Crane is under active development. While many features are functional, parts of the extraction pipeline are still experimental, and you may encounter incomplete features or unexpected behavior. Please report issues on the [GitHub tracker](https://github.com/bloomberg/crane/issues).

## Project Layout

```
crane/
├── src/              OCaml plugin sources, one directory per IR and pipeline stage
├── theories/         Rocq theories: plugin…
