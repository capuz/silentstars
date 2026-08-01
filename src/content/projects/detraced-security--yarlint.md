---
repo: "DeTraced-Security/YARlint"
name: "YARlint"
description: "YARA rule syntax checker and linter."
readmeQualityOk: true
url: "https://github.com/DeTraced-Security/YARlint"
homepage: "http://yarlint.detraced.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["linter", "linters", "linting", "syntax-analysis", "yara", "yara-format", "yara-manager"]
stars: 5
forks: 3
openIssues: 46
closedIssues: 44
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-22T03:11:58Z"
lastCommitAt: "2026-08-01T06:14:51Z"
lastReleaseAt: "2026-07-11T04:30:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 68
maintainers: ["Slavetomints", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ef899430c09d6bb6097271daa97afb1eab4f5e29ae22e9084a51a3d296b0d2e/DeTraced-Security/YARlint"
discussionCount: 2
---

# YARlint

> **Early WIP / Pre-Alpha**: expect breaking changes, missing features, and rough edges.

A YARA rule linter written in Rust. Catches syntax errors, style issues, logic problems, and performance pitfalls before they end up in production rulesets. Inspired by [Rubocop](https://rubocop.org/)

---

## Features

- **Syntax checking** — parse errors in rule syntax
- **Style & formatting** — consistent rule structure across your team
- **Logic analysis** — flags conditions that are always true/false or otherwise suspect
- **Performance warnings** — wide regexes, missing anchors, expensive string patterns

---

## Installation

### From source

```bash
git clone https://github.com/DeTraced-Security/YARlint.git
cd YARlint
cargo build --release
```

The binary lands at `target/release/yarlint`.

### Cargo

```bash
cargo install yarlint
```

---

## Usage

### CLI

```
A modern YARA linter written in Rust

Usage: yarlint [OPTIONS] --path <PATH>

Options:
  -p, --path <PATH>    File or directory path to scan
  -r, --recursive      Recursively traverse subdirectories when scanning a directory
  -d, --depth <DEPTH>  Maximum traversal depth when recursive scanning is enabled
  -v,…
