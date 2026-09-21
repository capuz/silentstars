---
repo: "goblint/analyzer"
name: "analyzer"
description: "Static analysis framework for C"
readmeQualityOk: true
url: "https://github.com/goblint/analyzer"
homepage: "https://goblint.in.tum.de"
language: "OCaml"
languages: ["OCaml", "C"]
languagePcts: [53, 31]
topics: ["ocaml", "c", "static-analysis", "static-code-analysis", "abstract-interpretation", "program-analysis", "race-conditions", "race-detection", "software-verification"]
stars: 252
forks: 90
openIssues: 233
closedIssues: 540
watchers: 16
contributors: 80
recentReleases: 0
createdAt: "2011-07-18T15:10:56Z"
lastCommitAt: "2026-09-21T07:27:50Z"
lastReleaseAt: "2022-11-25T12:55:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 41
maintainers: ["sim642", "dabund24", "michael-schwarz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/2066905/592a5262-3738-4996-999e-968170bf17b1"
---

# Goblint

Documentation can be browsed on [Read the Docs](https://goblint.readthedocs.io/en/latest/) or [GitHub](https://github.com/goblint/analyzer/blob/HEAD/docs/).

## Installing
Both for using an up-to-date version of Goblint or developing it, the best way is to install from source by cloning this repository.
For benchmarking Goblint, please follow the [Benchmarking guide on Read the Docs](https://goblint.readthedocs.io/en/latest/user-guide/benchmarking/).

### Linux
1. Install [opam](https://opam.ocaml.org/doc/Install.html) 2.2 or newer.
2. Make sure the following are installed: `git`, `patch`, `m4`, `autoconf`, `libgmp-dev`, `libmpfr-dev` and `pkg-config`.
3. Run `make setup` to install OCaml and dependencies via opam.
4. Run `make` to build Goblint itself.
5. Run `make install` to install Goblint into the opam switch for usage via switch's `PATH`.
6. _Optional:_ See [`scripts/bash-completion.sh`](https://github.com/goblint/analyzer/blob/HEAD/scripts/bash-completion.sh) for setting up bash completion for Goblint arguments.

### MacOS
1. Install GCC with `brew install gcc grep` (first run `xcode-select --install` if you don't want to build it from source). Goblint requires…
