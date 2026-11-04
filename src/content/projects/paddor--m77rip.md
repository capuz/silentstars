---
repo: "paddor/m77rip"
name: "m77rip"
description: "Fast, memory-safe Rust codec for the misa77 compression format"
readmeQualityOk: true
url: "https://github.com/paddor/m77rip"
homepage: "https://crates.io/crates/m77rip"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["compression", "rust", "simd", "misa77"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-16T22:28:38Z"
lastCommitAt: "2026-11-04T08:03:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 29
maintainers: ["paddor"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dae3200622ba49f448e5adba8966a9b5433b99ae387134c63d5434c99fee5db/paddor/m77rip"
---

# m77rip

Fast, memory-safe Rust encoder and decoder for the
[misa77](https://github.com/welcome-to-the-sunny-side/misa77) compression
format.

misa77 is an LZ-based codec optimized for write-once, read-many workloads.
It trades compression speed for extremely fast single-threaded decompression
(1.5-2x faster than LZ4) via a split-stream layout that separates control
tokens from literal data.

m77rip is safe Rust: every crate is `#![forbid(unsafe_code)]`. See
[SAFETY.md](https://github.com/paddor/m77rip/blob/HEAD/SAFETY.md).

## Usage

```rust
use m77rip::{compress, decompress};

let input = b"the quick brown fox jumps over the lazy dog, again and again!";
let compressed = compress(input);
let decompressed = decompress(&compressed, input.len()).unwrap();
assert_eq!(&decompressed, input);
```

For zero-allocation decompression into a caller-provided buffer:

```rust
use m77rip::{compress, decompress_into, decompressed_size};

let compressed = compress(b"hello world, hello world!");
let size = decompressed_size(&compressed).unwrap() as usize;
let mut buf = vec![0u8; size];
let written = decompress_into(&compressed, &mut buf).unwrap();
assert_eq!(written, size);
```

## Feature flags…
