---
repo: "jedisct1/rust-sparx"
name: "rust-sparx"
description: "SPARX block ciphers implementations for Rust."
readmeQualityOk: true
url: "https://github.com/jedisct1/rust-sparx"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cryptography", "crypto", "rust"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-02-15T01:32:57Z"
lastCommitAt: "2026-09-25T09:01:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 29
maintainers: ["jedisct1"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a7c67b44868b57c8b5c630a4d0fa6ead5f44a1bebf054eced082ed88fbc9b9/jedisct1/rust-sparx"
---

# SPARX block ciphers implementations for Rust

[SPARX](https://www.cryptolux.org/index.php/SPARX) is a family of lightweight block ciphers allowing small processors to securely encrypt information for a fraction of the cost a standard algorithm would require.

Due to the use of ARX operations, these block ciphers are inherently more secure against side-channel attacks than an S-Box-based cipher such as AES.

Furthermore, unlike all other ARX-based, which share those advantages, SPARX ciphers are the only ARX-based block ciphers for which bounds on the probability of differential and linear trails can be proved.

To sum up, SPARX has:
* the lightweightness and side-channel resilience of an ARX-based cipher,
* the security argument of an S-Box-based cipher, and
* a flexible structure easing implementation trade-offs.

# Usage

This crate implements SPARX-64/128 (64 bit block size, 128 bit key) in the `sparx64` module and SPARX-128/128 (128 bit block size, 128 bit key) in the `sparx128` module.

It doesn't require the Rust standard library.

## Encryption of a single block
```rust
let key: [u8; KEY_SIZE] = [0x11, 0x00, 0x33, 0x22, 0x55, 0x44, 0x77, 0x66, 0x99, 0x88, 0xbb,…
