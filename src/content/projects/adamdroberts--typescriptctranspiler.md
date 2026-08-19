---
repo: "adamdroberts/TypeScriptCTranspiler"
name: "TypeScriptCTranspiler"
description: "Complies TypeScript to C then compiles to native binary, not full API support."
readmeQualityOk: true
url: "https://github.com/adamdroberts/TypeScriptCTranspiler"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T17:08:28Z"
lastCommitAt: "2026-08-19T04:09:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["adamdroberts"]
openGraphImageUrl: "https://opengraph.githubassets.com/0aeff0108f87db50bbc4b904e65802ad8146607cd7a99b940e823a1afbb90c02/adamdroberts/TypeScriptCTranspiler"
---

# TypeScriptC

A whole-program TypeScript-to-C transpiler that produces native Linux binaries.

Goal: take a Node.js-style TypeScript app and get back a standalone executable that behaves like `node app.ts` — without Node at runtime. It uses the **official TypeScript Compiler API** for parsing and type-checking, generates C11, and invokes **gcc** to produce the binary. Memory is managed by **Boehm GC** (`libgc`).

## Status

Substantial working subset, verified by **822 passing end-to-end tests** including a real word-count CLI that tokenizes via regex, counts via `Map`, sorts by a user comparator, and reads `process.env`. ~43,100 LOC across the TypeScript compiler (~28,800 LOC), C/C++ runtime (~12,750 LOC), and `@types/node` replacement shim (~1,580 LOC).

**Phases complete:**

| Phase | Feature | Status |
|-------|---------|--------|
| 0 | Bootstrap (gcc driver, build dir, CLI, `--no-gc` fallback) | ✅ |
| 1 | Typed core — primitives, operators, control flow, `switch` (with exhaustiveness), `??`, `?.`, `for-in`, `void`, comma operator, tagged templates including `String.raw` | ✅ |
| 2a | Typed arrays — literal (with spread `[...a, b]`), indexing, `.length`,…
