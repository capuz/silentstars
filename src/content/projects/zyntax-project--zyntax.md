---
repo: "zyntax-project/zyntax"
name: "zyntax"
description: "Multi-Paradigm Compiler Infrastructure & Runtime Framework"
readmeQualityOk: true
url: "https://github.com/zyntax-project/zyntax"
homepage: "http://zyntax.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["aot-compilation", "bytecode", "bytecode-virtual-machine", "compiler", "jit", "jit-compiler", "runtime", "virtual-machine"]
stars: 33
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-25T08:45:35Z"
lastCommitAt: "2026-10-31T02:00:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 56
maintainers: ["darmie"]
openGraphImageUrl: "https://opengraph.githubassets.com/2268aa0c86fcae4bce07edea2337f7d36955c901ab7adb6c1b3193d47506e2d4/zyntax-project/zyntax"
fundingLinks: ["GITHUB:https://github.com/darmie", "PATREON:https://patreon.com/dami476"]
---

# Zyntax

> Compiler frontend infrastructure with tiered JIT compilation and native code generation

---

## Overview

Zyntax is a compiler frontend infrastructure written in Rust. A language frontend hands it
a typed AST; Zyntax lowers that to an SSA IR, optimises it once, starts running
it in an interpreter, and compiles each function to native code as it proves
hot.

- **Tiered execution**: HIR interpreter, Cranelift and LLVM, promoted per
  function, with on-stack replacement into running loops
- **One optimisation pipeline**: each body is optimised once in HIR and every
  tier compiles that same body
- **SIMD in the IR**: vector operations are HIR instructions both CPU tiers lower
  natively
- **Effects, fibers and async** as first-class HIR operations
- **Runtime plugins (ZRTL)**: native libraries linked into the executables
- **Grammar-defined languages**: a Zyn grammar maps syntax to typed AST, so a new
  language needs no Rust

---

## Languages

| Language | Binary | Crate |
|---|---|---|
| Python 3 | `zypy` | [crates/zyntax_python](https://github.com/zyntax-project/zyntax/blob/HEAD/crates/zyntax_python) |
| Lua 5.4 | `zylua` |…
