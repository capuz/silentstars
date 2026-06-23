---
repo: "pellegre/libcrafter"
name: "libcrafter"
description: "A Rust library for constructing, sending, capturing, and decoding network packets"
url: "https://github.com/pellegre/libcrafter"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [65, 35]
stars: 312
forks: 87
openIssues: 0
closedIssues: 25
watchers: 30
contributors: 12
recentReleases: 1
createdAt: "2012-10-29T02:24:14Z"
lastCommitAt: "2026-06-23T23:16:51Z"
lastReleaseAt: "2026-06-22T00:54:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 41
maintainers: ["pellegre"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e72eae5f449ea2448b33aad572039f2bfe57b64e2f8d7d633f145ced4d8cd32/pellegre/libcrafter"
---

<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/pellegre/libcrafter/HEAD/docs/assets/libcrafter-lockup-dark.svg">
  </picture>
</h1>

`libcrafter` is a Rust workspace for packet-level network interaction. Its
public crate, `crafter`, lets agents and Rust tools build protocol-correct
packets, place them on real networks, decode what comes back, and act on what
they observe.

This README is a progressive walkthrough: build your first packet, inspect and
decode bytes, read and write pcap, plan a send, and reach for disposable
endpoints and labs when traffic cannot live on the developer machine. Every
snippet uses documentation address space (`192.0.2.0/24`, `198.51.100.0/24`,
`2001:db8::/32`) and offline or dry-run defaults; live traffic is always an
explicit opt-in.

## Your first packet

A `Packet` is a typed stack of layers. Build one with `/` composition, then
`compile()` to fill the dependent fields (lengths, protocol numbers, header
lengths, checksums) that you did not set yourself:

```rust
use crafter::prelude::*;
use std::net::Ipv4Addr;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let…
