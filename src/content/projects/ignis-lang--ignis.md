---
repo: "Ignis-lang/ignis"
name: "ignis"
description: "The Ignis compiler"
readmeQualityOk: true
url: "https://github.com/Ignis-lang/ignis"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["compiler", "language", "programing-language", "rust"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2023-07-29T23:55:26Z"
lastCommitAt: "2026-08-16T04:08:35Z"
lastReleaseAt: "2026-08-15T07:26:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 68
maintainers: ["0xErwin1"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56a2ddf86c45bdc9deeaa2d01290fa4564fba4837a2b8859f63f98d74e432d6/Ignis-lang/ignis"
---

# Ignis Lang

> [!CAUTION]
> Ignis is under active development and evolving. It is currently in its early stages
> and is an experimental language. APIs and syntax may change between versions.

Ignis is a general-purpose programming language with strong, static typing, and immutability by default.
Inspired by TypeScript and Rust, Ignis compiles to C and produces native executables via GCC.

## Features (v0.4.0)

- **Strong static typing**: `i8`-`i64`, `u8`-`u64`, `f32`, `f64`, `boolean`, `char`, `str`, `atom`
- **Immutability by default**: `let` for immutable, `let mut` for mutable
- **Generics**: Type parameters for functions, records, enums, and type aliases
- **Records and enums**: User-defined types with fields, methods, and variants
- **Traits**: Lang traits (`Drop`, `Clone`, `Copy`) and user-defined traits
- **Pattern matching**: `match` expressions, `if let`, `while let`, `let else`
- **Compile-time directives**: `@config(...)`, `@abi(...)`, and conditional item inclusion
- **Namespaces**: Module-level organization with `::` access
- **References and pointers**: `&T`, `&mut T`, `*T`, `*mut T`
- **Control flow**: `if`/`else`, `while`, `for`, `for-of`, `break`, `continue`
-…
