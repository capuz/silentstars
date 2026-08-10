---
repo: "swack-tools/oxidex"
name: "oxidex"
description: "Replicates exiftool but in rust, with some additional features."
readmeQualityOk: true
url: "https://github.com/swack-tools/oxidex"
homepage: "https://oxidex.net/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["exiftool", "metadata", "rust"]
stars: 7
forks: 4
openIssues: 8
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-11-01T18:13:34Z"
lastCommitAt: "2026-08-10T05:05:49Z"
lastReleaseAt: "2025-11-16T13:20:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 68
maintainers: ["swackhamer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59c14b7c57f4f3b9ef0590fb3994b7db2c9f6fce7d9b6488b6d5a8aab7d769b7/swack-tools/oxidex"
---

# OxiDex

A high-performance Rust implementation of [ExifTool](https://exiftool.org/) for metadata extraction and manipulation.

## What is OxiDex?

OxiDex is a memory-safe, drop-in replacement for the Perl-based ExifTool. It defines 16,684 metadata tags across 140+ formats (see [Tag Coverage](https://oxidex.net/reference/tag-coverage-analysis) for the measured extraction-conformance score), with significantly better performance through Rust's zero-cost abstractions and parallel processing.

## Why OxiDex?

- **3.7-9.7x faster** than Perl ExifTool ([see benchmarks](https://oxidex.net/performance/benchmarks))
- **Memory safe** - No buffer overflows, use-after-free, or data races
- **Drop-in compatible** - Same CLI arguments as original ExifTool
- **Cross-platform** - Static binaries for Linux, macOS, and Windows
- **Library + CLI** - Use as a Rust crate or standalone binary
- **AI-powered detection (optional)** - Magika deep learning model for enhanced file type detection (`--features magika`)

## Quick Start

### Download Binary

Pre-built binaries available on the [Releases page](https://github.com/swack-tools/oxidex/releases).

## Usage

```bash
# Extract all metadata
oxidex…
