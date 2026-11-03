---
repo: "4thd1m/asitpofborscht"
name: "asitpofborscht"
description: "a whirlwind tour to deep learning alchemy and deep learning systems"
readmeQualityOk: true
url: "https://github.com/4thd1m/asitpofborscht"
homepage: "https://sitp.ai"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 95
forks: 11
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-07T11:13:04Z"
lastCommitAt: "2026-11-03T11:14:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["4thd1m"]
openGraphImageUrl: "https://opengraph.githubassets.com/1963a9ecc6e5c2dd0da610d6699a9b8094d851975a6318641d0d804b37afd2d4/4thd1m/asitpofborscht"
discussionCount: 1
---

# a sitpofborscht

If you want to read the book in order to develop `nanochat` and `borscht` from scratch, head on over to https://sitp.ai/ on your preferred reading device. It looks great on all displays! Additionally, if you try out the `borscht` autograd in order to run training and inference for neural nets,
install `borscht` with your preferred package manager:

```sh
uv add borscht
```

If you are looking to *contribute* or *modify* the SITP book or `borscht` teaching language, continue reading the quick start instructions found below.

## Quick Start: `borscht` Teaching Language

```sh
cd borscht
maturin develop
python (todo)
import borscht
device=gpu (todo)
```

## Quick Start: SITP Book

If you want to *modify* the SITP book, follow the installation instructions below:

The book is built with [mdbook](https://rust-lang.github.io/mdBook/), the Rust ecosystem's standard static site generator for markdown. The steps below install the whole set, and mirror the Netlify
build in `netlify.toml` — that file is the source of truth for what production uses, so keep the two
in sync when you change either. Beyond the Rust and Lean toolchains below, you need `python3` on
PATH: the…
