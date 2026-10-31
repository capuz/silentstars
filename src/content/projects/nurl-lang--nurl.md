---
repo: "nurl-lang/nurl"
name: "nurl"
description: "NURL - Neural Unified Representation Language is programming language for LLM's"
readmeQualityOk: true
url: "https://github.com/nurl-lang/nurl"
language: "Nu"
languages: ["Nu", "LLVM"]
languagePcts: [51, 31]
stars: 17
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-12T14:53:39Z"
lastCommitAt: "2026-10-31T07:46:19Z"
lastReleaseAt: "2026-05-24T20:35:26Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 48
maintainers: ["Hindurable", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/091b18d39249176aa508994b2d90498f1d6dbaa819acf5c6349478ccc09ff307/nurl-lang/nurl"
discussionCount: 1
---

# NURL — Neural Unified Representation Language

> A systems language with a regular prefix-arity grammar, single-owner memory whose ownership rules make safe programs memory-safe and leak-free, deterministic compilation, and LLVM-based codegen.

**Project site:** <https://nurl-lang.org> · **Live playground & MCP endpoint:** <https://play.nurl-lang.org>

---

## Why NURL?

NURL takes a few design positions that are uncommon together:

- **Regular prefix-arity grammar** — every operator has a fixed arity, no infix, no precedence cliffs. The grammar fits on a single page and is LL(k≤4) — recursive-descent with up to 4 tokens of lookahead.
- **Locally parseable** — a construct's shape (arity and nesting) is fixed by a short window of surrounding tokens, with no long-range parse dependencies. (A few operators — `.`, `&`, `|`, `#` — resolve their *lowering* by operand type; see [`docs/spec.md`](https://github.com/nurl-lang/nurl/blob/HEAD/docs/spec.md) §4.9/§6.)
- **Deterministic compiler** — the same source always produces identical output, with no platform-dependent codegen. The self-hosted compiler reaches a byte-identical fixed point on its own source. (Raw `*T` pointers in `unsafe`…
