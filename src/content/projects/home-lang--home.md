---
repo: "home-lang/home"
name: "home"
description: "There is no language like Home."
readmeQualityOk: true
url: "https://github.com/home-lang/home"
homepage: "https://home-lang.org"
language: "Zig"
languages: ["Zig"]
languagePcts: [46]
topics: ["cross-platform", "systems", "apps", "mobile", "web", "desktop", "games", "binaries"]
stars: 26
forks: 2
openIssues: 172
closedIssues: 743
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-22T05:02:34Z"
lastCommitAt: "2026-10-21T21:14:29Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 60
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/338cd88afd27af9396848f4d2eab16ee28514041f28353894c0d47d318db4d28/home-lang/home"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer"]
---

A modern programming language for systems, apps, and games —<br>
  the speed of Zig, the safety of Rust, the joy of TypeScript.<br>

---

Home is two things built from one Zig toolchain:

- **A TypeScript compiler.** `home tsc` reads your existing `tsconfig.json`,
  accepts `tsc`'s flags, and prints the same `TSxxxx` diagnostics with the same
  exit status. Corpus parity is being remeasured after removing harness
  exceptions that fabricated matches. Previous corpus pass counts are withdrawn.
  Its current performance is measured against both `tsc` and
  native TypeScript 7 (`tsgo`) in the admitted benchmark suite below.
- **A native language.** `.home` files compile to native binaries with no
  garbage collector and no runtime shipped beside them.

> **Status:** under active development. The TypeScript front end, lexer,
> parser, type inference, and interpreter are usable today; native codegen,
> tooling, and the Bun-compatible runtime are still maturing.
> [Project status](#project-status) has the short version and
> [Parity status](https://home-lang.org/docs/PARITY-STATUS) has every number
> with the harness that produces it.

## A drop-in replacement for `tsc`

Everything…
