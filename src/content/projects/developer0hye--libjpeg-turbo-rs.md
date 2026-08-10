---
repo: "developer0hye/libjpeg-turbo-rs"
name: "libjpeg-turbo-rs"
description: "Rust port of libjpeg-turbo with equivalent or better performance"
readmeQualityOk: true
url: "https://github.com/developer0hye/libjpeg-turbo-rs"
homepage: "https://docs.rs/libjpeg-turbo-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["jpeg", "libjpeg", "libjpeg-turbo", "image-processing", "jpeg-decoder", "jpeg-encoder", "no-std", "rust", "simd", "wasm"]
stars: 6
forks: 2
openIssues: 16
closedIssues: 90
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-03-20T14:48:15Z"
lastCommitAt: "2026-08-10T05:04:45Z"
lastReleaseAt: "2026-07-28T15:31:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 69
maintainers: ["developer0hye"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cdf682bbe1116eb26c0d0c5173d62de3098cd3c13244933ad74c8793b4cae4a/developer0hye/libjpeg-turbo-rs"
discussionCount: 2
---

# libjpeg-turbo-rs

Pure-Rust reimplementation of [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) with NEON/AVX2/SSE2/WASM-SIMD128 acceleration. No C dependencies, no FFI to a C codec, `no_std`-capable — and byte-for-byte cross-validated against C libjpeg-turbo in CI.

> **Safety status.** "No C dependencies" is not "no unsafe code" — the SIMD kernels are `unsafe`, and the boundary between them and the safe API is under audit (P4-135..P4-139 in [`docs/LAST_MILE.md`](https://github.com/developer0hye/libjpeg-turbo-rs/blob/HEAD/docs/LAST_MILE.md)). Until those close this project makes **no memory-safety guarantee** and no unqualified drop-in-replacement claim.
>
> **C compatibility tiers.** **TurboJPEG 3 is the primary target.** The classic libjpeg leg targets the **v8 identity only** (`libjpeg.so.8`) and is experimental; **v6b (`libjpeg.so.62`) and v7 are explicit non-goals** — their struct layouts differ, so substituting this library for them corrupts memory rather than merely failing.

```sh
cargo add libjpeg-turbo-rs
```

```rust
use libjpeg_turbo_rs::{compress, decompress_to, PixelFormat, Subsampling};

let image = decompress_to(&jpeg_bytes, PixelFormat::Rgb)?;…
