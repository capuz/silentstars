---
repo: "AFK-surf/synchronicity"
name: "synchronicity"
description: "omnipresent peer-to-peer file store"
readmeQualityOk: true
url: "https://github.com/AFK-surf/synchronicity"
language: "Rust"
languages: ["Rust", "Lean"]
languagePcts: [55, 24]
stars: 6
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-08-12T12:03:14Z"
lastCommitAt: "2026-10-27T12:39:40Z"
lastReleaseAt: "2026-09-07T14:22:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 68
maintainers: ["losfair", "zzj3720", "JimmFly"]
openGraphImageUrl: "https://opengraph.githubassets.com/840bc47063234fcaffd8976543cb46b655b8c8fe8f7f019057fe370094914d87/AFK-surf/synchronicity"
---

# synchronicity

omnipresent peer-to-peer file store

See [DESIGN.md](https://github.com/AFK-surf/synchronicity/blob/HEAD/DESIGN.md) for the full architecture: iroh-based hierarchy-agnostic
networking, `mptsync` (Merkle-Patricia Trie anti-entropy) for metadata, bao/BLAKE3
hash-tree content addressing with verified random reads, static + DNSSEC-based
membership, per-node published versions, and SQLite-backed local metadata.

## Build

Install Rust and the pinned Lean 4.33.1 toolchain through elan. The executable
Lean core owns the migrated Trie and CAS operations and is statically linked
into every build; no feature flag or Rust fallback exists. Remaining Rust
orchestration and the scoped proof claims are documented in the
[Rust/Lean architecture and proof contract](https://github.com/AFK-surf/synchronicity/blob/HEAD/docs/LEAN.md).
Supported platforms are Linux GNU and macOS (x86-64/arm64), and Windows
x86-64 using the GNU/LLVM toolchain. OpenBSD and Linux musl are unsupported.
See [Lean core build instructions](https://github.com/AFK-surf/synchronicity/blob/HEAD/crates/synch-verified/README.md) for Windows
setup and the remaining verification boundaries.

```sh
cargo build…
