---
repo: "wrmsr/om"
name: "om"
description: "My python monorepo."
readmeQualityOk: true
url: "https://github.com/wrmsr/om"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-25T22:05:37Z"
lastCommitAt: "2026-09-19T01:35:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 72
maintainers: ["wrmsr"]
openGraphImageUrl: "https://opengraph.githubassets.com/21484b0b88e9d28b3b65a8294e6cae89048f5c2ea8ac28e4cb8c95948f8f26c2/wrmsr/om"
---

# Overview

This is `om`: my python monorepo, the successor to my previous one `omnibus`(... 'ish').
 
This is my 'production' codebase - code which has graduated from and powers my various other little projects.

It's organized into a handful of toplevel libraries - the `om*` directories - which are each independently installable
and published to pypi.

The toplevel libraries have no required dependencies besides each other - `omcore` in particular has none at all - but
there are a number of optional ones - see their respective `pyproject.toml` files for details.

Standard code is written for python 3.14+, '[lite](https://github.com/wrmsr/om/blob/master/omcore#lite-code)' code
for 3.8+.

# Toplevel libraries

- **[omcore](https://github.com/wrmsr/om/blob/master/omcore#readme)** - Core foundational code - the comprehensive
  standard library, including language helpers (like lazy imports), a `dataclasses` rebuild, a dependency injector, and
  a serde system. This is the most stable of the libraries, and the bottom of the dependency graph.
- **[omdev](https://github.com/wrmsr/om/blob/master/omdev#readme)** - Development utilities, including the
  all-in-one `om` CLI, the…
