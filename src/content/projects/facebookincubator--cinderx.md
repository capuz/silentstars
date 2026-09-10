---
repo: "facebookincubator/cinderx"
name: "cinderx"
description: "High-performance Python runtime extensions"
readmeQualityOk: true
url: "https://github.com/facebookincubator/cinderx"
homepage: "https://facebookincubator.github.io/cinderx/"
language: "C++"
languages: ["C++", "Python", "C"]
languagePcts: [36, 32, 31]
stars: 266
forks: 35
openIssues: 3
closedIssues: 13
watchers: 12
contributors: 70
recentReleases: 0
createdAt: "2024-06-03T01:01:22Z"
lastCommitAt: "2026-09-10T08:18:55Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 40
maintainers: ["DinoV", "alexmalyshev", "yoney"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f0ea6efa6035b53d6fa389f8122d912249465b16329340bf024b3d00d58c6d/facebookincubator/cinderx"
---

# CinderX

CinderX is a Python extension that improves the performance of the Python
runtime.

## Status

CinderX is under active development.  It is used in production at Meta for
use-cases like the Instagram Django service.  It is **experimental** for
external users.  New releases are published to PyPI on a weekly basis.

## Features

- **JIT Compiler** - Just-in-time compilation of Python bytecode to native
  machine code
- **Static Python** - A stricter form/subset of Python, for type safety and
  optimization

The codebase includes other features as well, such as a parallel garbage
collector and a lighter weight implementation of Python interpreter frames.
However these features are not compatible with the stock CPython runtime yet.

## Requirements

- Python 3.14
- GCC 13+ or Clang 18+

|         |        Linux       |        macOS       |       Windows      |
| ------- | ------------------ | ------------------ | ------------------ |
|  x86-64 | :white_check_mark: |         :x:        | :white_check_mark: |
| aarch64 | :white_check_mark: | :white_check_mark: |         :x:        |

## Installation

```bash
pip install cinderx
```

## Using the JIT

The recommended way to…
