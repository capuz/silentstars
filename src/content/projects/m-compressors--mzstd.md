---
repo: "M-Compressors/mzstd"
name: "mzstd"
description: "Zstandard (RFC 8878) rewritten in 100% safe Rust, byte-identical where applicable, but with a Rust-native API, SIMD, compression + decompression, no_std and modern parallelism."
readmeQualityOk: true
url: "https://github.com/M-Compressors/mzstd"
homepage: "https://crates.io/crates/mzstd"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["compression", "decoder", "decompression", "encoder", "rust", "rust-crate", "rust-library", "zstd", "zstd-alternative", "zstd-compression"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-13T09:49:17Z"
lastCommitAt: "2026-10-30T11:03:51Z"
lastReleaseAt: "2026-10-20T13:35:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Mnwa", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42be886dee4a115192b37c917b2949a673be12865e55f9a3be7ff8036b2a5734/M-Compressors/mzstd"
---

# mzstd

Zstandard (RFC 8878) compression and decompression in safe Rust.

- **Byte-identical encoder.** For the same input and parameters,
  single-threaded compression writes exactly the bytes of zstd 1.5.7:
  one-shot calls match `ZSTD_compress2`, and sessions match
  `ZSTD_compressStream2` driven with the same chunks, output capacities and
  flushes. This holds for levels -131072 to 22, the explicit compression
  parameters, long distance matching, checksums, content sizes, pledged sizes,
  size hints and dictionaries (raw or Zstandard-format, as
  `ZSTD_CCtx_loadDictionary` loads them).
- **Independent decoder** written from the format specification. It decodes
  every frame zstd writes, with or without a dictionary, with bounded window,
  input and output limits.
- **Parallel compression** with tasks you run on your own executor. Frames
  are valid Zstandard frames and are identical for any task count, but they
  are not byte-identical to zstd's multithreaded mode. Segments are primed
  with the input before them the way zstd's multithreaded mode primes a job.
- **No `unsafe`, no dependencies on zstd.** It runs with `no_std` + `alloc`,
  and there is a C ABI, one-shot and…
