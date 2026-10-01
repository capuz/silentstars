---
repo: "corporatepiyush/dynajs"
name: "dynajs"
description: "Improved version of QuickJS engine with lots of extensions"
readmeQualityOk: true
url: "https://github.com/corporatepiyush/dynajs"
language: "JavaScript"
languages: ["JavaScript", "C"]
languagePcts: [54, 39]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-03T06:00:05Z"
lastCommitAt: "2026-10-01T09:58:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["corporatepiyush"]
openGraphImageUrl: "https://opengraph.githubassets.com/3aca6f40eaa42ea5cf7dca5c39f0ae5de301f2c33bb303f494797ecb5e3bc25f/corporatepiyush/dynajs"
---

# DynaJS

**JavaScript, compiled to a single executable.**

DynaJS is an embeddable JavaScript engine and application runtime written in C. One static binary carries the interpreter, the garbage collector, and a standard library of 38 `dyna:*` modules — HTTP and `fetch`, TLS, AES-GCM and ChaCha20-Poly1305, SQLite, Redis, PostgreSQL, DataFrames, decision trees and k-means, TOML/YAML/XML/CSV — with nothing to install on the target and nothing downloaded at runtime.

Build your program and its whole dependency tree into one file. Copy it anywhere. It starts in milliseconds, runs in a predictable memory footprint, and its supply chain is the compiler plus four OS-tracked libraries.

> **Status: BETA** — the engine and standard library are stable and conformance-gated (test262 on every push); pre-1.0 releases may still change names and defaults.

---

## Table of contents

- [Why DynaJS](#why-dynajs)
- [Install](#install)
- [Quick start](#quick-start)
- [Command line](#command-line)
- [The standard library](#the-standard-library)
- [Core concepts](#core-concepts)
- [Recipes: complete programs](#recipes-complete-programs)
- [Embedding DynaJS](#embedding-dynajs)
- [Building from…
