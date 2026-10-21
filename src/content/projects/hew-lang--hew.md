---
repo: "hew-lang/hew"
name: "hew"
description: "A statically-typed, actor-oriented programming language for concurrent and distributed systems."
readmeQualityOk: true
url: "https://github.com/hew-lang/hew"
homepage: "https://hew.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["actors", "compiler", "hew", "llvm", "programming-language", "actor-model", "concurrency", "language", "rust"]
stars: 10
forks: 3
openIssues: 24
closedIssues: 874
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-23T03:46:40Z"
lastCommitAt: "2026-10-21T19:08:58Z"
lastReleaseAt: "2026-03-16T11:03:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 64
maintainers: ["slepp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164413590/5846a225-7dff-48d6-bd89-3e43bfa0ceef"
discussionCount: 1
---

# Hew

A statically-typed, actor-oriented programming language for concurrent and distributed systems.

**[Website](https://hew.sh)** | **[Documentation](https://hew.sh/docs)** | **[Playground](https://hew.sh/playground)** | **[Tutorial](https://hew.sh/learn)**

## Install

```bash
curl -fsSL https://hew.sh/install | bash
```

Pre-built binaries for Linux (x86_64, ARM64), macOS (ARM64), FreeBSD 15.1 or newer (x86_64), and Windows (x86_64) — plus `.deb`, `.rpm`, and Arch packages — are published on the [Releases](https://github.com/hew-lang/hew/releases) page. See the [Getting Started Guide](https://hew.sh/docs/getting-started/) for installation options, editor setup, and troubleshooting.

The current release is [Hew v0.6.1](https://github.com/hew-lang/hew/releases/tag/v0.6.1).
Read its [upgrade notes](https://github.com/hew-lang/hew/blob/HEAD/docs/releases/v0.6.1.md) and
[versioned language specification](https://github.com/hew-lang/hew/blob/v0.6.1/docs/specs/HEW-SPEC-2026.md).
Changes on `main` after that release are [unreleased](https://github.com/hew-lang/hew/blob/HEAD/docs/releases/UNRELEASED.md).

## Quick Start

```bash
# Hello world
echo 'fn main() { println("Hello from…
