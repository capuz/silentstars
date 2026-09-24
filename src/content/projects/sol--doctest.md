---
repo: "sol/doctest"
name: "doctest"
description: "An implementation of Python's doctest for Haskell"
readmeQualityOk: true
url: "https://github.com/sol/doctest"
homepage: "https://hackage.haskell.org/package/doctest"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
stars: 400
forks: 77
openIssues: 77
closedIssues: 140
watchers: 10
contributors: 43
recentReleases: 0
createdAt: "2010-11-04T19:06:17Z"
lastCommitAt: "2026-09-24T08:41:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 21
maintainers: ["sol"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd19d3bbdcacd639c16d66d07181c836f90a3ace95afacde70e58dfdd29eba83/sol/doctest"
---

# Doctest: Test interactive Haskell examples

`doctest` is a tool that checks
[examples](https://haskell-haddock.readthedocs.io/latest/markup.html#examples)
and
[properties](https://haskell-haddock.readthedocs.io/latest/markup.html#properties)
in Haddock comments.
It is similar in spirit to the [popular Python module with the same name](https://docs.python.org/3/library/doctest.html).

* [Getting started](#getting-started)
   * [Installation](#installation)
   * [A basic example](#a-basic-example)
* [Running doctest for a Cabal package](#running-doctest-for-a-cabal-package)
   * [Passing doctest options to cabal repl](#passing-doctest-options-to-cabal-repl)
   * [Cabal integration](#cabal-integration)
* [Writing examples and properties](#writing-examples-and-properties)
   * [Example groups](#example-groups)
      * [A note on performance](#a-note-on-performance)
   * [Setup code](#setup-code)
   * [Multi-line input](#multi-line-input)
   * [Multi-line output](#multi-line-output)
   * [Matching arbitrary output](#matching-arbitrary-output)
   * [QuickCheck properties](#quickcheck-properties)
   * [Hiding examples from Haddock](#hiding-examples-from-haddock)
   * [Using GHC…
