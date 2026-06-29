---
repo: "google/sedpack"
name: "sedpack"
description: "Sedpack - Scalable and efficient data packing"
url: "https://github.com/google/sedpack"
homepage: "https://google.github.io/sedpack/"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["dataset", "deep-learning"]
stars: 36
forks: 12
openIssues: 30
closedIssues: 10
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2024-08-27T14:29:18Z"
lastCommitAt: "2026-06-29T07:06:08Z"
lastReleaseAt: "2025-10-16T08:27:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 48
maintainers: ["dependabot[bot]", "wsxrdv", "jmichelp"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ba91d2bfa1c6bc0146d32041ba3ff7ccc4ec79b6c4b1a4acb47a6c886461e6f/google/sedpack"
---

# Sedpack - Scalable and efficient data packing

[Documentation](https://google.github.io/sedpack/)

Mainly refactored from the [SCAAML](https://github.com/google/scaaml) project.

## Available components

See the documentation website:
[https://google.github.io/sedpack/](https://google.github.io/sedpack/).

## Install

### Dependencies

To use this library you need to have a working version of [TensorFlow
2.x](https://www.tensorflow.org/install).

Development dependencies:

-   python-dev and gcc for [xxhash](https://pypi.org/project/xxhash/)

### Dataset install

#### Development install

1.  Clone the repository: `git clone https://github.com/google/sedpack`
2.  Install dependencies: `python3 -m pip install --require-hashes -r requirements.txt`
3.  Install the package in development mode: `python3 -m pip install --editable
    .` (short `pip install -e .` or legacy `python setup.py develop`)

#### Rust install

-   Activate your Python virtual environment
-   [Install Rust](https://www.rust-lang.org/tools/install)
-   Run `maturin develop --release`
-   Run `python -m pytest` from the project root directory -- no tests should
    be skipped

### Update dependencies

Make sure…
