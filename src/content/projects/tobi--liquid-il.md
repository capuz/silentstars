---
repo: "tobi/liquid-il"
name: "liquid-il"
description: "A Liquid template engine, 100% vibe coded by Claude Code against liquid-spec"
readmeQualityOk: true
url: "https://github.com/tobi/liquid-il"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-07T03:28:15Z"
lastCommitAt: "2026-07-04T22:20:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["tobi"]
openGraphImageUrl: "https://opengraph.githubassets.com/106d7a07e0ee1282224663046e9a7624a6261e7a50ea04922c7106477c219d33/tobi/liquid-il"
---

# LiquidIL

A high-performance [Liquid](https://shopify.github.io/liquid/) template engine that compiles templates to optimized Ruby via an Intermediate Language (IL).

**Pipeline:** Source → Lexer → Parser → IL → Optimizer → Structured Compiler → Ruby

Templates are parsed into an IL instruction set, optimized through multiple passes (constant folding, dead code elimination, partial inlining, etc.), then compiled to YJIT-friendly Ruby with native control flow — no interpreter loop, no VM.

## Why It's Fast

LiquidIL achieves its performance through a combination of compile-time decisions and runtime optimizations:

**Compile to native Ruby, not interpret.** Instead of walking an AST or dispatching bytecodes at runtime, LiquidIL compiles each template to a Ruby proc with real `if/else`, `each`, and local variables. YJIT then compiles *that* to machine code. The result is two levels of compilation — Liquid → Ruby → native — with zero interpreter overhead.

**Solve problems at the right level.** Constant folding happens during IL optimization (`"hello" | upcase` becomes `"HELLO"` at parse time). Filter dispatch is resolved during structured compilation (common filters like `upcase`,…
