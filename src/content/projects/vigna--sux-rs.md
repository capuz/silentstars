---
repo: "vigna/sux-rs"
name: "sux-rs"
description: "Rust implementations of succinct data structures"
readmeQualityOk: true
url: "https://github.com/vigna/sux-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 80
forks: 10
openIssues: 4
closedIssues: 55
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2023-05-02T09:49:39Z"
lastCommitAt: "2026-10-26T09:17:49Z"
lastReleaseAt: "2025-01-30T21:45:00Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 42
maintainers: ["vigna", "zommiommy"]
openGraphImageUrl: "https://opengraph.githubassets.com/93f2f73b0a44501549dfdefe4439006241548170d61c52a2d17789f90219f47a/vigna/sux-rs"
---

# `sux`

A pure Rust implementation of succinct and compressed data structures.

This crate started as part of the [Sux] project; it contains also code ported
from [the DSI Utilities] and new structures.

## Highlights

- Support for 32-bit and 64-bit architectures;
- [bit vectors and bit-field vectors];
- several structures for [rank and selection] with different tradeoffs;
- [indexed dictionaries][`dict`], including an implementation of the popular [Elias–Fano
  representation of monotone sequences], and [lists of strings compressed by
  prefix omission].
- new state-of-the-art structures for [static functions] and [static filters],
  scaling to trillions of keys, and providing very fast queries; small key
  sets are solved by augmented peeling, a transposed form of the inactivation
  decoding of [Raptor codes];
- [compressed static functions], which store values using a prefix-free code,
  and [two-step static functions], which handle frequent values separately:
  both use less space when the distribution of values is skewed;
- a [minimal perfect hash function] with very fast construction and queries,
  using less than two bits per key;
- [monotone minimal perfect hash…
