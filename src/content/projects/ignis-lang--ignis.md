---
repo: "Ignis-lang/ignis"
name: "ignis"
description: "The Ignis compiler"
readmeQualityOk: true
url: "https://github.com/Ignis-lang/ignis"
homepage: "https://ignis-lang.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["compiler", "language", "programing-language", "rust"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2023-07-29T23:55:26Z"
lastCommitAt: "2026-09-06T08:03:09Z"
lastReleaseAt: "2026-08-15T07:26:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["0xErwin1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4ed974e39a0336044e71b67816d3ec81983851b714219c2a7b9e4e8b904b040/Ignis-lang/ignis"
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
