---
repo: "MohammadRaziei/ctoon"
name: "ctoon"
description: "A C/C++ TOON serialization library with Python bindings"
readmeQualityOk: true
url: "https://github.com/MohammadRaziei/ctoon"
homepage: "https://mohammadraziei.github.io/ctoon/"
language: "C"
languages: ["C", "C++"]
languagePcts: [39, 34]
topics: ["binding", "c", "c99", "cmake", "cpp", "cpp11", "go", "golang-package", "matlab", "mex"]
stars: 35
forks: 3
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2025-11-03T18:37:09Z"
lastCommitAt: "2026-09-28T10:05:56Z"
lastReleaseAt: "2026-09-05T20:20:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["MohammadRaziei"]
openGraphImageUrl: "https://opengraph.githubassets.com/875a9d8f62e6abb1e01a6c4e37e5325f26d2bda2836b1b142a0964bfba5bfa45/MohammadRaziei/ctoon"
---

# <a href="https://mohammadraziei.github.io/ctoon/"><img src="https://raw.githubusercontent.com/MohammadRaziei/ctoon/refs/heads/master/docs/images/ctoon-sq.svg" width="25" alt="CToon Logo"> CToon </a>

</div>

**[Documentation](https://mohammadraziei.github.io/ctoon)**

</div>

The fastest implementation of the [TOON format](https://github.com/toon-format/toon) — a compact, human-readable serialisation format designed to minimise LLM token usage. Achieves 30-60% token reduction versus JSON while remaining fully readable and structured.

CToon is built on a high-performance C core and exposes the same logic through idiomatic bindings for C++, Python, Go, Rust, Zig, Julia, and MATLAB. The name reflects its foundation: **C** + **TOON**.

## Format Overview

```
# JSON  (352 bytes)                  # TOON  (165 bytes, -53 %)
{                                    order:
  "order": {                           id: ORD-12345
    "id": "ORD-12345",                 status: completed
    "items": [                         customer:
      {"product":"Book","qty":2},        name: John Doe
      {"product":"Pen","qty":5}          email: john@example.com
    ]…
