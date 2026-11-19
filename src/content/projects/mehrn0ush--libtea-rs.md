---
repo: "Mehrn0ush/libtea-rs"
name: "libtea-rs"
description: "Independent Rust consumer client and CLI for the Transparency Exchange API (TEA)"
readmeQualityOk: true
url: "https://github.com/Mehrn0ush/libtea-rs"
homepage: "https://github.com/Mehrn0ush/libtea-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["sbom", "tea", "transparency-exchange-api", "cyclonedx", "devsecops", "rust", "supply-chain-security"]
stars: 5
forks: 1
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-10T14:28:53Z"
lastCommitAt: "2026-11-19T11:55:11Z"
lastReleaseAt: "2026-11-19T10:58:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 64
maintainers: ["Mehrn0ush", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/093000092c57190541938b0dbc077dd470097305c8f71a01e1de18fd12e99057/Mehrn0ush/libtea-rs"
---

# libtea-rs

Independent Rust client libraries and a command-line tool for the [Transparency Exchange API](https://github.com/CycloneDX/transparency-exchange-api) (TEA).

**Status:** 0.1.7. Releases 0.1.1 to 0.1.4 changed only documentation, CI and the GitHub Action; 0.1.5 added `libtea_client::core`, a re-export of `libtea-core`; 0.1.6 fixed a panic in `libtea_core::http_cache::parse_retry_after` and updated internal dependencies; 0.1.7 adds Package URL parsing and comparison (`libtea_core::purl`), version ranges and CLE lifecycle evaluation for SemVer (`libtea_core::vers`, `libtea_core::lifecycle`), and signature format detection (`libtea_core::signature_format`, all Experimental), and fixes lost cache entries when several clients share a cache directory. Supported TEA versions, Rust versions and platforms, and how each is tested: [`docs/compatibility.md`](https://github.com/Mehrn0ush/libtea-rs/blob/HEAD/docs/compatibility.md). `libtea-core` and `libtea-client` are on crates.io and the `libtea` binaries are on GitHub Releases. Experimental until 0.9: expect breaking changes before 1.0.
