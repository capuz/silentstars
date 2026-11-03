---
repo: "raviqqe/stak"
name: "stak"
description: "The miniature, embeddable R7RS Scheme implementation"
readmeQualityOk: true
url: "https://github.com/raviqqe/stak"
homepage: "https://raviqqe.com/stak/"
language: "Rust"
languages: ["Rust", "Gherkin", "Scheme"]
languagePcts: [35, 34, 29]
topics: ["rust", "scheme", "script", "no-std", "no-alloc"]
stars: 138
forks: 6
openIssues: 14
closedIssues: 162
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-07-03T04:33:11Z"
lastCommitAt: "2026-11-03T10:52:10Z"
lastReleaseAt: "2025-03-04T08:03:46Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 46
maintainers: ["dependabot[bot]", "raviqqe"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd0f7caaa9e24f06bac1496fb7ef12cf307d1e1d51afa65e05f925fd82f1b9d3/raviqqe/stak"
discussionCount: 12
---

# Stak Scheme

The miniature, embeddable R7RS Scheme implementation in Rust

Stak Scheme aims to be:

- An embeddable Scheme interpreter for Rust with very small memory footprint and reasonable performance
  - Its virtual machine (VM) is written in only 1.5 KLOC in Rust.
- The minimal implementation of [the R7RS-small standard][r7rs-small]
  - A subset of [Chibi Scheme](https://github.com/ashinn/chibi-scheme), [Gauche](https://github.com/shirok/Gauche), and [Guile](https://www.gnu.org/software/guile/)
- A portable scripting environment that supports even no-`std` and no-`alloc` platforms

For the usage and examples, see [the documentation](https://raviqqe.com/stak/install).

## Install

### Commands

To install [the interpreter](https://crates.io/crates/stak) and [REPL](https://crates.io/crates/stak-repl), run:

```sh
cargo install stak
cargo install stak-repl
```

To install [the minimal interpreter](https://crates.io/crates/mstak), run:

```sh
cargo install mstak
```

### Libraries

To install Stak Scheme as a library in your Rust project, run:

```sh
cargo add stak
cargo add --build stak-build
cargo install stak-compile
```

## Performance

See…
