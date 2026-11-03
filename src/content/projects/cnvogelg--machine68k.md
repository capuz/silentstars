---
repo: "cnvogelg/machine68k"
name: "machine68k"
description: "m68k machine emulator for Python based on Musashi"
readmeQualityOk: true
url: "https://github.com/cnvogelg/machine68k"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["amiga", "amitools", "m68k", "musashi", "system-emulator"]
stars: 20
forks: 3
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-12-31T15:25:57Z"
lastCommitAt: "2026-11-03T19:05:13Z"
lastReleaseAt: "2025-12-21T17:47:33Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 49
maintainers: ["cnvogelg", "tbdye", "reinauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d2d1217bb148b1cb1f26381a02f60a589edc969b182d555f951f130f1df1efd/cnvogelg/machine68k"
---

# machine68k - m68k Emulator and Machine Binding for Python

- written by Christian Vogelgsang <chris@vogelgsang.org>
- under the GNU Public License V2

## Introduction

`machine68k` is a Python package that offers a system binding for
the [Musashi][1] Motorola 68000 CPU emulator with memory binding and
support for ALine opcode exception traps.

The package is currently used by the [amitools][2] project and
supplies the CPU emulation for `vamos`.

## Prerequisites

- Python >= ```3.11```
- [pip3][3]

## Optional Packages

- [cython][4]: (version >= **3.0.0**) required to rebuild the native module

[1]: https://github.com/kstenerud/Musashi
[2]: https://github.com/cnvogelg/amitools
[3]: https://packaging.python.org/en/latest/tutorials/installing-packages/
[4]: https://cython.org

## Installation

### Stable/Release Version

```bash
pip3 install machine68k
```

Note:

- on Linux/macOS may use ``sudo`` to install for all users
- requires a host C compiler to compile the extension.
- the version may be a bit outdated. If you need recent changes use the
  current version.

### Current Version from GitHub

Ensure you have Cython installed:

```bash
pip3 install cython
```

Then install…
