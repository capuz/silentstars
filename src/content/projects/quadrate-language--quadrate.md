---
repo: "quadrate-language/quadrate"
name: "quadrate"
description: "Quadrate toolchain"
readmeQualityOk: true
url: "https://github.com/quadrate-language/quadrate"
homepage: "https://quad.r8.rs"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 26]
topics: ["compiler", "concatenative", "jit", "llvm", "native-code", "programming-language", "stack-based", "systems-language", "systems-programming"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-11-20T12:18:40Z"
lastCommitAt: "2026-11-04T08:03:12Z"
lastReleaseAt: "2026-11-04T07:40:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 74
maintainers: ["klahr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7e4a800cf2f28bec77f92dec5afd643aa60851c413108362dc9692a36a54baa/quadrate-language/quadrate"
---

# Quadrate

A stack-based language that compiles to native code via LLVM.

> For users: see **https://quad.r8.rs** for documentation, tutorials, and the online playground.

## Building

Requires: Meson, Ninja, C++20 compiler (Clang recommended), LLVM 14+

```bash
make debug          # Debug build
make release        # Optimized build
make tests          # Run test suite (1838 tests)
make format         # Format C/C++ source
```

### Platform dependencies

**Arch Linux**: `pacman -S meson clang ninja llvm readline openssl`

**Debian/Ubuntu**: `apt install clang llvm-dev meson ninja-build libreadline-dev libssl-dev pkg-config`

**Alpine**: `apk add bash clang clang-dev compiler-rt llvm-dev meson musl-dev readline-dev openssl-dev pkgconf`

### Build outputs

```
dist/bin/           Binaries (quad, quadc, quadfmt, quadlint, quadlsp, quadpm, quadrepl, quaduses, quaddoc, quadmcp)
dist/lib/           Shared libraries (libqdrt.so, libqd.so)
dist/lib/quadrate/  Static libraries for embedding
dist/include/       C/C++ headers for embedding
dist/share/         Standard library modules, completions, API docs
```

## Project structure

```
cmd/                Command-line tools (quad, quadc,…
