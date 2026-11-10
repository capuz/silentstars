---
repo: "kablorp/blorp"
name: "blorp"
description: "A safe, readable, and fast programming language"
readmeQualityOk: true
url: "https://github.com/kablorp/blorp"
language: "C"
languages: ["C"]
languagePcts: [64]
stars: 66
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-14T19:30:31Z"
lastCommitAt: "2026-11-10T11:38:56Z"
lastReleaseAt: "2026-07-01T06:23:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["keithasaurus"]
openGraphImageUrl: "https://opengraph.githubassets.com/963a7898309b9faacd43368c68f1fd28301a2fb6237cf636bf140d2b8bb37a0c/kablorp/blorp"
---

# Blorp

Blorp is a compiled language for writing safe, understandable code that is easy
to generate, review, debug, and trust. Its compiler is written in Blorp and
emits C.

Blorp is in early preview. For the language tour, examples, and current project
status, start here:

**https://blorp-lang.org**

## Where Blorp lives

The compiler, its standard library, tests and tooling live in
[`blorp/`](https://github.com/kablorp/blorp/blob/HEAD/blorp/):

- [`blorp/README.md`](https://github.com/kablorp/blorp/blob/HEAD/blorp/README.md) defines the supported language and
  the compiler's design.
- [`blorp/grammar.ebnf`](https://github.com/kablorp/blorp/blob/HEAD/blorp/grammar.ebnf) is the formal grammar.
- [`blorp/AGENTS.md`](https://github.com/kablorp/blorp/blob/HEAD/blorp/AGENTS.md) holds the build, test and review
  rules for contributors.

The earlier compiler (a larger language with tensors, concurrency, a formatter,
a language server and a package manager) was retired from this tree. It stays
in git history; commit
[`ee9e001c6de8`](https://github.com/kablorp/blorp/tree/ee9e001c6de8911ee486fd992419bef5bc628e8b)
is its last revision.

## Build and test

Install a C compiler such as…
