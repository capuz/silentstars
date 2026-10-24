---
repo: "mkb79/Audible"
name: "Audible"
description: "A(Sync) Interface for internal Audible API written in pure Python."
readmeQualityOk: true
url: "https://github.com/mkb79/Audible"
homepage: "https://audible.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["audible-api", "audible", "async-functions", "encrypted-store", "python"]
stars: 414
forks: 41
openIssues: 5
closedIssues: 77
watchers: 9
contributors: 19
recentReleases: 0
createdAt: "2019-06-18T12:24:05Z"
lastCommitAt: "2026-10-24T08:08:28Z"
lastReleaseAt: "2020-05-31T19:45:47Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 35
maintainers: ["mkb79", "renovate[bot]", "audible-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ede5827c7d01fa895e5c06f41d0bc2274335e4435a985dd21517587ca36d90da/mkb79/Audible"
fundingLinks: ["GITHUB:https://github.com/mkb79"]
discussionCount: 18
---

# Audible

**Audible is a Python low-level interface to communicate with the non-publicly
[Audible](https://github.com/mkb79/Audible/blob/HEAD/<https://en.wikipedia.org/wiki/Audible_(service)>) API.**

It enables Python developers to create their own Audible services.
Asynchronous communication with the Audible API is supported.

For a basic command line interface take a look at my
[audible-cli](https://github.com/mkb79/audible-cli) package. This package
supports:

- downloading audiobooks (aax/aaxc), cover, PDF and chapter files
- export library to [csv](https://en.wikipedia.org/wiki/Comma-separated_values)
  files
- get activation bytes
- add own plugin commands

## Requirements

Python >= 3.11

## Installation

### Standard Installation

```bash
pip install audible
```

### Recommended: With Performance Optimizations

**Available in audible >= 0.11.0**

For significantly better performance (5-100x faster cryptographic operations),
install with optional high-performance crypto backends.

**Option 1: cryptography (recommended)**

Modern, actively maintained, Rust-accelerated library:

```bash
pip install audible[cryptography]
```

**Option 2: pycryptodome**

Mature, C-based…
