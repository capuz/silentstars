---
repo: "SkeletOSS/ccc"
name: "ccc"
description: "A collection of C containers for programmers that need complete control over memory allocation."
readmeQualityOk: true
url: "https://github.com/SkeletOSS/ccc"
homepage: "https://skeletoss.github.io/ccc/"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["priority-queues", "double-ended-queue", "doubly-linked-list", "ring-buffer", "singly-linked-list", "splay-tree", "wavl-tree", "handles", "hash-table-c", "simd"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-18T03:20:25Z"
lastCommitAt: "2026-11-24T14:07:07Z"
lastReleaseAt: "2024-11-15T06:47:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 37
maintainers: ["agl-alexglopez", "pre-commit-ci[bot]", "fuhsnn"]
openGraphImageUrl: "https://opengraph.githubassets.com/e884c20fe451da1affafcadb54bb37683670be75398f475029fc692c071d7a3e/SkeletOSS/ccc"
discussionCount: 0
---

# C Container Collection (CCC)

The C Container Collection offers a variety of containers for C programmers who want fine-grained control of memory in their programs. All containers offer both allocating and non-allocating interfaces. For the motivations of why such a library is helpful in C read on.

## Installation

The following are required for install:

- GCC or Clang supporting `C23`.
    - The oldest compilers I am aware of that build a release package are Clang 19.1.1 and GCC 14.2. Older compilers may work as well.
    - To build the samples, tests, and utilities that are not included in the release package newer compilers are needed. At the time of writing Clang 22.1.0 and GCC 15.2 cover the newer C features used such as `defer`. These newer compilers are only needed for developers looking to contribute to the collection.
- CMake >= 3.23.
- Read [INSTALL.md](https://github.com/SkeletOSS/ccc/blob/HEAD/INSTALL.md) for easy installation. Freestanding environments are also supported!
