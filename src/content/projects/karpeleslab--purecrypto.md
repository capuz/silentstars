---
repo: "KarpelesLab/purecrypto"
name: "purecrypto"
description: "A pure-Rust, no_std cryptography toolkit: constant-time primitives, classical & post-quantum public-key, X.509, and the TLS/DTLS/QUIC stack — no foreign code, no C dependencies."
readmeQualityOk: true
url: "https://github.com/KarpelesLab/purecrypto"
homepage: "https://docs.rs/purecrypto"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["constant-time", "crypto", "cryptography", "no-std", "post-quantum-cryptography", "pure-rust", "rust", "tls", "x509"]
stars: 6
forks: 0
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-25T12:59:56Z"
lastCommitAt: "2026-10-29T12:19:26Z"
lastReleaseAt: "2026-05-27T12:31:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 52
maintainers: ["MagicalTux"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e3560d015794c4eaa5d89f3dff559bb5d93c9c222fec318c79816b596a4313/KarpelesLab/purecrypto"
fundingLinks: ["GITHUB:https://github.com/MagicalTux"]
---

# purecrypto

A cryptography toolkit written **entirely in Rust**, with no foreign code.
It is built from the ground up, from constant-time primitives through
hashing, ciphers, bignum arithmetic, the classical and post-quantum
asymmetric stacks, ASN.1, X.509, TLS, DTLS and QUIC, and it is usable three
ways:

- as a **Rust library** (`no_std` core, every layer feature-gated),
- as a **C library** (`cdylib` / `staticlib` with a C ABI, also compiled to
  WebAssembly), and
- as a **command-line tool** (`purecrypto`: hashing, key generation
  including post-quantum, CSRs, a small CA, TLS / DTLS / QUIC test clients
  and servers).

It has OpenSSL-like breadth, but unlike a monolithic binary dependency an
application compiles in only the parts it needs.

## Quick start

Rust:

```rust
use purecrypto::hash::{Digest, Sha256};
use purecrypto::ec::Ed25519PrivateKey;
use purecrypto::mlkem::MlKem768DecapsKey;
use purecrypto::rng::OsRng;

let digest = Sha256::digest(b"abc");

let sk = Ed25519PrivateKey::generate(&mut OsRng);
let sig = sk.sign(b"hello");
sk.public_key().verify(b"hello", &sig).unwrap();

let (dk, ek) = MlKem768DecapsKey::generate(&mut OsRng);
let (ct, ss_a) = ek.encapsulate(&mut…
