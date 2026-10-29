---
repo: "userFRM/ThetaDataDx"
name: "ThetaDataDx"
description: "Market data SDKs for ThetaData — Rust, Python, TypeScript, and C++. Historical, real-time streaming, and bulk flat-file access through one authenticated client. No JVM, no local terminal."
readmeQualityOk: true
url: "https://github.com/userFRM/ThetaDataDx"
homepage: "https://userfrm.github.io/ThetaDataDx/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["finance", "historical-data", "market-data", "options", "python", "real-time", "rust", "streaming", "thetadata", "tick-data"]
stars: 30
forks: 7
openIssues: 17
closedIssues: 495
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-03-26T07:18:36Z"
lastCommitAt: "2026-10-29T21:23:55Z"
lastReleaseAt: "2026-10-23T21:13:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 55
maintainers: ["userFRM", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2beb3e792f8d1135ba3c9ec50ea4cb71013b210cabe432312adb6df457bfb5bc/userFRM/ThetaDataDx"
---

> [!IMPORTANT]
> **The SDK now ships under per-language package names, starting fresh at `0.1.0`:** `thetadatadx-rs` (crates.io), `thetadatadx-py` (PyPI), `thetadatadx-ts` (npm), and the in-repo `thetadatadx-cpp`. The API and import surface are unchanged: only the package names and the version differ. Install the packages below.

# ThetaDataDx

High-performance market-data SDKs for [ThetaData](https://thetadata.us), in **Python, TypeScript, C++, and Rust**. One Rust engine under all four. Pull US stock, option, index, and rate data three ways: point-in-time **history**, real-time **streaming**, and whole-universe **flat files**, all from a single authenticated client. Connects straight to ThetaData, with nothing to install and run locally.

> [!IMPORTANT]
> A valid [ThetaData](https://thetadata.us) subscription is required. The SDK
> authenticates against ThetaData's Nexus API using your account credentials.

## Features

- **Complete coverage**: stocks, options, indices, and rates across 81 typed endpoints.
- **Three access modes, one client**: point-in-time history, real-time streaming, and bulk flat-file downloads.
- **DataFrames built in**: every result chains straight to…
