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
lastCommitAt: "2026-06-28T06:57:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 76
undervaluedScore: 27
maintainers: ["programmersd21", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65cf09f9fc27e918acea2fdb4dc29ebea30a00519779ab27eca1f44aaf373768/programmersd21/nimble"
fundingLinks: ["GITHUB:https://github.com/programmersd21"]
---

# Nimble

A statically typed language with Python-style indentation, LLVM-based code generation, and an integrated toolchain.

## Features at a Glance

- **Pythonic syntax** — indentation-based blocks, no curly braces or semicolons
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
- **Cross-platform linker** — auto-discovers `cc`, `clang`, `gcc`, or `link.exe`
- **Standard library** with 23 modules covering I/O, math,…
