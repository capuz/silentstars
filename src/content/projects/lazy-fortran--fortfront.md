---
repo: "lazy-fortran/fortfront"
name: "fortfront"
description: "Core analysis frontend for lazy fortran - lexer, parser, semantic analysis, AST operations"
readmeQualityOk: true
url: "https://github.com/lazy-fortran/fortfront"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [86]
stars: 9
forks: 0
openIssues: 10
closedIssues: 1758
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-07-29T11:21:10Z"
lastCommitAt: "2026-08-01T06:14:17Z"
lastReleaseAt: "2026-07-31T11:29:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 76
maintainers: ["krystophny"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d38e0e6d84a55207830180e5965fcbf0134e751c664466310b0b7167013875d/lazy-fortran/fortfront"
---

# FortFront

> **Note**: This project is experimental. The main implementation of a Fortran variant for "lazy" developers is now in [LFortran](https://github.com/lfortran/lfortran) via its interactive mode and planned `infer` mode.

A Fortran frontend that transforms Lazy Fortran to standard-conforming
Fortran and exposes AST/tooling APIs for downstream tools.

FortFront is not a complete compiler backend. It does not emit backend IR,
objects, or executables. Compiler work belongs in downstream drivers such as
`ffc`, which consumes FortFront through compiler-facing APIs and lowers the
supported subset through LIRIC.

## Features

- End-to-end pipeline: lexing, parsing, semantic checks, and Fortran emission
- Lazy Fortran to standard Fortran conversion with automatic type inference
- CLI and library APIs for scripting, pipelines, and embedding in larger tools

Current limits:

- Cross-file inference and specialization are not implemented here.
- The C API is a small validation/status bridge, not a full AST or semantic API.
- Nested internal procedures and some newer/legacy Fortran constructs remain
  unsupported.

## Lazy Fortran vs Standard Fortran

Lazy Fortran omits boilerplate…
