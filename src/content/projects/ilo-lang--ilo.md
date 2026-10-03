---
repo: "ilo-lang/ilo"
name: "ilo"
description: "ilo - the token-minimal programming language AI agents write"
readmeQualityOk: true
url: "https://github.com/ilo-lang/ilo"
homepage: "https://ilo-lang.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai", "compiler", "interpreter", "language", "programming-language", "rust", "npx-skills"]
stars: 9
forks: 0
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T22:18:24Z"
lastCommitAt: "2026-10-03T22:03:24Z"
lastReleaseAt: "2026-03-07T02:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 34
maintainers: ["danieljohnmorris"]
openGraphImageUrl: "https://opengraph.githubassets.com/93469f910ba3f6bbfe9460f6f9525c8c1c92e2083fa357627e50fba079be7951/ilo-lang/ilo"
discussionCount: 1
---

# ilo

*A programming language AI agents write, not humans. Named from [Toki Pona](https://sona.pona.la/wiki/ilo) for "tool".*

> Experimental pre 1.0 language, expect breaking changes. See [STABILITY.md](https://github.com/ilo-lang/ilo/blob/HEAD/STABILITY.md) for what's stable vs in-flight. Open-sourced February 2026.

```
Python                                    ilo
─────                                     ───
def total(price, quantity, rate):          tot p:n q:n r:n>n;s=*p q;t=*s r;+s t
    sub = price * quantity
    tax = sub * rate
    return sub + tax

4 lines, 30 tokens, 90 chars              1 line, 10 tokens, 20 chars
```

**0.33× the tokens. 0.22× the characters. Same semantics. Type-verified before execution.**

## Why

AI agents pay three costs per program: generation tokens, error feedback, retries. ilo cuts all three:

- **Shorter programs** - prefix notation eliminates parentheses; positional args eliminate boilerplate
- **Verified first** - type errors caught before execution; agents get `ILO-T004` not a stack trace
- **Compact errors** - one token, not a paragraph; agents correct faster, fewer retries

## Install

```sh
curl -fsSL https://ilo-lang.ai/install.sh…
