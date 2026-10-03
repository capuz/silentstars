---
repo: "Benjamin-Lee/circkit"
name: "circkit"
description: "High-performance circular sequence manipulation"
readmeQualityOk: true
url: "https://github.com/Benjamin-Lee/circkit"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-08-09T03:50:52Z"
lastCommitAt: "2026-10-03T22:05:16Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 35
maintainers: ["Benjamin-Lee"]
openGraphImageUrl: "https://opengraph.githubassets.com/886b5402153a9d0f056663917608c5c33a3a8e7ced9166a1ea57f9e043d07901/Benjamin-Lee/circkit"
---

# circKit

circKit is a library for manipulating circular biological sequences such as DNA and RNA.

## Features

- Easy to install
- Written in Rust for performance and safety
- Inputs and outputs can be gzip, bzip2, xz, or zstd compressed

## Usage

```text
$ circkit --help
circkit 0.1.0
Benjamin D. Lee <benjamin.lee@chch.ox.ac.uk>
A toolkit for working with circular sequences.

USAGE:
    circkit [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -q, --quiet      Less output per occurrence
    -v, --verbose    More output per occurrence
    -V, --version    Print version information

SUBCOMMANDS:
    canonicalize    Normalize circular sequences
    cat             Concatenate sequences to themselves
    decat           Deconcatenate sequences to themselves
    help            Print this message or the help of the given subcommand(s)
    monomerize      Find monomers of (potentially) circular or multimeric sequences
    orfs            Find ORFs in circular sequences
    rotate          Rotate circular sequences to the left or right
    uniq            Deduplicate circular sequences
```

## Subcommands

### `cat` and `decat`

`cat` and `decat` are…
