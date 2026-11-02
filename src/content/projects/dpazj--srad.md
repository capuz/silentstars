---
repo: "dpazj/srad"
name: "srad"
description: "A library for the Sparkplug IoT specification in Rust"
readmeQualityOk: true
url: "https://github.com/dpazj/srad"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["iot", "mqtt", "rust", "sparkplug", "sparkplug-b"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-03-06T21:50:52Z"
lastCommitAt: "2026-11-02T17:57:15Z"
lastReleaseAt: "2026-05-08T08:47:34Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 25
maintainers: ["dpazj"]
openGraphImageUrl: "https://opengraph.githubassets.com/5759b26d8d3394776411055c4fce0fec6b1d6e082dff7bb8c67b9209dc17ee2f/dpazj/srad"
---

# srad

`srad` is a [Sparkplug](https://sparkplug.eclipse.org/) library and development framework in Rust.

[crates-badge]: https://img.shields.io/crates/v/srad.svg
[crates-url]: https://crates.io/crates/srad
[mit-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]: https://github.com/dpazj/srad/blob/master/LICENSE-MIT
[apache-badge]: https://img.shields.io/badge/License-Apache_2.0-blue.svg
[apache-url]: https://github.com/dpazj/srad/blob/master/LICENSE-APACHE

Additional information for this crate can be found in the [docs][docs].

## Overview

`srad` aims to make it easy as possible to build reliable, fast, and resource efficient Sparkplug B Edge Nodes and Applications with minimal overhead.

Features include:

- **Data Type Support** - Support for Sparkplug data types including Array types, Property Sets and Templates
  - Template Derive macros provide code generation for template implementations
- **Compliance-focused APIs** - APIs designed to prevent non-conformance of the specification
- **Async Node and Application development frameworks** - Ready-to-use frameworks built using `tokio`, providing out-the-box compatibility, scalable implementations, and…
