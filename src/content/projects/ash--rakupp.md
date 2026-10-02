---
repo: "ash/rakupp"
name: "rakupp"
description: "Raku++ — a Raku language interpreter, compiler and toolchain written from scratch in C++"
readmeQualityOk: true
url: "https://github.com/ash/rakupp"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 57
forks: 3
openIssues: 22
closedIssues: 89
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-07-02T09:24:35Z"
lastCommitAt: "2026-10-02T09:55:57Z"
lastReleaseAt: "2026-07-28T23:26:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["ash"]
openGraphImageUrl: "https://opengraph.githubassets.com/9406e650d9f47a52f7ad2237de2e5cad529de55015765c76f4bc76e7045ead68/ash/rakupp"
---

# Raku++

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

**Status:** current release **v5.1.0** (2026-09-30) — **100.00% of Roast.**
Of the tests Roast expects an implementation to pass, **all 218,420** pass, and
**all 1,424 files** in Roast's `spectest.data` pass completely (Roast
`1f749e338`). On Roast `1f521d798`, which v5.0.0 was measured against and whose
todo for one TTY test does not name macOS 27, it is 1,423 files; Rakudo 2026.08,
measured…
