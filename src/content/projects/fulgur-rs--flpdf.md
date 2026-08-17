---
repo: "fulgur-rs/flpdf"
name: "flpdf"
description: "A Pure Rust PDF reader/writer library and CLI, modeled on qpdf."
readmeQualityOk: true
url: "https://github.com/fulgur-rs/flpdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["fulgur", "pdf", "pdf-toolkit", "qpdf", "rust"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-05-08T22:39:44Z"
lastCommitAt: "2026-08-17T04:19:06Z"
lastReleaseAt: "2026-07-10T15:50:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["mitsuru"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcd147214c868e74640b80a4352f92a043e36778df8fc8dfde4c369bc5e6e8f6/fulgur-rs/flpdf"
---

# flpdf

A Pure Rust PDF toolkit modeled on the [qpdf](https://github.com/qpdf/qpdf)
workflow. flpdf aims for writer-level parity with qpdf — its outputs are
continuously compared against qpdf reference outputs through a golden matrix
(see [`docs/qpdf-compat.md`](https://github.com/fulgur-rs/flpdf/blob/HEAD/docs/qpdf-compat.md)).

## Workspace layout

This repository is a Cargo workspace with two crates:

| Crate | Path | Purpose |
| --- | --- | --- |
| `flpdf` | `crates/flpdf` | Core PDF reader / writer library. |
| `flpdf-cli` | `crates/flpdf-cli` | CLI (`flpdf` binary) that wraps the library. |

Both crates are licensed under `MIT OR Apache-2.0`.

## Building

```bash
cargo build --workspace
cargo test  --workspace
```

The default build is Pure Rust; flpdf depends on `flate2` without pinning a
backend, so `cargo build` resolves to flate2's default (`miniz_oxide`).

### Choosing a DEFLATE backend (downstream consumers)

flpdf does **not** re-export flate2's backend features (`zlib-rs`, `zlib`,
`zlib-ng`, …) as its own features. A downstream crate that wants a specific
backend adds `flate2` as a direct dependency and enables the feature there;
Cargo's feature unification applies…
