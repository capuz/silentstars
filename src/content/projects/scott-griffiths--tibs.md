---
repo: "scott-griffiths/tibs"
name: "tibs"
description: "A sleek Python library for your binary data"
readmeQualityOk: true
url: "https://github.com/scott-griffiths/tibs"
homepage: "https://tibs.readthedocs.io/en/stable/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 45]
topics: ["binary", "bitarray", "bitstring", "python"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2025-11-09T09:53:27Z"
lastCommitAt: "2026-08-13T05:16:50Z"
lastReleaseAt: "2026-06-27T15:28:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 77
maintainers: ["scott-griffiths"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fda162d53e8438096561bba7290537ab4eb90e71b15d2eea5b04b191959e9cd/scott-griffiths/tibs"
---

<p>
  </a><br />
  A sleek Python library for binary data
</p>

<br clear="left" />

&nbsp; &nbsp;

----

``tibs`` is a Python library for binary data.
It's 100% written in Rust and has excellent performance.

Use it for packets, registers, instruction
formats, bitsets, compressed data and streams where fields can have many different
interpretations and be any number of bits long.

It is used to power the popular [bitstring](https://github.com/scott-griffiths/bitstring)
library, which is by the same author. The full documentation is available on [Read the Docs](https://tibs.readthedocs.io/en/latest/).

## Install

```bash
pip install tibs
```

Tibs works with Python 3.11 and later. There are pre-built wheels for most
common platforms; if there are issues then please let me know.

## Overview

The tibs library provides two main classes: `Tibs`, which is an immutable sequence of bits
(similar to how `bytes` works in Python as a sequence of bytes) and `Mutibs`, which is a mutable version (similar to `bytearray` in Python).

They can be used in a few ways, depending on what you need:

### 1. As a container of bits

`Tibs` provides an interface very similar
to `bytes` and other Python…
