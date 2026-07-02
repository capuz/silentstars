---
repo: "momota1029/yulang"
name: "yulang"
description: "Experimental language with Simple-Sub-style inference, algebraic effects, effect rows, roles, and Ruby/Perl/Raku-inspired syntax."
url: "https://github.com/momota1029/yulang"
homepage: "https://yulang.momota.pw"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-04-30T09:41:06Z"
lastCommitAt: "2026-07-02T06:35:29Z"
lastReleaseAt: "2026-06-30T19:14:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 69
maintainers: ["momota1029"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b008b3caf89a2e5f5efa54442821c9988c24f897a7c9cdcca2ead10b41b1c5/momota1029/yulang"
---

# Yulang

Yulang is an experimental programming language that makes algebraic effects
and handlers feel like ordinary control flow.

The surface looks like a small expression-oriented scripting language: it has
method syntax, compact block notation, structs, enums, roles, user-defined
operators, loops, early return, and references. The unusual part is that many
features usually fixed in the core language are expressed through effects,
handlers, roles, and standard-library code.

Yulang is alpha-stage research software. The current implementation lives in
the `yulang` pipeline; syntax, type display, effect semantics, runtime IR,
and library APIs may still change.

Japanese: [README.ja.md](README.ja.md)

## A First Look

```yulang
// nondeterministic search: every Pythagorean triple under 15
{
    my a = each 1..15
    my b = each a..15
    my c = each b..15
    guard: a * a + b * b == c * c
    (a, b, c)
}.list  // => [(3, 4, 5), (5, 12, 13), (6, 8, 10), (9, 12, 15)]
```

`each` returns a nondeterministic value, `guard:` prunes branches where the
condition fails, and `.list` reifies the search into a concrete list. The
block is an ordinary expression with the `undet` effect;…
