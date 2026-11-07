---
repo: "munich-quantum-toolkit/core"
name: "core"
description: "MQT Core - Reusable C++20 and Python libraries for quantum computing: the MQT Compiler Collection, built on MLIR and LLVM, together with decision diagrams, QIR execution, QDMI device access, SDK and HPC integrations, and structured benchmarks. It forms the backbone of the Munich Quantum Toolkit."
readmeQualityOk: true
url: "https://github.com/munich-quantum-toolkit/core"
homepage: "https://mqt.readthedocs.io/projects/core"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["quantum-intermediate-representation", "mqt", "tum", "mqsc", "quantum-compilation", "mlir", "cpp20"]
stars: 136
forks: 78
openIssues: 30
closedIssues: 320
watchers: 9
contributors: 49
recentReleases: 0
createdAt: "2020-01-02T08:54:03Z"
lastCommitAt: "2026-11-07T16:12:04Z"
lastReleaseAt: "2021-11-04T19:04:25Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["burgholzer", "simon1hofmann", "denialhaag"]
openGraphImageUrl: "https://opengraph.githubassets.com/d92e9e1526ee7453e1b378a19189d450db2a8e13ee243960d481f4daf10c4cf1/munich-quantum-toolkit/core"
fundingLinks: ["GITHUB:https://github.com/munich-quantum-toolkit"]
discussionCount: 7
---

# MQT Core - The Backbone of the Munich Quantum Toolkit (MQT)

MQT Core provides reusable C++20 and Python libraries for quantum computing: the
**MQT Compiler Collection**, built on **MLIR and LLVM**, together with decision
diagrams, QIR execution, QDMI device access, SDK and HPC integrations, and
structured benchmarks. It forms the backbone of the
[_Munich Quantum Toolkit (MQT)_](https://mqt.readthedocs.io).

**MQT Core 4 is a major architectural release.** Structured compiler
representations replace the classic circuit APIs and connect quantum-classical
programs to optimization, hardware mapping, and execution. For the release
highlights, see the [v4 overview](https://github.com/munich-quantum-toolkit/core/blob/HEAD/CHANGELOG.md#400---2026-09-11). Existing users
should start with the [v3-to-v4 migration guide](https://github.com/munich-quantum-toolkit/core/blob/HEAD/UPGRADING.md#400).

## Start with your task

Install [mqt.core](https://pypi.org/project/mqt.core/) in a Python 3.11 or newer
virtual environment:

```console
uv pip install mqt.core
```

Explore the benchmark catalog without setting up a project environment:

```console
uvx mqt-core bench list
```

Compile and…
