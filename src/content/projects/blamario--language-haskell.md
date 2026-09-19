---
repo: "blamario/language-haskell"
name: "language-haskell"
description: "Haskell with extensions"
readmeQualityOk: true
url: "https://github.com/blamario/language-haskell"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-09T15:40:51Z"
lastCommitAt: "2026-09-19T02:44:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 58
maintainers: ["blamario"]
openGraphImageUrl: "https://opengraph.githubassets.com/a19975cd9ff3e1a8518a733761143c2f72fd971c2cd61a9f0b5a33b305669aad/blamario/language-haskell"
---

# Mission statement

Much like the many other _language-X_ Haskell libraries on Hackage and
elsewhere, `language-haskell` provides the basic implementation of the Haskell
programming langugage. Quite commonly for this crowd, this currently includes
a parser and pretty printer and not much else.

*Which* Haskell you might ask?

The answer is all of them, aspirationally at least. The library covers the
Haskell 2010 standard thoroughly, but it also supports a large number of GHC
extensions. One goal of the library is to cover all known language extensions,
while keeping any of them from compromising either the standard language base
or the other extensions.

# Design

To make this goal possible, the library relies on the finally-tagless
encoding of the AST. It also keeps the language grammar modular: every extension
that affects the language grammar defines an optional grammar overlay. The grammar
used for parsing a particular Haskell module is composed for the purpose, based
on the list of extensions it declares. The `grammatical-parsers` library provides
all the tools used for this.

Every parsed AST node is contained by a wrapper node. Immediately after parsing,
the wrapper…
