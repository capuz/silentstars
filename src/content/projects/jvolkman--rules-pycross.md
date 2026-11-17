---
repo: "jvolkman/rules_pycross"
name: "rules_pycross"
description: "Bazel + Python rules for cross-platform external dependencies"
readmeQualityOk: true
url: "https://github.com/jvolkman/rules_pycross"
language: "Starlark"
languages: ["Starlark", "Python"]
languagePcts: [76, 21]
topics: ["python", "bazel", "bazel-rules"]
stars: 98
forks: 53
openIssues: 1
closedIssues: 88
watchers: 4
contributors: 29
recentReleases: 0
createdAt: "2022-03-18T18:49:24Z"
lastCommitAt: "2026-11-17T14:43:01Z"
lastReleaseAt: "2024-06-12T19:15:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["jvolkman", "eloisekp", "alexander-scott"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e41e9a33efe05245bfcf05f5cca7f27682a5aee8247a8afe0290f051dd6e42/jvolkman/rules_pycross"
---

# `rules_pycross` — Python + cross platform

`rules_pycross` lets you use Python lock files with Bazel, enabling cross-platform, hermetic builds of Python dependencies — including native extensions.

> [!NOTE]
> 2.0 is a major overhaul of `rules_pycross` ([#243](https://github.com/jvolkman/rules_pycross/pull/243)); see the
> [CHANGELOG](https://github.com/jvolkman/rules_pycross/blob/HEAD/CHANGELOG.md) for breaking changes. The 1.x line lives on the [v1](https://github.com/jvolkman/rules_pycross/tree/v1) branch.

### Features

* Import lock files from **uv**, **PDM**, **Poetry**, or **PEP 751 pylock.toml**
* Build source distributions inside Bazel build actions, not during workspace initialization
* Pluggable build backends: setuptools, meson, cmake, maturin, and generic PEP 517
* Cross-platform sdist builds — build wheels for Linux and macOS from either host with a hermetic cross-compilation toolchain ([hermetic-llvm](https://github.com/hermeticbuild/hermetic-llvm), BCR module `llvm`)
* Multi-workspace support for monorepos with shared dependency deduplication
* Conflict/variant resolution for mutually exclusive dependencies (e.g., torch CPU vs. CUDA)
* Compatible with…
