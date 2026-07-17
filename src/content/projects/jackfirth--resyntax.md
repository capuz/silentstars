---
repo: "jackfirth/resyntax"
name: "resyntax"
description: "A Racket refactoring engine"
readmeQualityOk: true
url: "https://github.com/jackfirth/resyntax"
homepage: "https://docs.racket-lang.org/resyntax/"
language: "Racket"
languages: ["Racket"]
languagePcts: [100]
topics: ["racket", "refactoring", "static-analysis"]
stars: 69
forks: 11
openIssues: 71
closedIssues: 258
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2021-01-09T01:19:13Z"
lastCommitAt: "2026-07-17T05:58:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 45
maintainers: ["jackfirth"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca5c196abdb61d5a0a7f02c86c351c4ed720a45ab1bdbf6ff71456328d38ee07/jackfirth/resyntax"
discussionCount: 0
---

# resyntax [][ci-status] [][docs] [][coverage]

A refactoring tool for Racket built on top of `syntax-parse`.

[ci-status]: https://github.com/jackfirth/resyntax/actions
[ci-status-badge]: https://github.com/jackfirth/resyntax/workflows/CI/badge.svg
[docs]: https://docs.racket-lang.org/resyntax/index.html
[docs-badge]: https://img.shields.io/badge/docs-published-blue.svg
[coverage]: https://coveralls.io/github/jackfirth/resyntax?branch=master
[coverage-badge]: https://coveralls.io/repos/github/jackfirth/resyntax/badge.svg?branch=master

## Quickstart

Use the Racket package manager to install in the installation scope.  
```
raco pkg install --installation resyntax
```
The `--installation` flag (shorthand for `--scope installation`) installs packages for all users of a Racket installation and ensures `resyntax` is in your `$PATH`. 

e.g. 
```
% resyntax analyze --file coroutines-example.rkt
resyntax: --- analyzing code ---
resyntax: --- displaying results ---
%
```

See the documentation for more details on how to use `resyntax`.

## Examples

Resyntax integrates with GitHub in two ways: an _analyzer_ GitHub action that reviews pull requests, and an _autofixer_ GitHub action that…
