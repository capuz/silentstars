---
repo: "david-andrew/dewy-lang"
name: "dewy-lang"
description: "A programming language"
readmeQualityOk: true
url: "https://github.com/david-andrew/dewy-lang"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["compiler", "programming-language"]
stars: 6
forks: 0
openIssues: 8
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2018-07-15T08:13:42Z"
lastCommitAt: "2026-08-17T04:19:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 64
undervaluedScore: 62
maintainers: ["david-andrew"]
openGraphImageUrl: "https://opengraph.githubassets.com/32098da9e107ce7e28483ff26d51125b17f2975fd68faede558045aad94b94e7/david-andrew/dewy-lang"
---

</p>

# The Dewy Programming Language

Dewy is a general purpose programming language with a focus on engineering.

> **NOTE: Still very work in progress, and the docs (including this README) are frequently out of date!**

## Current Status

### dewy
The main compiler for the language is being reweritten from scratch under [src/cleanparse/](https://github.com/david-andrew/dewy-lang/blob/HEAD/src/cleanparse)

### udewy
The micro subset, udewy, is largely feature complete and available under [udewy/](https://github.com/david-andrew/dewy-lang/blob/HEAD/udewy/). Currently only supports linux x86_64.

A vscode extension for syntax highlighting is available at https://marketplace.visualstudio.com/items?itemName=RedFoxLabs.udewy

## Installation

### Dependancies

For now, the only dependency is **Python >= 3.12** with an optional dependency on `rich` for rich printing/errors (`pip install rich`)

Later (dev) dependencies will probably include [`QBE`](https://c9x.me/compile/)

### Automatic

```
python install.py
```

This should work on most linux distros with most common shells (`sh`, `bash`, `zsh`, `fish`). This script just attempts to add the lines below from the `Manual` section to…
