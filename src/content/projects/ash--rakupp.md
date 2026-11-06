---
repo: "ash/rakupp"
name: "rakupp"
description: "Raku++ — a Raku language interpreter, compiler and toolchain written from scratch in C++"
readmeQualityOk: true
url: "https://github.com/ash/rakupp"
language: "C++"
languages: ["C++", "Raku"]
languagePcts: [67, 24]
stars: 75
forks: 5
openIssues: 8
closedIssues: 207
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-07-02T09:24:35Z"
lastCommitAt: "2026-11-06T11:56:39Z"
lastReleaseAt: "2026-07-28T23:26:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 34
maintainers: ["ash"]
openGraphImageUrl: "https://opengraph.githubassets.com/491efe0f6368cfbafc21f4ad03edad4ca208ff26dd0166b3af1fc8c5005d1dff/ash/rakupp"
---

# Raku++

[raku.online](https://raku.online) is the official public area of this project.

A from-scratch implementation of the [Raku](https://raku.org) programming
language in **C++17, with no third-party dependencies** — a
[hand-written](https://github.com/ash/rakupp/blob/HEAD/docs/guide/faq/hand-written.md) lexer, parser, and tree-walking
evaluator that runs real Raku (classes, roles, grammars, regexes,
multi-dispatch, junctions, lazy sequences, a bignum tower, Unicode-correct
strings, and concurrency), can also **compile** a program to a standalone
native binary, and — as **[Raku.js](https://github.com/ash/rakupp/blob/HEAD/rakujs)** — **runs in the browser** via
WebAssembly, no server required. It is not a fork of Rakudo and shares no code
with it; it targets the *language*, measured against
[**Roast**](https://github.com/Raku/roast), the official Raku test suite.

**Status:** current release **v5.6.3** (2026-11-06) — **100.00% of Roast.**
Of the tests Roast expects an implementation to pass, **all 219,395** pass, and
**all 1,425 files** in Roast's `spectest.data` pass completely (Roast
`da425eb92`, which carries Unicode 18.0's tests). On Roast `1f521d798`, which
v5.0.0 was…
