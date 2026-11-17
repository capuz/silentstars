---
repo: "felix-andreas/ry"
name: "ry"
description: "A type checker and a fast runtime for R, written in Rust."
readmeQualityOk: true
url: "https://github.com/felix-andreas/ry"
homepage: "http://ry-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["language-server", "r"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-01T18:24:44Z"
lastCommitAt: "2026-11-17T14:45:15Z"
lastReleaseAt: "2025-05-26T23:36:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["felix-andreas", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc937f14df68f59a529ff27c6e4ce35024d10d76add3da377664ea6b8d9c6b0c/felix-andreas/ry"
---

# ry

**A fast R runtime with a type checker, written in Rust.**

[**Docs**](https://ry-lang.org) ·
[**Install**](https://ry-lang.org/installation) ·
[**Releases**](https://github.com/felix-andreas/ry/releases) ·
[**VS Code**](https://marketplace.visualstudio.com/items?itemName=felix-andreas.ry) ·
[**Zed**](https://github.com/felix-andreas/ry/tree/main/editors/zed)

ry is a fast R runtime, built to run your existing R code unchanged, plus a type checker and new
language features that make your code safer and faster.

```sh
ry run script.R   # run a script (no file: open the console)
ry check          # find bugs without running the code
ry fmt            # format your R files
```

ry is in beta. The checker, formatter, editor support and package loader are ready for daily use,
but the runtime does not run all R code yet: a script that needs something it lacks stops with an
error that names it, and `ry R script.R` runs the script on GNU R instead.
[Install ry](https://ry-lang.org/installation), then follow [Adopting ry](https://ry-lang.org/guide).

## Features

### Speed

How much faster ry's runtime is than GNU R, for each benchmark suite:

- **[Public R JIT…
