---
repo: "david-andrew/dewy-lang"
name: "dewy-lang"
description: "A programming language"
readmeQualityOk: true
url: "https://github.com/david-andrew/dewy-lang"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["compiler", "programming-language"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2018-07-15T08:13:42Z"
lastCommitAt: "2026-09-29T10:03:52Z"
lastReleaseAt: "2026-09-13T13:12:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 77
maintainers: ["david-andrew"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b251b8f0a7e09084fcb0149283a4b02e908216b5b4061234e2c09d8d91d370f/david-andrew/dewy-lang"
---

</p>

# The Dewy Programming Language

Dewy is a general purpose programming language with a focus on engineering.

> **NOTE: Still very work in progress, and the docs (including this README) are frequently out of date!**

## Current Status

### dewy

The main compiler lives under [dewy/](https://github.com/david-andrew/dewy-lang/blob/HEAD/dewy/)

A VS Code extension with a TextMate grammar for Dewy lives under [dewy/vscode-dewy/](https://github.com/david-andrew/dewy-lang/blob/HEAD/dewy/vscode-dewy/) (not yet published to the marketplace; install it from the folder with `code --install-extension` after packaging, or symlink it into `~/.vscode/extensions`).

### udewy

The micro subset, udewy, is largely feature complete and available under [udewy/](https://github.com/david-andrew/dewy-lang/blob/HEAD/udewy/). Currently only supports linux x86_64.

A vscode extension for syntax highlighting is available at https://marketplace.visualstudio.com/items?itemName=RedFoxLabs.udewy

## Installation

Linux x86_64 with glibc 2.34 or newer. This installs the verified native `dewy`/`udewy` compiler pair and its matching library into `~/.dewy`:

```
curl -fsSL https://dewy-lang.org/install.sh |…
