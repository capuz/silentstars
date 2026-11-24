---
repo: "Yasu-umi/pytest-rs"
name: "pytest-rs"
description: "A fast, drop-in compatible pytest runner written in Rust"
readmeQualityOk: true
url: "https://github.com/Yasu-umi/pytest-rs"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [57, 42]
topics: ["ci", "pytest", "python", "python3", "rust", "test-runner", "testing", "unit-testing"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T06:11:07Z"
lastCommitAt: "2026-11-24T01:54:41Z"
lastReleaseAt: "2026-07-23T02:32:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["Yasu-umi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f45cd87fcc11b4cd5d419cf67d0010c86cc67492705b5b92e1d1fe87806b40f5/Yasu-umi/pytest-rs"
---

# pytest-rs

pytest-rs is a re-implementation of the popular Python testing framework [pytest](https://github.com/pytest-dev/pytest) in Rust, focused on **speed**: a drop-in compatible runner where startup, collection, fixture orchestration, coverage measurement, and reporting are native code, while test bodies run on embedded CPython.

> Note: This project is currently in active development (alpha stage). Many features are still under implementation and subject to change. See [docs/DESIGN.md](https://github.com/Yasu-umi/pytest-rs/blob/main/docs/DESIGN.md) for the architecture and roadmap.
>
> pytest-rs is an independent project, not affiliated with or endorsed by the pytest project.

## Installation

Prebuilt wheels are published to PyPI for Linux (x86_64 / aarch64) and macOS (arm64) on CPython 3.13 / 3.14 / 3.15:

```sh
uv add --dev pytest-rs    # or: pip install pytest-rs
```

Then run your existing suite, no changes needed:
