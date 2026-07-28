---
repo: "symbolicsoft/hpke-ng"
name: "hpke-ng"
description: "Faster, Smaller, Harder HPKE for Rust"
readmeQualityOk: true
url: "https://github.com/symbolicsoft/hpke-ng"
homepage: "https://symbolic.software/blog/2026-05-08-hpke-ng/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["crypto", "cryptography", "hpke", "rust"]
stars: 27
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-05-07T21:31:55Z"
lastCommitAt: "2026-07-28T15:00:40Z"
lastReleaseAt: "2026-07-28T08:09:18Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["nadimkobeissi", "danieldia-dev", "10d9e"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebdd84283737050d3d723c7f2f37b864159fd6d42a9188a67f35a55e874f0fdd/symbolicsoft/hpke-ng"
---

# hpke-ng

A clean-slate Rust implementation of [HPKE (RFC 9180)](https://www.rfc-editor.org/rfc/rfc9180.html) with type-driven ciphersuite selection.

> Read the announcement: **[hpke-ng: Faster, Smaller, Harder HPKE for Rust](https://symbolic.software/blog/2026-05-08-hpke-ng/)** — for the full design rationale, benchmarks, and migration notes.

```rust
use hpke_ng::*;
use rand::rngs::SysRng;
use rand_core::UnwrapErr;

type Suite = Hpke<DhKemX25519HkdfSha256, HkdfSha256, ChaCha20Poly1305>;

let mut os = SysRng;
let mut rng = UnwrapErr(&mut os);
let (sk_r, pk_r) = DhKemX25519HkdfSha256::generate(&mut rng)?;
let (enc, ct)  = Suite::seal_base(&mut rng, &pk_r, b"info", b"aad", b"hello")?;
let pt         = Suite::open_base(&enc, &sk_r, b"info", b"aad", &ct)?;
assert_eq!(pt, b"hello");
# Ok::<_, hpke_ng::HpkeError>(())
```

## Why a new HPKE crate?

`hpke-ng` exists because three friction points in the existing Rust HPKE story kept producing real bugs and real overhead:

1. **Provider abstraction overhead.** A trait-based pluggable backend pushes dispatch costs into hot paths and inflates the `Hpke` struct to hundreds of bytes — for a value the type system already knows.
2.…
