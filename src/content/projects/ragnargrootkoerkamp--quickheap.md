---
repo: "RagnarGrootKoerkamp/quickheap"
name: "quickheap"
description: "The fastest priority queue"
readmeQualityOk: true
url: "https://github.com/RagnarGrootKoerkamp/quickheap"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["data-structure", "heap", "priority-queue", "simd"]
stars: 48
forks: 6
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-08-10T23:19:21Z"
lastCommitAt: "2026-11-10T11:38:39Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 44
maintainers: ["JohannesBreitling", "RagnarGrootKoerkamp"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a6211a4d4a66536fa5152af00c124938d7a41b5e6db7c0cca90249476b27d8/RagnarGrootKoerkamp/quickheap"
---

# SimdQuickHeap: A fast SIMD-based priority queue

The SimdQuickHeap is, as the name suggests, a **fast priority queue**.
It has some similarities to QuickSelect, and uses SIMD for fast partitioning and
insertion of elements.

Unlike the classic binary heap (and $d$-ary heap variants), it is I/O-efficient
and **does not suffer from bad cache-locality** when the size of the queue exceeds
the cache.

Currently, it only supports `i32`, `u32`, `i64`, and `u64` keys and key-value pairs and requires
either AVX2, AVX-512, or NEON for SIMD acceleration, so build using e.g.:

```sh
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

See the paper for details and benchmarks:

> SimdQuickHeap: The QuickHeap Reconsidered  
> Johannes Breitling, Ragnar Groot Koerkamp, Marvin Williams, ESA 2026  
> https://doi.org/10.4230/LIPIcs.ESA.2026.16

An older blog post can be found [here](https://curiouscoding.nl/posts/quickheap).
See also the [recording](https://www.youtube.com/watch?v=kdMsdFybWV0) and 
[slides](https://curiouscoding.nl/slides/simdquickheap.pdf) of the P99 talk.

## Example

``` sh
cargo add quickheap
```

```rust
let mut q = quickheap::SimdQuickHeap::<u64>::default();…
