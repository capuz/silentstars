---
repo: "ManimCommunity/ManimPango"
name: "ManimPango"
description: "Binding for Pango, to use with Manim."
readmeQualityOk: true
url: "https://github.com/ManimCommunity/ManimPango"
homepage: "https://manimpango.manim.community"
language: "Python"
languages: ["Python", "Cython"]
languagePcts: [62, 32]
topics: ["pango", "cython", "bindings", "python"]
stars: 62
forks: 23
openIssues: 6
closedIssues: 52
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2020-12-22T16:58:42Z"
lastCommitAt: "2026-10-24T08:08:34Z"
lastReleaseAt: "2021-02-11T18:37:05Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 49
maintainers: ["naveen521kk", "pattems", "behackl"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc805b4bfa07f9713bed0b01ca1011fea08f0489d9786f6ee010f215d4d4213a/ManimCommunity/ManimPango"
---

# ManimPango

**ManimPango** is a C binding for [Pango](https://pango.gnome.org/) using [Cython](https://cython.org/), which is internally used in [Manim](https://www.manim.community) to render (non-LaTeX) text.

## INSTALL

Installing **ManimPango** is super easy, just use `pip`. It is [`manimpango`](https://pypi.org/project/manimpango/) in PyPi.

```sh
pip install manimpango
```

For **Linux Users**, there are no Wheels. You must have a C compiler as well as **Pango** and its dependencies along with the **Pango** development headers. See [BUILDING](#BUILDING) for more information.

## WORKFLOW SETUP / CONTRIBUTING

To make it easier for developers to contribute, we have a pre-commit workflow that will check for `black` formatting and `flake` checking.

```sh
pip install pre-commit
pre-commit install
```

## BUILDING

### Linux/MacOS

For building **ManimPango**, you need
* a C compiler
* Python's development headers
* [`pkg-config`](https://www.freedesktop.org/wiki/Software/pkg-config/)
* [Pango](https://pango.gnome.org) along with its development headers and its dependencies.

If you are on MacOS, you can use [brew](https://brew.sh) to install those. Using…
