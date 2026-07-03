---
repo: "midspiral/LemmaScript"
name: "LemmaScript"
description: "verification toolchain for TypeScript (Tech Preview)"
url: "https://github.com/midspiral/LemmaScript"
homepage: "https://lemmascript.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["dafny", "lean", "lean4", "lemmascript", "typescript", "ai", "llm", "verification"]
stars: 56
forks: 3
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T00:18:56Z"
lastCommitAt: "2026-07-03T12:21:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 33
maintainers: ["namin"]
openGraphImageUrl: "https://opengraph.githubassets.com/05563a66e84fcd0c087bd4db91ff6ba5c044efa49e5a7902d9cbce7b2461af59/midspiral/LemmaScript"
---

# LemmaScript (Tech Preview)

A verification toolchain for TypeScript. Write ordinary TypeScript with `//@ ` specification annotations. The toolchain generates verifiable code from your TypeScript — either in Dafny or Lean 4 (with Velvet/Loom).

See [SPEC.md](SPEC.md), [DESIGN.md](DESIGN.md), and [GETTING_STARTED.md](GETTING_STARTED.md).

This is a **Tech Preview**: the core idea is there, but support, semantics, and ergonomics are still evolving.

See our [blog post](https://midspiral.com/blog/lemmascript-a-verification-toolchain-for-typescript/).

## Examples and Case Studies

Each example and case study is verified in Lean 4 and/or Dafny from the same annotated TypeScript source.

See the internal [examples](examples).

See the external case studies:
- **[collab-todo-lemmascript](https://github.com/midspiral/collab-todo-lemmascript/)** — collaborative task management web app (React + Supabase) with a verified domain model. Single `domain.ts` imported directly by the UI, hooks, and edge functions — no adapter layer. 123 Dafny lemmas (120 in a separate `domain.proofs.dfy`): 16-conjunct invariant preserved across 25 single-project + 3 cross-project actions, NoOp…
