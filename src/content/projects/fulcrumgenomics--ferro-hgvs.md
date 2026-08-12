---
repo: "fulcrumgenomics/ferro-hgvs"
name: "ferro-hgvs"
description: "A high-performance HGVS variant nomenclature parser and normalizer written in Rust"
readmeQualityOk: true
url: "https://github.com/fulcrumgenomics/ferro-hgvs"
homepage: "https://docs.rs/ferro-hgvs"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["bioinformatics", "genomics", "hgvs", "parser", "rust", "variant-nomenclature"]
stars: 27
forks: 3
openIssues: 53
closedIssues: 623
watchers: 1
contributors: 16
recentReleases: 5
createdAt: "2026-02-19T17:19:13Z"
lastCommitAt: "2026-08-12T05:15:34Z"
lastReleaseAt: "2026-07-16T01:01:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 51
maintainers: ["nh13", "geoffjentry", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a001e2d2b52e3204df0874f69ce69a4e6adea177b5757e81daac2162ca8b7d90/fulcrumgenomics/ferro-hgvs"
---

# ferro-hgvs

A high-performance HGVS variant nomenclature parser and normalizer written in Rust.

**WARNING: ALPHA SOFTWARE - USE AT YOUR OWN RISK**

This software is currently in **ALPHA**. While we have extensively tested it
across a wide variety of HGVS patterns, **no guarantees are made** regarding
correctness or stability.

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fulcrumgenomics/ferro-hgvs/main/.github/logos/fulcrumgenomics-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/fulcrumgenomics/ferro-hgvs/main/.github/logos/fulcrumgenomics-light.svg">
  </picture>
</a>
</p>

## Features

- **Full HGVS Parsing**: All coordinate systems (g/c/n/r/p/m/o) and edit types
- **Variant Normalization**: 3'/5' shifting per HGVS specification
- **High Performance**: ~5M variants/sec single-threaded parsing (>12M/s parallel), zero-copy with nom
- **Type-Safe**: Leverages Rust's type system for correctness

## Installation

### Python

```bash
pip install ferro-hgvs
```

Pre-built wheels are available for Linux (x86_64, aarch64), macOS (x86_64, Apple Silicon), and Windows…
