---
repo: "GrammaticalFramework/gf-rgl"
name: "gf-rgl"
description: "Grammatical Framework's Resource Grammar Library (RGL)"
readmeQualityOk: true
url: "https://github.com/GrammaticalFramework/gf-rgl"
homepage: "https://www.grammaticalframework.org/"
language: "Grammatical Framework"
languages: ["Grammatical Framework"]
languagePcts: [100]
stars: 70
forks: 61
openIssues: 21
closedIssues: 20
watchers: 11
contributors: 54
recentReleases: 0
createdAt: "2018-07-26T18:30:30Z"
lastCommitAt: "2026-10-03T09:22:01Z"
lastReleaseAt: "2026-04-03T12:52:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 55
maintainers: ["krangelov", "inariksit", "aarneranta"]
openGraphImageUrl: "https://opengraph.githubassets.com/31ba3c5cfd8f47bd386d538a1c1ebdce3aab397e5c9b2e3395c736073f7fedeb/GrammaticalFramework/gf-rgl"
---

# GF Resource Grammar Library (RGL)

The GF Resource Grammar Library is the standard library for Grammatical Framework. It covers the morphology and basic syntax of over 30 languages.

For more about the RGL, see the [synopsis page](http://www.grammaticalframework.org/lib/doc/synopsis/).

## Choose your build method

There are 3 ways to build and install the RGL:

- Haskell script `Setup.hs`
- Shell script `Setup.sh` (does not require Haskell)
- Windows batch file `Setup.bat` (does not require Haskell)

## Install locations

The install scripts will try to determine where to copy the compiled RGL modules.
It will look for, in this order:
- the `--dest=` flag (see below)
- the `GF_LIB_PATH` environment variable
- the file `../gf-core/DATA_DIR` (relative to this directory). This only works if you have the `gf-core` and `gf-rgl` repositories in the same top-level directory **and** you have already compiled GF from source.
(This is considered a bit hacky and will probably disappear in the future).

## Language config

A list of all languages and their properties is maintained centrally in [`languages.csv`](https://github.com/GrammaticalFramework/gf-rgl/blob/HEAD/languages.csv).
This…
