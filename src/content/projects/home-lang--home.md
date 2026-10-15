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
forks: 1
openIssues: 170
closedIssues: 727
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-22T05:02:34Z"
lastCommitAt: "2026-10-15T08:32:50Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 59
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/2533791116907beaddd80e164eece844bb8738bcf010e55d7e98284f0d11ec43/home-lang/home"
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
