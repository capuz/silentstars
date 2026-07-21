---
repo: "LIHPC-Computational-Geometry/honeycomb"
name: "honeycomb"
description: "Combinatorial maps implementation for meshing applications"
readmeQualityOk: true
url: "https://github.com/LIHPC-Computational-Geometry/honeycomb"
homepage: "https://lihpc-computational-geometry.github.io/honeycomb/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 12
forks: 4
openIssues: 1
closedIssues: 32
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-02-06T08:10:25Z"
lastCommitAt: "2026-07-21T06:12:42Z"
lastReleaseAt: "2024-08-30T07:53:55Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 72
maintainers: ["imrn99", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ba241dd6c149c354224266addeb892c56148b70e6b67b4f0169d6590b9db86/LIHPC-Computational-Geometry/honeycomb"
discussionCount: 4
---

# Honeycomb

Honeycomb aims to provide a safe, efficient and scalable implementation of combinatorial maps for meshing applications.
More specifically, the goal is to converge towards a (or multiple) structure(s) adapted to algorithms exploiting GPUs
and many-core architectures.

The current objective is to profile and benchmark performance of our structure in the context of our
kernels' implementations, and start introducing concurrency into our code.

## Quickstart

You can add `honeycomb` as a dependency of your project by adding the following lines to its `Cargo.toml`:

```toml
# [dependencies]
honeycomb = {
  git = "https://github.com/LIHPC-Computational-Geometry/honeycomb",
  tag = "0.11.0" # remove tag for master branch build
}
```

Alternatively, you can add the sub-crates that are currently published on crates.io:

```toml
# [dependencies]
honeycomb-core    = "0.11.0"
honeycomb-kernels = "0.11.0"
honeycomb-render  = "0.11.0"
```

## Project content

### Rust

The content of each member is described in their respective Rust Doc as well as in the [user guide][UGW]. The following
crates are published:

- [][CIOHC] [][DOCHC]
  core structures
- [][CIOHK] [][DOCHK]
  meshing…
