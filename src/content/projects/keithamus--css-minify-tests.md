---
repo: "keithamus/css-minify-tests"
name: "css-minify-tests"
description: "A correctness test suite for CSS minifiers."
readmeQualityOk: true
url: "https://github.com/keithamus/css-minify-tests"
homepage: "https://www.keithcirkel.co.uk/css-minify-tests/"
language: "JavaScript"
languages: ["JavaScript", "CSS", "HTML"]
languagePcts: [43, 34, 23]
stars: 13
forks: 3
openIssues: 14
closedIssues: 123
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T22:08:03Z"
lastCommitAt: "2026-11-04T13:05:25Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 97
undervaluedScore: 61
maintainers: ["TheJaredWilcurt", "keithamus", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa8645ee4fc8ae04cf71dbdbeecce4f57d1d770a2c84157383a4a5930b107cb/keithamus/css-minify-tests"
---

# css-minify-tests

A correctness test suite for CSS minifiers.

This project exists in good faith to improve **all** CSS tooling. It is not a
leaderboard and it is not intended to declare winners or call out losers. Every
minifier makes different trade-offs and every score reflects a snapshot in time.
The goal is to give maintainers a shared, vendor-neutral corpus of
transformations they can run against their own tool to find gaps and edge cases.

Inspired by Romain Menke's
[css-tokenizer-tests](https://github.com/romainmenke/css-tokenizer-tests), which
provides a similar community-driven corpus for CSS tokenizers; a project that
helped raise the bar for tokenizer correctness across the ecosystem. The hope
is that this suite can do the same for minification.

## How it works

The suite contains 350 tests organised by category. Each test isolates **one**
minification technique so failures are easy to diagnose:

```sh
tests/
  <category>/
    <NNNN>/
      source.css       # Unminified input
      expected.css     # Canonical minified output (single line)
      README.md        # Short description of the transformation
      validate.html    # Optional browser-viewable proof of…
