---
repo: "CEED/libCEED"
name: "libCEED"
description: "CEED Library: Code for Efficient Extensible Discretizations"
readmeQualityOk: true
url: "https://github.com/CEED/libCEED"
homepage: "https://libceed.org"
language: "C"
languages: ["C", "C++"]
languagePcts: [55, 26]
topics: ["ceed", "high-order", "exascale-computing", "api", "ecp", "high-performance-computing", "gpu", "cuda", "julia", "linear-algebra"]
stars: 269
forks: 83
openIssues: 50
closedIssues: 342
watchers: 24
contributors: 69
recentReleases: 0
createdAt: "2017-12-06T17:57:40Z"
lastCommitAt: "2026-10-11T10:15:57Z"
lastReleaseAt: "2021-07-07T16:45:51Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 42
maintainers: ["zatkins-dev", "jeremylt", "Sbozzolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2908836aeeb758c7d83dfb17952e88111dfb9d878289c948fdab15f775da88ac/CEED/libCEED"
discussionCount: 13
---

# libCEED: Efficient Extensible Discretization

## Summary and Purpose

libCEED provides fast algebra for element-based discretizations, designed for performance portability, run-time flexibility, and clean embedding in higher level libraries and applications.
It offers a C99 interface as well as bindings for Fortran, Python, Julia, and Rust.
While our focus is on high-order finite elements, the approach is mostly algebraic and thus applicable to other discretizations in factored form, as explained in the [user manual](https://libceed.org/en/latest/) and API implementation portion of the [documentation](https://libceed.org/en/latest/api/).

One of the challenges with high-order methods is that a global sparse matrix is no longer a good representation of a high-order linear operator, both with respect to the FLOPs needed for its evaluation, as well as the memory transfer needed for a matvec.
Thus, high-order methods require a new "format" that still represents a linear (or more generally non-linear) operator, but not through a sparse matrix.

The goal of libCEED is to propose such a format, as well as supporting implementations and data structures, that enable efficient operator…
