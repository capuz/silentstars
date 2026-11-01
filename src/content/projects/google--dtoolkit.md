---
repo: "google/dtoolkit"
name: "dtoolkit"
description: "A Rust library for parsing and manipulating Flattened Device Tree (FDT) blobs."
readmeQualityOk: true
url: "https://github.com/google/dtoolkit"
homepage: "https://crates.io/crates/dtoolkit"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["device-tree", "parser", "rust"]
stars: 20
forks: 5
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 11
recentReleases: 2
createdAt: "2025-11-21T08:25:39Z"
lastCommitAt: "2026-11-01T22:58:13Z"
lastReleaseAt: "2026-09-25T11:00:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 60
maintainers: ["m4tx", "dependabot[bot]", "anjandhumalrao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e119581185c3dd85bda72b99d4150e4f486e9432d9674df935dcaf3a1fd301fd/google/dtoolkit"
---

# dtoolkit

A library for parsing and manipulating Flattened Device Tree (FDT) blobs.

This library provides a comprehensive API for working with FDTs, including:

- An in-place API for parsing, traversing, and modifying FDTs without memory
  allocation.
- An intermediate representation API for creating and modifying FDTs using
  computationally efficient data structures.
- Support for applying device tree overlays.
- Outputting device trees in DTS source format.

The library is written purely in Rust and is `#![no_std]` compatible. If
you don't need the Device Tree manipulation functionality, the library is
also no-`alloc`-compatible.

## Getting Started

Real-world examples of how to use the library, including parsing, editing
in-place, and applying device tree overlays, can be found in the
[API documentation](https://docs.rs/dtoolkit).

## License

This software is distributed under the terms of both the MIT license and the
Apache License (Version 2.0).

See LICENSE for details.

## Contributing

If you want to contribute to the project, see details of
[how we accept contributions](https://github.com/google/dtoolkit/blob/HEAD/CONTRIBUTING.md).

## Fuzzing

Fuzzing helps prevent…
