---
repo: "eureka-0/pygnss-tec"
name: "pygnss-tec"
description: "A Python package for GNSS RINEX file reading and total electron content (TEC) calculation with Rust-accelerated performance."
readmeQualityOk: true
url: "https://github.com/eureka-0/pygnss-tec"
homepage: "https://eureka-0.github.io/pygnss-tec/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [76, 24]
topics: ["gnss", "ionosphere", "python-library", "rust", "total-electron-content"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-21T07:27:20Z"
lastCommitAt: "2026-10-17T07:58:34Z"
lastReleaseAt: "2026-05-07T10:30:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["eureka-0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96659a2453d07691680b86feaf73aad686318e9a2af2ce4396a14bbe171c6e3d/eureka-0/pygnss-tec"
---

# PyGNSS-TEC

PyGNSS-TEC is a high-performance Python package leveraging Rust acceleration, designed for calculating and processing Total Electron Content (TEC) data from Global Navigation Satellite System (GNSS) observations.
The package provides tools for RINEX file reading, TEC calculation, and DCB correction to support ionospheric studies.

> **Warning**: This package is under active development and may undergo significant changes. It is not recommended for production use until it reaches a stable release (v1.0.0).

## Features

- **High-Performance**: Efficiently read GNSS RINEX files using [rinex crate](https://crates.io/crates/rinex), calculate and calibrate TEC from dual-frequency GNSS observations using Rust and [polars](https://pola.rs/) lazy evaluation (see [benchmarks](https://github.com/eureka-0/pygnss-tec/blob/main/benchmarks/benchmark.md)).
- **Multiple File Formats**: Support for RINEX versions 2.x and 3.x, as well as Hatanaka compressed files (e.g., .rnx, .crx, .crx.gz).
- **Multi-GNSS Support**: Process observations from multiple GNSS constellations (see [Overview](#overview) for constellation support).
- **Open-Source**: Fully open-source under the MIT License,…
