---
repo: "aryx/goken9cc"
name: "goken9cc"
description: "goken9cc — A portable multi-platform C compiler, assembler, and linker rooted in Ken Thompson’s Plan 9 and Inferno toolchains, extended by Go developers to support also Linux, macOS, and Windows."
url: "https://github.com/aryx/goken9cc"
language: "Go"
languages: ["Go", "C"]
languagePcts: [49, 42]
stars: 24
forks: 4
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 97
recentReleases: 0
createdAt: "2025-05-25T07:00:20Z"
lastCommitAt: "2026-07-03T12:20:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 44
maintainers: ["aryx"]
openGraphImageUrl: "https://opengraph.githubassets.com/74958f0137f34364de2a978a5053deecf5d5d7ac303758ca6b7b9f5421607cd7/aryx/goken9cc"
---

# goken9cc

**goken9cc** is a portable multi-platform C compiler, assembler, and
linker toolchain as well as a minimalist C library rooted in the
legendary work of Ken Thompson and the Plan 9 and Inferno operating
systems. Originally extended by Go developers, this toolchain brings
cross-platform support for Linux, macOS, and Windows while preserving
the simplicity, elegance, and efficiency of the original Plan 9 tools.

See https://www.youtube.com/watch?v=E3iUpyqKvgk for a presentation of the project.

---

## Features

- **Portable:**
  It can *build* on Linux, macOS, and Windows (TODO and Plan 9 and xv6) using gcc or clang (TODO or a boostrapped version of itself)
- **Multi-OS support:** 
  Build C programs that can *run* on Linux, macOS (only old macOS for now), TODO Windows, Plan 9, and TODO xv6
- **Multi-architecture support:**
  Build C programs *targeting* the 386 (a.k.a. x86), amd64 (a.k.a. x86_64), arm,
  arm64 (a.k.a. aarch64), riscv (a.k.a. riscv32), riscv64, and mips architectures (TODO Wasm)
- **Cross-compilers:**
  Build C programs targeting different platforms from different platforms
  (e.g., you can build from a Linux 386 machine a binary for amd64 macOS)
-…
