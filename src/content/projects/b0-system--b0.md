---
repo: "b0-system/b0"
name: "b0"
description: "Software construction and deployment kit"
readmeQualityOk: true
url: "https://github.com/b0-system/b0"
homepage: "https://erratique.ch/software/b0"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [99]
stars: 41
forks: 10
openIssues: 5
closedIssues: 12
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2018-07-24T00:16:05Z"
lastCommitAt: "2026-10-21T08:48:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 57
undervaluedScore: 37
maintainers: ["dbuenzli"]
openGraphImageUrl: "https://opengraph.githubassets.com/06c7ed4244dd1b4d5c5492831281f38b5ab8430d34fa3647d7500f9c8bf8db5e/b0-system/b0"
---

b0 — Software construction and deployment kit
-------------------------------------------------------------------------------

WARNING this package is unstable and work in progress, do not depend on it.

b0 describes software construction and deployments using modular and
customizable definitions written in OCaml.

At the core of b0 is the `b0.memo` library which provides arbitrary
build abstraction with reliable, efficient incremental rebuilds.

b0 is distributed under the ISC license. It depends on [cmdliner][cmdliner].

[cmdliner]: https://erratique.ch/software/cmdliner

## Install

b0 can be installed with `opam`:

    opam install b0

If you don't use `opam`, consult [`DEVEL.md`](https://github.com/b0-system/b0/blob/HEAD/DEVEL.md) for bootstrap 
instructions.

## Documentation

The documentation can be consulted [online][doc] or via `odig doc b0`.

[doc]: http://erratique.ch/software/b0/doc
