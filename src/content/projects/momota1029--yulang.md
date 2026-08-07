---
repo: "momota1029/yulang"
name: "yulang"
description: "Experimental language with Simple-Sub-style inference, algebraic effects, effect rows, roles, and Ruby/Perl/Raku-inspired syntax."
readmeQualityOk: true
url: "https://github.com/momota1029/yulang"
homepage: "https://yulang.momota.pw"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-30T09:41:06Z"
lastCommitAt: "2026-08-07T05:14:19Z"
lastReleaseAt: "2026-07-24T10:16:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 69
maintainers: ["momota1029"]
openGraphImageUrl: "https://opengraph.githubassets.com/05beaca8dd4da698181d345c48b274c4fcea8f6b83de7fd86dd95329749bbd45/momota1029/yulang"
---

# Yulang

**Control flow your type system can actually see — in a language that still
feels like a script.**

Yulang is an expression-oriented language built on algebraic effects and full
type inference. The things most languages weld into the core — early return,
loops, mutable state, exceptions, even nondeterministic search — are ordinary
typed effects here, mostly defined in the standard library. That buys you two
things at once: control flow you normally can't have, and a compiler that
tells you exactly where any of it is being used.

**[Try it in your browser](https://yulang.momota.pw/)** — no install needed.
Japanese: [README.ja.md](https://github.com/momota1029/yulang/blob/HEAD/README.ja.md)

```yulang
// every Pythagorean triple under 15 — an ordinary expression
{
    my a = each 1..15
    my b = each a..15
    my c = each b..15
    guard: a * a + b * b == c * c
    (a, b, c)
}.list  // => [(3, 4, 5), (5, 12, 13), (6, 8, 10), (9, 12, 15)]
```

`each` picks one element, `guard:` prunes failing branches, and `.list`
collects every result. No macro, no query DSL: the block is a plain expression
carrying the `undet` effect, and the type system tracks it like any other.

Yulang…
