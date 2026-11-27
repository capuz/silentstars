---
repo: "paddor/zrip"
name: "zrip"
description: "Fast, memory-safe Rust zstd codec with all-level decode, -7..4 encode, and dictionary training."
readmeQualityOk: true
url: "https://github.com/paddor/zrip"
homepage: "https://crates.io/crates/zrip"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["compression", "rust", "zstd", "simd"]
stars: 117
forks: 9
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-13T01:32:17Z"
lastCommitAt: "2026-11-27T16:30:53Z"
lastReleaseAt: "2026-07-28T21:53:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 34
maintainers: ["paddor", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/523322e2277f6c2622fe6ac0783a47a86cf5d2ab5e0db6f2ee121341bbee4475/paddor/zrip"
---

# zrip

Pure Rust zstd codec. The decoder reads standard zstd blocks and frames
produced at any zstd compression level. The encoder supports levels -7 through
4 for fast transfer pipelines. First-class dictionary support.

## Why zrip

- **Speed.** Negative levels beat C zstd's speed at the same ratio on most
  files. See [Performance](#performance).
- **Small inputs.** Tuned for hot loops of small messages. On 512 B to 8 KiB
  inputs, round trips beat C zstd at every level. See
  [Performance](#performance).
- **No `unsafe`.** Every zrip crate is `#![forbid(unsafe_code)]`. The
  default `simd` feature adds `fearless_simd`, which uses `unsafe` inside;
  `default-features = false` without `simd` builds with no `unsafe` at all.
  See [SAFETY.md](https://github.com/paddor/zrip/blob/HEAD/SAFETY.md).
- **Small.** About 15k lines of Rust. No levels above 4; their extra ratio
  matters for storage, not transfers.
- **Dictionaries.** Built-in FastCOVER training.
- **Push API.** Sans-io `PushEncoder` and `PushDecoder` for async codecs and
  protocol stacks. See [Push](#push-sans-io).
- **Adaptive level.** Picks the level at run time from what limits the
  transfer: output, CPU, or input.
