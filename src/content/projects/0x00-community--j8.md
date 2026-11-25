---
repo: "0x00-Community/j8"
name: "j8"
description: "A JavaScript engine written from scratch in Rust, layered like V8: an accumulator bytecode interpreter, a tier-one JIT, and a generational, moving, parallel GC of its own."
readmeQualityOk: true
url: "https://github.com/0x00-Community/j8"
homepage: "https://0x00.community/projects/j8"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [50, 49]
topics: ["garbage-collector", "interpreter", "javascript", "javascript-engine", "jit", "mlir", "no-std", "rust", "test262", "v8"]
stars: 8
forks: 3
openIssues: 9
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 3
createdAt: "2026-11-14T16:23:50Z"
lastCommitAt: "2026-11-25T13:23:22Z"
lastReleaseAt: "2026-11-23T20:24:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["Jabberwocky238", "Akira-TL", "LilLeapo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4644d784e7e1ee43963744c44f7b6bb324fd275dac0a49482f654ed73640881e/0x00-Community/j8"
---

# j8

### V8, rewritten in Rust.
**A bytecode interpreter, a JIT and a parallel garbage-collected heap ([paragc](https://crates.io/crates/paragc)).**

**🇺🇸 English** · [🇨🇳 简体中文](https://github.com/0x00-Community/j8/blob/HEAD/README.zh-CN.md)

---

## ⚡ What is j8

A JavaScript engine in Rust, layered like V8:

- **Bytecode:** all JS (including `eval` and `Function`) compiles to V8 Ignition bytecode, byte for byte. There is no AST interpreter.
- **JIT:** hot functions and loops become a speculative SSA graph, emitted as x86-64 or AArch64 machine code.
- **Heap:** [paragc](https://crates.io/crates/paragc). There is no `'static` and no global state.
- **Parsing:** oxc.

Core ECMAScript is covered except what [PLAN.md](https://github.com/0x00-Community/j8/blob/HEAD/PLAN.md) puts out of scope (Temporal, ShadowRealm, …).
`Intl` (Collator, NumberFormat, DateTimeFormat, PluralRules) is the opt-in `intl` feature, built on ICU4X.
