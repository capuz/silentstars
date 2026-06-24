---
repo: "trailofbits/rfc3161-client"
name: "rfc3161-client"
description: "An Opinionated Python RFC3161 Client"
url: "https://github.com/trailofbits/rfc3161-client"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 45]
topics: ["rfc3161", "timestamp-protocol"]
stars: 7
forks: 4
openIssues: 2
closedIssues: 15
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2024-09-23T12:58:42Z"
lastCommitAt: "2026-06-24T06:39:09Z"
lastReleaseAt: "2025-03-26T08:12:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 75
maintainers: ["dependabot[bot]", "DarkaMaul", "facutuesca"]
openGraphImageUrl: "https://opengraph.githubassets.com/2538d57e20c42c831a1e49b63990615533fb27e3f3665e3cb3f7b86e3bb110fe/trailofbits/rfc3161-client"
---

# `rfc3161-client`

`rfc3161-client` is a Python library implementing the Time-Stamp Protocol (TSP)
described in [RFC 3161](https://www.ietf.org/rfc/rfc3161.txt).

It is composed of three subprojects:

- [:crab: tsp-asn1](./rust/tsp-asn1/Cargo.toml): A Rust crate using
  [`rust-asn1`](https://docs.rs/asn1/latest/asn1/index.html) to create the
  types used by the Time-Stamp protocol. This crate depends on `rust-asn1`
  and `cryptography` to minimize the amount of duplicated code. While
  it is usable as a standalone crate, this is not officially supported. Drop
  us a message if you are interested in using it.
- [:crab: rfc3161-client](./rust/Cargo.toml): Another Rust crate that
  provides Python bindings to the `tsp-asn1` crate using PyO3.
- [:snake: rfc3161-client](./pyproject.toml) A Python library using the
  crate above to provide a usable API to create Timestamp Request and read
  Timestamp Response.

# Goals and anti-goals

- This library should be correct and provide an accurate implementation of
  protocol described in the RFC 3161.
- This library does not perform any network activity, it simply provides
  primitive to build and verify objects. Network activity must be…
