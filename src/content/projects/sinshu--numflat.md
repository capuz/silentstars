---
repo: "sinshu/numflat"
name: "numflat"
description: "A numerical computation library for C#"
readmeQualityOk: true
url: "https://github.com/sinshu/numflat"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["math", "numerics", "fft", "linear-algebra", "matrix", "vector", "clustering", "dsp", "multivariate-analysis"]
stars: 50
forks: 5
openIssues: 8
closedIssues: 21
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-01-26T13:20:30Z"
lastCommitAt: "2026-07-18T05:45:28Z"
lastReleaseAt: "2025-05-15T02:55:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 51
maintainers: ["sinshu"]
openGraphImageUrl: "https://opengraph.githubassets.com/843e57a81fbbf88bfe38e84577a5c1ceadd6aab5c002dd62fc1e2d02240d0519/sinshu/numflat"
discussionCount: 0
---

# NumFlat

NumFlat is a numerical computation library written entirely in C#.

The goal of this project is to provide a lightweight package for handling various mathematical and computational tasks,
including linear algebra, multivariable analysis, clustering, and signal processing, using only C#.

C# has evolved in recent years. In addition to its long-standing support for operator overloading, it now includes features such as collection expressions, range-based indexing, and generic numeric types. With these capabilities, it should be possible to design a numerical computing library that offers a coding experience comparable to MATLAB or Python. However, no such library currently exists in the C# ecosystem. NumFlat was created to examine what such a library would look like in practice.

## Overview

NumFlat provides types named `Vec<T>` and `Mat<T>` for representing vectors and matrices.
These type names are intentionally chosen to avoid confusion with vector and matrix types (like `Vector<T>`) from the `System.Numerics` namespace.
Various linear algebra-related operations can be performed on these types through operator overloading and extension methods.

`Vec<T>` and `Mat<T>`…
