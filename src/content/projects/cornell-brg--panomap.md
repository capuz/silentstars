---
repo: "cornell-brg/panomap"
name: "panomap"
description: "Nanopore signal mapping with pangenome variation graphs"
readmeQualityOk: true
url: "https://github.com/cornell-brg/panomap"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-03T21:23:40Z"
lastCommitAt: "2026-11-22T02:03:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 57
maintainers: ["beebdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d57026445f0783aee289326e4fbb38eb664ec46e9ff7137bd6bf5fbe65ef1b0/cornell-brg/panomap"
---

# Panomap

## What is Panomap?

Panomap maps raw Nanopore signal reads (in SLOW5/BLOW5 format) to pangenome
variation graphs without basecalling. It works at the signal level and targets
GFA graphs built with tools like PGGB and minigraph-cactus.

Note: Panomap is an experimental proof-of-concept implementation and currently does
not scale to large genomes such as the human pangenome.

## Requirements

- **CMake** 3.16–3.31 (CMake 4.x works with one extra flag, see [Build options](#build-options))
- **C++20 compiler** (GCC 13+ recommended)
- **zlib**
- **oneTBB**: parallel index/map backend; uses a system install if present, otherwise auto-fetched during configure
- **libzstd** *(optional)*: only needed for zstd-compressed BLOW5 input

Developed and tested mainly on Red Hat Enterprise Linux 8 with GCC 13.3.1 and
CMake 3.26. If it doesn't build on your system, please open an issue or pull
request, we're happy to help.
