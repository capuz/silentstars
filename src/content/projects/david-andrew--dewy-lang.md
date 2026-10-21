---
repo: "david-andrew/dewy-lang"
name: "dewy-lang"
description: "A programming language"
readmeQualityOk: true
url: "https://github.com/david-andrew/dewy-lang"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [62, 23]
topics: ["compiler", "programming-language"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2018-07-15T08:13:42Z"
lastCommitAt: "2026-10-21T08:49:15Z"
lastReleaseAt: "2026-09-13T13:12:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 77
maintainers: ["david-andrew"]
openGraphImageUrl: "https://opengraph.githubassets.com/95f1e72cbed7529edd217b391abc737407f184e99d64f957b4f254947e256452/david-andrew/dewy-lang"
---

# The Dewy Programming Language

Dewy is a general purpose programming language with a focus on engineering.
A binding names a value: assignment, argument passing and return give the
receiver its own value, and sharing is either unobservable or written in the
source. Ordinary programs should be comfortable to write, run well without
pervasive annotations, and compile from source quickly enough to stay in the
edit loop. Games are a primary customer. See [docs/GOALS.md](https://github.com/david-andrew/dewy-lang/blob/HEAD/docs/GOALS.md).

## Status

Experimental (version 0.0.0). The compiler is a compact native/web compiler,
originally forked from Sloppy, that implements a growing part of the designed
language; the acceptance ladder in [ROADMAP.md](https://github.com/david-andrew/dewy-lang/blob/HEAD/ROADMAP.md) tracks how much. The previous implementation (the Python/native compiler, µDewy
and their library) is archived in git tag `archive/master-pre-restart`.

## Build, run and test

Needs Python 3.14, a C compiler and `make` (Linux x86-64 for the C bootstrap),
plus pytest, pytest-xdist, Pillow and Node for the test suite (`uv sync`).

```sh
./tools/dewy examples/tour.dewy…
