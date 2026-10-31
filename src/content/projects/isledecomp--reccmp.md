---
repo: "isledecomp/reccmp"
name: "reccmp"
description: "Collection of decompilation tools."
readmeQualityOk: true
url: "https://github.com/isledecomp/reccmp"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 166
forks: 45
openIssues: 110
closedIssues: 114
watchers: 5
contributors: 22
recentReleases: 1
createdAt: "2024-10-17T15:51:34Z"
lastCommitAt: "2026-10-31T15:59:26Z"
lastReleaseAt: "2026-09-05T21:00:54Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 42
maintainers: ["disinvite", "dependabot[bot]", "jonschz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed7242b3a16a01e9fa910c4c6b80c966751aca0a2828df9a51934d44681836a0/isledecomp/reccmp"
---

# Reccmp Decompilation Toolchain

`reccmp` (recompilation compare) is a collection of tools for decompilation projects. It was born from the [decompilation of LEGO Island](https://github.com/isledecomp/isle). Functions and data are matched based on comments in the source code. For example:

```cpp
// FUNCTION: LEGO1 0x100b12c0
MxCore* MxObjectFactory::Create(const char* p_name)
{
  // implementation
}
```

This allows you to automatically verify the accuracy of functions, virtual tables, variable offsets and more. [Click to see the full syntax](https://github.com/isledecomp/reccmp/blob/HEAD/docs/annotations.md).

You can supplement the code annotations with metadata from CSV files. See the [instructions and syntax](https://github.com/isledecomp/reccmp/blob/HEAD/docs/csv.md).

At the moment, C++ compiled to 32-bit x86 with old versions of MSVC (like 4.20) is supported. Work on support for newer MSVC versions is in progress - testing and bug reports are greatly appreciated. Other compilers, languages and architectures are not supported at the moment, but feel free to contribute if you wish to do so!

## Getting started

### Installing / upgrading `reccmp`

1. (Recommended) Set up…
