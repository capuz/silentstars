---
repo: "orieg/expanse"
name: "expanse"
description: "256-ary radix trie and Judy arrays in Rust — drop-in libjudy C ABI, MIT/Apache-2.0"
readmeQualityOk: true
url: "https://github.com/orieg/expanse"
homepage: "https://orieg.github.io/expanse/"
language: "C"
languages: ["C", "Rust"]
languagePcts: [49, 32]
topics: ["data-structures", "radix-tree", "rust", "trie", "judy-array", "c-api", "embedded", "ffi", "judy", "key-value-store"]
stars: 5
forks: 0
openIssues: 48
closedIssues: 330
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-18T06:22:45Z"
lastCommitAt: "2026-11-24T00:59:40Z"
lastReleaseAt: "2026-09-24T04:21:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 66
maintainers: ["orieg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/865b25a21b078b549f1061d8d018bcf2faab65f4866237c0a49972c11257ff6e/orieg/expanse"
---

# Expanse

A **clean-room, pure-Rust implementation of Judy arrays**, modernized for modern 64-bit and 32-bit embedded microarchitectures, with **`libexpanse` — a high-performance, drop-in C ABI replacement for `libjudy`**.

Judy arrays (invented by Doug Baskins at Hewlett-Packard, ~2002) are sparse, dynamic associative structures built as 256-ary digital tries partitioned by **expanse** (decoding keys byte by byte over fixed digit ranges) rather than by population like comparison-based trees. Their speed comes from adaptive node compression — linear, bitmap, and uncompressed branches; linear and bitmap leaves; keys stored immediately inside pointers — tuned to keep every node traversal within a few cache-line fills.

**Jump to:** [Install](#install) · [Key features](#key-features) · [Benchmarks](#comparative-performance-vs-industry-primitives) · [Quick starts by language](#distribution--quick-start) · [Platforms](#platform-support) · [Packaging guide](https://github.com/orieg/expanse/blob/HEAD/docs/PACKAGING.md)

---

## Install

The C library (`libexpanse`, headers, man pages, and the `libJudy` drop-in links):
