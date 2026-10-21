---
repo: "sebastian-software/ferroni"
name: "ferroni"
description: "Oniguruma's regex engine in pure Rust: full Oniguruma syntax, a vscode-oniguruma-compatible TextMate scanner, no C toolchain"
readmeQualityOk: true
url: "https://github.com/sebastian-software/ferroni"
homepage: "https://ferroni.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["managed-deps", "oss-project", "oniguruma", "regex", "regex-engine", "rust", "syntax-highlighting", "textmate", "unicode"]
stars: 9
forks: 3
openIssues: 3
closedIssues: 96
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-09T08:13:32Z"
lastCommitAt: "2026-10-21T21:15:55Z"
lastReleaseAt: "2026-03-02T15:33:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 68
maintainers: ["swernerx", "jamesfastnerbot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fba42e6e95e5208e9d55e4a531ab238fba1293b8eef7349309202ab78d8b9cce/sebastian-software/ferroni"
fundingLinks: ["GITHUB:https://github.com/sebastian-software"]
---

Part of [Ferramenta](https://ferramenta.dev), a family of Rust tools.

# Ferroni — Oniguruma regex in pure Rust

**Oniguruma-compatible regex engine.**
Ferroni runs Oniguruma's full syntax in Rust, including look-behind,
backreferences and recursion, and ships the scanner that TextMate syntax
highlighters drive. Cargo builds it like any other crate, WebAssembly
included, with no C compiler and no bindgen.

## Why Ferroni

**Oniguruma ended; the engine goes on.** Oniguruma matches the patterns in
every TextMate grammar, in PHP's mbstring and in jq. Its C project closed in
April 2025. Ferroni continues the engine in memory-safe Rust, ported function
by function, and [passes all 2,974 UTF-8 tests](https://ferroni.dev/guide/compatibility)
of the C original.

**Only a JIT is faster.** Once a pattern is compiled, Ferroni matches
2.6–3.3× faster than C Oniguruma, and it generates no machine code at runtime.
Of the engines measured on regex tasks from Django, Rails, WordPress and other
projects, only PCRE2's JIT is faster. C still compiles patterns faster, so a
pattern used once favors C. The
[benchmark summary](https://ferroni.dev/perf/regex-workloads) gives the method;
the [full…
