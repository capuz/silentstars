---
repo: "SheffieldML/GPc"
name: "GPc"
description: "Gaussian process code in C++ including some implementations of GP-LVM and IVM."
readmeQualityOk: true
url: "https://github.com/SheffieldML/GPc"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 72
forks: 28
openIssues: 7
closedIssues: 1
watchers: 35
contributors: 17
recentReleases: 0
createdAt: "2014-06-17T14:12:20Z"
lastCommitAt: "2026-11-19T11:55:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 41
maintainers: ["lawrennd", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/bebfe1f85c08f570f0dcc2a95195f0096fa65158ddc03fe8ca53292b1a0806f1/SheffieldML/GPc"
---

GPc
===

Gaussian process code in C++ including some implementations of GP-LVM and IVM.

## Status

| Workflow | Badge |
| --- | --- |
| Compile | [](https://github.com/SheffieldML/GPc/actions/workflows/compile.yml?query=branch%3Amain) |
| Reference tests | [](https://github.com/SheffieldML/GPc/actions/workflows/reference-tests.yml?query=branch%3Amain) |
| Coverage | [](https://github.com/SheffieldML/GPc/actions/workflows/coverage.yml?query=branch%3Amain) |
| Wheels | [](https://github.com/SheffieldML/GPc/actions/workflows/wheels.yml?query=branch%3Amain) |
| Codecov | [](https://codecov.io/gh/SheffieldML/GPc/branch/main) |

**Platforms:** Ubuntu and macOS are the blessed build targets (CIP-0006). Compile and Reference tests are hard gates on both. Coverage stays on Ubuntu. **Windows** has an experimental soft-gated CMake smoke job (MSVC + Intel `ifx` + OpenBLAS, [CIP-002B](https://github.com/SheffieldML/GPc/blob/HEAD/cip/cip002B.md)); there is no blessed `make` path on Windows.
