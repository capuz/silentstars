---
repo: "semiexp/cspuz_core"
name: "cspuz_core"
description: "CSP solver for puzzles"
url: "https://github.com/semiexp/cspuz_core"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 19
forks: 8
openIssues: 10
closedIssues: 14
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-08-24T11:35:01Z"
lastCommitAt: "2026-06-28T03:12:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["semiexp", "ReverM", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc96d25d9933ad3c8552d99702c307535610d4b5e117753ac10077c8c4d8e443/semiexp/cspuz_core"
---

# cspuz_core
CSP solver for puzzles

# Build

To build cspuz_core, you need to setup [Rust](https://www.rust-lang.org/) and a C++ compiler first.

Then, clone this repository including submodules:

```
git clone --recursive https://github.com/semiexp/cspuz_core.git
```

and you can build cspuz_core by

```
cargo build --release
```

This will produce a binary in `target/release/`:

- `cli`: a CLI interface compatible with [Sugar](https://cspsat.gitlab.io/sugar/) and [csugar](https://github.com/semiexp/csugar).

# Install a Python binding

You can install `cspuz_core` as a Python binding:

```
pip install .
```

After running this command, a Python package `cspuz_core` will be installed.

If you are running cspuz_core on Mac, please follow the instruction in [PyO3 user guide](https://pyo3.rs/v0.15.1/building_and_distribution.html#macos).
