---
repo: "zhuguangxiang/koala-lang"
name: "koala-lang"
description: "Koala is a modern language."
readmeQualityOk: true
url: "https://github.com/zhuguangxiang/koala-lang"
homepage: "https://koala-lang.org"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["koala", "koala-lang"]
stars: 38
forks: 5
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2017-02-16T05:39:33Z"
lastCommitAt: "2026-10-18T08:15:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 54
maintainers: ["zhuguangxiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad826185879b7deba94e33e3a5ca6ea2c5b95e9a656027688d273978a42c1c7/zhuguangxiang/koala-lang"
---

# 🐨 Koala Programming Language

**Koala is a tiny, fast, modern, statically‑typed, register‑based language and VM with aggressive local optimizations.**

Koala is designed to be:

- **Simple** — Python‑like semantics, small syntax, no hidden machinery
- **Fast** — register VM, zero boxing, low dispatch overhead
- **Optimizable** — lightweight IR passes keep hot loops tight
- **Portable** — pure C/C++, zero dependencies
- **Hackable** — easy to read, easy to extend

## Overview

Koala compiles source code into a compact, register‑based bytecode executed by a lightweight VM written in C. Values live in registers with no boxing, and the interpreter runs bare — no JIT — yet already beats Lua across the board and most benchmarks against LuaJIT's interpreter core.

## 🛠 Installation & Build

Koala uses standard CMake and has **no external dependencies**.

### Clone

```bash
git clone https://github.com/zhuguangxiang/koala-lang.git
cd koala-lang
```

### Build

```bash
./build-release.sh
./build-debug.sh
```

This produces the `koala` executable.

### Run a program

```bash
./koala bench/sum.kl
```

## Language Examples

### Script

Top‑level statements run directly — no `main`…
