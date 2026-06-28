---
repo: "programmersd21/nimble"
name: "nimble"
description: "💫 A fast systems programming language with Python-like syntax, static typing, LLVM-powered native code generation, and a full modern toolchain."
url: "https://github.com/programmersd21/nimble"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["codegen", "compiler", "cross-platform", "ffi", "formatter", "interpreters", "jit", "language-design", "llvm", "llvm-ir"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T15:36:31Z"
lastCommitAt: "2026-06-28T08:59:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 77
undervaluedScore: 38
maintainers: ["programmersd21", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bc2b067a40535ba9f39ccf1e8b2ed29b8928eed017083ff7c8706fd888e5742/programmersd21/nimble"
fundingLinks: ["GITHUB:https://github.com/programmersd21"]
---

# Nimble

A statically typed language with Python-style indentation, LLVM-based code generation, and an integrated toolchain.

## Features at a Glance

- **Pythonic syntax** - indentation-based blocks, no curly braces or semicolons
- **Static type system** with Hindley-Milner type inference, generics, enums, and interfaces
- **Enums (sum types)** with tagged union representation and pattern matching
- **Generic functions, structs, and interfaces** with monomorphization
- **Closures and lambdas** with capture analysis and trampoline codegen
- **Pattern matching** with wildcards, bindings, variant patterns, and literals
- **Method call syntax** (`obj.method(args)`) desugared to `method(obj, args)`
- **`?` operator** for ergonomic error propagation with Result types
- **`defer` statements** for scope-exit cleanup
- **Compile-time macros** with AST substitution
- **Async/concurrency primitives** (future, channel, mutex, thread, atomic)
- **Option[T] / Result[T, E]** algebraic types in stdlib
- **LLVM codegen** with optional debug info emission
- **Cross-platform linker** - auto-discovers `cc`, `clang`, `gcc`, or `link.exe`
- **Standard library** with 28 modules covering I/O, math,…
