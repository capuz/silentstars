---
repo: "nurl-lang/nurl"
name: "nurl"
description: "NURL - Neural Unified Representation Language is programming language for LLM's"
readmeQualityOk: true
url: "https://github.com/nurl-lang/nurl"
language: "Nu"
languages: ["Nu"]
languagePcts: [67]
stars: 12
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-12T14:53:39Z"
lastCommitAt: "2026-07-14T05:53:41Z"
lastReleaseAt: "2026-05-24T20:35:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["Hindurable"]
openGraphImageUrl: "https://opengraph.githubassets.com/f102cbd230278ca4801c8a74e1a2b5fbcced411e2974723a1a69861669599e16/nurl-lang/nurl"
---

# NURL — Neural Unified Representation Language

> A small systems language with a regular prefix-arity grammar, single-owner memory with a default-on static borrow checker, deterministic compilation, and LLVM-based codegen.

**Project site:** <https://nurl-lang.org> · **Live playground & MCP endpoint:** <https://play.nurl-lang.org>

---

## Why NURL?

NURL takes a few design positions that are uncommon together:

- **Regular prefix-arity grammar** — every operator has a fixed arity, no infix, no precedence cliffs. The grammar fits on a single page and is LL(k≤4) — recursive-descent with up to 4 tokens of lookahead.
- **Locally parseable** — a construct's shape (arity and nesting) is fixed by a short window of surrounding tokens, with no long-range parse dependencies. (A few operators — `.`, `&`, `|`, `#` — resolve their *lowering* by operand type; see [`docs/spec.md`](https://github.com/nurl-lang/nurl/blob/HEAD/docs/spec.md) §4.9/§6.)
- **Deterministic compiler** — the same source always produces identical output, with no platform-dependent codegen. The self-hosted compiler reaches a byte-identical fixed point on its own source. (Raw `*T` pointers and out-of-range shifts inherit…
