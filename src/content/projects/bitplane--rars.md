---
repo: "bitplane/rars"
name: "rars"
description: "RAR implementation in Rust"
readmeQualityOk: true
url: "https://github.com/bitplane/rars"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 64
forks: 5
openIssues: 1
closedIssues: 7
watchers: 3
contributors: 4
recentReleases: 8
createdAt: "2026-04-28T06:15:10Z"
lastCommitAt: "2026-07-19T06:09:13Z"
lastReleaseAt: "2026-07-09T07:06:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["bitplane", "egorsmkv", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/41506071a6f8132fc9d9589f6f3af7017b4594e10f89ae786ea5f47bb6fd0d99/bitplane/rars"
---

# rars

A Rust implementation of RAR.

* [🏠 home](https://bitplane.net/dev/rust/rars)
  * [🪵 blog](https://bitplane.net/log/2026/05/rars/)
* [🦀 crate](https://crates.io/crates/rars)
* [🐱 source](https://github.com/bitplane/rars)
* [📃 spec](https://github.com/bitplane/rar-research)

## Current Status

`rars` covers the RAR lineage from early `RE~^` archives through RAR 7,
compression and decompression. It's not fast, but it works. ish.

## Rust API

Use the `rars` crate for Rust applications and libraries. Since 0.4, the
lower-level `rars-format`, `rars-codec`, `rars-crypto`, `rars-crc32`, and
`rars-recovery` crates are folded into `rars`; those standalone crates ended at
0.3.x. Applications should depend on `rars`, and command-line installs should
use `rars-cli`.

## CLI

Inspect, test, and extract archives:

```sh
rars info archive.rar
rars test archive.rar
rars x archive.rar out/
```

Create archives with specific RAR generation:

```sh
rars a --format rar29 archive.rar files...
rars a --format rar50 --solid --auto-filter archive.rar files...
rars a --format rar70 --store --volume-size 10m archive.part1.rar files...
```

The writer supports stored and compressed members,…
