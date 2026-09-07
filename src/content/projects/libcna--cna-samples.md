---
repo: "libcna/cna-samples"
name: "cna-samples"
description: "C++ ports of the official Microsoft XNA Game Studio 4.0 samples, running on the CNA framework. Web demos coming soon."
readmeQualityOk: true
url: "https://github.com/libcna/cna-samples"
homepage: "https://libcna.com"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [50, 21]
topics: ["cna", "cpp23", "samples", "sdl3", "xna", "game-development"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-06T17:39:07Z"
lastCommitAt: "2026-09-07T08:34:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["robertvokac"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1e493e7da1c09ace0f216b2f89aaee3e55f650bde92fc6fc46c93219c48a916/libcna/cna-samples"
---

# CNA Samples

C++ ports of the official **Microsoft XNA Game Studio 4.0** sample collection,
running on [CNA](https://github.com/openeggbert/cna) — a C++ reimplementation of
the XNA 4.0 programming model built on SDL3.

## Prerequisites

| Tool | Version |
|---|---|
| CMake | ≥ 3.20 |
| C++ compiler | C++23 (GCC 13+, Clang 16+, MSVC 19.38+) |
| CNA | sibling directory `../cna` |
| sharp-runtime | sibling directory `../sharp-runtime` |

Clone all three side-by-side:

```
openeggbert/
├── cna/
├── sharp-runtime/
└── cna-samples/       ← this repo
```

## Building

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Debug
cmake --build build
```

Run a sample:

```bash
./build/samples/PrimitivesSample/cna_sample_primitives
```

## Samples

See [plan.md](https://github.com/libcna/cna-samples/blob/HEAD/plan.md) for the full inventory and migration roadmap.

## License

Microsoft Permissive License (Ms-PL) — see [LICENSE](https://github.com/libcna/cna-samples/blob/HEAD/LICENSE).
Derived from the XNA Game Studio 4.0 sample collection © Microsoft Corporation.
