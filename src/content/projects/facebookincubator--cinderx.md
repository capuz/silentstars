---
repo: "facebookincubator/cinderx"
name: "cinderx"
description: "High-performance Python runtime extensions"
readmeQualityOk: true
url: "https://github.com/facebookincubator/cinderx"
homepage: "https://facebookincubator.github.io/cinderx/"
language: "C++"
languages: ["C++", "Python", "C"]
languagePcts: [38, 32, 29]
stars: 303
forks: 36
openIssues: 4
closedIssues: 15
watchers: 12
contributors: 72
recentReleases: 0
createdAt: "2024-06-03T01:01:22Z"
lastCommitAt: "2026-10-29T14:05:32Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 39
maintainers: ["alexmalyshev", "DinoV", "kddnewton"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac620cabb2821e792f72a5dbd41293dbf5676dc70b8eae7eb115d7fe25612445/facebookincubator/cinderx"
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
