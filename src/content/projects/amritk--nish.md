---
repo: "amritk/nish"
name: "nish"
description: "Native Instruction Static Host AKA Turbo Typescript. A fast subset of typescript without the encumbrance of javascript."
readmeQualityOk: true
url: "https://github.com/amritk/nish"
homepage: "https://nishlang.com"
language: "TypeScript"
languages: ["TypeScript", "LLVM"]
languagePcts: [42, 36]
topics: ["llvm-ir", "performance", "static", "typescript"]
stars: 23
forks: 0
openIssues: 352
closedIssues: 525
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-06T08:28:53Z"
lastCommitAt: "2026-11-25T03:12:18Z"
lastReleaseAt: "2026-09-26T04:00:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 47
maintainers: ["amritk", "DemonHa", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d375e85920d6c5fb363fdafb6ac69f4279a175c4d58050871e8650b4d95b9d9/amritk/nish"
fundingLinks: ["GITHUB:https://github.com/amritk"]
discussionCount: 0
---

# Nish

**Native Instruction Static Host AKA Turbo Typescript. A fast subset of typescript without the encumbrance of javascript.**

**An ahead-of-time compiler for a strictly static subset of TypeScript — LLVM IR in the middle, native binaries at the end. No interpreter, no garbage collector, nothing to ship beside the executable.**

**[nishlang.com](https://nishlang.com/)** · [Get started](https://nishlang.com/getting-started/installation) · [Language reference](https://nishlang.com/reference/language) · [Changelog](https://nishlang.com/reference/changelog)

---

You write `.ts` files with the syntax you already know. Nish checks that every
value has one fixed type and memory layout, refuses everything dynamic
(`any`, prototypes, `eval`, exceptions), and emits LLVM IR that `clang` turns
into a small native binary for x86_64, ARM64 or WebAssembly. The compiler is
itself written in Nish.

```
TypeScript source ──▶ lexer + parser ──▶ validator + checker ──▶ LLVM IR (.ll) ──▶ clang ──▶ native binary
```
