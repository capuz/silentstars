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
openIssues: 99
closedIssues: 664
watchers: 1
contributors: 16
recentReleases: 4
createdAt: "2026-02-19T17:19:13Z"
lastCommitAt: "2026-08-14T05:06:28Z"
lastReleaseAt: "2026-07-16T01:01:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["nh13"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b8d96ddae9d93c712c984dff565422218081238ce711e0646a99d6c5ff60024/fulcrumgenomics/ferro-hgvs"
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
- **Variant Normalization**: 3' shifting per HGVS specification
- **High Performance**: ~5M variants/sec single-threaded parsing (>12M/s parallel), zero-copy with nom
- **Type-Safe**: Leverages Rust's type system for correctness

## Installation

### Python

```bash
pip install ferro-hgvs
```

Pre-built wheels are available for Linux (x86_64, aarch64), macOS (x86_64, Apple Silicon), and Windows…
