---
repo: "BruceEckel/ThinkingInPython"
name: "ThinkingInPython"
description: "Insights, Idioms and Patterns"
readmeQualityOk: true
url: "https://github.com/BruceEckel/ThinkingInPython"
homepage: "https://bruceeckel.github.io/ThinkingInPython"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 108
forks: 25
openIssues: 0
closedIssues: 4
watchers: 18
contributors: 5
recentReleases: 0
createdAt: "2017-07-19T04:43:50Z"
lastCommitAt: "2026-07-04T22:53:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d18a6ceb42b7c89715cc11cb9a176bfc9002c17562caa26adaed10ec212c18a5/BruceEckel/ThinkingInPython"
---

Thinking in Python
==================

An intermediate-level book for experienced programmers.
Includes a fast introduction for programmers from other languages.

## Setup

1. Clone this repository.
2. You need a `make` command. This is preinstalled on Linux and macOS
   (macOS: install Xcode Command Line Tools if it's missing).
   For Windows: `winget install ezwinports.make`
3. Install [uv](https://docs.astral.sh/uv/).
4. Run `uv sync` once. This creates `.venv` and installs the pinned
   Python (3.14+) and dev tools automatically. No manual Python install is needed.
5. Run `make check-tools` to verify that the essential tools are available.

Type `make` to see the options.

These are optional, but if you want to run
`make site`, `make local`, and `make serve`, you also need `pandoc` on your PATH.
`make prose` needs the standalone `vale` binary. See
[tools/README](https://github.com/BruceEckel/ThinkingInPython/blob/master/tools/README.md)
for details and install links.

---

## History

I started this book in 2008 and after a few years it kind of drifted to a stop. I think part of the
problem was that I wanted to move the design patterns work I had done in Java into Python and…
