---
repo: "samyeyo/clx"
name: "clx"
description: " A cross-platform ahead-of-time Lua compiler and runtime, using C++20 backend"
readmeQualityOk: true
url: "https://github.com/samyeyo/clx"
homepage: "https://samyeyo.github.io/clx"
language: "C"
languages: ["C", "C++", "HTML"]
languagePcts: [33, 31, 21]
topics: ["aot-compiler", "compiler", "lua", "luajit", "native", "transpiler", "cpp", "cpp20"]
stars: 149
forks: 6
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 4
recentReleases: 2
createdAt: "2026-06-14T10:44:03Z"
lastCommitAt: "2026-08-13T05:18:40Z"
lastReleaseAt: "2026-07-08T20:19:18Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 35
maintainers: ["samyeyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f71de32ce90396b1e7c78c9618c57b3e9859d3f616c5dda58c8c52d9fab0515a/samyeyo/clx"
discussionCount: 5
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="www/img/clx-logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="www/img/clx-logo-light.png">
</picture>
<br /><br />

Cross-platform ahead-of-time Lua compiler

</div>
<br /><br />

**clx** is a cross-platform ahead-of-time Lua compiler and runtime that generates standalone native executables through modern C++ toolchains.
**clx** is not trying to be the fastest Lua implementation in every workload.

## Quick Start

```bash
git clone https://github.com/samyeyo/clx.git
cd clx
./build.sh install       # or build.bat install on Windows
clx examples/hello/hello.lua
./hello

Hello clx !
```

## Features

- **Competitive performance** with strong results on many AOT-friendly workloads
- **No bytecode interpreter overhead** — compiles to standalone native executables
- **Aggressive optimizations** — leverages modern optimizations via Clang/GCC/MSVC
- **Small binaries** — size-oriented builds can produce very compact executables (Lua programs can be under 100 KB with `--minimal`)
- **Targets Lua 5.5 compatibility** — coroutines, metamethods, tables, and more
- **16-byte tagged values** — 8-byte payload +…
