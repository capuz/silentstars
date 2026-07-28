---
repo: "curtisalexander/readstat-rs"
name: "readstat-rs"
description: ":floppy_disk: Toolkit for SAS binary files; :crab: Rust integration with ReadStat C library"
readmeQualityOk: true
url: "https://github.com/curtisalexander/readstat-rs"
homepage: "https://curtisalexander.github.io/readstat-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["rust", "rust-ffi", "cli", "sas", "sas7bdat", "readstat", "wasm"]
stars: 29
forks: 7
openIssues: 2
closedIssues: 48
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2020-11-02T14:54:46Z"
lastCommitAt: "2026-07-28T14:56:21Z"
lastReleaseAt: "2021-04-12T23:07:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 65
maintainers: ["curtisalexander", "claude", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c0f02c32f7c67b8370e0397e1d402341d3d63dfa24db28a68e162c9085cceb0/curtisalexander/readstat-rs"
---

# readstat-rs
Read, inspect, and convert SAS binary (`.sas7bdat`) files &mdash; from [Rust code](https://github.com/curtisalexander/readstat-rs/blob/HEAD/crates/readstat/), the [command line](https://github.com/curtisalexander/readstat-rs/blob/HEAD/crates/readstat-cli/), or the [browser](https://github.com/curtisalexander/readstat-rs/blob/HEAD/crates/readstat-wasm/). Converts to CSV, Parquet, Feather, and NDJSON using Apache Arrow.

> The original use case was a command-line tool for converting SAS files, but the project has since expanded into a workspace of crates that can be used as a Rust library, a CLI, or compiled to WebAssembly for browser and JavaScript runtimes.

> :clapper: The demo above is generated from [`scripts/demo.sh`](https://github.com/curtisalexander/readstat-rs/blob/HEAD/scripts/demo.sh) and recorded with [`scripts/record-demo.sh`](https://github.com/curtisalexander/readstat-rs/blob/HEAD/scripts/record-demo.sh).

## :key: Dependencies
The command-line tool is developed in Rust and is only possible due to the following _**excellent**_ projects:
- The [ReadStat](https://github.com/WizardMac/ReadStat) C library developed by [Evan…
