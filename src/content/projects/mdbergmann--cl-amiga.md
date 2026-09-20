---
repo: "mdbergmann/cl-amiga"
name: "cl-amiga"
description: "Amiga specific Common Lisp implementation"
readmeQualityOk: true
url: "https://github.com/mdbergmann/cl-amiga"
language: "C"
languages: ["C", "Common Lisp"]
languagePcts: [72, 22]
stars: 40
forks: 2
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-02-28T16:02:21Z"
lastCommitAt: "2026-09-20T08:43:22Z"
lastReleaseAt: "2026-09-15T13:03:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 47
maintainers: ["mdbergmann", "aadcg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c43f95ddb65ada0c4ce811eb0dc0660888f7e9a0f9bb775a04991f2b70a792f/mdbergmann/cl-amiga"
---

# CL-Amiga (Clamiga)

A Common Lisp implementation for AmigaOS 3+ (68020+) and, as a fully native PPC build, MorphOS — with AmigaOS 4 in reach on the same path — but also macOS and Linux.

> **Alpha software** — CL-Amiga is under active development. The core language is functional and can run real-world CL libraries, but ANSI CL compliance is incomplete and APIs may change. See [Known Limitations](#known-limitations-and-future-work) for details.

CL-Amiga is a bytecode-compiled Common Lisp environment written in C (C89/C99). It aims for ANSI Common Lisp compatibility and runs on classic Amiga hardware (or emulators like FS-UAE) as well as modern POSIX hosts (macOS, Linux).

## Why CL-Amiga?

There are already excellent Common Lisp implementations — SBCL, CCL, ECL, Clasp, CLISP — so why another one?

**Because none of them run on the Amiga** — neither the classic 68k machines nor the PPC-based next-gen systems (MorphOS, AmigaOS 4). The high-performance implementations (SBCL, CCL) are native-code compilers tied to modern architectures — x86-64, ARM, PPC — with no 68k backend and a memory footprint measured in tens of megabytes. Clasp is built on LLVM and targets C++ interop. CLISP,…
