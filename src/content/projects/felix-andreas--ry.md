---
repo: "felix-andreas/ry"
name: "ry"
description: "An extremely fast R language server and code formatter, written in Rust."
readmeQualityOk: true
url: "https://github.com/felix-andreas/ry"
homepage: "http://ry-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["language-server", "r"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-01T18:24:44Z"
lastCommitAt: "2026-11-02T17:57:24Z"
lastReleaseAt: "2025-05-26T23:36:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["claude", "felix-andreas"]
openGraphImageUrl: "https://opengraph.githubassets.com/55643976d5165e79776f29ea1ce57f310d185f49a73798c193e273e8280a5b42/felix-andreas/ry"
---

# ry

**One toolchain and a type system for R, written in Rust.**

[**Docs**](https://ry-lang.org) ·
[**Releases**](https://github.com/felix-andreas/ry/releases) ·
[**VS Code**](https://marketplace.visualstudio.com/items?itemName=felix-andreas.ry) ·
[**Zed**](https://github.com/felix-andreas/ry/tree/main/editors/zed)

ry checks, formats, loads and runs R from one tool configured by one `ry.toml`. Its type system
sits on top of R and works on the code you already have. You can stop at checking plain R, add
types as `#:` comments that keep the code plain R, switch to inline types, or go fully typed with
ry's own records, tagged unions and typed table, and turn on strict mode to reject untyped code.
[Why ry](https://ry-lang.org/why-ry) walks through the four steps.

Its parser is written for tooling: it says what is missing and keeps analyzing the rest of the file.

```r
planets <- c("Mercury", "Venus" "Earth", "Mars")
```

R reports the same mistake as `Error: unexpected string constant in "planets <- c("Mercury", "Venus" "Earth""`.

## Install

- **VS Code:** the [extension](https://marketplace.visualstudio.com/items?itemName=felix-andreas.ry)
  bundles the binary.
- **Binary:**…
