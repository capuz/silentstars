---
repo: "apache/reqsign"
name: "reqsign"
description: "Apache Reqsign: Signing HTTP requests without heavy SDKs."
readmeQualityOk: true
url: "https://github.com/apache/reqsign"
homepage: "https://reqsign.apache.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["azblob", "gcs", "rust", "s3"]
stars: 180
forks: 84
openIssues: 3
closedIssues: 147
watchers: 3
contributors: 64
recentReleases: 0
createdAt: "2022-03-12T11:58:40Z"
lastCommitAt: "2026-11-22T01:52:40Z"
lastReleaseAt: "2022-08-16T11:24:49Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 97
undervaluedScore: 48
maintainers: ["Xuanwo", "dependabot[bot]", "tisonkun"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f8e653fe211b4a9d5d4db9c866a7a93b796de17046bc3cc0510cb9bf7ef555/apache/reqsign"
discussionCount: 100
---

# Apache Reqsign

[Build Status]: https://img.shields.io/github/actions/workflow/status/apache/reqsign/ci.yml?branch=main
[actions]: https://github.com/apache/reqsign/actions?query=branch%3Amain
[Latest Version]: https://img.shields.io/crates/v/reqsign.svg
[crates.io]: https://crates.io/crates/reqsign
[Crate Downloads]: https://img.shields.io/crates/d/reqsign.svg

Signing API requests without effort.

---

Most APIs are simple, but they can become complicated when hidden behind complex abstractions. `reqsign` brings the simple API back: build, sign, send.

## Quick Start

### Option 1: Use Default Signer (Recommended)

The simplest way to use `reqsign` is with the default signers provided by each service:
