---
repo: "Deln0r/loro-go"
name: "loro-go"
description: "Pure-Go implementation of the Loro CRDT wire format, no cgo. Listed in the official Loro docs."
readmeQualityOk: true
url: "https://github.com/Deln0r/loro-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-06-07T10:49:29Z"
lastCommitAt: "2026-08-24T04:22:55Z"
lastReleaseAt: "2026-06-07T10:50:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["Deln0r", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fa72bc2f4671c36ae75770188a47e2ad10d98806f82f0cb7906f39d431e3a75/Deln0r/loro-go"
---

# loro-go

A pure-Go library for the [Loro](https://github.com/loro-dev/loro) CRDT wire format.

loro-go reads and writes the Loro **Fast** wire format (`FastUpdates` and `FastSnapshot`) byte-for-byte, and reconstructs document state for Map, List, Text, MovableList, Tree and Counter containers. No cgo, single Go toolchain build.

Bytes are verified against two independent ground truths: real `loro-crdt@1.14.1` exports, and the `serde_columnar@0.3.14` crate (golden column vectors emitted by a small Rust harness). A blob produced by loro-go imports cleanly into the canonical `loro-crdt` JavaScript package with matching `toJSON()`, checked on every CI run. Upstream minors are re-checked against the committed fixtures; see [COMPAT.md](https://github.com/Deln0r/loro-go/blob/HEAD/COMPAT.md) (1.14.1: byte-identical).

loro-go is listed in the official [Loro documentation](https://loro.dev/docs/tutorial/get_started) as the pure-Go community implementation.

> Not affiliated with loro-dev. Loro is a separate project; this is an independent Go reading of its wire format.

> **Mirror.** Primary repository is [github.com/Deln0r/loro-go](https://github.com/Deln0r/loro-go); an EU-hosted mirror…
