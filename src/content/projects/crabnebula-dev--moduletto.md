---
repo: "crabnebula-dev/moduletto"
name: "moduletto"
description: "Pretty Fast Modulus Math on Arm with Rust"
readmeQualityOk: true
url: "https://github.com/crabnebula-dev/moduletto"
language: "Rust"
languages: ["Rust", "Rocq Prover"]
languagePcts: [65, 21]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-01T16:30:13Z"
lastCommitAt: "2026-09-03T08:13:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 11
maintainers: ["denjell-crabnebula"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a82e4c652b6fdca61af5f2fc8e5d4fdae23ea62728a50223a21ae2ce9f7742/crabnebula-dev/moduletto"
---

# Moduletto Native Smart

Optimized rust-based modular arithmetic and NTT for lattice cryptography. Includes a full Kyber-512 (ML-KEM-512) implementation with ARM64 NEON-accelerated int16 NTT in constant time, as WASM, and with optional no_std.

## Conformance

The Kyber-512 implementation in `examples/kyber_benchmark.rs` is validated against
the **official NIST ACVP known-answer tests for ML-KEM-512 (FIPS 203)** —
60 cases covering all three operations:

| Operation | Cases | Checks |
|-----------|------:|--------|
| `keyGen` (AFT) | 25 | `(d, z)` → encapsulation and decapsulation keys, byte for byte |
| `encapsulation` (AFT) | 25 | `(ek, m)` → ciphertext and shared secret |
| `decapsulation` (VAL) | 10 | `(dk, c)` → shared secret, including modified-ciphertext cases that must yield the implicit-rejection key |

Vectors are in [tests/kat/](https://github.com/crabnebula-dev/moduletto/blob/HEAD/tests/kat/), extracted verbatim from
[usnistgov/ACVP-Server](https://github.com/usnistgov/ACVP-Server). The harness runs
on every `cargo run --release --example kyber_benchmark` and exits non-zero on any
mismatch.

All three backends are validated — 180 cases per run — through a shared…
