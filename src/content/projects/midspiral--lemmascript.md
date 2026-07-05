---
repo: "midspiral/LemmaScript"
name: "LemmaScript"
description: "verification toolchain for TypeScript (Tech Preview)"
readmeQualityOk: true
url: "https://github.com/midspiral/LemmaScript"
homepage: "https://lemmascript.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["dafny", "lean", "lean4", "lemmascript", "typescript", "ai", "llm", "verification"]
stars: 57
forks: 3
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T00:18:56Z"
lastCommitAt: "2026-07-05T20:17:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 33
maintainers: ["namin"]
openGraphImageUrl: "https://opengraph.githubassets.com/31b2e496e2126c8a7475d1998eaa224bb485a0bc848e827a8e63242b67313dd7/midspiral/LemmaScript"
---

# LemmaScript (Tech Preview)

A verification toolchain for TypeScript. Write ordinary TypeScript with `//@ ` specification annotations. The toolchain generates verifiable code from your TypeScript — either in Dafny or Lean 4 (with Velvet/Loom).

See [SPEC.md](https://github.com/midspiral/LemmaScript/blob/HEAD/SPEC.md), [DESIGN.md](https://github.com/midspiral/LemmaScript/blob/HEAD/DESIGN.md), and [GETTING_STARTED.md](https://github.com/midspiral/LemmaScript/blob/HEAD/GETTING_STARTED.md).

This is a **Tech Preview**: the core idea is there, but support, semantics, and ergonomics are still evolving.

See our [blog post](https://midspiral.com/blog/lemmascript-a-verification-toolchain-for-typescript/).

## Examples and Case Studies

Each example and case study is verified in Lean 4 and/or Dafny from the same annotated TypeScript source.

See the internal [examples](https://github.com/midspiral/LemmaScript/blob/HEAD/examples).

See the external case studies:
- **[collab-todo-lemmascript](https://github.com/midspiral/collab-todo-lemmascript/)** — collaborative task management web app (React + Supabase) with a verified domain model. Single `domain.ts` imported directly by the UI, hooks,…
