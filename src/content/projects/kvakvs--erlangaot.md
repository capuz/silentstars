---
repo: "kvakvs/ErlangAoT"
name: "ErlangAoT"
description: "An ahead-of-time compiler from Erlang (intermediate language) to LLVM IR and a runtime library for linking against it"
readmeQualityOk: true
url: "https://github.com/kvakvs/ErlangAoT"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-08-25T10:15:46Z"
lastCommitAt: "2026-09-21T09:13:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 58
maintainers: ["kvakvs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de5350e1acf5f149fadf7f63d36768e6b9dbccfc8cfe69de25aa38e9a4363db/kvakvs/ErlangAoT"
---

# ErlangAoT

An ahead-of-time compiler project for Erlang/OTP 29. Currently supports
preprocessing and syntax parsing; semantic analysis, executable generation and
runtime execution are not yet implemented.

Validated on macOS Apple Silicon. Linux and Windows validation remains pending.

## Features

- Preprocessing: macros, includes, conditional compilation and language features.
- OTP 29 syntax: expressions, patterns, records, bitstrings, types/specifications,
  control flow and comprehensions.
- Syntax checking, expanded Erlang source output and an indented syntax-tree view.
- Source diagnostics and multiple input files.
- TOML projects with named targets, source discovery, per-target frontend options,
  and annotated starter files.

## Build

Requirements:

- CMake 3.28+ and a C++23-capable compiler.
- Boost 1.90+ with Boost.Parser and Boost.Multiprecision.
- toml++ 3.4.0 for project manifests; see [dependency setup](https://github.com/kvakvs/ErlangAoT/blob/HEAD/docs/projects.md#build-dependency).
- Erlang/OTP 29+ for tests (enabled by default). Erlang is not needed to run the
  built tool; configure with `-DBUILD_TESTING=OFF` to build without it.

On macOS:

```sh…
