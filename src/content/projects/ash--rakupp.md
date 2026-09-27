---
repo: "ash/rakupp"
name: "rakupp"
description: "Raku++ — a Raku language interpreter, compiler and toolchain written from scratch in C++"
readmeQualityOk: true
url: "https://github.com/ash/rakupp"
language: "C++"
languages: ["C++"]
languagePcts: [69]
stars: 53
forks: 3
openIssues: 17
closedIssues: 85
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-07-02T09:24:35Z"
lastCommitAt: "2026-09-27T09:27:27Z"
lastReleaseAt: "2026-07-28T23:26:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["ash"]
openGraphImageUrl: "https://opengraph.githubassets.com/328cd50f93eb9709a58d1c5b9c4a6c83f92dfd9575b8030c2f93b4acfe1f51dc/ash/rakupp"
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

**Status:** current release **v4.0.1** (2026-09-17), a one-fix follow-up to
**v4.0.0** — *Raku that travels*: the version was reserved for this a month
before the code, and it collects three things. **Modules travel** — `rakupp install` needs no Rakudo and no zef, and a
compiled binary carries its modules with a *guarantee*: every mode reports what
it embedded and what it could not, and…
