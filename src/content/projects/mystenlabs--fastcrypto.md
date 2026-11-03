---
repo: "MystenLabs/fastcrypto"
name: "fastcrypto"
description: "Common cryptographic library used in software at Mysten Labs."
readmeQualityOk: true
url: "https://github.com/MystenLabs/fastcrypto"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["benchmark", "blockchain", "bls", "crypto", "cryptography", "ed25519", "zkp"]
stars: 313
forks: 176
openIssues: 42
closedIssues: 108
watchers: 17
contributors: 42
recentReleases: 0
createdAt: "2022-08-17T18:14:59Z"
lastCommitAt: "2026-11-03T11:14:36Z"
lastReleaseAt: "2026-07-02T20:44:59Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 40
maintainers: ["jonas-lj", "Daeinar", "mahdi-mysten"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aad91230e450ea553d890385269d9a57c58ac8539a54901f458e1dc7902f800/MystenLabs/fastcrypto"
---

# fastcrypto

`fastcrypto` is a common cryptography library used in software at Mysten Labs. It is a Cargo workspace containing the crates `fastcrypto`, `fastcrypto-derive`, `fastcrypto-tbls`, `fastcrypto-zkp`, `fastcrypto-vdf`, `fastcrypto-pq` and `fastcrypto-cli`. Most of them are published as independent crates to encourage reusability across different applications and domains; `fastcrypto-pq` is not yet published.

`fastcrypto` is a wrapper library around several carefully selected crates with the following considerations:

- Security: Whether the libraries are vulnerable to known attack vectors or possible misuses.
- Performance: Whether the crate performs cryptographic operations with speed after extensive benchmarking. This is critical for the Sui Network to be performant when signing and verifying large amounts of transactions and certificates.
- Determinism: Whether the signature is non-malleable.
- Popularity: Whether the library is used by other consensus critical systems.

Furthermore, we extend the selected libraries with additional features:
- Robust testing framework: [Wycheproof tests](https://github.com/google/wycheproof) and [prop…
